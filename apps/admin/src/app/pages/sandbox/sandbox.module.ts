import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUiModule } from '@cleric-eshop/admin-ui';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';


@NgModule({
  declarations: [SandboxComponent],
  imports: [
    CommonModule,
    SandboxRoutingModule,
    NgZorroModule,
    AdminUiModule
  ]
})
export class SandboxModule { }
