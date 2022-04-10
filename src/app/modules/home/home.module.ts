import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CambiarCorreoComponent } from '../../Components/cambiar-correo/cambiar-correo.component';
import { CarritoDetalleComponent } from '../../Components/carrito-detalle/carrito-detalle.component';
import { RecompensasClienteComponent } from '../../Components/recompensas-cliente/recompensas-cliente.component';
import { RecompensasClienteDetalleComponent } from 'src/app/Components/recompensas-cliente-detalle/recompensas-cliente-detalle.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardAdminComponent,
    AltaProductoComponent,
    NosotrosComponent,
    PromocionesComponent,
    DetallesPromocionComponent,
    PremiosComponent,
    DetallePremioComponent,
    PedidosClienteComponent,
    PerfilClienteComponent,
    DetallePedidoComponent,
    CambiarCorreoComponent,
    CarritoDetalleComponent,
    RecompensasClienteComponent,
    RecompensasClienteDetalleComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
