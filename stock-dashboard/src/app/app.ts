import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockViewerComponent } from './stock-viewer/stock-viewer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StockViewerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stock-dashboard');
}
