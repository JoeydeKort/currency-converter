import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyRespons} from "../interfaces/CurrencyRespons";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencyData(): Observable<CurrencyRespons> {

    const url: string = `https://openexchangerates.org/api/latest.json?app_id=4a58bf2656914e158d07e9f2af9cf800`;

    return this.http.get<CurrencyRespons>(url);

  }

}
