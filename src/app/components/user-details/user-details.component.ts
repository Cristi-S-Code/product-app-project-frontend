import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) {
    this._createForm();
  }

  ngOnInit(): void {
    this._userService.getUser().subscribe({
      next: (user)=> this.accountForm.patchValue(user)
    })
  }

  updateAccount() {
    this._userService.updateUser(this.accountForm.getRawValue())
  }

  resetForm() {
    this.accountForm.reset();
  }

  private _createForm() {
    const passwordStrong: RegExp = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!#%*?&])[A-Za-z\\d@$#!%.*?&]{8,20}'
    );
    this.accountForm = this._formBuilder.group({
      email: [''],
      password: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(20),Validators.pattern(passwordStrong)]],
      username: ['', [Validators.required, Validators.minLength(5),Validators.maxLength(50),]],
    });

    this.accountForm.get('email')?.disable();

  }

}
