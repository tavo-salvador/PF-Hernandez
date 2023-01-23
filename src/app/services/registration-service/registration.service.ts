import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Registration } from 'src/app/models/registration.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  data : Registration[] = ([
    new Registration(1, 1, 1, new Date(), 1),
    new Registration(2, 3, 2, new Date(), 1),
    new Registration(3, 2, 4, new Date(), 2),
    new Registration(4, 4, 3, new Date(), 2),
    new Registration(5, 6, 6, new Date(), 1),
    new Registration(6, 5, 5, new Date(), 2),

  ]);

  private registration = new BehaviorSubject<Registration[]>([]);
  public regist$: Observable<Registration[]>;

  constructor() {
    this.regist$ = this.registration.asObservable();
   }

  loadRegist() {
    this.registration.next(this.data);
  } 

  postRegist(RegistData: Omit<Registration, 'id' >): void{

    this.registration.pipe(take(1)).subscribe((registration) => {
      const lastId = registration[registration.length - 1]?.id || 0;
      this.registration.next([ ...registration,new Registration(lastId + 1, RegistData.idStudent, RegistData.idCourse,RegistData.date,RegistData.idUser)]);
    });
  }

  putRegist(id: number, data: Partial<Registration>): void {
    this.registration.pipe(take(1)).subscribe((registration) => {
      this.registration.next( registration.map((val) => val.id === id ? new Registration(
              val.id,
              data.idStudent || val.idStudent,
              data.idCourse || val.idCourse,            
              data.date || val.date,
              data.idUser || val.idUser                        
            )
            //{...val, ...data}
            : val
        ))
    })
  }

  deleteRegist(id: number): void {
    this.registration.pipe(take(1)).subscribe((registration) => {
      this.registration.next(registration.filter((val) => val.id !== id))
    })
  }

  getRegistById(id: number): Observable<Registration | null> {
    return this.regist$.pipe(take(1),
      map((registration) => registration.find((val) => val.id === id) || null)
    )
  }
}
