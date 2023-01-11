import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

students = new Subject<Student[]>();
students$ = this.students.asObservable();

constructor() { }

getStudents(){
  const subscribe = this.students.subscribe(val => val);
}

students = of [
  new Student(1, "Juan", "Perez","desarrollador","M", true),
  new Student(2, "Miguel", "Hernandez","desarrollador","M", false),
  new Student(3, "Pedro", "Fernandez","it","M", true),
  new Student(4, "Daniela", "Olivares","it","F", false),
  new Student(5, "Mariana", "Lizardi","normal","F", true),
  new Student(6, "Gabriela", "Alvarez","normal","F", true),

];

}
