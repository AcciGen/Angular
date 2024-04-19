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
  myForm!: FormGroup;
  isSubmitted: boolean = false;
  resultData!: CreateUser;

  constructor(private formBuilder: FormBuilder, private crudService: CrudService) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.createUser(this.myForm.value);
    } else {
      console.log("Form is invalid");
    }
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
}