import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user-service/user.service';
import { UserDialogComponent } from 'src/app/shared/components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {

  users$: Observable<User[]>;

  displayedColumns =['id','email','password','userName','address','phoneNumber','role','edit','delete']
  
  constructor(public readonly dialogService: MatDialog, private UserService: UserService ) { 
    this.users$ = this.UserService.users$;
  }

  createUser(){
    const dialog = this.dialogService.open(UserDialogComponent)

    dialog.afterClosed().subscribe((data)=> {
      if (data) {
        this.UserService.postUser({ email: data.email, password: data.password, userName: data.userName, address: data.address, phoneNumber: data.phoneNumber, role:data.role});
      }
    })
  }

  editUser(element: User){
    const dialog = this.dialogService.open(UserDialogComponent,{data : element});

    dialog.afterClosed().subscribe((data)=>{
      if (data) {
        this.UserService.putUser(element.id, data);
      }
    })
  }

  deleteUser (element: User){
    this.UserService.deleteUser(element.id);
  }
}
