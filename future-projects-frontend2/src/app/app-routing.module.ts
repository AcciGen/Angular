import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'getall', pathMatch: 'full' },
  { path: 'home', redirectTo: 'getall', pathMatch: 'full' },
  { path: 'getall', title: 'Get All', component: GetAllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
