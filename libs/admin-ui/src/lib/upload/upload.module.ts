import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    NgZorroModule
  ],
  exports: [UploadComponent]
})
export class UploadModule { }
