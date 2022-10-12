import { CharacterListPageComponent } from './pages/character-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: CharacterListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarvelRoutingModule {}
