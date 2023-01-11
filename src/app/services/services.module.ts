import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course-service/course.service';
import { StudentsService } from './students-service/students.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  providers:[
    CourseService,
    StudentsService
  ]
})
export class ServicesModule { }
