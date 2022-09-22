import { ConfirmationService, MessageService } from 'primeng-lts/api';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '@core/models/character/character.interface';
import { Store } from '@ngrx/store';
import { DialogService } from 'primeng-lts/dynamicdialog';
import { Observable } from 'rxjs';
import {
  saveCharacter,
  deleteCharacter,
  loadCharacters,
  resetCharacters,
} from 'src/app/state/actions/characters.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectData,
  selectLoading,
} from 'src/app/state/selectors/characters.selectors';
import { CharacterDetailComponent } from '../components/character-detail/character-detail.component';
import { Table } from 'primeng-lts/table';

@Component({
  selector: 'app-character-list-page',
  templateUrl: './character-list-page.component.html',
  styleUrls: ['./character-list-page.component.scss'],
})
export class CharacterListPageComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  characters$: Observable<CharacterModel[]> = new Observable();
  characters: CharacterModel[] = [];

  cols = [
    { field: 'id', header: 'id' },
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
  ];

  constructor(
    private store: Store<AppState>,
    private characterService: CharacterService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCharacters());
    this.loading$ = this.store.select(selectLoading);
    this.characters$ = this.store.select(selectData);
    this.getCharacters();
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetCharacters());
  }

  getCharacters() {
    this.characters$.subscribe((res) => {
      this.characters = [...res];
    });
  }

  /**
   * Open a dynamic dialog (view mode)
   * @param rowData CharacterModel
   */
  viewCharacter(rowData: CharacterModel): void {
    this.characterService.setSelectedCharacter(rowData);

    const ref = this.dialogService.open(CharacterDetailComponent, {
      header: rowData.name,
      width: '60%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      dismissableMask: true,
      data: rowData,
    });
  }

  /**
   * Open a dynamic dialog (edit mode)
   * @param rowData CharacterModel
   */
  editCharacter(rowData: CharacterModel): void {
    this.characterService.setSelectedCharacter(rowData);

    const ref = this.dialogService.open(CharacterDetailComponent, {
      header: 'Edit Character',
      width: '60%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      dismissableMask: true,
      data: rowData,
    });
    ref.onClose.subscribe((character: CharacterModel) => {
      if (character) {
        this.store.dispatch(saveCharacter({ character }));
        this.displayMessage(
          'success',
          'The character has been edited successfully'
        );
      }
    });
  }

  /**
   * Open a dynamic dialog (add mode)
   */
  addCharacter(): void {
    const ref = this.dialogService.open(CharacterDetailComponent, {
      header: 'New Character',
      width: '60%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      dismissableMask: true,
    });

    ref.onClose.subscribe((newCharacter: CharacterModel) => {
      if (newCharacter) {
        this.store.dispatch(saveCharacter({ character: newCharacter }));
        this.displayMessage(
          'success',
          'The character has been added successfully'
        );
      }
    });
  }

  /**
   * Delete the selected character by id
   * @param event Event
   * @param rowData CharacterModel
   */
  removeCharacter(event: Event, rowData: CharacterModel) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Are you sure you want to delete this character?',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.store.dispatch(deleteCharacter({ id: rowData.id }));
        this.displayMessage(
          'success',
          'The character has been removed succesfully'
        );
      },
    });
  }

  /**
   * Set search input query on table filter
   * @param event Event
   * @param characterTable Prime Table
   */
  handleFilter(event: any, characterTable: Table) {
    characterTable.filterGlobal(event.target.value, 'contains');
  }

  /**
   * Show toast message
   * @param severity "success", "info", "warn" or "error".
   * @param summary string message.
   */
  displayMessage(severity: string, summary: string): void {
    this.messageService.add({
      severity,
      summary,
    });
  }
}
