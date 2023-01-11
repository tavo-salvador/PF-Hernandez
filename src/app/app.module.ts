import { NgModule, Component, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { NavToolbarComponent } from './shared/layout/nav-toolbar/nav-toolbar.component';
import { ServicesModule } from './services/services.module';

@NgModule({
    declarations: [
        AppComponent,
        NavToolbarComponent,
        PageWrapperComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        PagesModule,
        ServicesModule,
        
    ]
})
export class AppModule { }
