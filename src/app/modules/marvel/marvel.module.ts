import { CharacterListPageComponent } from './pages/character-list-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
// Components
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
// Prime
import { TableModule } from 'primeng-lts/table';
import { DialogModule } from 'primeng-lts/dialog';
import { DialogService, DynamicDialogModule } from 'primeng-lts/dynamicdialog';
import { ConfirmationService, FilterService } from 'primeng-lts/api';
import {ConfirmPopupModule} from 'primeng-lts/confirmpopup';
import { ButtonModule } from 'primeng-lts/button';

@NgModule({
  declarations: [CharacterListPageComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
    ButtonModule,
    ConfirmPopupModule
  ],
  providers: [DialogService, FilterService, ConfirmationService],
})
export class MarvelModule {}
