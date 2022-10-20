import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseCRUDComponent } from './firebase-crud.component';

const routes: Routes = [{ path: '', component: FirebaseCRUDComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirebaseCRUDRoutingModule { }
