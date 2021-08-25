import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumUsuarioComponent } from './album-usuario.component';

describe('AlbumUsuarioComponent', () => {
  let component: AlbumUsuarioComponent;
  let fixture: ComponentFixture<AlbumUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
