import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product, Stock } from '../api/models';
import { ProductControllerService, StockControllerService } from '../api/services';

@Injectable()
export class StepsSwitchService {

  constructor(
    private _productService: ProductControllerService,
    private _stockService: StockControllerService
  ) { }

//   stepsInformation!: {productInformation: Product, stockInformation: Stock };

  stepsInformation = {
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
  }


getProductInformation(){
    return this.stepsInformation.productInformation
}

setProductInformation(productInformation: { packageSize: string; productName: string; pzn: string; strength: string; supplier: string; unit: string; }){
    this.stepsInformation.productInformation = productInformation;
}

getStockInformation(){
    return this.stepsInformation.stockInformation
}

setStockInforrmation(stockInformation: Stock){
    this.stepsInformation.stockInformation = stockInformation;
}

saveProduct(){
    this._productService.addNewProductUsingPOST(this.stepsInformation.productInformation).subscribe({
        next: () => {
            console.log("This is the new product created ===>", this.stepsInformation.productInformation);
            this._stockService.addnewStockUsingPOST({pzn: this.stepsInformation.productInformation.pzn,
                 newStock: this.stepsInformation.stockInformation}).subscribe({
                    next: () => {
                        console.log("This is the new stock created ===>", this.stepsInformation.stockInformation);
                    }
                 })
            
        },
        error: () => alert('Object was not created. Call your IT responsable!')
    })
}

// getProduct(id: string){
//     this._productService.editProductUsingGET(id).subscribe({
//         next: (product) => {
//             this.setProductInformation(product);
//             this._stockService.editStockUsingGET(product.pzn).subscribe({
//                 next: (stock) => this.setStockInforrmation(stock[0])
//             })
//         }



//     })

// }

}
