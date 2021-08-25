import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteoUsuarioComponent } from './posteo-usuario.component';

describe('PosteoUsuarioComponent', () => {
  let component: PosteoUsuarioComponent;
  let fixture: ComponentFixture<PosteoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
