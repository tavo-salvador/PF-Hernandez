import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent {

  firstNameControl = new FormControl('', Validators.required);
  lastNameControl = new FormControl('', Validators.required);
  roleControl = new FormControl('', Validators.required);
  genderControl = new FormControl('', Validators.required);

  studentForm = new FormGroup({
    firstName : this.firstNameControl,
    lastName : this.lastNameControl,
    role : this.roleControl,
    gender : this.genderControl
  })

  constructor (private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null,){
    console.log(data);
    if (data){
      this.studentForm.patchValue(data);
    }
  }

  close(){
    this.dialogRef.close();
  }

}
