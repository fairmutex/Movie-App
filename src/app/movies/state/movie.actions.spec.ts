import { Store } from '@ngrx/store';

import { MovieState } from './movie.reducer';
import * as movieActions from './movie.actions';

describe('Movie actions', () => {
  describe('Load Movies', () => {
    it('should dispatch a Load action', () => {
      const expectedAction = new movieActions.Load();
      const store = jasmine.createSpyObj<Store<MovieState>>('store', ['dispatch']);

      store.dispatch(new movieActions.Load());
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });


  describe('Toggle Mute', () => {
    it('should dispatch ToggleMute action', () => {
      const expectedAction = new movieActions.ToggleMute(true);
      const store = jasmine.createSpyObj<Store<MovieState>>('store', ['dispatch']);

      store.dispatch(new movieActions.ToggleMute(true));
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe('Get Movie By Key', () => {
    it('should dispatch a GetMovieByKey action', () => {
      const expectedAction = new movieActions.GetMovieByKey();
      const store = jasmine.createSpyObj<Store<MovieState>>('store', ['dispatch']);

      store.dispatch(new movieActions.GetMovieByKey());
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

});