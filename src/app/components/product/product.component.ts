import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Product } from 'src/app/api/models';
import { ProductControllerService } from 'src/app/api/services';
import { StepsSwitchService } from 'src/app/services/steps-switch.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private _subscriptionList: Subscription[] = [];
  productForm!: FormGroup;
  selectedProduct?: Product;
  submitted: boolean = false;
  productInformation: any;

  constructor(
    public stepsService: StepsSwitchService,
    private _formBuilder: FormBuilder,
    private _productService: ProductControllerService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
    ) {
    this._createForm();
  }

  ngOnInit() {
    this.productInformation = this.stepsService.getProductInformation();
  }

  submitProductForm() {
    const newProduct: Product = {
      pzn: this.selectedProduct?.pzn ?? null,
      ...this.productForm.getRawValue()};
    // !! this.selectedProduct ? this.
    
  }

  saveProduct() {   
    this.stepsService.setProductInformation(this.productForm.getRawValue());
    this._router.navigate(['steps/stock']);
  }

  

  private _createForm() {
    this.productForm = this._formBuilder.group({
      packageSize: [''],
      productName: [''],
      pzn: ['', Validators.required],
      strength: [''],
      supplier: [''],
      unit: ['']
    });
  }
}
