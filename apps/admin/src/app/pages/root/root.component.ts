import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointFacadeService } from '@cleric-eshop/admin-ui';

@Component({
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RootComponent {
  menus = [
    {
      level: 1,
      title: '商品管理',
      icon: 'shopping-cart',
      open: true,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: '商品列表',
          selected: false,
          disabled: false,
          routerLink: ['/products/list']
        },
        {
          level: 2,
          title: '商品分類管理',
          selected: false,
          disabled: false,
          routerLink: ['/products/category']
        }
      ]
    },
    {
      level: 1,
      title: '訂單管理',
      icon: 'fire',
      open: true,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: '訂單列表',
          selected: false,
          disabled: false,
          routerLink: ['/orders/list']
        }
      ]
    },
    {
      level: 1,
      title: '行銷活動',
      icon: 'shop',
      open: true,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: '人工登入代碼',
          selected: false,
          disabled: false,
          routerLink: ['/marketing/manual']
        },
        {
          level: 2,
          title: '自動折扣匯入',
          selected: false,
          disabled: false,
          routerLink: ['/marketing/import']
        }
      ]
    }
  ];


  constructor(public breakPointFacadeSvc: BreakpointFacadeService) {}
}
