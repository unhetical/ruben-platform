import { CountryModel } from '@core/models/country/country.interface';
import { CountriesState } from '@core/models/country/country.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCountriesFeature = (state: AppState) => state.countries;

export const selectListCountries = createSelector(
  selectCountriesFeature,
  (state: CountriesState) => state.countries
);

export const selectLoading = createSelector(
  selectCountriesFeature,
  (state: CountriesState) => state.loading
);

export const selectFilterQuery = createSelector(
  selectCountriesFeature,
  (state: CountriesState) => state.filterQuery
);

export const selectFilterRegion = createSelector(
  selectCountriesFeature,
  (state: CountriesState) => state.filterRegion
);

export const selectData = createSelector(
  selectListCountries,
  selectFilterQuery,
  selectFilterRegion,
  (data, filterQuery, filterRegion) => {
    let filteredData: CountryModel[] = [];

    // Filter by region selector
    if (filterRegion) {
      const args = filterRegion.toLowerCase();

      data.forEach((country: CountryModel) => {
        if (country.region?.toLowerCase() === args) {
          filteredData.push(country);
        }
      });
    } else {
      filteredData = [...data];
    }

    // Filter by search input
    if (filterQuery && filterQuery !== '') {
      const args = filterQuery.toLowerCase();

      filteredData = filteredData.filter((item: any) => {
        return JSON.stringify(item).toLowerCase().includes(args);
      });
    }
    return filteredData;
  }
);
