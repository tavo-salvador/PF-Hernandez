
import { Component, OnDestroy } from '@angular/core';
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
export class StudentsPageComponent implements OnDestroy{

  displayedColumns =['id','firstName','lastName','role','gender','status','edit','delete']

  students$: Observable<Student[]>;
  
  constructor(public readonly dialogService: MatDialog, private studentService: StudentsService ) {
    this.students$ = this.studentService.students$;
  }
  ngOnDestroy(): void {
    this.studentService.getStudents();
  }

  createStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent)
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentService.postStudent({ firstName: data.firstName, lastName: data.lastName, role: data.role, gender: data.gender});
      }
    })
  }

  editStudent(element: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, { data: element })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.studentService.putStudent(element.id, data);
      }
    })
  }

  deleteStudent(element: Student) {
    this.studentService.deleteStudent(element.id);
  }


}
