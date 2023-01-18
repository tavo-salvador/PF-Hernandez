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


/* function appInit(auth: AuthService){
    return () => {
      return new Promise((resolve) => {
        console.log('Injection');
      });
    };
  } */

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        
    ],
    providers: [
        /* {
          provide: APP_INITIALIZER,
          useFactory: appInit,
          multi: true,
          deps:[AuthService]
        } */
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
