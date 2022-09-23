import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Params, Router, ParamMap } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Stock, StockDto } from 'src/app/api/models';
import { StockControllerService } from 'src/app/api/services/stock-controller.service';
import { StepsSwitchService } from 'src/app/services/steps-switch.service';



@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  private _subscriptionList: Subscription [] = [];
  stockForm!: FormGroup;
  selectedStock?: StockDto;
  value!: String;
  pznFromLink!: string;
  currentRoute!: string;

  constructor(
    public stepsService: StepsSwitchService,
    private _formBuilder: FormBuilder, 
    private _stockService: StockControllerService, 
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    // public ref: DynamicDialogRef, 
    // public config: DynamicDialogConfig
    ) { 
    this._createForm();
  }

  ngOnInit():void {
    // this._getIdFromLink();
    // this._subscriptionList.push(
    //   // this._stockService.editStockUsingGET(this.config.pzn)
    // )

  }

  submitStockForm() {
  }

  saveStock() {
    // const newStock: StockDto = {
    //   stockId: this.selectedStock?.stockId ?? null,
    //   ...this.stockForm.getRawValue()};
    //   this._createStock({newStock: newStock, pzn: this.pznFromLink});
    //   this._router.navigate(['table']);

      this.stepsService.setStockInforrmation(this.stockForm.getRawValue());
      this.stepsService.saveProduct();
}

  prevPage() {
    this._router.navigate(['steps/product']);
}

private _createStock(newStock: StockControllerService.AddnewStockUsingPOSTParams){
  this._stockService.addnewStockUsingPOST(newStock).pipe(take(1)).subscribe({
    next: () => {
      console.log("This is the new stock created ===>", newStock)
    },
    error: () => alert('Object was not created. Call your IT responsable!')
    })
}

private _getIdFromLink(){
  this._activatedRoute.params.pipe(take(1)).subscribe({
    next: (params: Params) => {
      if(!params['id']) {
        throw Error('There is no pzn for stock')
      }else{
      this.pznFromLink = params['id'];
      }
    }
  })
}

private _createForm() {
  this.stockForm = this._formBuilder.group({
    price: ['', Validators.required],
    quantity: ['', Validators.required],
  });
}
}
