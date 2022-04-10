import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from '../../Components/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from '../../Components/registro/registro.component';
import { ActivarCuentaComponent } from 'src/app/Components/activar-cuenta/activar-cuenta.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'iniciar-sesion',
        component: IniciarSesionComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'registro',
        component: RegistroComponent,
        canActivate: [],
        canLoad: [],
      },
           
      {
        path: 'activar-cuenta/:token',
        component: ActivarCuentaComponent,
        canActivate: [],
        canLoad: [],
      },
      { path: '**', redirectTo: 'iniciar-sesion' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
