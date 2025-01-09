import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  pais: string = '';
  dia: number = 0;
  mes: number = 0;
  year: number = 0;

  constructor(private usuarioService: UsuarioService) { }

  onSubmit(form: any) {
    console.log('Valores del formulario:', form.value);
    if (form.valid) {
      const usuario = {
        A_nacimiento: form.value.year,
        Nombre: form.value.nombre,
        Apellido: form.value.apellido,
        Correo: form.value.email,
        Password: form.value.password,
        Pais: form.value.pais,
        D_nacimiento: form.value.dia,
        M_nacimiento: form.value.mes,
        
      };

      console.log('Objeto usuario:', usuario);

      this.usuarioService.createUsuario(usuario).subscribe(
        
        (response) => {
          console.log('Usuario creado:', response);
          alert('Usuario registrado exitosamente');
        },
        (error) => {
          console.log(usuario);
          console.error('Error al registrar usuario:', error);
          alert('Ocurrió un error al registrar el usuario');
        }
      );
    }
  }
}
