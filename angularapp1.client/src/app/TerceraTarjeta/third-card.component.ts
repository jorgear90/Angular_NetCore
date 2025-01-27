import { Component, Input } from '@angular/core';
import { TareaService } from '../Services/tarea.service';
import { FirstService } from '../Services/first.service';

@Component({
  selector: 'app-third',
  templateUrl: './third-card.component.html',
  styleUrl: './third-card.component.css'
})

export class ThirdComponent {
  @Input() tarea: any; // Recibe los datos de la tarea como input
  tareas: any[] = [];
    snackBar: any;

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
  deleteTask(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          console.log('Tarea eliminada');
          this.snackBar.open('Tarea eliminada con éxito', 'Cerrar', { duration: 3000 }); // Opcional
          // Aquí puedes emitir un evento o actualizar la lista de tareas en el componente padre
        },
        error: (err) => {
          console.error('Error al eliminar la tarea:', err);
          this.snackBar.open('Error al eliminar la tarea', 'Cerrar', { duration: 3000 }); // Opcional
        }
      });
    }
  }


}
