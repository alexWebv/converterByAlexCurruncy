import { Component } from '@angular/core';
import {getAllInfoByISO, getAllISOCodes} from "iso-country-currency";
import cc from "currency-codes";
import {CurrencyService} from "./services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'converterByAlex';

  constructor(private currencyService: CurrencyService) {
    // const array = getAllInfoByISO('UA');
    // console.log(array);
    // console.log(cc.code('UAH'));
    this.currencyService.getMonoData();
  }
}
