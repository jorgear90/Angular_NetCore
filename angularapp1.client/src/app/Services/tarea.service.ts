import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private apiUrl = 'https://localhost:7026/api/tareas'; // Ajusta el puerto si es necesario

  constructor(private http: HttpClient) { }

  getTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTarea(tarea: any): Observable<any> {
    console.log('Enviando datos al backend:', tarea);
    return this.http.post<any>(this.apiUrl, tarea);
  }

  updateTaskStatus(id: number, nuevoEstado: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { estado: nuevoEstado }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  

}
