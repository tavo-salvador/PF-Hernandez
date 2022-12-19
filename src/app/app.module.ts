import { NgModule, Component, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavToolbarComponent } from './shared/layout/nav-toolbar/nav-toolbar.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { MaterialModule } from './shared/modules/material.module';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavToolbarComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StudentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
