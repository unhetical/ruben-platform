import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { UiSearchComponent } from './components/ui-search/ui-search.component';
import { CountryListPageComponent } from './page/country-list-page/country-list-page.component';
import { UiItemComponent } from './components/ui-item/ui-item.component';
import { UiBlockItemComponent } from './components/ui-block-item/ui-block-item.component';
import { FormsModule } from '@angular/forms';
import { CountryDetailPageComponent } from './page/country-detail-page/country-detail-page.component';
import { ButtonModule } from 'primeng-lts/button';
import { InputTextModule } from 'primeng-lts/inputtext';
import { DropdownModule } from 'primeng-lts/dropdown';
import {ProgressSpinnerModule} from 'primeng-lts/progressspinner';

@NgModule({
  declarations: [
    UiSearchComponent,
    UiBlockItemComponent,
    UiItemComponent,
    CountryListPageComponent,
    CountryDetailPageComponent,
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ProgressSpinnerModule
  ],
})
export class CountriesModule {}
