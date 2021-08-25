import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTodosComponent } from './usuario-todos.component';

describe('UsuarioTodosComponent', () => {
  let component: UsuarioTodosComponent;
  let fixture: ComponentFixture<UsuarioTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
