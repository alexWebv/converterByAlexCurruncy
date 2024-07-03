import { Injectable } from '@angular/core';
import cc from "currency-codes";
import {MonoApiService} from "./mono-api.service";
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  monoCurrencyArray: any;
  constructor( private monoService: MonoApiService) {
    // console.log(this.currencyService.getInfoByCode('UAH'))
    // console.log(this.currencyService.getInfoByCode('USD'))
    // console.log(this.currencyService.getInfoByCode('EUR'))

  }

  getInfoByCode(code: string): any {
    return cc.code(code)
  }


  getMonoData() {
    this.monoService.transferByCurrency().subscribe(res => {
      this.monoCurrencyArray = res;
    })
  }
}
