// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FleetRoutingModule } from './fleet-routing.module';
import { SharedModule } from '@shared/shared.module';
// Components
import { FleetComponent } from './pages/fleet.component';
import { VehiclesTableComponent } from './pages/vehicles-table/vehicles-table.component';
import { DriversTableComponent } from './pages/drivers-table/drivers-table.component';
import { DriversDetailDialogComponent } from './pages/drivers-table/pages/drivers-detail-dialog/drivers-detail-dialog.component';
import { VehiclesDetailDialogComponent } from './pages/vehicles-table/pages/vehicles-detail-dialog/vehicles-detail-dialog.component';
import { VehiclesFormDialogComponent } from './pages/vehicles-table/pages/vehicles-form-dialog/vehicles-form-dialog.component';
import { DriversFormDialogComponent } from './pages/drivers-table/pages/drivers-form-dialog/drivers-form-dialog.component';
// Prime
import {
  ConfirmationService,
  FilterService,
  MessageService,
} from 'primeng-lts/api';
import { DialogService } from 'primeng-lts/dynamicdialog';
import { CheckboxModule } from 'primeng-lts/checkbox';
import { DropdownModule } from 'primeng-lts/dropdown';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { InputSwitchModule } from 'primeng-lts/inputswitch';
import { CalendarModule } from 'primeng-lts/calendar';
import { MultiSelectModule } from 'primeng-lts/multiselect';
import { ToastModule } from 'primeng-lts/toast';
import { MessagesModule } from 'primeng-lts/messages';
import { MessageModule } from 'primeng-lts/message';
import { TooltipModule } from 'primeng-lts/tooltip';
import { DialogModule } from 'primeng-lts/dialog';
import { TableModule } from 'primeng-lts/table';
import { TimelineModule } from 'primeng-lts/timeline';
import { TreeTableModule } from 'primeng-lts/treetable';
import { ConfirmPopupModule } from 'primeng-lts/confirmpopup';

@NgModule({
  declarations: [
    FleetComponent,
    VehiclesTableComponent,
    DriversTableComponent,
    DriversDetailDialogComponent,
    VehiclesDetailDialogComponent,
    VehiclesFormDialogComponent,
    DriversFormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    FleetRoutingModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    CheckboxModule,
    DropdownModule,
    InputTextareaModule,
    InputSwitchModule,
    CalendarModule,
    MultiSelectModule,
    TooltipModule,
    DialogModule,
    TableModule,
    TimelineModule,
    TreeTableModule,
    ConfirmPopupModule,
  ],
  providers: [
    MessageService,
    FilterService,
    ConfirmationService,
    DialogService,
  ],
})
export class FleetModule {}
