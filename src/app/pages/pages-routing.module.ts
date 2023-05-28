import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { MoviesComponent } from './movies/movies.component';
import { CompraComponent } from './compra/compra.component';
import { PagoComponent } from './pago/pago.component';

const routes: Routes = [
  {
    path:'dashboard', component:DashboardComponent,
    children:[
      { path: '', component: DashboardComponent },
      {path:'categories', component:CategoriesComponent},
      {path:'movies', component:MoviesComponent},
      {path:'compra', component:CompraComponent},
      {path:'pago', component:PagoComponent},
      { path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
