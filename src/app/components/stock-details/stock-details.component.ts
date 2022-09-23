import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Stock } from 'src/app/api/models';
import { StockControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
  stockQuantity!: Stock | number;
  stockPrice!: Stock | number;
  stockProperties!: Number;
  constructor(
    private _stockService: StockControllerService,
    private _config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this._stockService.editStockUsingGET(this._config.data.pzn).subscribe({
      next: (resp) => {
        console.log(resp)
        this.stockQuantity = resp[0].quantity
        this.stockPrice = resp[0].price
        }
      
    })
  }

}
