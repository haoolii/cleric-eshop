import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RootComponent } from './pages';
import { AuthGuard } from '@cleric-eshop/admin-ui';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: RootComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        data: { breadcrumb: '商品管理' },
        loadChildren: () =>
          import('./pages/product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'orders',
        data: { breadcrumb: '訂單管理' },
        loadChildren: () =>
          import('./pages/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'marketing',
        data: { breadcrumb: '行銷活動' },
        loadChildren: () =>
          import('./pages/marketing/marketing.module').then((m) => m.MarketingModule),
      },
      {
        path: '404',
        loadChildren: () =>
          import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
      },
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      },
      {
         path: '**',
         redirectTo: '/404'
      }
    ],
  },
  { path: 'marketing', loadChildren: () => import('./pages/marketing/marketing.module').then(m => m.MarketingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
