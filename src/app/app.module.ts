import { NgModule, Component, ViewChild, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './layout/dashboard.module';
import { EffectsModule } from '@ngrx/effects';
import { AppStoreModule } from './app-store.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DashboardModule,
        AppStoreModule,
        EffectsModule.forRoot([]),
        
        
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
