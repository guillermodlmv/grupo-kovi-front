import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { IniciarSesionComponent } from 'src/app/Components/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from 'src/app/Components/registro/registro.component';
import { ActivarCuentaComponent } from 'src/app/Components/activar-cuenta/activar-cuenta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistroComponent,
    ActivarCuentaComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AuthModule { }
