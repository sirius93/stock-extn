import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  constructor() { }
  stockName = history.state.stockName;
  stockPrice = history.state.stockPrice;

  ngOnInit(): void {
    console.log("stockName", this.stockName, "stockPrice", this.stockPrice);
  }
}
