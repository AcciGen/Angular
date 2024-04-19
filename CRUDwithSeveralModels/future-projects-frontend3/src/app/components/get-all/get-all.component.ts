import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.scss'
})
export class GetAllComponent implements OnInit {
  dataSource: User[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crudService.getAll().subscribe({
      next: (data: User[]) => {
        this.dataSource = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
