import { ActionReducerMap, State } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
    // data: Data;
  }
   


// export const routerReducers: ActionReducerMap<RouterStateUrl> = {
//     router: routerReducer
//   };
  
// State
export interface RouterState {
	router: RouterReducerState<RouterStateUrl>;
}


export const routerReducers: ActionReducerMap<RouterState> = {
	router: routerReducer
};


