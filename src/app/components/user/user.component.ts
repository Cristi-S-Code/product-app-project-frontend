import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/api/models';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userForm!: FormGroup;
showError = false;
username: String = '';
password: String = '';


constructor(
  private _formBuilder: FormBuilder,
  private _userService: UserService,
  private _router: Router
) {
  this._createForm();
 }

ngOnInit(): void {
  }
submitLoginForm() {

}

login(){
  console.log('button is working...!!!');
  this._userService.setUserInformation(this.userForm.getRawValue());
  this._userService.login();
  console.log('login is working...!!!');
}

showLogin(){
  return !window.location.href.includes('products');
}

private _createForm() {
  this.userForm = this._formBuilder.group({
    email: [''],
    password: ['']
  });
}

}
