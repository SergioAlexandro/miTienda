import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material';

@Component({
  selector: 'mt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenavContainer, {static: false}) contenedorSide: MatSidenavContainer;
  @ViewChild('sidenav', {static: false}) navegacionSide: MatSidenav;

  ngAfterViewInit(): void {
  }

  cerrarSide() {
    this.navegacionSide.close();
  }
}
