import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './Component/movies/movies.component';
import {CinemasComponent} from './Component/cinemas/cinemas.component';
import {MovieDetailsComponent} from "./Component/movies/movie-details/movie-details.component";
import {AddMovieComponent} from "./Component/movies/add-movie/add-movie.component";
import {CinemaFormComponent} from "./Component/cinemas/cinema-form/cinema-form.component";
import { ContacComponent } from './Component/contac/contac.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/cinemas', pathMatch: 'full',
    
  },
//  {
//   // path: '', redirectTo: '/cinemas', component: ContacComponent,
//  },
  {
    path: 'movies',
    children: [
      {path: '', component: MoviesComponent},
      {path: 'add', component: AddMovieComponent},
      {path: 'details/:id', component: MovieDetailsComponent},
      {path: 'modify/:id', component: AddMovieComponent}
    ]
  },
  {
    path: 'cinemas',
    children: [
      {path: '', component: CinemasComponent},
      {path: 'add', component: CinemaFormComponent},
    ]
  },
  {
    path: 'contac',
    component: ContacComponent
  },
  
  {
    path: '**', redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
