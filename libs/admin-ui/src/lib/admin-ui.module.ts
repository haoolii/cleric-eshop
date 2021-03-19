import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@cleric-eshop/material';
import { BreakpointFacadeService } from './breakpoint.facade.service';

@NgModule({
  providers: [BreakpointFacadeService],
  imports: [CommonModule, MaterialModule],
})
export class AdminUiModule {}
