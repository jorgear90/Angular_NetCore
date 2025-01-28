import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from '../Services/first.service';

@Component({
  selector: 'app-terminadas',
  templateUrl: './terminadas.component.html',
  styleUrl: './terminadas.component.css'
})

export class TerminadasComponent {
  tareas: any[] = [];

  titulo: string = '';
  descripcion: string = '';
  correo: string = ' ';
  estado: string = 'terminada';

  constructor(private taskService: FirstService) { }

  ngOnInit(): void {
    this.correo = localStorage.getItem('correo') || '';
    const estado = this.estado; // Define el estado deseado
    this.taskService.getTasksByEmailAndState(this.correo, estado).subscribe(data => {
      this.tareas = data.sort((a, b) => a.titulo.localeCompare(b.titulo)); // Ordenar alfabéticamente
    });
  }
}
