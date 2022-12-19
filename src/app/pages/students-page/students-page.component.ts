import { identifierName } from '@angular/compiler';
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
    this.dialogService.open(StudentDialogComponent)
  }

}
