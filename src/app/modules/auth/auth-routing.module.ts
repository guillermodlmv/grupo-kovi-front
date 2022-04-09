import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from '../../Components/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from '../../Components/registro/registro.component';

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
      { path: '**', redirectTo: 'iniciar-sesion' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
