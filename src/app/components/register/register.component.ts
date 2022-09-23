import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  value4!: string;
  value3!: string;
  
  constructor(
    private _formBuilder: FormBuilder
  ) {
    this._createForm();
   }

  ngOnInit(): void {
  }

  submitRegisterForm() {

  }
 
  private _createForm() {
    this.registerForm = this._formBuilder.group({
      creationDate: [''],
      email: [''],
      password: [''],
      userId: [''],
      username: ['']
    });
  }
}
