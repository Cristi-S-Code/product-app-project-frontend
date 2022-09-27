import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StepsSwitchService } from 'src/app/services/steps-switch.service';



@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stockForm!: FormGroup;

  constructor(
    public stepsService: StepsSwitchService,
    private _formBuilder: FormBuilder,
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
