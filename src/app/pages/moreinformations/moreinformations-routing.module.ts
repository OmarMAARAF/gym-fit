import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreinformationsPage } from './moreinformations.page';

const routes: Routes = [
  {
    path: '',
    component: MoreinformationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreinformationsPageRoutingModule {}
