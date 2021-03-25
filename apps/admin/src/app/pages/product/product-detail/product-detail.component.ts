import { Component, OnInit } from '@angular/core';
import { SideNavStateService } from '@cleric-eshop/admin-state';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public sideNavStateSvc: SideNavStateService
  ) {
    // sideNavStateSvc.close()
  }

  ngOnInit(): void {
  }

  anckorTo(): void {
  }

}
