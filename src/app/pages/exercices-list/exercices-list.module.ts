import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicesListPageRoutingModule } from './exercices-list-routing.module';

import { ExercicesListPage } from './exercices-list.page';
import {ExerciceItemComponent} from "./exercice-item/exercice-item.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicesListPageRoutingModule,
    
  ],
  declarations: [ExercicesListPage,ExerciceItemComponent]
})
export class ExercicesListPageModule {}
