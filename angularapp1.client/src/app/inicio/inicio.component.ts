import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponet {

  errorMessage: string = ''; // Para mostrar errores en el formulario
  constructor(private router: Router, private usuarioService: UsuarioService) { }

  onSubmit(form: any): void {
    const { correo, password } = form.value;

    // Llamar al servicio para autenticar al usuario
    this.usuarioService.login(correo, password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);

        // Guardar el correo en localStorage
        localStorage.setItem('correo', correo);

        // Redirigir al componente de tareas
        this.router.navigate(['/Tareas']);
      },
      error: (err) => {
        console.error('Error en el login:', err);
        this.errorMessage = 'Correo o contraseña incorrectos';
      }
    });
  }
}
