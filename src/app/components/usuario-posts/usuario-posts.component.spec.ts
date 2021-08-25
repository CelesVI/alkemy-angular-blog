import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPostsComponent } from './usuario-posts.component';

describe('UsuarioPostsComponent', () => {
  let component: UsuarioPostsComponent;
  let fixture: ComponentFixture<UsuarioPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
