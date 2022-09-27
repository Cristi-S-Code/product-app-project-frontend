import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
  ) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  login() {
    this._userService.login(this.userForm.get('email')?.value, this.userForm.get('password')?.value);
  }


  private _createForm() {
    this.userForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });
  }

}
