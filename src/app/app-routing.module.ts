import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { homeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { ImpressumComponent } from './impressum/impressum.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: homeComponent},
  {path: 'pages', component: PagesComponent, canActivate: [AuthGuard]},

  {path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
