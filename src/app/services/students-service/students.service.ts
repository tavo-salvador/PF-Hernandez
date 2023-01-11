import { Injectable } from '@angular/core';
import { Subject, of, Observable, ReplaySubject } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

public students$ : Observable<Student[] >;
public students = new ReplaySubject<Student[]>(1);

constructor() { 
  this.students$ = this.students.asObservable();
  this.students.next([
      {id:1, firstName: "Juan", lastName: "Perez", role:"desarrollador", gender:"M", status: true},
      {id:2, firstName: "Miguel", lastName: "Hernandez", role:"desarrollador", gender:"M",status: false},
      {id:3, firstName: "Pedro", lastName: "Fernandez", role:"it",gender:"M", status:true},
      {id:4, firstName: "Daniela", lastName: "Olivares", role:"it",gender:"F", status:false},
      {id:5, firstName: "Mariana", lastName: "Lizardi", role:"normal",gender:"F",status: true},
      {id:6, firstName: "Gabriela", lastName:"Alvarez", role:"normal",gender:"F",status: true}
    ]
  )
}

getStudents(): Observable<Student[]>{
  return of ([
    {id:1, firstName: "Juan", lastName: "Perez", role:"desarrollador", gender:"M", status: true},
    {id:2, firstName: "Miguel", lastName: "Hernandez", role:"desarrollador", gender:"M",status: false},
    {id:3, firstName: "Pedro", lastName: "Fernandez", role:"it",gender:"M", status:true},
    {id:4, firstName: "Daniela", lastName: "Olivares", role:"it",gender:"F", status:false},
    {id:5, firstName: "Mariana", lastName: "Lizardi", role:"normal",gender:"F",status: true},
    {id:6, firstName: "Gabriela", lastName:"Alvarez", role:"normal",gender:"F",status: true}
  ]);
}

}
