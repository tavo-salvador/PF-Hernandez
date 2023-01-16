import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course-service/course.service';
import { StudentsService } from './students-service/students.service';
import { UserService } from './user-service/user.service';
import { RegistrationService } from './registration-service/registration.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers:[
    CourseService,
    StudentsService,
    UserService,
    RegistrationService
  ]
})
export class ServicesModule { }
