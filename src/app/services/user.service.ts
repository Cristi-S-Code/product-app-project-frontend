import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs';
import { UserDto } from '../api/models';
import { UserControllerService } from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  showError = false;

  isAuthenticated = false;

  constructor(
    private _http: HttpClient, 
    private _router: Router,
    private _userCtrl: UserControllerService,
    private _messageService: MessageService
  ) { 
    const auth = localStorage.getItem('auth');

    if(auth){
      this.isAuthenticated = true;
    }
  }


  login(email: string, password: string) {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);

    this._http.post('http://localhost:8080/login', formData, { responseType: 'text', observe: 'response', withCredentials: true }).subscribe({
      next: (_r) => {
        this.isAuthenticated = true;
        localStorage.setItem('auth','isAuthenticated');
        this._messageService.add({
          severity: 'success',
          life: 3000,
          summary: 'Login',
          detail: 'You have successfully logged in'
      });
        this._router.navigate(['/table']);
      },
      error: () => {
        this.showError = true;
        this._messageService.add({
          severity: 'error',
          life: 4000,
          summary: 'Login',
          detail: 'Email or password invalid!'
      });
      }
    })
  }

  logout(){
    this._messageService.clear();
    this._messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
    this._http.get('http://localhost:8080/logout', { responseType: 'text', observe: 'response' }).subscribe({
      next: () => {
        this.isAuthenticated = false;
        localStorage.removeItem('auth');
        this._messageService.add({
          severity: 'success',
          life: 3000,
          summary: 'Logout',
          detail: 'You have successfully logged out'
      });
        this._router.navigateByUrl('user')
      }
    })
  }

  registerUser(newAccount: UserDto){
    this._userCtrl.registerUserUsingPOST(newAccount).pipe(take(1)).subscribe({
      next: () => {
        this._messageService.add({
          severity: 'success',
          life: 3000,
          summary: 'Success',
          detail: 'Account created successfully'
      });
        this._router.navigate(['user'])
      }
    })
  }

  updateUser(newAccount: UserDto){
    this._userCtrl.updateUserUsingPUT(newAccount).pipe(take(1)).subscribe({
      next: () => {
        this._messageService.add({
          severity: 'success',
          life: 3000,
          summary: 'Success',
          detail: 'Account updated successfully'
      });
      }
    })
  }

  getUser(){
    return this._userCtrl.getUserUsingGET();
  }

}
