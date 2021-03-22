
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingComponent } from './marketing.component';
import { MarketingManualComponent } from './marketing-manual/marketing-manual.component';
import { MarketingImportComponent } from './marketing-import/marketing-import.component';


@NgModule({
  declarations: [MarketingComponent, MarketingManualComponent, MarketingImportComponent],
  imports: [
    CommonModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule { }
