import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from '../pages/course-page/course-page.component';
//import { CoursePageComponent } from '../pages/course-page/course-page.component';
import { RegistrationPageComponent } from '../pages/registration-page/registration-page.component';
import { StudentsPageComponent } from '../pages/students-page/students-page.component';
import { UserPageComponent } from '../pages/user-page/user-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'estudiantes',component: StudentsPageComponent},
  {path:'cursos', component: CoursePageComponent},
  {path:'incripciones', component: RegistrationPageComponent},
  {path:'usuarios', component: UserPageComponent},
  {path:'**', component: WelcomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }