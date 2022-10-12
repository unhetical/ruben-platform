import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    ...canActivate(() => redirectUnauthorizedTo(['login'])),
    loadChildren: () =>
      import('@modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'login',
    ...canActivate(() => redirectLoggedInTo(['main/home'])),
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
