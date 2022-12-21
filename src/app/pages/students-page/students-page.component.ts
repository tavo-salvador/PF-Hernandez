
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {

  students: Student[] =[
    new Student(1, "Juan", "Perez", true),
    new Student(2, "Miguel", "Hernandez", false),
    new Student(3, "Pedro", "Fernandez", true),
    new Student(4, "Daniela", "Olivares", false),
    new Student(5, "Mariana", "Lizardi", true),

  ];

  displayedColumns =['id','firstName','lastName','status','edit','delete']
  
  constructor(public readonly dialogService: MatDialog ) { }

  addStudent(){
    const dialog = this.dialogService.open(StudentDialogComponent)

    dialog.afterClosed().subscribe((value)=> {
        if(value){

          console.log(value);

          const lastId = this.students[this.students.length -1]?.id;

          this.students = [...this.students,new Student(lastId + 1, value.firstName, value.lastName, true) ];
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
        console.log(this.students);
      }
    })
  }



}
