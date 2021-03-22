import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@cleric-eshop/material';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, MaterialModule, NgZorroModule, RouterModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class AdminUiModule {}
