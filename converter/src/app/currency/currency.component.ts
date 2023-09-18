import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";
import {CurrencyRespons} from "./interfaces/CurrencyRespons";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit{

  constructor(private currencyService: CurrencyService) {
  }

  currencyRespons?: CurrencyRespons;
  amountToConvert: number = 1;
  fromCurrency:string = 'USD';
  toCurrency: string = '';
  convertAmount: number = 0;

  ngOnInit(): void {
    this.getCurrency();
  }

  onSubmit() {
    if (!this.currencyRespons) {
      return console.error('Currency data not available.');
    }

    const rate = this.currencyRespons.rates[this.toCurrency];

    if (rate) {
      this.convertAmount = this.amountToConvert * rate;
    } else {
      console.error(`Exchange rate for ${this.toCurrency} not found.`)
    }
  }

  private getCurrency() {
    this.currencyService.getCurrencyData().subscribe({
      next: (response: CurrencyRespons) => this.currencyRespons = response,
      error: (errorResponse: any) =>
        console.error(`error fetching currency`, errorResponse.error)
    });
  }

}
