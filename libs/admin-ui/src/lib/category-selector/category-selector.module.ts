import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { CategoryScrollItemComponent } from './category-scroll-item/category-scroll-item.component';


@NgModule({
  declarations: [
    CategorySelectorComponent,
    CategoryScrollItemComponent
  ],
  imports: [
    CommonModule,
    NgZorroModule
  ],
  exports: [
    CategorySelectorComponent
  ]
})
export class CategorySelectorModule { }
