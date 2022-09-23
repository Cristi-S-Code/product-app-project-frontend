import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { combineLatest, forkJoin, Subscription, take } from 'rxjs';
import { Product, Stock } from 'src/app/api/models';
import { ProductControllerService, StockControllerService } from 'src/app/api/services';
import { ProductComponent } from '../product/product.component';
import { StockDetailsComponent } from '../stock-details/stock-details.component';
import { StockComponent } from '../stock/stock.component';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [DialogService, MessageService]
})
export class ProductListComponent implements OnInit {
  productList: Product[]= [];
  stockList: Stock[] = [];
  subscriptionList: Subscription[] = [];
  productTotal = this._productService.getAllProductsUsingGETResponse();
  stockTotal = this._stockService.getAllStockUsingGETResponse();
  displayPosition!: boolean;
  position!: string;
  displayModal!: boolean;
  selectedStock:Stock [] = [];
  stockForm!: FormGroup;
  stockDetails: any;
  ref!: DynamicDialogRef;
  items!: MenuItem[];
  // pzn!: Product;
  product: Product[] = [];
  stock: Stock[] = [];


  constructor(
    private _productService: ProductControllerService, 
    private _stockService: StockControllerService,
    private _primengConfig: PrimeNGConfig,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    public dialogService: DialogService,
    public messageService: MessageService,
    private _router: Router
    ) {
      this._createForm();
     }
    

  ngOnInit(): void {
    this.items = [
      {
        label: 'Edit',
        icon:'pi pi-fw pi-pencil',
        // routerLink:['product/', this.items.product.pzn],
        // command: ((product: Product) => this.sendPznToLink(product)),
        // command: (product) => {
        //   routerLink: ['product/', product.pzn];
        // }
        // command(product: Product) {
        //   this._stockService.  `product/${product.pzn}`  
        // },
        command(event?) {
            
        },
      }, 
      {
        label: 'Delete',
        icon:'pi pi-fw pi-trash'
      }]  

    this._primengConfig.ripple = true;
    this.subscriptionList.push(
      this._productService.getAllProductsUsingGET().subscribe({
        next: (list: Product[]) =>{
          console.log('get all product request is working'),
          this.productList = list;
        },
        error:() => console.log('the subscription for product was unsuccessful')
      }),
      this._stockService.getAllStockUsingGET().subscribe({
        next: (list: Stock[]) =>{
          console.log('get all stock request is working'),
          this.stockList = list;
        },
        error:() => console.log('the subscription for stock was unsuccessful')
      })
    );
    this._getIdFromLink();
    // this.stockDetails = this._getIdFromLink();
    console.log('is working ----->>>' + this._getIdFromLink());
    
  }

  sendPznToLink(product: Product){
    this._router.navigate([`product/${product.pzn}`])
  }

  ngOnDestroy(): void {
    // Every subscription needs to be unsubscribed to avoid memory leaks!
   this.subscriptionList.forEach((sub) => sub.unsubscribe())
    // if (this.ref) {
    //     this.ref.close();
    
    // }
 }

 show(product: Product) {
  this.ref = this.dialogService.open(StockDetailsComponent , {
      width: '40%',
      data: {
        pzn: product.pzn
      }
  });

  // this.ref.onClose.subscribe((product: Product) =>{
  //   if (product) {
  //       this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.pzn});
  //   }
// });
}
 
 showValues(product: Product) {

 }

//  showPositionDialog(position: string) {
//   this.position = position;
//   this.displayPosition = true;
// }

showModalDialog() {
  // this.stockDetails = this._getIdFromLink();
  this.displayModal = true;
  
}

deleteValues(product: Product){
    this._stockService.deleteStockUsingDELETE(product.pzn).pipe(take(1)).subscribe({
    next: () => this._router.navigate(['/table']).then(() => {
      window.location.reload();
      })
    })
}

onEdit(param: string){
  this._router.navigate(['/steps', param])
}

private _getStockById(pzn: string){
  this._stockService.editStockUsingGET(pzn).pipe(
    take(1)
  ).subscribe({
    next: (stock: Stock[]) => {
      this.stockForm.patchValue(stock);
      this.selectedStock = stock;
      console.log('selectedstok works====>>' + this.selectedStock);
    }
  })
}

private _getIdFromLink(){
  this._activatedRoute.params.pipe(take(1)).subscribe({
    next: (params: Params) => {
      if(!params['pzn']) throw Error('There is no id for stock')
      this._getStockById(params['pzn']);
    },
    error: () => alert("get id from link is not working")
  })
}

// private _addStockToTable(pzn: string){
//   this._stockService.editStockUsingGET(pzn).subscribe({
//     next: (stock: Stock) => {
//       this.stockForm.patchValue(stock);
//       this.selectedStock = stock;
//     }
//   })
// }

private _createForm() {
  this.stockForm = this._formBuilder.group({
    quantity: ['', Validators.required],
    price: ['', Validators.required]
  });
}

}


