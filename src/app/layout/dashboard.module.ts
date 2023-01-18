import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../shared/modules/material.module';



@NgModule({
  declarations: [
    NavToolbarComponent,
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MaterialModule

  ],
  exports:[
  ]
})
export class DashboardModule { }
