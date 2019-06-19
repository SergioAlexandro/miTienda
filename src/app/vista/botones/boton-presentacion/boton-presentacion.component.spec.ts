import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPresentacionComponent } from './boton-presentacion.component';

describe('BotonPresentacionComponent', () => {
  let component: BotonPresentacionComponent;
  let fixture: ComponentFixture<BotonPresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonPresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
