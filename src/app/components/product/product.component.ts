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
  productForm!: FormGroup;
  selectedProduct?: Product;
  submitted: boolean = false;
  productInformation: any;

  constructor(
    public stepsService: StepsSwitchService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._createForm();
  }

  ngOnInit() {
    this.productForm.patchValue(this.stepsService.getProductInformation());

    this.stepsService.subject.subscribe({
      next: () => {
        this.productForm.patchValue(this.stepsService.getProductInformation());
        this.productForm.get('pzn')?.disable()
      }
    })
  }

  // submitProductForm() {
  //   const newProduct: Product = {
  //     pzn: this.selectedProduct?.pzn ?? null,
  //     ...this.productForm.getRawValue()};
  //   // !! this.selectedProduct ? this.

  // }

  saveProduct() {
    this.stepsService.setProductInformation(this.productForm.getRawValue());

    this._router.navigate(['../stock'], {relativeTo: this._activatedRoute});

  }

  // updateProduct(id: string){
  //   // this.productForm.patchValue(this.stepsService.getProduct(id)) ;

  // }


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
