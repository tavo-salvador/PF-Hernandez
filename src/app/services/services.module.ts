import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course-service/course.service';
import { StudentsService } from './students-service/students.service';
import { UserService } from './user-service/user.service';



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
  ]
})
export class ServicesModule { }
