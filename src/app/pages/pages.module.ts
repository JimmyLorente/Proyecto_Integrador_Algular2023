import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { CompraComponent } from './compra/compra.component';
import { PagoComponent } from './pago/pago.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PagesComponent,
    MoviesComponent,
    DashboardComponent,
    CategoriesComponent,
    CompraComponent,
    PagoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    DashboardComponent,
    MoviesComponent,
    CategoriesComponent,
  ]
})
export class PagesModule { }
