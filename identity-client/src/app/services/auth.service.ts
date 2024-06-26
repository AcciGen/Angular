import { Injectable, inject } from '@angular/core';
import { LoginRequest } from '../interfaces/login-request';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';
import { LoginResponse } from '../interfaces/login-response';
import { RegisterRequest } from '../interfaces/register-request';
import { RegisterResponse } from '../interfaces/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';
  router = inject(Router)

  login(data: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}Users/Login`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
          //localStorage.clear();
          localStorage.setItem(this.tokenKey, response.token)
        }
        this.router.navigate(['/register'])
        return response
      })
    );
  }

  register(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}Users/Registration`, data).pipe(
      map((response) => {
        if (response.isSuccess) {
          this.router.navigate(['/login'])
        }
        return response;
      })
    );
  }

  logout(){
    localStorage.setItem(this.tokenKey, '');
  }

  checkRouting(data: string[]): boolean {


    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if(element == 'Admin') {
        this.router.navigate(['/users'])
        return true
      } else if(element == 'Student') {
        this.router.navigate(['/student-profile'])
        return true
      }
    }
  
    return false;
  };

  
  private message = new BehaviorSubject("Initial message!");
  getMessage = this.message.asObservable();

  setMessage(message: string) {
    this.message.next(message)
  }
}
