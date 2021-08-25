import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteoDetalleComponent } from './posteo-detalle.component';

describe('PosteoDetalleComponent', () => {
  let component: PosteoDetalleComponent;
  let fixture: ComponentFixture<PosteoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
