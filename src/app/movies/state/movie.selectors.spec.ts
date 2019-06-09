
import { Store } from '@ngrx/store';
import { getMovies, getMovieByKey, getMuteTrailer, getCurrentMovie, getError } from '.';
import { MovieState } from './movie.reducer';

describe('Movie Selectors', () => {
  let MOVIES;
    
    beforeEach(() => {
        MOVIES = [
          { "id": 1, "key": "deadpool", "name": "Deadpool", "description": "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.", "genres": [ "action", "adventure", "comedy" ], "rate": "8.6", "length": "1hr 48mins", "img": "deadpool.jpg" },
          { "id": 2, "key": "we-are-the-millers", "name": "We're the Millers", "description": "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.", "genres": [ "adventure", "comedy", "crime" ], "rate": "7.0", "length": "1hr 50mins", "img": "we-are-the-millers.jpg" },
          { "id": 3, "key": "straight-outta-compton", "name": "Straight Outta Compton", "description": "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.", "genres": [ "biography", "drama", "history" ], "rate": "8.0", "length": "2hr 27mins", "img": "straight-outta-compton.jpg" },
          { "id": 4, "key": "gridiron-gang", "name": "Gridiron Gang", "description": "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.", "genres": [ "crime", "drama", "sport" ], "rate": "6.9", "length": "2hr 5mins", "img": "gridiron-gang.jpg" },
        ];
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