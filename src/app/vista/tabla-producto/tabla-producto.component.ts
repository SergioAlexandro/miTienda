import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatSort } from '@angular/material';
import { LaravelApiService } from '../../servicio/laravel-api.service';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/modelo/producto';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'mt-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent {
  columnasMostradas: string[] = ['nombre', 'modificar', 'eliminar'];
  origenDatos: any;
  producto: Producto[];


  @ViewChild(MatSort, {static: true}) ordenamiento: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginacion: MatPaginator;

  constructor(private snackBar: MatSnackBar, private servicioLaravel: LaravelApiService, private clienteHttp: HttpClient) {
    this.renderizarTabla();
  }

  mostrarSnackBar(mensaje: string, accion: string, duracion: number) {
    this.snackBar.open(mensaje, accion, {
      duration: duracion * 1000,
    });
  }

  renderizarTabla() {
    this.servicioLaravel.getProducto().subscribe(
      x => {
        this.origenDatos = new MatTableDataSource();
        this.origenDatos.data = x;
        console.log(this.origenDatos.data);
        this.origenDatos.sort = this.ordenamiento;
        this.origenDatos.paginator = this.paginacion;
      },
      error => {
        console.log('Tienes un error al recivir datos! ' + error);
      }
    );
  }

  vaciarCaja($event) {
    console.log('diste clic :V' + $event.target.id);
  }
  
  aplicarFiltro(valor: string) {
    this.origenDatos.filter = valor.trim().toLocaleLowerCase();
  }

  eliminarProducto(id: number, n) {
    //this.mostrarSnackBar('¿Deseas eliminar a: ' + n + '?', 'Eliminar', 5);

    this.servicioLaravel.borrarProducto(id).subscribe(
      (data) => {
        this.mostrarSnackBar('Eliminado correctamente', 'cerrar', 3);
        this.renderizarTabla();
      },
      (error) => { this.mostrarSnackBar('Error al eliminar', 'cerrar', 5); },
    );
  }
}
