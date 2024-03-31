import { Component, Input, OnChanges, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit, OnChanges {
  constructor() { }
  @Input() stockName: string = '';
  @Input() stockPrice: number = 0;

  ngOnInit(): void {
    console.log("stockName", this.stockName, "stockPrice", this.stockPrice);
    this.stockName = history.state.stockName || 'Test Stock';
    this.stockPrice = history.state.stockPrice || 0;
  }
  ngOnChanges(): void {
    console.log("stockName", this.stockName, "stockPrice", this.stockPrice);
    this.stockName = history.state.stockName || 'Test Stock';
    this.stockPrice = history.state.stockPrice || 0;
  }
}
