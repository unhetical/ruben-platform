import { resetCountries } from 'src/app/state/actions/countries.actions';
import {
  loadCountries,
  loadedCountries,
  setFilterBy,
} from '../actions/countries.actions';
import { CountriesState } from '@core/models/country/country.state';
import { Action, createReducer, on } from '@ngrx/store';

export const INITIAL_FILTER_KEY = { filterKey: '', query: '' };
export const INITIAL_STATE: CountriesState = {
  loading: false,
  countries: [],
  filterQuery: '',
  filterRegion: '',
};

export const countriesReducer = createReducer(
  INITIAL_STATE,
  on(loadCountries, (state) => {
    return { ...state, loading: true };
  }),

  on(loadedCountries, (state, { countries }) => {
    return { ...state, loading: false, countries };
  }),

  on(resetCountries, (state) => {
    return {
      ...state,
      ...INITIAL_STATE,
    };
  }),

  on(setFilterBy, (state, { filters }) => {
    return {
      ...state,
      filterQuery: filters.filterQuery,
      filterRegion: filters.filterRegion,
    };
  })
);

export function CountriesReducer(state: CountriesState, action: Action) {
  return countriesReducer(state, action);
}
