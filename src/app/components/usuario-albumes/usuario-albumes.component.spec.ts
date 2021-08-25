import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAlbumesComponent } from './usuario-albumes.component';

describe('UsuarioAlbumesComponent', () => {
  let component: UsuarioAlbumesComponent;
  let fixture: ComponentFixture<UsuarioAlbumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAlbumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAlbumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
