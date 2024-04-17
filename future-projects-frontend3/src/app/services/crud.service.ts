import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CreateUser } from '../models/create-user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7226/api/User/"

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "GetAll");
  }

  create(data: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(this.baseUrl + "Create", data)
  }
}
