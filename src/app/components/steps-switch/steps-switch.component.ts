import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { StepsSwitchService } from 'src/app/services/steps-switch.service';


@Component({
  selector: 'app-steps-switch',
  templateUrl: './steps-switch.component.html',
  styleUrls: ['./steps-switch.component.scss'],
  providers: [MessageService]
})
export class StepsSwitchComponent implements OnInit {
  items!: MenuItem[];
  subscription!: Subscription;

  constructor(public stepsService: StepsSwitchService, public messageService: MessageService ) { }

  ngOnInit() {
    this.items = [{
      label: 'Product',
      routerLink: 'product'
    },
    {
      label: 'Stock',
      routerLink: 'stock'
    }
    ];

    
    
  }

  ngOnDestroy() {
    
}

}
