import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Presentacion } from '../modelo/presentacion';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class LaravelApiService {
  private readonly LARAVEL_API_URL: string = 'http://mitienda.com/api';

  constructor(private http: HttpClient) {
  }

  getPresentacion() {
    return this.http.get(this.LARAVEL_API_URL + '/presentaciones');
  }

  guardarPresentacion(presentacion: Presentacion) {
    const encabezado = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.LARAVEL_API_URL + '/presentaciones', presentacion, {headers: encabezado});
  }

  editarPresentacion(presentacion) {
    const encabezado = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.LARAVEL_API_URL + '/presentaciones/' + presentacion.id, presentacion, {headers: encabezado});
  }

  borrarPresentacion(id: number) {
    return this.http.delete(this.LARAVEL_API_URL + '/presentaciones/' + id);
  }
  /*

  */
  getProducto() {
    return this.http.get(this.LARAVEL_API_URL + '/productos');
  }

  guardarProducto(producto: Producto) {
    const encabezado = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.LARAVEL_API_URL + '/productos', producto, {headers: encabezado});
  }

  editarProducto(producto) {
    const encabezado = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.LARAVEL_API_URL + '/productos/' + producto.id, producto, {headers: encabezado});
  }

  borrarProducto(id: number) {
    return this.http.delete(this.LARAVEL_API_URL + '/productos/' + id);
  }
}
