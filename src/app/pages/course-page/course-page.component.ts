import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { CourseDialogComponent } from 'src/app/shared/components/course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit{


  displayedColumns =['id','nameCourse','numberHours','numberClasses','nameTeacher','edit','delete']

  courses$: Observable<Course[]>;
  
  constructor(public readonly dialogService: MatDialog, private CourseService: CourseService ) { 
    this.courses$ = this.CourseService.courses$;
  }
  ngOnInit(): void {
    this.CourseService.getCourses();
  }

  createCourse(){
    const dialog = this.dialogService.open(CourseDialogComponent)

    dialog.afterClosed().subscribe((data)=> {
      if (data) {
        this.CourseService.postCourse({ nameCourse: data.nameCourse, numberHours: data.numberHours, numberClasses: data.numberClasses, nameTeacher: data.nameTeacher});
      }
    })
  }

  editCourse(element: Course){
    const dialog = this.dialogService.open(CourseDialogComponent,{data : element});

    dialog.afterClosed().subscribe((data)=>{
      if (data) {
        this.CourseService.putCourse(element.id, data);
      }
    })
  }

  deleteCourse (element: Course){
    this.CourseService.deleteCourse(element.id);
  }

  
}
