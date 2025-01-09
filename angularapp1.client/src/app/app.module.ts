import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponet } from './inicio/inicio.component';
import { TareasComponet } from './tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { UsuarioService } from './Services/usuario.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponet,
    TareasComponet,
    RegistroComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, RouterModule.forRoot([])
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
