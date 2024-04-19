import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {
  createForm!: FormGroup;
  isSubmitted: boolean = false;
  resultData!: CreateUser;
  
  constructor(private fb: FormBuilder, private crudService: CrudService) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      login: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.createForm.valid) {
      this.isSubmitted = true;
      this.createUser(this.createForm.value);
    }
  }

  createUser(data: CreateUser) {
    this.crudService.create(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}