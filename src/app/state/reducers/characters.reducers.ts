import { CharacterModel } from '@core/models/character/character.interface';
import { CharacterState } from '@core/models/character/character.state';
import { Action, createReducer, on } from '@ngrx/store';
import {
  saveCharacter,
  deleteCharacter,
  loadCharacters,
  loadedCharacters,
  resetCharacters,
} from '../actions/characters.actions';

export const INITIAL_STATE: CharacterState = {
  loading: false,
  characters: [],
};

export const charactersReducer = createReducer(
  INITIAL_STATE,
  on(loadCharacters, (state) => {
    return { ...state, loading: true };
  }),

  on(loadedCharacters, (state, { characters }) => {
    return { ...state, loading: false, characters };
  }),

  on(saveCharacter, (state, { character }) => {
    const newState: CharacterState = { ...state };
    const newCharacters: CharacterModel[] = [...newState.characters];
    const foundIndex = newCharacters.findIndex((x) => x.id == character.id);

    newCharacters.splice(foundIndex, 1, character);
    newState.characters = [...newCharacters];
    return newState;
  }),

  on(resetCharacters, (state) => {
    return {
      ...state,
      ...INITIAL_STATE,
    };
  }),

  on(deleteCharacter, (state, { id }) => {
    let newState = { ...state };
    newState.characters = newState.characters.filter((ch) => ch.id !== id);
    return newState;
  })
);

export function CharactersReducer(state: CharacterState, action: Action) {
  return charactersReducer(state, action);
}
