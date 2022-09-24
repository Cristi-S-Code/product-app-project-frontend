import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  
  constructor() { }

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
        icon: 'pi pi-user'
      },
      {
        label: 'Log out',
        icon: 'pi pi-sign-out'
      }
      
  ];

  }

}
