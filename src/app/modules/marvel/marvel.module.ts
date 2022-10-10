// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelRoutingModule } from './marvel-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { CharacterListPageComponent } from './pages/character-list-page.component';
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
import { FileUploadModule } from 'primeng-lts/fileupload';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { ProgressSpinnerModule } from 'primeng-lts/progressspinner';

@NgModule({
  declarations: [CharacterListPageComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    FileUploadModule,
    InputTextareaModule,
    ProgressSpinnerModule
  ],
  providers: [
    DialogService,
    FilterService,
    ConfirmationService,
    MessageService,
  ],
})
export class MarvelModule {}
