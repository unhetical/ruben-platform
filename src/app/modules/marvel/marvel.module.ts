import { CharacterListPageComponent } from './pages/character-list-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { SharedModule } from '@shared/shared.module';
// Components
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
// Prime
import { TableModule } from 'primeng-lts/table';
import { DialogModule } from 'primeng-lts/dialog';
import { DialogService, DynamicDialogModule } from 'primeng-lts/dynamicdialog';
import {
  ConfirmationService,
  FilterService,
  MessageService,
} from 'primeng-lts/api';
import { ConfirmPopupModule } from 'primeng-lts/confirmpopup';
import { ButtonModule } from 'primeng-lts/button';
import { MessagesModule } from 'primeng-lts/messages';
import { ToastModule } from 'primeng-lts/toast';
import { ScrollPanelModule } from 'primeng-lts/scrollpanel';
import { TooltipModule } from 'primeng-lts/tooltip';

@NgModule({
  declarations: [CharacterListPageComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    MarvelRoutingModule,
    TableModule,
    DialogModule,
    DynamicDialogModule,
    ButtonModule,
    ConfirmPopupModule,
    MessagesModule,
    ToastModule,
    ScrollPanelModule,
    TooltipModule,
  ],
  providers: [
    DialogService,
    FilterService,
    ConfirmationService,
    MessageService,
  ],
})
export class MarvelModule {}
