import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { CategoryScrollItemComponent } from './category-scroll-item/category-scroll-item.component';
import { CategoryToolbarComponent } from './category-toolbar/category-toolbar.component';


@NgModule({
  declarations: [
    CategorySelectorComponent,
    CategoryScrollItemComponent,
    CategoryToolbarComponent
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
