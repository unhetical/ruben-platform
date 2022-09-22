import { CharacterDataWrapper } from './../../../core/models/character/character.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterModel } from '@core/models/character/character.interface';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private GATEWAY = environment.gateway_marvel;
  private API = environment.api_marvel;
  private CHARACTERS = '/characters';

  selectedCharacter$ = new Subject<CharacterModel>();
  selectedCharacter!: CharacterModel;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterModel[]> {
    return this.http
      .get<CharacterDataWrapper>(
        this.GATEWAY +
          this.API +
          this.CHARACTERS +
          '?ts=1000&apikey=996218503ccf0f1e9f4e3aeccfafe930&hash=3a08067921232e2d6d156d8e3376bb0b'
      )
      .pipe(
        map(({ data }) => {
          return data.results;
        }),
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
