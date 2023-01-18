import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';

const routes: Routes = [
  
  {
    path: '',
    component: NavToolbarComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () => import('../pages/pages.module').then((module) => module.PagesModule)
      },
      {
        path: '**',
        redirectTo: 'auth'
      },
    ] 
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
