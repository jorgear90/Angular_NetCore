import { Component, Input} from '@angular/core';
import { TareaService } from '../Services/tarea.service';
import { FirstService } from '../Services/first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first-card.component.html',
  styleUrl: './first-card.component.css'
})

export class FirstComponent {
  @Input() tarea: any; // Recibe los datos de la tarea como input
  tareas: any[] = [];

  constructor(private tareaService: TareaService, private taskService: FirstService) { }

  updateTaskStatus(id: number): void {
    const nuevoEstado = 'en proceso';
    console.log(`Actualizando tarea con ID ${id} a estado '${nuevoEstado}'`); // Debug

    this.taskService.updateTaskStatus(id, nuevoEstado).subscribe({
      next: (updatedTask) => {
        console.log('Tarea actualizada:', updatedTask);
        const tareaIndex = this.tareas.findIndex(t => t.id === id);
        if (tareaIndex !== -1) {
          this.tareas[tareaIndex].estado = nuevoEstado;
        }
      },
      error: (err) => {
        console.error('Error al actualizar la tarea:', err);
      }
    });
  }

 
}
