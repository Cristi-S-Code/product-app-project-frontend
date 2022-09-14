import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
items!: MenuItem[];
subscription!: Subscription;


  constructor() {
    
    
   }

  ngOnInit() {
    this.items = [
      {label: 'Product'},
      {label: 'Stock'},
      {label: 'Confirmation'}
  ];
  }

}
