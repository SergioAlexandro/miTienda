import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSortModule,
  MatSidenavModule,
  MatSnackBarModule
} from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { FormularioPresentacionComponent } from './formulario-presentacion/formulario-presentacion.component';
import { TablaPresentacionComponent } from './tabla-presentacion/tabla-presentacion.component';
import { BotonPresentacionComponent } from './botones/boton-presentacion/boton-presentacion.component';
import { TablaProductoComponent } from './tabla-producto/tabla-producto.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { BotonProductoComponent } from './botones/boton-producto/boton-producto.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  declarations: [
    InicioComponent,
    ProductoComponent,
    PresentacionComponent,
    FormularioPresentacionComponent,
    TablaPresentacionComponent,
    BotonPresentacionComponent,
    TablaProductoComponent,
    FormularioProductoComponent,
    BotonProductoComponent
  ]
})
export class VistaModule { }
