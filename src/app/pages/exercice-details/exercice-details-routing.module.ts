import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciceDetailsPage } from './exercice-details.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciceDetailsPageRoutingModule {}
