import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyRespons} from "../interfaces/CurrencyRespons";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencyData(): Observable<CurrencyRespons> {

    const apiKey = environment.apiKey;

    const url: string =
      `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

    return this.http.get<CurrencyRespons>(url);

  }

}
