import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreinformationsPageRoutingModule } from './moreinformations-routing.module';

import { MoreinformationsPage } from './moreinformations.page';

import {Database } from '@angular/fire/database'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreinformationsPageRoutingModule

  ],
  declarations: [MoreinformationsPage]
})
export class MoreinformationsPageModule {}
