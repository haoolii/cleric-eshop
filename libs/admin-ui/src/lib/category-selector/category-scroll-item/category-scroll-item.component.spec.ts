import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryScrollItemComponent } from './category-scroll-item.component';

describe('CategoryScrollItemComponent', () => {
  let component: CategoryScrollItemComponent;
  let fixture: ComponentFixture<CategoryScrollItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryScrollItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryScrollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
