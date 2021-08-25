import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteoComentariosComponent } from './posteo-comentarios.component';

describe('PosteoComentariosComponent', () => {
  let component: PosteoComentariosComponent;
  let fixture: ComponentFixture<PosteoComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteoComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteoComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
