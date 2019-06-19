import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonProductoComponent } from './boton-producto.component';

describe('BotonProductoComponent', () => {
  let component: BotonProductoComponent;
  let fixture: ComponentFixture<BotonProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
