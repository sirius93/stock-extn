import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet,RouterLink,RouterLinkActive,RouterModule, Route } from '@angular/router';
import { StockDataService } from './stock-data.service';
import { delay,Observable, of  } from 'rxjs';
import { routes } from './app.routes';

export interface StockDetailObject {
  stockName: string;
  stockPrice: number;
}
declare let chrome: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, RouterLink, RouterLinkActive,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'Stock-Extn';
  stockDetails : StockDetailObject | undefined;

  constructor(public stockDataService: StockDataService) {
  }
  ngOnInit(): void {
    this.readDOMElements();
    
    this.stockDataService
    .getStockDetails()
    .pipe(delay(0))
    .subscribe((value:StockDetailObject) => {
      this.stockDetails = Object.assign({}, value);
      console.log("stockDetails$", this.stockDetails);
    });
  }
  
  readDOMElements(): void {
    let that = this;
    console.log("read dom elements"); 
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: { id: any; }[]) => {{
      chrome.tabs.sendMessage(tabs[0].id, {msg: "getStockDetails"}, function(response:StockDetailObject) {
        that.stockDataService.setStockDetails(response);
      });
    }});
  }

  closePopUp() {
    console.log("close popup");
    window.close();
  }
}
