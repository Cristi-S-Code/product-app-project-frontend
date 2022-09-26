import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-app-project';

  get isAuthenticated(){
    return this._userService.isAuthenticated;
  }

  constructor(private _userService: UserService) {
    
    
  }
}
