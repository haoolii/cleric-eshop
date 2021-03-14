import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent, HomeComponent, AboutComponent, LoginComponent, ContactComponent, CartComponent, ProductsComponent, MainContentComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: '',
        component: MainContentComponent,
        data: {
          breadcrumb: 'Home'
        },
        children: [
          {
            path: 'about',
            component: AboutComponent,
            data: {
              breadcrumb: 'About Us'
            }
          },
          {
            path: 'login',
            component: LoginComponent,
            data: {
              breadcrumb: 'Authentication'
            }
          },
          {
            path: 'contact',
            component: ContactComponent,
            data: {
              breadcrumb: 'Contact us'
            }
          },
          {
            path: 'cart',
            component: CartComponent,
            data: {
              breadcrumb: 'Shopping Cart'
            }
          },
          {
            path: 'products',
            component: ProductsComponent,
            data: {
              breadcrumb: 'Products'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
