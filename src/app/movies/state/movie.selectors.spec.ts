
import { Store } from '@ngrx/store';
import { getMovies, getMovieByKey, getMuteTrailer, getCurrentMovie, getError } from '.';
import { MovieState } from './movie.reducer';
import * as MOVIES from "../../data/movie.mock-data.json";


describe('Movie Selectors', () => {
    
    beforeEach(() => {

    });


  describe('getMovies', () => {
    it('should return the movies', () => {

      const moviesState: MovieState = {
        currentMovie: MOVIES[0],
        currentMovieId: null,
        movies: MOVIES,
        error:'',
        muteTrailer: false
    }

      expect(getMovies.projector(moviesState)).toEqual(MOVIES);
    });

    it('should return call the getMovies', () => {
      const store = jasmine.createSpyObj<Store<MovieState>>('store', ['select']);

      store.select(getMovies);

      expect(store.select).toHaveBeenCalledWith(getMovies);
    });


    it('should call the getMovieByKey', () => {
        const store = jasmine.createSpyObj<Store<MovieState>>('store', ['select']);
  
        store.select(getMovieByKey);

        expect(store.select).toHaveBeenCalledWith(getMovieByKey);
    });


    it('should call the getMuteTrailer', () => {
        const store = jasmine.createSpyObj<Store<MovieState>>('store', ['select']);
  
        store.select(getMuteTrailer);

        expect(store.select).toHaveBeenCalledWith(getMuteTrailer);
    });


    it('should call the getCurrentMovie', () => {
        const store = jasmine.createSpyObj<Store<MovieState>>('store', ['select']);
  
        store.select(getCurrentMovie);

        expect(store.select).toHaveBeenCalledWith(getCurrentMovie);
    });


    it('should call the getError', () => {
        const store = jasmine.createSpyObj<Store<MovieState>>('store', ['select']);
  
        store.select(getError);

        expect(store.select).toHaveBeenCalledWith(getError);
    });

  });
});