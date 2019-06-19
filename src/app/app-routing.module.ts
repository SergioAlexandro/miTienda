import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './vista/inicio/inicio.component';
import { PresentacionComponent } from './vista/presentacion/presentacion.component';
import { FormularioPresentacionComponent } from './vista/formulario-presentacion/formulario-presentacion.component';
import { ProductoComponent } from './vista/producto/producto.component';
import { FormularioProductoComponent } from './vista/formulario-producto/formulario-producto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full'
  },
  { path: 'Inicio', component: InicioComponent },
  //
  { path: 'Presentaciones', component: PresentacionComponent },
  { path: 'Nueva_presentacion', component: FormularioPresentacionComponent },
  { path: 'Modificar_presentacion/:id', component: FormularioPresentacionComponent },
  //
  { path: 'Productos', component: ProductoComponent },
  { path: 'Nuevo_producto', component: FormularioProductoComponent },
  { path: 'Modificar_producto/:id', component: FormularioProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
