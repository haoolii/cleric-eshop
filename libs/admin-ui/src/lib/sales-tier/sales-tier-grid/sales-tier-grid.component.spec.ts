import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTierGridComponent } from './sales-tier-grid.component';

describe('SalesTierGridComponent', () => {
  let component: SalesTierGridComponent;
  let fixture: ComponentFixture<SalesTierGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesTierGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTierGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
