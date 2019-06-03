import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieListShellComponent } from './movie-list-shell.component';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { reducer } from '../../state/movie.reducer';
import * as fromRoot from '../../../state/app.state';

describe('MovieListShellComponent', () => {
  let component: MovieListShellComponent;
  let fixture: ComponentFixture<MovieListShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[
            RouterTestingModule.withRoutes([
                    { path: 'movies', component: MovieListShellComponent },
            ]),
            SharedModule,
            StoreModule.forRoot({...fromRoot,
                feature: combineReducers(reducer),}
               )],
      declarations: [ 
          MovieListShellComponent, 
          MovieListComponent 
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
