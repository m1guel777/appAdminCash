import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadesDeNegocioComponent } from './oportunidades-de-negocio.component';

describe('OportunidadesDeNegocioComponent', () => {
  let component: OportunidadesDeNegocioComponent;
  let fixture: ComponentFixture<OportunidadesDeNegocioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OportunidadesDeNegocioComponent]
    });
    fixture = TestBed.createComponent(OportunidadesDeNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
