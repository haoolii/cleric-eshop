import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@cleric-eshop/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class AdminUiModule {}
