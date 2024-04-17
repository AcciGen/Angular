import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  isSubmitted: boolean = false;
  resultData!: CreateUser;
  setValue: CreateUser = {
    name: '',
    email: '',
    login: '',
    password: '',
    role: ''
  };

  constructor(private crudService: CrudService) {}

  createUser() {
    this.crudService.create(this.setValue).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  setUser() {
    this.createUser();
  }

}