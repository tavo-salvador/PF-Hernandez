import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, of, Observable, BehaviorSubject, take , map } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

   /* private students = new BehaviorSubject<Student[]>([
      new Student (1,"Juan", "Perez","desarrollador","M",true),
      new Student (2,"Miguel", "Hernandez","desarrollador","M",false),
      new Student (3,"Pedro", "Fernandez","it","M",true),
      new Student (4,"Daniela", "Olivares","it","F",false),
      new Student (5,"Mariana", "Lizardi","normal","F",true),
      new Student (6,"Gabriela","Alvarez","normal","F",true)
    ]) */
  private readonly baseUrl = 'https://63c475128067b6bef6d973dc.mockapi.io';
  
  private students = new BehaviorSubject<Student[]>([])
  public students$: Observable<Student[]>;

  constructor(private httpClient: HttpClient) { 
    this.students$ = this.students.asObservable();
  }

  getStudents()  {
    this.httpClient.get<Student[]>(`${this.baseUrl}/students`)
      .subscribe((apiStudents) => {
        console.log(apiStudents)
        this.students.next(apiStudents)
      })
  }

  postStudent(StudentData: Omit<Student, 'id' | 'status'>): void{

    this.students.pipe(take(1)).subscribe((students) => {
      const lastId = students[students.length - 1]?.id || 0;
      this.students.next([ ...students,new Student(lastId + 1, StudentData.firstName, StudentData.lastName,StudentData.role,StudentData.gender, true)]);
    });
  }

  putStudent(id: number, data: Partial<Student>): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next( students.map((stu) => stu.id === id ? new Student(
              stu.id,
              data.firstName || stu.firstName,
              data.lastName || stu.lastName,
              data.role || stu.role,
              data.gender || stu.gender,            
              data.status || stu.status,
            )
            //{...stu, ...data}
            : stu
        ))
    })
  }

  deleteStudent(id: number): void {
    this.students.pipe(take(1)).subscribe((students) => {
      this.students.next(students.filter((stu) => stu.id !== id))
    })
  }

  getStudentById(id: number): Observable<Student | null> {
    return this.students$.pipe(take(1),
      map((students) => students.find((stu) => stu.id === id) || null)
    )
  }

}

