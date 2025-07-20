import { Component } from '@angular/core';
import { StockService } from '../../stock.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stock-viewer',
  templateUrl: './stock-viewer.html',
  imports: [FormsModule, CommonModule]
})
export class StockViewerComponent {
  symbol: string = 'AAPL';
  stock: any;

  constructor(private stockService: StockService) {}

  fetchStock() {
    this.stockService.getStock(this.symbol).subscribe((data: any) => this.stock = data);
    console.log(this.stock);
  }

  ngOnInit() {
    this.fetchStock();
  }
}
