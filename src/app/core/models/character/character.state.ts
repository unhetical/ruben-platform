import { CharacterModel } from './character.interface';

export interface CharacterState {
  loading: boolean;
  characters: CharacterModel[];
}
