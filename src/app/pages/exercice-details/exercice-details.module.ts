import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciceDetailsPageRoutingModule } from './exercice-details-routing.module';

import { ExerciceDetailsPage } from './exercice-details.page';
import { CircleTimerModule } from '@flxng/circle-timer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciceDetailsPageRoutingModule,
    CircleTimerModule,
  ],
  declarations: [ExerciceDetailsPage]
})
export class ExerciceDetailsPageModule {}
