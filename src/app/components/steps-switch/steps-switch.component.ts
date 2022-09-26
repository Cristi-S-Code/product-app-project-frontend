import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription, take } from 'rxjs';
import { StepsSwitchService } from 'src/app/services/steps-switch.service';


@Component({
  selector: 'app-steps-switch',
  templateUrl: './steps-switch.component.html',
  styleUrls: ['./steps-switch.component.scss'],
})
export class StepsSwitchComponent implements OnInit {
  items!: MenuItem[];
  subscription!: Subscription;


  constructor(
    public stepsService: StepsSwitchService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._getIdFromLink();
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
  // private _getIdFromLink(){
  //   const id = this._activatedRoute.snapshot.params['id'];
  //   if(id){
  //     this.stepsService.getProduct(id);
  //     this.stepsService.selectedState = true;
  //   }
  // }
  private _getIdFromLink() {
    this._activatedRoute.params.pipe(take(1)).subscribe({
      next: (params: Params) => {
        if (!params['id']) {
          throw Error('There is no pzn for stock')
        } else {
          this.stepsService.getProduct(params['id']);
          this.stepsService.isEditing = true;
        }
      }
    })
  }

}
