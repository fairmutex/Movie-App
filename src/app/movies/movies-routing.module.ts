
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListShellComponent } from './containers/movie-list/movie-list-shell.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common';
import { MovieShellComponent } from './containers/movie-shell/movie-shell.component';
import { MovieDetailsShellComponent } from './containers/movie-detail/movie-details-shell.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [

      {
        path: '',
        component: MovieShellComponent,
        children: [
            { path: '', component: MovieListShellComponent },
            { path: 'details/:key', component: MovieDetailsShellComponent },
            { path: ':action/:value', component: MovieListShellComponent }
        ]
      }
  
  ];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedModule
    ],
    exports: [RouterModule],
    declarations: [
      MovieShellComponent,
      MovieListShellComponent,
      MovieListComponent,
      MovieDetailsShellComponent,
      MovieDetailComponent
    ]
  })
  export class MoviesRoutingModule { }