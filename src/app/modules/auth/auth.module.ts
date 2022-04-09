import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from 'src/app/Components/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from 'src/app/Components/registro/registro.component';



@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
