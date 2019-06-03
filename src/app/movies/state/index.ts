import {createFeatureSelector, createSelector, ActionReducerMap} from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromMovies from './movie.reducer';

export interface State extends fromRoot.State {
    movie: fromMovies.MovieState;
}

// Selectors
const getMovieFeatureState = createFeatureSelector<fromMovies.MovieState>('movies');

export const getMuteTrailer = createSelector(
    getMovieFeatureState,
    state => state.muteTrailer
)

export const getCurrentMovie = createSelector(
    getMovieFeatureState,
    state => state.currentMovie
);

export const getMovies = createSelector(
    getMovieFeatureState,
    state => state.movies
);

export const getError = createSelector(
    getMovieFeatureState,
    state => state.error
);

export const getMovieByKey = createSelector(
    getMovieFeatureState,
    (state) => state.currentMovie
);