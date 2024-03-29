import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { StockDetailObject } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  stockDetails$ = new Subject<StockDetailObject>();
  constructor() {}

  getStockDetails(): Observable<StockDetailObject> {
    return this.stockDetails$.asObservable();
  }
  setStockDetails(data: StockDetailObject): any {
    this.stockDetails$.next(data); 
    console.log("setStockDetails", this.stockDetails$); 
    return data;
  }
}
