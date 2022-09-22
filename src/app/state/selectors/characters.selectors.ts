import { CharacterState } from '@core/models/character/character.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCharactersFeature = (state: AppState) => state.characters;

export const selectData = createSelector(
  selectCharactersFeature,
  (state: CharacterState) => state.characters
);

export const selectLoading = createSelector(
  selectCharactersFeature,
  (state: CharacterState) => state.loading
);
