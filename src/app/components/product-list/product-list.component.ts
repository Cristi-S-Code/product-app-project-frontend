import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeIcons, PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { combineLatest, forkJoin, Subscription, take } from 'rxjs';
import { Product, Stock } from 'src/app/api/models';
import { ProductControllerService, StockControllerService } from 'src/app/api/services';
import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [DialogService, ConfirmationService]
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  stockList: Stock[] = [];
  subscriptionList: Subscription[] = [];
  productTotal = this._productService.getAllProductsUsingGETResponse();
  stockTotal = this._stockService.getAllStockUsingGETResponse();
  displayPosition!: boolean;
  position!: string;
  displayModal!: boolean;

  stockForm!: FormGroup;
  stockDetails: any;
  ref!: DynamicDialogRef;
  items!: MenuItem[];

  product: Product[] = [];
  stock: Stock[] = [];


  constructor(
    private _productService: ProductControllerService,
    private _stockService: StockControllerService,
    public dialogService: DialogService,
    private _router: Router,
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService
  ) {
  }


  ngOnInit(): void {
    this.items = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      }]

    this.subscriptionList.push(
      this._productService.getAllProductsUsingGET().subscribe({
        next: (list: Product[]) => {
          console.log('get all product request is working'),
            this.productList = list;
        },
        error: () => console.log('the subscription for product was unsuccessful')
      }),
    );

  }

  sendPznToLink(product: Product) {
    this._router.navigate([`product/${product.pzn}`])
  }

  ngOnDestroy(): void {
    // Every subscription needs to be unsubscribed to avoid memory leaks!
    this.subscriptionList.forEach((sub) => sub.unsubscribe())
  }

  show(product: Product) {
    this.ref = this.dialogService.open(StockDetailsComponent, {
      width: '40%',
      data: {
        pzn: product.pzn
      }
    });

  }

  deleteValues(product: Product) {
    this._stockService.deleteStockUsingDELETE(product.pzn).pipe(take(1)).subscribe({
      next: () => {
        const index = this.productList.findIndex((p => p.pzn === product.pzn));
        this._messageService.add({
          severity: 'success',
          summary: 'Product deleted',
          detail: product.productName + ' was succesfuly deleted',
          life: 3000,
        });
        if (index !== -1) {
          this.productList.splice(index, 1);
        }

      }
    })
  }

  onEdit(param: string) {
    this._router.navigate(['/steps', param])
  }

}


