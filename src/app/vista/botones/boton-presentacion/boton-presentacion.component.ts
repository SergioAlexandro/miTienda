import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-boton-presentacion',
  templateUrl: './boton-presentacion.component.html',
  styleUrls: ['./boton-presentacion.component.css']
})
export class BotonPresentacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick($event) {
    console.log('Evento click');
  }
}
