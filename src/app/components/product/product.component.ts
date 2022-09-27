import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/api/models';
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

  saveProduct() {
    this.stepsService.setProductInformation(this.productForm.getRawValue());

    this._router.navigate(['../stock'], {relativeTo: this._activatedRoute});

  }

  private _createForm() {
    this.productForm = this._formBuilder.group({
      packageSize: ['', [Validators.required, Validators.maxLength(20)]],
      productName: ['', [Validators.required, Validators.maxLength(100)]],
      pzn: ['', [Validators.required, Validators.maxLength(8)]],
      strength: ['', [Validators.required, Validators.maxLength(100)]],
      supplier: ['', Validators.maxLength(100)],
      unit: ['', [Validators.required, Validators.maxLength(2)]]
    });
  }
}
