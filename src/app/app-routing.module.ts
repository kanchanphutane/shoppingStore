import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingpageComponent } from './langingpage/langingpage.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
 // { path: 'landingpage', component: LangingpageComponent },
  {path : '', redirectTo : 'home/shop', pathMatch : 'full'},
  {
    path: '', component: MainComponent, children: [
      { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
      { path: 'home', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
