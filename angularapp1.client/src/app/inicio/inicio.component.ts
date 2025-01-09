import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponet {
  constructor(private router: Router) { }

  onSubmit(form: any): void {
    // Aquí puedes realizar la lógica para enviar el formulario con POST usando HttpClient
    console.log('Formulario enviado:', form);

    // Simula el redireccionamiento al componente Tareas
    this.router.navigate(['/Tareas']);
  }
}
