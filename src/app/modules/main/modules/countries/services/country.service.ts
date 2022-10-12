import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryModel } from '@core/models/country/country.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private GATEWAY = environment.gateway_restcountries;
  private API = environment.api_restcountries;
  private ALL = 'all';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryModel[]> {
    return this.http
      .get<CountryModel[]>(this.GATEWAY + this.API + this.ALL)
      .pipe(catchError((err) => throwError(err)));
  }
}
