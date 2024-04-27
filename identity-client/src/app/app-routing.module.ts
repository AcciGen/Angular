import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UsersComponent } from './admin/users/users.component';
import { StudentProfileComponent } from './admin/students/student-profile/student-profile.component';
import { homeGuard, loginGuard, studentProfileGuard, usersGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent, canActivate: [homeGuard] },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'users', component: UsersComponent, canActivate: [usersGuard] },
  { path: 'student-profile', component: StudentProfileComponent, canActivate: [studentProfileGuard] },
  { path: '**', title: "404 Not Found", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
