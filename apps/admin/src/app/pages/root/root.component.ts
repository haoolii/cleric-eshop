import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointFacadeService } from '@cleric-eshop/admin-ui';

@Component({
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RootComponent {
  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }


  constructor(public breakPointFacadeSvc: BreakpointFacadeService) {}
}
