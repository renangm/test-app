import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tabs2DetailsPage } from './tabs2-details.page';

const routes: Routes = [
  {
    path: '',
    component: Tabs2DetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tabs2DetailsPage]
})
export class Tabs2DetailsPageModule {}
