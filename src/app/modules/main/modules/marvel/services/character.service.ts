import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterDataWrapper, CharacterModel } from '@core/models/character/character.interface';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private GATEWAY = environment.gateway_marvel;
  private API = environment.api_marvel;
  private CHARACTERS = '/characters';
  private PUBLIC_KEY = environment.public_key_marvel;
  private HASH = environment.hash_marvel;
  private TS = environment.ts_marvel;

  selectedCharacter$ = new Subject<CharacterModel>();
  selectedCharacter!: CharacterModel;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterModel[]> {
    return this.http
      .get<CharacterDataWrapper>(
        this.GATEWAY +
          this.API +
          this.CHARACTERS +
          `?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
      )
      .pipe(
        map(({ data }) => {
          return data.results;
        }),
        shareReplay(1),
        catchError((err) => throwError(err))
      );
  }

  // OBSERVABLES

  /**
   * Observable selected position
   */
  getSelectedCharacter(): Observable<CharacterModel> {
    return this.selectedCharacter$.asObservable();
  }

  /**
   * Set selected position
   */
  setSelectedCharacter(character: CharacterModel): void {
    this.selectedCharacter = character;
    this.selectedCharacter$.next(character);
  }
}
