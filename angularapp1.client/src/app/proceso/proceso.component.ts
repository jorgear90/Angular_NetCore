import { Component } from '@angular/core';
import { FirstService } from '../Services/first.service';


@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrl: './proceso.component.css'
})

export class ProcesoComponent {


  tareas: any[] = [];

  titulo: string = '';
  descripcion: string = '';
  correo: string = ' ';
  estado: string = 'en proceso';

  constructor(private taskService: FirstService) { }

  ngOnInit(): void {
    this.correo = localStorage.getItem('correo') || '';
    const estado = this.estado; // Define el estado deseado
    this.taskService.getTasksByEmailAndState(this.correo, estado).subscribe(data => {
      this.tareas = data.sort((a, b) => a.titulo.localeCompare(b.titulo)); // Ordenar alfabéticamente
    });
  }
}
