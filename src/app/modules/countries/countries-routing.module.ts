import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { CountryDetailPageComponent } from './page/country-detail-page/country-detail-page.component';
import { CountryListPageComponent } from './page/country-list-page/country-list-page.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: CountryListPageComponent,
  },
  {
    path: ':name',
    canActivateChild: [AuthGuard],
    component: CountryDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
