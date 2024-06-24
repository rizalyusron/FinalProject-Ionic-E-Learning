import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonDetailsPageRoutingModule } from './lesson-details-routing.module';

import { LessonDetailsPage } from './lesson-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonDetailsPageRoutingModule
  ],
  declarations: [LessonDetailsPage]
})
export class LessonDetailsPageModule {}
