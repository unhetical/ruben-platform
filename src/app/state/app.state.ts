import { CountriesState } from '@core/models/country/country.state';
import { CharacterState } from '@core/models/character/character.state';
import { ActionReducerMap } from '@ngrx/store';
import { countriesReducer } from './reducers/countries.reducers';
import { charactersReducer } from './reducers/characters.reducers';

export interface AppState {
  countries: CountriesState;
  characters: CharacterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  countries: countriesReducer,
  characters: charactersReducer,
};
