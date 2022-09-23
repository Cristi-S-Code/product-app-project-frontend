import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userForm!: FormGroup;


constructor(
  private _formBuilder: FormBuilder
) {
  this._createForm();
 }

ngOnInit(): void {
  }
submitLoginForm() {

}

private _createForm() {
  this.userForm = this._formBuilder.group({
    email: [''],
    password: ['']
  });
}

}
