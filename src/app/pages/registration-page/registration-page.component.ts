import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Registration } from 'src/app/models/registration.model';
import { RegistrationDialogComponent } from 'src/app/shared/components/registration-dialog/registration-dialog.component';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {

  records: Registration[] =[
    new Registration(1, 1, 1, new Date(), 1),
    new Registration(2, 3, 2, new Date(), 1),
    new Registration(3, 2, 4, new Date(), 2),
    new Registration(4, 4, 3, new Date(), 2),
    new Registration(5, 6, 6, new Date(), 1),
    new Registration(6, 5, 5, new Date(), 2),

  ];

  displayedColumns =['id','idStudent','idCourse','date','idUser','edit','delete']
  
  constructor(public readonly dialogService: MatDialog ) { }

  addRegistration(){
    const dialog = this.dialogService.open(RegistrationDialogComponent)

    dialog.afterClosed().subscribe((value)=> {
        if(value){

          console.log(value);

          const lastId = this.records[this.records.length -1]?.id;

          this.records = [...this.records,new Registration(lastId + 1, value.idStudent, value.idCourse,value.date,value.idUser) ];
        }
     })
  }

  removeRegistration(Regist: Registration){
    this.records = this.records.filter((stu)=> stu.id !== Regist.id);
  }

  editRegistration(Regist: Registration){
    const dialog = this.dialogService.open(RegistrationDialogComponent,{
      data : Regist,
    });

    dialog.afterClosed().subscribe((data)=>{
      if (data){
        this.records = this.records.map((stu)=> stu.id === Regist.id ? {...stu, ...data} : stu);
        console.log(this.records);
      }
    })
  }
}
