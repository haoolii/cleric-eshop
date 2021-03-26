import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTierSpecComponent } from './sales-tier-spec.component';

describe('SalesTierSpecComponent', () => {
  let component: SalesTierSpecComponent;
  let fixture: ComponentFixture<SalesTierSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesTierSpecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTierSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
