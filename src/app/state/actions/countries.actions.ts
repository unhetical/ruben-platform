import { CountryModel } from '@core/models/country/country.interface';
import { createAction, props } from '@ngrx/store';

export const loadCountries = createAction('[Country List] Load countries');

export const loadedCountries = createAction(
  '[Country List] Loaded success',
  props<{ countries: CountryModel[] }>()
);

export const resetCountries = createAction('[Country List] Reset countries');

export const setFilterBy = createAction(
  '[Country List] Set filter by properties and query',
  props<{ filters: { filterRegion: string; filterQuery: string } }>()
);
