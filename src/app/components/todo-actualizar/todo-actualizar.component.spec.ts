import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActualizarComponent } from './todo-actualizar.component';

describe('TodoActualizarComponent', () => {
  let component: TodoActualizarComponent;
  let fixture: ComponentFixture<TodoActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
