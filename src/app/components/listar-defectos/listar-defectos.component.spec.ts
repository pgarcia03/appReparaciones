import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDefectosComponent } from './listar-defectos.component';

describe('ListarDefectosComponent', () => {
  let component: ListarDefectosComponent;
  let fixture: ComponentFixture<ListarDefectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDefectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDefectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
