import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { PaisService } from '../Services/pais.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent implements OnInit {

  paises: any[] = []; // Lista de países

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  pais: string = '';
  dia: number = 0;
  mes: number = 0;
  year: number = 0;

  constructor(private usuarioService: UsuarioService, private paisService: PaisService) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.paisService.getPaises().subscribe({
      next: (data) => {
        this.paises = data;
      },
      error: (err) => {
        console.error('Error al cargar países:', err);
      },
    });
  }

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

      // Verificar si el correo ya existe
      this.usuarioService.checkCorreo(usuario.Correo).subscribe({
        next: (existe) => {
          if (existe) {
            alert('Ya existe una cuenta para el correo ingresado.');
          } else {
            // Si no existe, registrar al usuario
            this.usuarioService.createUsuario(usuario).subscribe({
              next: (response) => {
                console.log('Usuario creado:', response);
                alert('Usuario registrado exitosamente');
              },
              error: (err) => {
                console.error('Error al registrar usuario:', err);
                alert('Ocurrió un error al registrar el usuario');
              },
            });
          }
        },
        error: (err) => {
          console.error('Error al verificar correo:', err);
          alert('Ocurrió un error al verificar el correo');
        },
      });

   
    }
  }
}
