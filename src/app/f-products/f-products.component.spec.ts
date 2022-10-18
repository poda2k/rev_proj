import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FProductsComponent } from './f-products.component';

describe('FProductsComponent', () => {
  let component: FProductsComponent;
  let fixture: ComponentFixture<FProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
