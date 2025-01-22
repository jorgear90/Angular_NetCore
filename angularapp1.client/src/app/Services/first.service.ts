import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  private apiUrl = 'https://localhost:7026/api/tareas'; // URL de tu API

  constructor(private http: HttpClient) { }

  getTasksByEmailAndState(email: string, estado: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?correo=${email}&estado=${estado}`);
  }

  updateTaskStatus(id: number, nuevoEstado: string): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/${id}`,
      { estado: nuevoEstado }, // Enviar un objeto JSON
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
