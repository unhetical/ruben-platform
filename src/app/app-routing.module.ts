import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'countries',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/countries/countries.module').then(
        (m) => m.CountriesModule
      ),
  },
  {
    path: 'marvel',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/marvel/marvel.module').then((m) => m.MarvelModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
