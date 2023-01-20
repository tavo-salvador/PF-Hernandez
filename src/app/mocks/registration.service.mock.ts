import { BehaviorSubject, Observable, of, take } from "rxjs";
import { Registration } from "../models/registration.model";

const FAKE_REGISTRATION: Registration[] = [
    
    {
         id: 1,
         idStudent: 2,
         idCourse: 3,
         date: new Date(),
         idUser: 1
    },
    {
        id: 2,
        idStudent: 3,
        idCourse: 4,
        date: new Date(),
        idUser: 2
   },
   {
        id: 3,
        idStudent: 5,
        idCourse: 2,
        date: new Date(),
        idUser: 3
    },
  ]

  export class RegistrationServiceMock  {

    private regist = new BehaviorSubject<Registration[]>([])
    public regist$: Observable<Registration[]>;

    constructor() {
      this.regist$ = this.regist.asObservable();
      //this.regist.next(FAKE_REGISTRATION)
    }

      
    postRegist(data: Omit<Registration, "id">): void{

        this.regist$.pipe(take(1)).subscribe((CurrentRegist) => {
          const lastId = CurrentRegist[CurrentRegist.length - 1]?.id || 0;
          this.regist.next([
             ...CurrentRegist,{
                id: lastId + 1,
                idStudent: data.idStudent,
                idCourse: data.idCourse,
                date: data.date,
                idUser: data.idUser
             }
             ])
        });
      }
      deleteRegist(id: number): void {}
      putRegist(id: number, data: Partial<Registration>): void {}
  
     loadProducts() {
      this.regist.next(FAKE_REGISTRATION)
    } 
  }