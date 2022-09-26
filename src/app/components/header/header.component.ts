import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Products',
        icon: 'pi pi-list',
        routerLink: 'table'
        
      },
      {
        label: 'New product',
        icon: 'pi pi-plus',
        routerLink: 'steps'
      },
      {
        label: 'User',
        icon: 'pi pi-user',
        routerLink: 'user-details',
      },
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        command: ()=> this._userService.logout()
      }
      
  ];

  }

}
