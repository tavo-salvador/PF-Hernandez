import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UsersProfileComponent } from './users-Profile/pages/users-profile/users-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'students',
    component: StudentsPageComponent,
  },
  {
    path: 'courses',
    component: CoursePageComponent,
  },
  {
    path: 'inscriptions',
    component: RegistrationPageComponent,
  },
  {
    path: 'users',
    component: UserPageComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'userprofile',
    component: UsersProfileComponent,
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
