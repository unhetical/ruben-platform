import { ConfirmationService, MessageService } from 'primeng-lts/api';
import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '@core/models/character/character.interface';
import { Store } from '@ngrx/store';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng-lts/dynamicdialog';
import { Observable } from 'rxjs';
import {
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
  characters!: CharacterModel[];

  cols = [
    { field: 'id', header: 'id' },
    { field: 'avatar', header: 'Avatar' },
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
  ];

  constructor(
    private store: Store<AppState>,
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

  openDetailModal(mode: string, character?: CharacterModel) {
    let ref: DynamicDialogRef;
    const config: DynamicDialogConfig = {
      header: character?.name,
      width: '60%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      dismissableMask: true,
      data: { character, mode },
    };

    switch (mode) {
      case 'view':
        ref = this.dialogService.open(CharacterDetailComponent, config);
        break;
      case 'edit':
        config.header = 'Edit Character';
        config.data = { character, mode };
        ref = this.dialogService.open(CharacterDetailComponent, config);
        break;
      case 'add':
        const newCharacter = {
          id: 0,
          name: '',
          description: '',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          },
        };

        config.header = 'New Character';
        config.data = { character: newCharacter, mode };
        ref = this.dialogService.open(CharacterDetailComponent, config);
        break;

      default:
        break;
    }
  }

  /**
   * Delete the selected character by id
   * @param event Event
   * @param character CharacterModel
   */
  removeCharacter(event: Event, character: CharacterModel) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Are you sure you want to delete this character?',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.store.dispatch(deleteCharacter({ id: character.id }));
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
