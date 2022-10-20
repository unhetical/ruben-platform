import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseCRUDRoutingModule } from './firebase-crud-routing.module';
import { FirebaseCRUDComponent } from './firebase-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';


@NgModule({
  declarations: [
    FirebaseCRUDComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FirebaseCRUDRoutingModule,
    ButtonModule
  ]
})
export class FirebaseCRUDModule { }
