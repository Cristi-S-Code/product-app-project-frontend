import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, take } from 'rxjs';
import { Product, Stock } from '../api/models';
import { ProductControllerService, StockControllerService } from '../api/services';

@Injectable()
export class StepsSwitchService {
  selectedState: boolean = false;  
  subject = new Subject();

  constructor(
    private _productService: ProductControllerService,
    private _stockService: StockControllerService,
    private _router: Router
  ) { }

  stepsInformation: {productInformation: Product, stockInformation: Stock } = 
  {
    productInformation: {
        packageSize: '',
        productName: '',
        pzn: '',
        strength: '',
        supplier: '',
        unit: ''
    },
    stockInformation: {
        price: 0,
        quantity: 0
    }
  };

getProductInformation() {
    return this.stepsInformation.productInformation
}

setProductInformation(productInformation: Product) {
    this.stepsInformation.productInformation = productInformation;
}

getStockInformation() {
    return this.stepsInformation.stockInformation
}

setStockInformation(stockInformation: Stock){
    this.stepsInformation.stockInformation = stockInformation;
}

saveStepsInformation() {
    if(this.selectedState) {
        this.updateProduct();
    } else {
        this.saveProduct();
    }
}

saveProduct() {
    this._productService.addNewProductUsingPOST({pzn: this.stepsInformation.productInformation.pzn!,
        packageSize: this.stepsInformation.productInformation.packageSize!, 
        productName: this.stepsInformation.productInformation.productName!,
        strength: this.stepsInformation.productInformation.strength!, 
        supplier: this.stepsInformation.productInformation.supplier!,
        unit: this.stepsInformation.productInformation.unit!} ).subscribe({
        next: () => {
            console.log("This is the new product created ===>", this.stepsInformation.productInformation);
            this._stockService.addnewStockUsingPOST({pzn: this.stepsInformation.productInformation.pzn!,
                 newStock: this.stepsInformation.stockInformation}).subscribe({
                    next: () => {
                        console.log("This is the new stock created ===>", this.stepsInformation.stockInformation);
                        this._router.navigate(['table']);
                    }
                 })
            
        },
        error: () => alert('Object was not created. Call your IT responsable!')
    })
}

updateProduct() {
    this._productService.addEditedProductToListUsingPUT(this.stepsInformation.productInformation).subscribe({
        next: () => {
            this._stockService.addEditedStockToListUsingPUT({pzn: this.stepsInformation.productInformation.pzn!,
            editedStock: this.stepsInformation.stockInformation}).subscribe({
                next: () => {
                    this._router.navigate(['table']);
                }
            })
        }
    })
}

// getProduct(id: string) {
//     this._productService.editProductUsingGET(id).subscribe({
//         next: (product) => {
//             this.setProductInformation(product);
//             this._stockService.editStockUsingGET(product.pzn).subscribe({
//                 next: (stock) => this.setStockInformation(stock[0])
//             })
//         }
//     })
// }

getProduct(id: string) {
    this._productService.editProductUsingGET(id).pipe(take(1)).subscribe({
        next: (product) => {
            this.stepsInformation.productInformation = product;
            this.getStockByPzn(product.pzn);
        }
    })
}

getStockByPzn(pzn: string) {
    this._stockService.editStockUsingGET(pzn).pipe(take(1)).subscribe({
        next: (stock: Stock) => {
            this.stepsInformation.stockInformation = stock;
            this.subject.next(true);
        }
    })
}

}
