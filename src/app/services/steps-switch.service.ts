import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, take } from 'rxjs';
import { Product, Stock } from '../api/models';
import { ProductControllerService, StockControllerService } from '../api/services';

@Injectable()
export class StepsSwitchService {
    isEditing: boolean = false;
    subject = new Subject();

    constructor(
        private _productService: ProductControllerService,
        private _stockService: StockControllerService,
        private _router: Router,
        private _messageService: MessageService
    ) { }

    stepsInformation: { productInformation: Product, stockInformation: Partial<Stock> } =
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

    setStockInformation(stockInformation: Stock) {
        this.stepsInformation.stockInformation = stockInformation;
    }

    saveStepsInformation() {
        if (this.isEditing) {
            this.updateProduct();
        } else {
            this.saveProduct();
        }
    }

    saveProduct() {
        this._productService.addNewProductUsingPOST({
            pzn: this.stepsInformation.productInformation.pzn!,
            packageSize: this.stepsInformation.productInformation.packageSize!,
            productName: this.stepsInformation.productInformation.productName!,
            strength: this.stepsInformation.productInformation.strength!,
            supplier: this.stepsInformation.productInformation.supplier!,
            unit: this.stepsInformation.productInformation.unit!
        }).subscribe({
            next: () => {
                this._stockService.addnewStockUsingPOST({
                    pzn: this.stepsInformation.productInformation.pzn!,
                    newStock: this.stepsInformation.stockInformation
                }).subscribe({
                    next: () => {
                        this._messageService.add({
                            severity: 'success',
                            life: 3000,
                            summary: 'Success',
                            detail: 'Product added successfully'
                        });
                        this._router.navigate(['table']);
                    }
                })

            },
            error: () => {
                this._messageService.add({
                    severity: 'error',
                    life: 2000,
                    summary: 'Error',
                    detail: 'Object was not created. Call your IT responsable!',

                })
            }
        })
    }

    updateProduct() {
        this._productService.addEditedProductToListUsingPUT(this.stepsInformation.productInformation).subscribe({
            next: () => {
                this._stockService.addEditedStockToListUsingPUT({
                    pzn: this.stepsInformation.productInformation.pzn!,
                    editedStock: this.stepsInformation.stockInformation
                }).subscribe({
                    next: () => {
                        this._messageService.add({
                            severity: 'success',
                            life: 3000,
                            summary: 'Success',
                            detail: 'Product updated successfully'
                        });
                        this._router.navigate(['table']);
                    }
                })
            }
        })
    }

    getProduct(id: string) {
        this._productService.editProductUsingGET(id).pipe(take(1)).subscribe({
            next: (product) => {
                this.stepsInformation.productInformation = product;
                this.getStockByPzn(product.pzn);
            }
        })
    }

    getStockByPzn(pzn: string) {
        this._stockService.getStockByPznUsingGET(pzn).pipe(take(1)).subscribe({
            next: (stock: Stock) => {
                this.stepsInformation.stockInformation = stock;
                this.subject.next(true);
            }
        })
    }

}
