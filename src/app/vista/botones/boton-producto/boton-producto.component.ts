import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-boton-producto',
  templateUrl: './boton-producto.component.html',
  styleUrls: ['./boton-producto.component.css']
})
export class BotonProductoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick($event) {
    console.log('Evento click');
  }
}
