import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from '../api/services';

@Injectable()
export class UserService {
  showError = false;

  constructor(
    private _userService: UserControllerService,
    private _http: HttpClient, 
    private _router: Router
  ) { }

  userInformation!: {
    email: '';
    password: '';
  };

  getUserInformation(){
    return this.userInformation
  }

  setUserInformation(userInformation: { email: ""; password: ""; }){
    this.userInformation = userInformation
  }

  login() {
    const formData = new FormData();
    formData.append('username', this.userInformation.email);
    formData.append('password', this.userInformation.password);
    console.log(formData);
    this._http.post('http://localhost:8080/login', formData, { responseType: 'text', observe: 'response', withCredentials: true }).subscribe({
      next: (_r) => {
        console.log("Login Success!");
        this._router.navigate(['/table']);
      },
      error: () => this.showError = true
    })
  }

}
