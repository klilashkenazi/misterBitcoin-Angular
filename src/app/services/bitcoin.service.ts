import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { catchError, retry, tap, map, take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) {

   }

  public getRate():Observable<number>{
    return this.http.get<number >('https://blockchain.info/tobtc?currency=USD&value=1')
    .pipe(
        map(res => res),
        retry(1),
        catchError((err: HttpErrorResponse) => {
            console.log('err:', err)
            return throwError(() => err)
        })
    )
  }

  public getMarketPrice(){

  }

  public getConfirmedTransactions(){
    
  }
}
