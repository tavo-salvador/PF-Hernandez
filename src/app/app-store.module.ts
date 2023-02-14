import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersStoreModule } from './pages/users-Profile/users-store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    UsersStoreModule,

  ]
})
export class AppStoreModule { }
