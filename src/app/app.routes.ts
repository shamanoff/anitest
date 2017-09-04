import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
// import { EmailComponent } from './email/email.component';

export const router: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', redirectTo: ''},
  {path: 'about', component: AboutComponent},



];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
