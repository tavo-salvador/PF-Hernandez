import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationDialogComponent } from './components/registration-dialog/registration-dialog.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { MaterialModule } from './modules/material.module';



@NgModule({
  declarations: [
    CourseDialogComponent,
    StudentDialogComponent,
    RegistrationDialogComponent,
    UserDialogComponent,

  ],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
