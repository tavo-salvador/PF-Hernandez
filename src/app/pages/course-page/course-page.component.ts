import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';
import { CourseDialogComponent } from 'src/app/shared/components/course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {

  courses: Course[] =[
    new Course(1, "Angular", 40, 3,"Josue"),
    new Course(2, "React", 35, 4,"Juan"),
    new Course(3, "JavaScript", 25, 8,"Miguel"),
    new Course(4, "C++", 30, 5,"Francisco"),
    new Course(5, "Photoshop", 35, 9,"Erick"),
    new Course(6, "Diseño web", 45, 10,"Martin"),

  ];

  displayedColumns =['id','nameCourse','numberHours','numberClasses','nameTeacher','edit','delete']
  
  constructor(public readonly dialogService: MatDialog ) { }

  addCourse(){
    const dialog = this.dialogService.open(CourseDialogComponent)

    dialog.afterClosed().subscribe((value)=> {
        if(value){

          console.log(value);

          const lastId = this.courses[this.courses.length -1]?.id;

          this.courses = [...this.courses,new Course(lastId + 1, value.nameCourse, value.numberHours,value.numberClasses,value.nameTeacher) ];
        }
     })
  }

  removeCourse (course: Course){
    this.courses = this.courses.filter((stu)=> stu.id !== course.id);
  }

  editCourse(course: Course){
    const dialog = this.dialogService.open(CourseDialogComponent,{
      data : course,
    });

    dialog.afterClosed().subscribe((data)=>{
      if (data){
        this.courses = this.courses.map((stu)=> stu.id === course.id ? {...stu, ...data} : stu);
        console.log(this.courses);
      }
    })
  }
}
