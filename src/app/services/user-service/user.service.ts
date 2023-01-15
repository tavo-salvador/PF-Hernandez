import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new BehaviorSubject<User[]> ([
    
    new User(1, "admin@gmail.com","Admin123","admin", "Mexico city","55 3484 4512","desarrollador"),
    new User(2, "demo@gmail.com", "123456", "sistemas", "Guadalajara","55 3456 2458","it"),
    new User(3, "abc123@gmail.com","123123","pedro", "Monterey","55 6947 2384","normal"),
  ])

  public users$: Observable<User[]>;

  constructor() {
    this.users$ = this.users.asObservable();
   }

  postUser(UserData: Omit<User, 'id' >): void{

    this.users.pipe(take(1)).subscribe((users) => {
      const lastId = users[users.length - 1]?.id || 0;
      this.users.next([ ...users,new User(lastId + 1, UserData.email, UserData.password,UserData.userName,UserData.address,UserData.phoneNumber,UserData.role)]);
    });
  }

  putUser(id: number, data: Partial<User>): void {
    this.users.pipe(take(1)).subscribe((users) => {
      this.users.next( users.map((val) => val.id === id ? new User(
              val.id,
              data.email || val.email,
              data.password || val.password,            
              data.userName || val.userName,
              data.address || val.address,  
              data.phoneNumber || val.phoneNumber,
              data.role || val.role                      
            )
            //{...val, ...data}
            : val
        ))
    })
  }

  deleteUser(id: number): void {
    this.users.pipe(take(1)).subscribe((users) => {
      this.users.next(users.filter((val) => val.id !== id))
    })
  }

  getUserById(id: number): Observable<User | null> {
    return this.users$.pipe(take(1),
      map((users) => users.find((val) => val.id === id) || null)
    )
  }

}
