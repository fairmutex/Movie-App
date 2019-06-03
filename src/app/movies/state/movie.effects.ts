import { Injectable } from "@angular/core";
import { MovieService } from "../movie.service";
import * as movieActions from './movie.actions';
import { Movie } from '../movie.model';
import { of } from 'rxjs';
import * as fromRouter from '../../router-state';
import * as fromRoot from '../../state/app.state';


import { mergeMap, map, catchError, withLatestFrom} from "rxjs/operators";
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';


@Injectable()
export class MovieEffects {
    constructor(
        private store:Store<fromRoot.State>,
        private actions$: Actions,
        private movieService: MovieService){
    }

    @Effect()
    loadMovies$ = this.actions$.pipe(
        ofType(movieActions.MovieActionTypes.Load),
        withLatestFrom(
            this.store.select(fromRouter.getRoute),
            (action, payload) => {
                 return {
                     action :action,
                     payload: payload['router'].state.params
                 }
            }
        ),
        mergeMap((newPayload: { action: movieActions.Load, payload }) => this.movieService.getMovies(newPayload.payload).pipe(
            map((movies: Movie[]) => (new movieActions.LoadSuccess(movies))),
            catchError(err => of(new movieActions.LoadFail(err)))
        ))
    )

    @Effect()
    loadMovieByKey$ = this.actions$.pipe(
        ofType(movieActions.MovieActionTypes.GetMovieByKey),
        withLatestFrom(
            this.store.select(fromRouter.getRoute),
            (action, payload) => {
                 return {
                    action: action,
                    payload: payload['router'].state.params.key,
                }
            }
        ),
        mergeMap((newPayload: { action: Action, payload: string }) => this.movieService.getMovieByKey(newPayload.payload).pipe(
            map((movie: Movie) => (new movieActions.GetMovieByKeySuccess(movie))),
            catchError(err => of(new movieActions.GetMovieByKeyFail(err)))
        ))
    )


    


    // This is how load would have been if we don't care about Searching and Filtering
    // @Effect()
    // loadMovies$ = this.actions$.pipe(
    //     ofType(movieActions.MovieActionTypes.Load),
    //     mergeMap((action: movieActions.Load) => this.movieService.getMovies().pipe(
    //         map((movies: Movie[]) => (new movieActions.LoadSuccess(movies))),
    //         catchError(err => of(new movieActions.LoadFail(err)))
    //     ))
    // )

    // Effect to be used to save in local storage
    // @Effect()
    // toggleMuteMovie$ = this.actions$.pipe(
    //   ofType(movieActions.MovieActionTypes.ToggleMuteTrailer),
    //   tap((action:movieActions.ToggleMuteTrailer) =>
    //     localStorage.setItem(movieActions.MovieActionTypes.ToggleMuteTrailer, String(action.payload))
    //     )
    //   );
       
}