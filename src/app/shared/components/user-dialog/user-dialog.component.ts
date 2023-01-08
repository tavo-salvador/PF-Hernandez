import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  emailControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  userNameControl = new FormControl('', Validators.required);
  addressControl = new FormControl('', Validators.required);
  phoneNumberControl = new FormControl('', Validators.required);
  roleControl = new FormControl('', Validators.required);

  userForm = new FormGroup({
    email : this.emailControl,
    password : this.passwordControl,
    userName : this.userNameControl,
    address : this.addressControl,
    phoneNumber : this.phoneNumberControl,
    role : this.roleControl
  })

  constructor (private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: any,){
    console.log(data);
    if (data){
      this.userForm.patchValue(data);
    }
  }

  close(){
    this.dialogRef.close();
  }
}
