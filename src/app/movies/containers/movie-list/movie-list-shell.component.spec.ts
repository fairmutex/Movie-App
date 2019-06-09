import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListShellComponent } from './movie-list-shell.component';
import * as MOVIES from "../../../data/movie.mock-data.json";

import { Input, Output, EventEmitter, Component } from '@angular/core';
import { Movie } from '../../movie.model';
import { provideMockStore } from '@ngrx/store/testing';
import * as movieActions from '../../state/movie.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { hot, cold } from 'jasmine-marbles';
import * as fromMovie from '../../state';

describe('MovieListShellComponent', () => {
  let component: MovieListShellComponent;
  let fixture: ComponentFixture<MovieListShellComponent>;

  @Component({
    selector: 'ma-movie-list',
    template: `<div></div>`
  })
  class FakeMovieListComponent {
    @Input() errorMessage: string;
    @Input() movies: Movie[];
  
    @Output() selected = new EventEmitter<Movie>();
  }

  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {

    // const initialState = {
    // movies: {
    //   currentMovie: null,
    //   currentMovieId: null,
    //   movies: [],
    //   error: '',
    //   muteTrailer: false
    // }
    // }
    TestBed.configureTestingModule({
      declarations: [ 
        MovieListShellComponent,
        FakeMovieListComponent
      ],
      providers:[
        // provideMockStore({initialState}),
        provideMockStore({}),

          // {
          //   provide: Store,
          //   useValue: {
          //     dispatch: jasmine.createSpy('dispatch'),
          //     pipe: jasmine.createSpy('pipe')
          //   }
          // },
        { 
          provide: Router, 
          useValue: router
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({})
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListShellComponent);
    component = fixture.componentInstance;
    component.movies$ = of(MOVIES as Movie[]);
    component.errorMessages$ = of();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select movie', () => {
    component.movieSelected(MOVIES[0]);
    expect(router.navigate).toHaveBeenCalledWith(['/movies/details', MOVIES[0].key], jasmine.any(Object));
  });

    // Need to test with onInit for Integration Testing
  // describe('ngOnInit()', () => {
  //   it('should dispatch an the movieActions.Load action in ngOnInit lifecycle', () => {
  //     const action = new movieActions.Load();
  //     const store = TestBed.get(Store);
  //     const spy = spyOn(store, 'dispatch');
  //     fixture.detectChanges();
  //     expect(spy).toHaveBeenCalledWith(action);
  //   });

  //   it('should getMovies', () => {
  //     const store = TestBed.get(Store);
  //     store.pipe =  hot('-a', { a: MOVIES });

  //     fixture.detectChanges();

  //     const expected = cold('-a', { a: MOVIES });
  //     expect(component.movies$).toBeObservable(expected);
  //   });
  // });
});
