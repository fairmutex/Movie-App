import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './state/movie.effects';
import { reducer } from './state/movie.reducer';
import { MoviesRoutingModule } from './movies-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('movies', reducer),
    EffectsModule.forFeature([MovieEffects]),
    MoviesRoutingModule,
  ]
})
export class MoviesModule { }
