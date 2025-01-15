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
import { PaisService } from './Services/pais.service';
import { IniciadaComponent } from './iniciada/iniciada.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { TerminadasComponent } from './terminadas/terminadas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponet,
    TareasComponet,
    RegistroComponent,
    IniciadaComponent,
    ProcesoComponent,
    TerminadasComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, RouterModule.forRoot([])
  ],
  providers: [UsuarioService, PaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
