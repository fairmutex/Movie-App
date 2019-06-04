import { ActionReducerMap, State } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
  }

  
// State
export interface RouterState {
	router: RouterReducerState<RouterStateUrl>;
}


export const routerReducers: ActionReducerMap<RouterState> = {
	router: routerReducer
};


