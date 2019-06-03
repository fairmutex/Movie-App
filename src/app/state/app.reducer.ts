import { environment } from 'src/environments/environment';

import {storeFreeze} from 'ngrx-store-freeze';
import { State } from './app.state';
import { MetaReducer, ActionReducerMap } from '@ngrx/store';



// export const metaReducers: MetaReducer<State>[] = [];


export const metaReducers: MetaReducer<State>[] =!environment.production
? [storeFreeze]
: [];

