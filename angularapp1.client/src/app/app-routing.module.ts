import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponet } from './inicio/inicio.component';
import { TareasComponet } from './tareas/tareas.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'Login',
    component: InicioComponet
  },
  {
    path: 'Tareas',
    component: TareasComponet
  },
  {
    path: 'Registro',
    component: RegistroComponent
  },
  {
    path: '**',
    redirectTo: 'Login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
