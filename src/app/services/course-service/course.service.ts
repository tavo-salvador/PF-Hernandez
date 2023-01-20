import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

/*   private courses = new BehaviorSubject<Course[]> ([
    new Course(1, "Angular", 40, 3,"Josue"),
    new Course(2, "React", 35, 4,"Juan"),
    new Course(3, "JavaScript", 25, 8,"Miguel"),
    new Course(4, "C++", 30, 5,"Francisco"),
    new Course(5, "Photoshop", 35, 9,"Erick"),
  ]); */
  private readonly baseUrl = 'https://63c475128067b6bef6d973dc.mockapi.io';
  private courses = new BehaviorSubject<Course[]>([]);
  public courses$: Observable<Course[]>;

  constructor(private httpClient: HttpClient) { 
    this.courses$ = this.courses.asObservable();
  }

  getCourses()  {
    this.httpClient.get<Course[]>(`${this.baseUrl}/course`)
      .subscribe((apiCourses) => {
        this.courses.next(apiCourses)
      })
  }

  postCourse(CourseData: Omit<Course, 'id' >): void{

    this.courses.pipe(take(1)).subscribe((courses) => {
      const lastId = courses[courses.length - 1]?.id || 0;
      this.courses.next([ ...courses,new Course(lastId + 1, CourseData.nameCourse, CourseData.numberHours,CourseData.numberClasses,CourseData.nameTeacher)]);
    });
  }

  putCourse(id: number, data: Partial<Course>): void {
    this.courses.pipe(take(1)).subscribe((courses) => {
      this.courses.next( courses.map((val) => val.id === id ? new Course(
              val.id,
              data.nameCourse || val.nameCourse,
              data.numberHours || val.numberHours,            
              data.numberClasses || val.numberClasses,
              data.nameTeacher || val.nameTeacher,                        
            )
            //{...val, ...data}
            : val
        ))
    })
  }

  deleteCourse(id: number): void {
    this.courses.pipe(take(1)).subscribe((courses) => {
      this.courses.next(courses.filter((val) => val.id !== id))
    })
  }

  getCourseById(id: number): Observable<Course | null> {
    return this.courses$.pipe(take(1),
      map((courses) => courses.find((val) => val.id === id) || null)
    )
  }

}
