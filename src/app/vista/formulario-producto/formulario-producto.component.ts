import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Producto } from 'src/app/modelo/producto';
import { LaravelApiService } from 'src/app/servicio/laravel-api.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  nombre: FormControl = new FormControl('', [Validators.required, Validators.maxLength(50)]);

  producto: Producto = {
    nombre: null,
  };

  id: any;
  modificacion: boolean = false;
  todoProducto: Producto[];

  constructor(private snackBar: MatSnackBar, private servicioLaravel: LaravelApiService, private rutaActiva: ActivatedRoute) {
    this.id = rutaActiva.snapshot.params['id'];
    if (this.id) {
      this.servicioLaravel.getProducto().subscribe(
        (data: Producto[]) => {
          this.todoProducto = data;
          this.producto = this.todoProducto.find(
            (m) => {
              return m.id == this.id
            }
          );
        }
      );
      this.modificacion = true;
    }
    else {
      this.modificacion = false;
    }
  }

  ngOnInit() {
  }

  mostrarSnackBar(mensaje: string, accion: string, duracion: number) {
    this.snackBar.open(mensaje, accion, {
      duration: duracion * 1000,
    });
  }

  vaciarCaja($event) {
    console.log('diste clic :V' + $event.target.id);
  }

  guardarProducto() {
    if (this.modificacion) {
      this.servicioLaravel.editarProducto(this.producto).subscribe(
        (data) => { this.mostrarSnackBar('Modificado correctamente', 'cerrar', 3); },
        (error) => { this.mostrarSnackBar('Error al modificar', 'cerrar', 5); },
      );
    }
    else {
      this.servicioLaravel.guardarProducto(this.producto).subscribe(
        (data) => { this.mostrarSnackBar('Guardado correctamente', 'cerrar', 3); },
        (error) => { this.mostrarSnackBar('Error al guardar', 'cerrar', 5); },
      );
    }
  }

  getError(campo: string) {
    switch (campo) {
        case 'empaque':
          return this.nombre.hasError('required') ? 'Debes ingresar el empaque del producto!' :
                 this.nombre.hasError('maxLength') ? 'Debe tener menos de 50 digitos' : '' ;
          break;
    }
  }
}
