import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailPageComponent } from './page/country-detail-page/country-detail-page.component';
import { CountryListPageComponent } from './page/country-list-page/country-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: CountryListPageComponent,
  },
  {
    path: ':name',
    component: CountryDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
