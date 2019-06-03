import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromMovie from '../../state';
import * as movieActions from '../../state/movie.actions';
import { Movie } from '../../movie.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
    templateUrl: './movie-details-shell.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class MovieDetailsShellComponent implements OnInit {
      errorMessages$: Observable<string>;
      selectedMovie$: Observable<Movie>;
      mute$: Observable<boolean>;
  
    constructor(private store:Store<fromMovie.State>,
                private router: Router) { }
  
    ngOnInit() {
      this.store.dispatch(new movieActions.GetMovieByKey());
      this.selectedMovie$ = this.store.pipe(select(fromMovie.getCurrentMovie));
      this.mute$ = this.store.pipe(select(fromMovie.getMuteTrailer));

    }
  
    muteChanged(value: boolean): void {
      this.store.dispatch(new movieActions.ToggleMute(value));
    }
  
  
  }
  