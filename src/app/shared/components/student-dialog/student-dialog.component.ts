import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent {

  firtNameControl = new FormControl('');
  lastNameControl = new FormControl('');

  studentForm = new FormGroup({
    firtName : this.firtNameControl,
    lastName : this.lastNameControl
  })


}
