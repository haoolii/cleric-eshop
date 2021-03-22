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
        loadChildren: () =>
          import('./pages/product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./pages/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'marketing',
        loadChildren: () =>
          import('./pages/marketing/marketing.module').then((m) => m.MarketingModule),
      },
      {
        path: '404',
        loadChildren: () =>
          import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
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
