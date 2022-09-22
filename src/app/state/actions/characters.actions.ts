import { CharacterModel } from '@core/models/character/character.interface';
import { createAction, props } from '@ngrx/store';

export const loadCharacters = createAction(
  '[Marvel Character List] Load Characters'
);

export const loadedCharacters = createAction(
  '[Marvel Character List] Loaded success',
  props<{ characters: CharacterModel[] }>()
);

export const saveCharacter = createAction(
  '[Marvel Character List] Save Character',
  props<{ character: CharacterModel }>()
);

export const resetCharacters = createAction(
  '[Marvel Character List] Reset Characters'
);

export const deleteCharacter = createAction(
  '[Marvel Character List] Delete Character by id',
  props<{ id: number }>()
);
