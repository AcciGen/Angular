import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { CreateUser } from '../../models/create-user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  isSubmitted: boolean = false;

  resultData!: CreateUser;

  setValue: CreateUser = {
    name: "",
    email: "",
    login: "",
    password: "",
    role: ""
  }

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    throw new Error(`Method not implemented.`);
  }

  createUser(data: CreateUser) {
    this.crudService.create(data).subscribe({
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
    this.createUser(this.setValue);
  }
}