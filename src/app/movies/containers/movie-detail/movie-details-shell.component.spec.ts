// import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
// import { StoreModule, Store, combineReducers } from '@ngrx/store';
// import { MovieDetailsShellComponent } from './movie-details-shell.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.component';
// import { SharedModule } from 'src/app/shared/shared.module';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import * as movieActions from '../../state/movie.actions';
// import * as fromMovie from '../../state';
// import { MovieState } from '../../state/movie.reducer';
// import { reducer } from '../../state/movie.reducer';
// import * as fromRoot from '../../../state/app.state';
// import { Router } from '@angular/router';
// describe('MovieDetailsShellComponent', () => {
//   let component: MovieDetailsShellComponent;
//   let fixture: ComponentFixture<MovieDetailsShellComponent>;
//   let store: MockStore<fromMovie.State>;
//   let router: Router;
//   beforeEach(async(() => {
    

//     const initialState: MovieState = {
//         currentMovie: null,
//         currentMovieId: null,
//         movies: [],
//         error:'',
//         muteTrailer: false
//     }
    
//     TestBed.configureTestingModule({
//         imports:[
//             RouterTestingModule.withRoutes([
//                     { path: 'details/:key', component: MovieDetailsShellComponent },
//             ]),
//             SharedModule,
//             StoreModule.forRoot({          ...fromRoot,
//                 feature: combineReducers(reducer),}
//                )],
//             declarations: [ MovieDetailsShellComponent,MovieDetailComponent ],
//             providers: [provideMockStore({ initialState }),]
//     })
//     .compileComponents();

//     store = TestBed.get(Store);
//     spyOn(store, 'dispatch').and.callThrough();
//     fixture = TestBed.createComponent(MovieDetailsShellComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));
 

 

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should dispatch an GetMovieByKey action on creation', fakeAsync((): void => {
//     // router.navigateByUrl('/details/deadpool');
//     const router = TestBed.get(Router);
//     router.url = '/movies/details/deadpool';
//     component.ngOnInit();
//     tick();
//     expect(store.dispatch).toHaveBeenCalledWith(movieActions.GetMovieByKey);
//   }));


//   it('should dispatch an action to refreshing data', () => {
//     const action = new movieActions.ToggleMute(false);
//     expect(store.dispatch).toHaveBeenCalledWith(false);
//   });
// });
