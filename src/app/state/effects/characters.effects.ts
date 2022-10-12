import { CharacterService } from '@modules/main/modules/marvel/services/character.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class CharactersEffects {
  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Marvel Character List] Load Characters'),
      mergeMap(() =>
        this.characterService.getCharacters().pipe(
          map((characters) => ({
            type: '[Marvel Character List] Loaded success',
            characters,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // TODO: call the api to add the new character
  // saveCharacter$ = createEffect(() =>
  //   this.actions$.pipe()
  // );

  // TODO: call the api to delete the character by id
  // deleteCharacter$ = createEffect(() =>
  //   this.actions$.pipe()
  // );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
