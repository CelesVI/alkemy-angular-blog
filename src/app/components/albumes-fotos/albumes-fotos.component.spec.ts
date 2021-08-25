import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesFotosComponent } from './albumes-fotos.component';

describe('AlbumesFotosComponent', () => {
  let component: AlbumesFotosComponent;
  let fixture: ComponentFixture<AlbumesFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumesFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumesFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
