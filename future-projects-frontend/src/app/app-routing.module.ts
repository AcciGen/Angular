import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './components/get-all/get-all.component';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  { path: 'home', redirectTo: 'getall', pathMatch: 'full' },
  { path: '', redirectTo: 'getall', pathMatch: 'full' },
  { path: 'getall', title: 'Get All', component: GetAllComponent },
  { path: 'getbyid', title: 'Get By Id', component: GetByIdComponent },
  { path: 'create', title: 'Create', component: CreateComponent },
  { path: 'update', title: 'Update', component: UpdateComponent },
  { path: 'delete', title: 'Delete', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
