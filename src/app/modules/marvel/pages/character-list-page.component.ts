import { ConfirmationService } from 'primeng-lts/api';
import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '@core/models/character/character.interface';
import { Store } from '@ngrx/store';
import { DialogService } from 'primeng-lts/dynamicdialog';
import { Observable } from 'rxjs';
import {
  addCharacter,
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
   * Open a dynamic dialog
   */
  editCharacter(rowData: CharacterModel): void {
    this.characterService.setSelectedCharacter(rowData);

    const ref = this.dialogService.open(CharacterDetailComponent, {
      header: 'Edit Character',
      width: '60%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      dismissableMask: true,
    });
    ref.onClose.subscribe(() => {
      // this.characters$ = this.store.select(selectData);
    });
  }

  /**
   * Open a dynamic dialog
   */
  addCharacter(): void {
    const ref = this.dialogService.open(CharacterDetailComponent, {
      header: 'New Character',
      width: '60%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      dismissableMask: true,
    });
    ref.onClose.subscribe((newCharacter: CharacterModel) => {
      this.store.dispatch(addCharacter({ character: newCharacter }));
    });
  }

  removeCharacter(event: Event, rowData: CharacterModel) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.store.dispatch(deleteCharacter({ id: rowData.id }));
      },
    });
  }

  handleFilter(event: any, characterTable: Table) {
    characterTable.filterGlobal(event.target.value, 'contains');
  }
}
