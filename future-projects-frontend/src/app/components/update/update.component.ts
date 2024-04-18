import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  myId!: number;
  user: CreateUser = {
    name: "",
    email: "",
    login: "",
    password: "",
    role: ""
  };

  constructor(private http : CrudService){}

  ngOnInit(): void {

    this.getById();
  }

  getById() {

    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  setUser(){
    this.http.update(this.myId, this.user).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
