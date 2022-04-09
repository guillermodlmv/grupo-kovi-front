import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from 'src/app/Components/dashboard-admin/dashboard-admin.component';
import { AltaProductoComponent } from 'src/app/Components/alta-producto/alta-producto.component';
import { NosotrosComponent } from 'src/app/Components/nosotros/nosotros.component';
import { PromocionesComponent } from 'src/app/Components/promociones/promociones.component';
import { DetallesPromocionComponent } from 'src/app/Components/detalles-promocion/detalles-promocion.component';
import { PremiosComponent } from 'src/app/Components/premios/premios.component';
import { DetallePremioComponent } from 'src/app/Components/detalle-premio/detalle-premio.component';
import { PedidosClienteComponent } from 'src/app/Components/pedidos-cliente/pedidos-cliente.component';
import { PerfilClienteComponent } from 'src/app/Components/perfil-cliente/perfil-cliente.component';
import { DetallePedidoComponent } from '../../Components/detalle-pedido/detalle-pedido.component';
import { ActivarCuentaComponent } from 'src/app/Components/activar-cuenta/activar-cuenta.component';
import { CambiarCorreoComponent } from '../../Components/cambiar-correo/cambiar-correo.component';
import { CarritoDetalleComponent } from '../../Components/carrito-detalle/carrito-detalle.component';
import { RecompensasClienteComponent } from '../../Components/recompensas-cliente/recompensas-cliente.component';
import { RecompensasClienteDetalleComponent } from 'src/app/Components/recompensas-cliente-detalle/recompensas-cliente-detalle.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard-admin',
        component: DashboardAdminComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'dashboard-admin/alta-producto',
        component: AltaProductoComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'promociones',
        component: PromocionesComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'promociones/:idPromocion',
        component: DetallesPromocionComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'premios',
        component: PremiosComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'premios/:idPremio',
        component: DetallePremioComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'mis-pedidos',
        component: PedidosClienteComponent,
        canActivate: [],
        canLoad: [],
      },      
      {
        path: 'mis-pedidos/:idPedido',
        component: DetallePedidoComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'perfil',
        component: PerfilClienteComponent,
        canActivate: [],
        canLoad: [],
      },      
      {
        path: 'activar-cuenta/:token',
        component: ActivarCuentaComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'cambiar-correo/:token',
        component: CambiarCorreoComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'mis-carrito',
        component: CarritoDetalleComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'mis-recompensas',
        component: RecompensasClienteComponent,
        canActivate: [],
        canLoad: [],
      },
      {
        path: 'mis-recompensas/:idRecompensa',
        component: RecompensasClienteDetalleComponent,
        canActivate: [],
        canLoad: [],
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
