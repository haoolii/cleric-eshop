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
        path: 'orders',
        loadChildren: () =>
          import('./pages/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/product/product.module').then((m) => m.ProductModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
