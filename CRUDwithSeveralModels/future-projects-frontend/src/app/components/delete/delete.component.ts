import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent implements OnInit {
  IsDeleted: boolean = false;
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

  deleteUserById(){
    this.http.delete(this.myId).subscribe({
      next: (data) => {
        this.IsDeleted = true;
        console.log(data);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
