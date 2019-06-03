import * as fromRoot from '../state/app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer, RouterReducerState } from '@ngrx/router-store';
import { Injectable } from '@angular/core';
// import { RouterStateUrl } from './router.reducer';
import * as fromRouter from './router.reducer';

export interface State extends fromRoot.State {
    router: RouterReducerState<fromRouter.RouterStateUrl>;
}

export const getRouterReducerState = createFeatureSelector<fromRouter.RouterStateUrl>('router');

export const getRoute = createSelector(
    getRouterReducerState, 
    (routerReducerState) => routerReducerState
)


export const getRouterState = 
    createFeatureSelector<RouterReducerState<fromRouter.RouterStateUrl>>('router');

export const getRouter = createSelector(
    getRouterState, 
    (routerState:any) => routerState.routerReducerState);    




    // Reducer selectors
    export const selectReducerState = createFeatureSelector<RouterReducerState<fromRouter.RouterStateUrl>>("router");
     
    export const getRouterInfo = createSelector(
      selectReducerState,
      state => state.state
    );    

@Injectable()
export class CustomSerializer implements RouterStateSerializer<fromRouter.RouterStateUrl> {	 
  serialize(routerState: RouterStateSnapshot): fromRouter.RouterStateUrl {
      const { url } = routerState;
      const { queryParams } = routerState.root;
      let state: ActivatedRouteSnapshot = routerState.root;
      let params = {...state.params};
      while (state.firstChild) {
          state = state.firstChild;
          params = { ...params, ...state.params };
      }
return { url, queryParams, params };
  }
}
