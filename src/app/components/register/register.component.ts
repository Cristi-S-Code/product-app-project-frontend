import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  createAccount() {
    this._userService.registerUser(this.registerForm.getRawValue())
  }

  resetForm() {
    this.registerForm.reset();
  }

  private _createForm() {
    const passwordRegExp: RegExp = new RegExp(
      '^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])(?=.{8,20})'
    );
    this.registerForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
      username: [''],
    });

  }
}
