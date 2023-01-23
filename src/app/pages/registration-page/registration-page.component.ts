import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Registration } from 'src/app/models/registration.model';
import { RegistrationService } from 'src/app/services/registration-service/registration.service';
import { RegistrationDialogComponent } from 'src/app/shared/components/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit{


  displayedColumns =['id','idStudent','idCourse','date','idUser','edit','delete']

  regist$: Observable<Registration[]>;
  registrationForm: any;
  
  constructor(public readonly dialogService: MatDialog, private RegistrationService: RegistrationService ) { 
    this.regist$ = this.RegistrationService.regist$;
  }
  ngOnInit(): void {
    this.RegistrationService.loadRegist();
  }

  createRegistration(){
    const dialog = this.dialogService.open(RegistrationDialogComponent)

    dialog.afterClosed().subscribe((data)=> {
      if (data) {
        this.RegistrationService.postRegist({ idStudent: data.idStudent, idCourse: data.idCourse, date: data.date, idUser: data.idUser});
      }
    })
  }

  editRegistration(element: Registration){
    const dialog = this.dialogService.open(RegistrationDialogComponent,{data : element});

    dialog.afterClosed().subscribe((data)=>{
      if (data) {
        this.RegistrationService.putRegist(element.id, data);
      }
    })
  }

  deleteRegistration (element: Registration){
    this.RegistrationService.deleteRegist(element.id);
  }

}
