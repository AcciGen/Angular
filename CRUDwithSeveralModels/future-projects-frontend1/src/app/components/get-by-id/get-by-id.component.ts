import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CrudService } from '../../services/crud.service';
import { CreateUser } from '../../models/create-user';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'login', 'password', 'role'];
  dataSource: CreateUser[] = [];
  userId!: number;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {}

  getUserById() {
    if (!this.userId) return;
    this.crudService.getById(this.userId).subscribe({
      next: (userData: CreateUser) => {
        this.dataSource = [userData];
        console.log(this.dataSource);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}