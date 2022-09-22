import { CountryModel } from "./country.interface";

export interface CountriesState {
    loading: boolean,
    countries: ReadonlyArray<CountryModel>;
    filterQuery: string;
    filterRegion: string;
}
