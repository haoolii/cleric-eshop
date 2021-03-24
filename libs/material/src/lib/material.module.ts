import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

/**
 * NgModule that includes all Material modules
*/
@NgModule({
  exports: [
    ScrollingModule
  ]
})
export class MaterialModule {}
