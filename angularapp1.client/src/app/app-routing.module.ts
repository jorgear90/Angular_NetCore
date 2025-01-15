import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponet } from './inicio/inicio.component';
import { TareasComponet } from './tareas/tareas.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciadaComponent } from './iniciada/iniciada.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { TerminadasComponent } from './terminadas/terminadas.component';

const routes: Routes = [
  // Ruta por defecto: redirige al Login si no se especifica un path
  { path: '', redirectTo: 'Login', pathMatch: 'full' },

  // Ruta para la página de inicio de sesión
  { path: 'Login', component: InicioComponet },

  // Ruta para el componente Tareas con subrutas
  {
    path: 'Tareas',
    component: TareasComponet,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirección por defecto al componente 'inicio'
      { path: 'inicio', component: IniciadaComponent },
      { path: 'en-proceso', component: ProcesoComponent },
      { path: 'terminadas', component: TerminadasComponent },
    ],
  },

  // Ruta para la página de registro
  { path: 'Registro', component: RegistroComponent },

  // Ruta comodín para manejar cualquier ruta desconocida
  { path: '**', redirectTo: 'Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
