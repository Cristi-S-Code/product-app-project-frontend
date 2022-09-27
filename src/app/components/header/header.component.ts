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
        label: 'Products',
        icon: 'pi pi-list',
        routerLink: 'table',
        routerLinkActiveOptions: { exact: true }
        
      },
      {
        label: 'New product',
        icon: 'pi pi-plus',
        routerLink: 'steps',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'User',
        icon: 'pi pi-user',
        routerLink: 'user-details',
        routerLinkActiveOptions: { exact: true }
      },
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        command: ()=> this._userService.logout()
      }
      
  ];

  }

}
