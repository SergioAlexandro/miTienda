import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Presentacion } from 'src/app/modelo/presentacion';
import { LaravelApiService } from 'src/app/servicio/laravel-api.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-formulario-presentacion',
  templateUrl: './formulario-presentacion.component.html',
  styleUrls: ['./formulario-presentacion.component.css']
})
export class FormularioPresentacionComponent implements OnInit {
  empaque: FormControl = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  cantidad: FormControl = new FormControl('', [Validators.required, Validators.maxLength(6)]);
  unidad: FormControl = new FormControl('', [Validators.required, Validators.maxLength(5)]);

  presentacion: Presentacion = {
    empaque: null,
    cantidad: null,
    unidad: null,
  };

  id: any;
  modificacion: boolean = false;
  todoPresentacion: Presentacion[];

  constructor(private snackBar: MatSnackBar, private servicioLaravel: LaravelApiService, private rutaActiva: ActivatedRoute) {
    this.id = rutaActiva.snapshot.params['id'];
    if (this.id) {
      this.servicioLaravel.getPresentacion().subscribe(
        (data: Presentacion[]) => {
          this.todoPresentacion = data;
          this.presentacion = this.todoPresentacion.find(
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

  guardarPresentacion() {
    if (this.modificacion) {
      this.servicioLaravel.editarPresentacion(this.presentacion).subscribe(
        (data) => { this.mostrarSnackBar('Modificado correctamente', 'cerrar', 3); },
        (error) => { this.mostrarSnackBar('Error al modificar', 'cerrar', 5); },
      );
    }
    else {
      this.servicioLaravel.guardarPresentacion(this.presentacion).subscribe(
        (data) => { this.mostrarSnackBar('Guardado correctamente', 'cerrar', 3); },
        (error) => { this.mostrarSnackBar('Error al guardar', 'cerrar', 5); },
      );
    }
  }

  getError(campo: string) {
    console.log('a carai');
    switch (campo) {
        case 'empaque':
          return this.empaque.hasError('required') ? 'Debes ingresar el empaque del producto!' :
                 this.empaque.hasError('maxLength') ? 'Debe tener menos de 50 digitos' : '' ;
          break;
        case 'cantidad':
          return this.cantidad.hasError('required') ? 'Debes ingresar la cantidad de producto!' :
                 this.cantidad.hasError('maxLength') ? 'Debe tener menos de 6 digitos' : '' ;
          break;
        case 'unidad':
          return this.unidad.hasError('required') ? 'Debes ingresar la unidad de medida del producto!' :
                 this.unidad.hasError('maxLength') ? 'Debe tener menos de 5 digitos' : '' ;
          break;
    }
  }
}
