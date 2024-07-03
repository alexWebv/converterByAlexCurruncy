import {Component, OnInit} from '@angular/core';
import {texts} from "../../constants/texts";
import {CurrencyService} from "../../services/currency.service";
import {MonoApiService} from "../../services/mono-api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  protected readonly texts = texts;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    console.log(this.currencyService.monoCurrencyArray);
  }
}
