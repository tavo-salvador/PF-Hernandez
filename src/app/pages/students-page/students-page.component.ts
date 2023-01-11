
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students-service/students.service';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {

  displayedColumns =['id','firstName','lastName','role','gender','status','edit','delete']

  students$: Observable<Student[]>;
  students: Student[] = [];
  
  constructor(public readonly dialogService: MatDialog, private studentService: StudentsService ) {
    this.students$ = studentService.students$;
  }


  addStudent(){
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value)=> {
        if(value){

          console.log(value);

          const lastId = this.students[this.students.length -1]?.id;

          this.students = [...this.students,new Student(lastId + 1, value.firstName, value.lastName,value.role,value.gender, true) ];
        }
     })
  }

  removeStudent(student: Student){
    this.students = this.students.filter((stu)=> stu.id !== student.id);
  }

  editStudent(student: Student){
    const dialog = this.dialogService.open(StudentDialogComponent,{
      data : student,
    });

    dialog.afterClosed().subscribe((data)=>{
      if (data){
        this.students = this.students.map((stu)=> stu.id === student.id ? {...stu, ...data} : stu);
        //console.log(this.students);
      }
    })
  }



}
