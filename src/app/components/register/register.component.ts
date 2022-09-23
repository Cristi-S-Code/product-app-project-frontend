import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/api/models';
import { UserControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  value!: string;
  selectedUser!: User;
  datePipeString: string | null;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userService: UserControllerService,
    private _datePipe: DatePipe
  ) {
    
    this.datePipeString = this._datePipe.transform(Date.now(),'yyyy-MM-dd@HH:mm:ss');
    this._createForm();    
  }

  ngOnInit(): void {
  }

  createAccount() {
    const newAccount: User = this.registerForm.getRawValue();
      this._createAccount(newAccount);
  }
  
  resetForm() {
    this.registerForm.reset();
  }

  private _createAccount(newAccount: User){
    this._userService.registerUserUsingPOST(newAccount).pipe(take(1)).subscribe({
      next: () => {
        console.log('this is the email for the new account ===>', newAccount.email)
        this.resetForm()
        this._router.navigate(['user'])
      }
    })
  }
 
  private _createForm() {
    this.registerForm = this._formBuilder.group({
      email: [''],
      password: [''],
      username: [''],
      creationDate: this.datePipeString
    });
    
  }
}
