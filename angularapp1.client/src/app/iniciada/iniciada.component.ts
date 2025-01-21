import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareaService } from '../Services/tarea.service';

@Component({
  selector: 'app-iniciada',
  templateUrl: './iniciada.component.html',
  styleUrl: './iniciada.component.css'
})

export class IniciadaComponent {

  titulo: string = '';
  descripcion: string = '';
  correo: string = 'jorge.rojo.f@gmail.com';
  estado: string = 'iniciada';
  
  textoTarea: string = ''; // Inicializamos la propiedad textoTarea
  constructor(private tareaService : TareaService) { }

  

  // Método para manejar el envío del formulario
  onSubmit(form: any): void {
    console.log('Formulario enviado:', form.value);
    if (form.valid) {
      const tarea = {
        Titulo: form.value.titulo,
        Descripcion: form.value.textoTarea,
        Correo: this.correo,
        Estado: this.estado
      };

      // Verificar si el correo ya existe
      this.tareaService.createTarea(tarea).subscribe({
        next: (response) => {
          console.log('Tarea creada:', response);
          alert('La tarea fue creada');
        },
        error: (err) => {
          console.error('Error al crear la tarea:', err);
          alert('Ocurrió un error al crear la tarea');
        },
          
      });


    }
  }
}
