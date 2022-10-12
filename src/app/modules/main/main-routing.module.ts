import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        ...canActivate(() => redirectUnauthorizedTo(['login'])),
        loadChildren: () =>
          import('@modules/main/modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'countries',
        ...canActivate(() => redirectUnauthorizedTo(['login'])),
        loadChildren: () =>
          import('@modules/main/modules/countries/countries.module').then(
            (m) => m.CountriesModule
          ),
      },
      {
        path: 'marvel',
        ...canActivate(() => redirectUnauthorizedTo(['login'])),
        loadChildren: () =>
          import('@modules/main/modules/marvel/marvel.module').then(
            (m) => m.MarvelModule
          ),
      },
      {
        path: 'fleet',
        ...canActivate(() => redirectUnauthorizedTo(['login'])),
        loadChildren: () =>
          import('@modules/main/modules/fleet/fleet.module').then(
            (m) => m.FleetModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
