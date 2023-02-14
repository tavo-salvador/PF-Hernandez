import { NgModule, Component, ViewChild, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';
import { NavToolbarComponent } from './layout/nav-toolbar/nav-toolbar.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { AuthService } from './auth/services/auth-service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './layout/dashboard.module';
import { StoreModule } from '@ngrx/store';
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
        EffectsModule.forRoot([]),
        
        
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
