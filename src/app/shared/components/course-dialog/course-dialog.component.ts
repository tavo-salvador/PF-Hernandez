import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent {

  nameCourseControl = new FormControl('', Validators.required);
  numberHoursControl = new FormControl('', Validators.required);
  numberClassesControl = new FormControl('', Validators.required);
  nameTeacherControl = new FormControl('', Validators.required);

  courseForm = new FormGroup({
    nameCourse : this.nameCourseControl,
    numberHours : this.numberHoursControl,
    numberClasses : this.numberClassesControl,
    nameTeacher : this.nameTeacherControl
  })
  

  constructor (private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: any,){
    console.log(data);
    if (data){
      this.courseForm.patchValue(data);
    }
  }

  close(){
    this.dialogRef.close();
  }
}
