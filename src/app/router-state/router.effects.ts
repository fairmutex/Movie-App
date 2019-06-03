import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { GO, FORWARD, BACK, Go, Back } from './router.actions';


@Injectable()
export class RouterEffect {
	constructor(
		private actions$: Actions,
		private router: Router) { }
	@Effect({ dispatch: false })
	navigation$ = this.actions$.pipe(
        ofType('ROUTER_NAVIGATION'),
	
			tap((action) => {
				console.log('native router navigation action', action);
            })
    );

	@Effect({ dispatch: false })
	CustomGoNavigation$ = this.actions$.pipe(
        ofType(GO),
		
			tap((action: Go) => {
				this.router.navigate(action.payload.path, { queryParams: action.payload.query, ...action.payload.extras });
			}));

	@Effect({ dispatch: false })
	CustomBackNavigation$ = this.actions$.pipe(
        ofType(BACK),
			tap((action: Back) => {
				// or you can wrap the window reference and inject as angularJS does it natively with $window.
				window.history.back();
			}));

	@Effect({ dispatch: false })
	CustomForwardNavigation$ = this.actions$.pipe(
        ofType(FORWARD),
		
			tap((action) => {
				window.history.forward();
			}));


}
