import { CountryService } from '@modules/countries/services/country.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class CountriesEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Country List] Load countries'),
      mergeMap(() =>
        this.countryService.getCountries().pipe(
          map((countries) => ({
            type: '[Country List] Loaded success',
            countries,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) {}
}
