import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MonoApiService {

  monoUrl: string = 'https://api.monobank.ua';
  constructor(private http: HttpClient) { }

  transferByCurrency() {
    return this.http.get(`${this.monoUrl}/bank/currency`)
  }
  // https://api.monobank.ua/bank/currency
}
