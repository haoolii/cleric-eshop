import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@cleric-eshop/material';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';

@NgModule({
  imports: [CommonModule, MaterialModule, NgZorroModule, RouterModule],
  declarations: [SidenavComponent, CategorySelectorComponent],
  exports: [SidenavComponent, CategorySelectorComponent]
})
export class AdminUiModule {}
