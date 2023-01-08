import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UserDialogComponent } from 'src/app/shared/components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  users: User[] =[
    new User(1, "admin@gmail.com","Admin123","admin", "Mexico city","55 3484 4512","desarrollador"),
    new User(2, "demo@gmail.com", "123456", "sistemas", "Guadalajara","55 3456 2458","it"),
    new User(3, "abc123@gmail.com","123123","pedro", "Monterey","55 6947 2384","normal"),

  ];

  displayedColumns =['id','email','password','userName','address','phoneNumber','role','edit','delete']
  
  constructor(public readonly dialogService: MatDialog ) { }

  addUser(){
    const dialog = this.dialogService.open(UserDialogComponent)

    dialog.afterClosed().subscribe((value)=> {
        if(value){

          console.log(value);

          const lastId = this.users[this.users.length -1]?.id;

          this.users = [...this.users,new User(lastId + 1, value.email, value.password,value.userName,value.address,value.phoneNumber, value.role,) ];
        }
     })
  }

  removeUser(Regist: User){
    this.users = this.users.filter((stu)=> stu.id !== Regist.id);
  }

  editUser(Regist: User){
    const dialog = this.dialogService.open(UserDialogComponent,{
      data : Regist,
    });

    dialog.afterClosed().subscribe((data)=>{
      if (data){
        this.users = this.users.map((stu)=> stu.id === Regist.id ? {...stu, ...data} : stu);
        console.log(this.users);
      }
    })
  }
}
