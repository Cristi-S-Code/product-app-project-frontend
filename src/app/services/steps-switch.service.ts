import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StepsSwitchService {

  constructor() { }

  stepsInformation = {
    productInformation: {
        pzn:'',
        supplier: '',
        productName: '',
        strength: '',
        packageSize:'',
        unit:''
    },
    stockInformtion: {
        quantity: null,
        price: null
    }
};

private addComplete = new Subject<any>();

addComplete$ = this.addComplete.asObservable();

getProductInformation(){
    return this.stepsInformation.productInformation
}

setProductInformation(productInformation: { pzn: string; supplier: string; productName: string; strength: string; packageSize: string; unit: string; }){
    this.stepsInformation.productInformation = productInformation;
}

getStockInformation(){
    return this.stepsInformation.stockInformtion
}

setStockInforrmation(stockInformation: { quantity: null; price: null; }){
    this.stepsInformation.stockInformtion = stockInformation;
}

complete() {
    this.addComplete.next(this.stepsInformation.productInformation);
}

}
