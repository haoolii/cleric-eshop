import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@cleric-eshop/material';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CategorySelectorModule } from './category-selector/category-selector.module';

@NgModule({
  imports: [CommonModule, MaterialModule, NgZorroModule, RouterModule, CategorySelectorModule],
  declarations: [SidenavComponent],
  exports: [CommonModule, SidenavComponent, CategorySelectorModule]
})
export class AdminUiModule {}
