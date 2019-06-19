import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPresentacionComponent } from './tabla-presentacion.component';

describe('TablaPresentacionComponent', () => {
  let component: TablaPresentacionComponent;
  let fixture: ComponentFixture<TablaPresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
