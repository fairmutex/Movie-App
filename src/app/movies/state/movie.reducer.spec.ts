import * as fromMovieReducers from './movie.reducer';
import * as movieActions  from './movie.actions';
import * as MOVIES from "../../data/movie.mock-data.json";

describe('Movie reducers', () => {


    it('should return the default state', () => {
        const action = { type: 'NOOP' } as any;
        const result = fromMovieReducers.reducer(undefined, action);
     
        expect(result).toBe(fromMovieReducers.initialState);
    });

    it('should return ToggleMute true', () => {
        const action = new movieActions.ToggleMute(true);
        const newState = fromMovieReducers.reducer(fromMovieReducers.initialState,  action);

        expect(newState.muteTrailer).toBe(true);
    });

    it('should SetCurrentMovie', () => {
      const action = new movieActions.SetCurrentMovie(MOVIES[0]);
      const newState = fromMovieReducers.reducer(undefined,  action);

      expect(newState.currentMovie).toEqual(MOVIES[0]);
    });

});
