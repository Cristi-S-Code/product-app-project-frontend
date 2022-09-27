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
    const passwordStrong: RegExp = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!#%*?&])[A-Za-z\\d@$#!%.*?&]{8,20}'
    );
    this.registerForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(20),Validators.pattern(passwordStrong)]],
      username: ['' ,[Validators.required, Validators.minLength(5),Validators.maxLength(50)]],
    });

  }
}
