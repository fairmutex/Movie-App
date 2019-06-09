import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromMovie from '../../state';
import * as movieActions from '../../state/movie.actions';
import { Movie } from '../../movie.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './movie-list-shell.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class MovieListShellComponent implements OnInit {
      errorMessages$: Observable<string>;
      movies$: Observable<Movie[]>;
  
    constructor(private store:Store<fromMovie.State>,
                private router: Router,
                private route: ActivatedRoute) { 
                }
  
    ngOnInit() {
        this.route.params.subscribe(val => {
        this.store.dispatch(new movieActions.Load());
        this.movies$ = this.store.pipe(select(fromMovie.getMovies));
        this.errorMessages$ = this.store.pipe(select(fromMovie.getError));
        });
    }
 
    movieSelected(movie:Movie){
      this.router.navigate(['/movies/details', movie.key],  { relativeTo: this.route });
    }
  
  }
  