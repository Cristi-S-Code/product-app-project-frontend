import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  

  constructor(private _userService: UserService, private _messageService: MessageService) { }

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
        command: ()=> this.showConfirm()
      }
      
  ];

  }

  showConfirm() {
    this._messageService.clear();
    this._messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure you want to logout?', detail:'Confirm to proceed'});
}

  onConfirm() {
    this._userService.logout();
  }

  onReject() {
    this._messageService.clear('c');
  }

}
