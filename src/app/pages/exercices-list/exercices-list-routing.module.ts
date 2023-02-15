import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercicesListPage } from './exercices-list.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicesListPageRoutingModule {}
