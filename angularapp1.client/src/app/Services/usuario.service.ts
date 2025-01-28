import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'https://localhost:7026/api/usuarios'; // Ajusta el puerto si es necesario

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createUsuario(usuario: any): Observable<any> {
    console.log('Enviando datos al backend:', usuario);
    return this.http.post<any>(this.apiUrl, usuario);
  }

  checkCorreo(correo: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/existeCorreo?correo=${correo}`);
  }

  login(correo: string, password: string): Observable<any> {
    const payload = { correo, password };
    return this.http.post(`${this.apiUrl}/login`, payload);
  }
}
