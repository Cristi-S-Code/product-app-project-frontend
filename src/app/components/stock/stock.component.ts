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
  ) {
    this._createForm();
  }

  ngOnInit(): void {
    this.stockForm.patchValue(this.stepsService.getStockInformation());
  }


  saveStock() {
    if (this.stockForm.valid) {
      this.stepsService.setStockInformation(this.stockForm.getRawValue());
      this.stepsService.saveStepsInformation();
    }
  }

  prevPage() {
    this.stepsService.setStockInformation(this.stockForm.getRawValue());
    this._router.navigate(['../product'], { relativeTo: this._activatedRoute });

  }

  private _createForm() {
    this.stockForm = this._formBuilder.group({
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }
}
