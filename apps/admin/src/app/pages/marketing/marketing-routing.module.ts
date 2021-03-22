import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingComponent } from './marketing.component';
import { MarketingImportComponent } from './marketing-import/marketing-import.component';
import { MarketingManualComponent } from './marketing-manual/marketing-manual.component';

const routes: Routes = [
  {
    path: '',
    component: MarketingComponent,
    children: [
      {
        path: 'manual',
        component: MarketingManualComponent,
        data: {
          breadcrumb: '手工登入代碼'
        }
      },
      {
        path: 'import',
        component: MarketingImportComponent,
        data: {
          breadcrumb: '自動折扣匯入'
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
