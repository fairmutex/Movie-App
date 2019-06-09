// Ref  https://christianlydemann.com/the-complete-guide-to-ngrx-testing/
// https://ngrx.io/guide/effects/testing#effects-that-use-state

// TODO test Errors
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot, initTestScheduler, addMatchers } from 'jasmine-marbles';
import { Observable} from 'rxjs';
import { MovieEffects } from './movie.effects';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import * as movieActions from './movie.actions';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromRoot from '../../state/app.state';
import { Actions } from '@ngrx/effects';
import * as MOVIES from "../../data/movie.mock-data.json";

describe('MovieEffects', () => {

let effects: MovieEffects;
let actions$: Observable<any>;
let store: MockStore<fromRoot.State>;
let mockMovieService;
 
  beforeEach(() => {
        mockMovieService = jasmine.createSpyObj(['getMovies','getMovieByKey']);
        TestBed.configureTestingModule({
            providers: [
                MovieEffects,
                provideMockActions(() => actions$),
                provideMockStore({} ),
                { 
                  provide: MovieService,
                  useValue: mockMovieService
                 }
            ]
          });    

      effects = TestBed.get(MovieEffects);
      actions$ = TestBed.get(Actions);
      store = TestBed.get(Store);
      initTestScheduler();
      addMatchers();
    });

  describe('Movies', () => {
    it('should succeed loading Movies without parameters return LoadSuccess', () => {

        store.setState({
            router: {
              router: {
                state: {
                  url: '/movies',
                  queryParams: {},
                  params: {}
                },
                navigationId: 1
              }
            },
            movies: {
              currentMovie: null,
              currentMovieId: null,
              movies: [],
              error: '',
              muteTrailer: false
            }
          } as fromRoot.State);
      const movies: Movie[] = MOVIES;

      const action = new movieActions.Load();
      const outcome = new movieActions.LoadSuccess(movies);

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: movies });
      mockMovieService.getMovies.and.returnValues(response);

      const expected = cold('--b', { b: outcome });
      expect(effects.loadMovies$).toBeObservable(expected);
    });

    // it('should fail loading Movies and return LoadFail with the error', () => {
    //     store.setState({
    //         router: {
    //           router: {
    //             state: {
    //               url: '/movies',
    //               queryParams: {},
    //               params: {}
    //             },
    //             navigationId: 1
    //           }
    //         },
    //         movies: {
    //           currentMovie: null,
    //           currentMovieId: null,
    //           movies: [],
    //           error: '',
    //           muteTrailer: false
    //         }
    //       } as fromRoot.State);        
    //   const action = new movieActions.Load();
    //   const error = new Error('some error') as any;
    //   const outcome = new movieActions.LoadFail(error);

    //   actions$ = hot('-a', { a: action });
    //   const response = cold('-#|', {}, error);
    // //   mockMovieService.getMovies.and.returnValue(response);

    //   const expected = cold('--(b|)', { b: outcome });
    //   expect(effects.loadMovies$).toBeObservable(expected);
    // });


    it('should succeed loading Movies with search and value deathpool parameters return LoadSuccess', () => {

        store.setState({
            router: {
                router: {
                  state: {
                    url: '/movies/search/deadpool',
                    queryParams: {},
                    params: {
                      action: 'search',
                      value: 'deadpool'
                    }
                  },
                  navigationId: 4
                }
            },
            movies: {
              currentMovie: null,
              currentMovieId: null,
              movies: [],
              error: '',
              muteTrailer: false
            }
          } as fromRoot.State);
      const movies: Movie[] = MOVIES;

      const action = new movieActions.Load();
      const outcome = new movieActions.LoadSuccess([movies[0]]);

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: [movies[0]] });
      mockMovieService.getMovies.and.returnValues(response);

      const expected = cold('--b', { b: outcome });
      expect(effects.loadMovies$).toBeObservable(expected);
    });
  });




  it('should succeed loading Movies with genre and value comedy parameters return LoadSuccess', () => {

      store.setState({
        router: {
            router: {
              state: {
                url: '/movies/genre/comedy',
                queryParams: {},
                params: {
                  action: 'genre',
                  value: 'comedy'
                }
              },
              navigationId: 4
            }
        },
        movies: {
          currentMovie: null,
          currentMovieId: null,
          movies: [],
          error: '',
          muteTrailer: false
        }
      } as fromRoot.State);   
  const movies: Movie[] = MOVIES.filter(x => x.genres.includes('comedy'));

  const action = new movieActions.Load();
  const outcome = new movieActions.LoadSuccess(movies);

  actions$ = hot('-a', { a: action });
  const response = cold('-a|', { a: movies });
  mockMovieService.getMovies.and.returnValues(response);

  const expected = cold('--b', { b: outcome });
  expect(effects.loadMovies$).toBeObservable(expected);
});







it('should succeed loading Movies with genre and value comedy parameters return LoadSuccess', () => {

    store.setState({
        router: {
            router: {
              state: {
                url: '/movies/details/deadpool',
                queryParams: {},
                params: {
                  key: 'deadpool'
                }
              },
              navigationId: 5
            }
          },
      movies: {
        currentMovie: null,
        currentMovieId: null,
        movies: [],
        error: '',
        muteTrailer: false
      }
    } as fromRoot.State);   
const movies: Movie[] = MOVIES;

const action = new movieActions.GetMovieByKey();
const outcome = new movieActions.GetMovieByKeySuccess(movies[0]);

actions$ = hot('-a', { a: action });
const response = cold('-a|', { a: movies[0]});
mockMovieService.getMovieByKey.and.returnValues(response);

const expected = cold('--b', { b: outcome });
expect(effects.loadMovieByKey$).toBeObservable(expected);
});
});