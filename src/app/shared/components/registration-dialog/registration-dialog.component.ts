import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Registration } from 'src/app/models/registration.model';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent {

  idStudentControl = new FormControl('', Validators.required);
  idCourseControl = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);
  idUserControl = new FormControl('', Validators.required);

  registrationForm = new FormGroup({
    idStudent : this.idStudentControl,
    idCourse : this.idCourseControl,
    date : this.dateControl,
    idUser : this.idUserControl
  })

  constructor (private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: any,){
    console.log(data);
    if (data){
      this.registrationForm.patchValue(data);
    }
  }

  close(){
    this.dialogRef.close();
  }
}
