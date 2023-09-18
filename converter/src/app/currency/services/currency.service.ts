import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyRespons} from "../interfaces/CurrencyRespons";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCurrencyData(): Observable<CurrencyRespons> {

    const url: string =
      `https://openexchangerates.org/api/latest.json?app_id=${this.apiKey}`;

    return this.http.get<CurrencyRespons>(url);

  }

}
