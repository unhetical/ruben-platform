import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './countries-routing.module';
// Components
import { UiSearchComponent } from './components/ui-search/ui-search.component';
import { UiItemComponent } from './components/ui-item/ui-item.component';
import { UiBlockItemComponent } from './components/ui-block-item/ui-block-item.component';
import { CountryDetailPageComponent } from './pages/country-detail-page/country-detail-page.component';
import { CountryListPageComponent } from './pages/country-list-page/country-list-page.component';
// Prime
import { ButtonModule } from 'primeng-lts/button';
import { InputTextModule } from 'primeng-lts/inputtext';
import { DropdownModule } from 'primeng-lts/dropdown';
import { ProgressSpinnerModule } from 'primeng-lts/progressspinner';
import {VirtualScrollerModule} from 'primeng-lts/virtualscroller';


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
    FormsModule,
    ReactiveFormsModule,
    CountriesRoutingModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ProgressSpinnerModule,
    VirtualScrollerModule
  ],
})
export class CountriesModule {}
