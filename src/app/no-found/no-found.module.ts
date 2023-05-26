import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoFoundRoutingModule } from './no-found-routing.module';
import { NoFoundComponent } from './no-found.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    NoFoundComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    NoFoundRoutingModule
  ]
})
export class NoFoundModule { }
