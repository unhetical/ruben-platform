import { CharacterState } from '@core/models/character/character.state';
import { Action, createReducer, on } from '@ngrx/store';
import {
  addCharacter,
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

  on(addCharacter, (state, { character }) => {
    return { ...state, character };
  }),

  on(resetCharacters, (state) => {
    return {
      ...state,
      ...INITIAL_STATE,
    };
  }),

  on(deleteCharacter, (state, { id }) => {
   let newState = {...state};
   newState.characters = newState.characters.filter((ch) => ch.id !== id);
   console.log(newState);
    return newState;
  })
);

export function CharactersReducer(state: CharacterState, action: Action) {
  return charactersReducer(state, action);
}
