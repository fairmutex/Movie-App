import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieShellComponent } from './movie-shell.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import * as MOVIES from "../../../data/movie.mock-data.json";
import { GenreType } from '../../movie.model';

describe('MovieShellComponent', () => {
  let component: MovieShellComponent;
  let fixture: ComponentFixture<MovieShellComponent>;

  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      declarations: [ 
          MovieShellComponent 
        ],
      providers:[
          provideMockStore({}),
          { 
            provide: Router, 
            useValue: router
          },
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({})
            }
          }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieShellComponent);
    component = fixture.componentInstance;
    component.categories =  GenreType;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call genre', () => {

    component.genre(MOVIES[0].genres[0]);
    expect(router.navigate).toHaveBeenCalledWith(['genre', MOVIES[0].genres[0]], jasmine.any(Object));
  });


  it('should call search', () => {
    component.search(MOVIES[0].name);
    expect(router.navigate).toHaveBeenCalledWith(['search', MOVIES[0].name], jasmine.any(Object));
  });


  it('should navigate when checkIfSearchIsEmpty value is empty', () => {
    component.checkIfSearchIsEmpty('');
    expect(router.navigate).toHaveBeenCalledWith(['..'], jasmine.any(Object));
  });

//   it('should not navigate when checkIfSearchIsEmpty value is not empty', () => {
//     component.checkIfSearchIsEmpty('notempty');
//     expect(router.navigate).not.toHaveBeenCalled();
//   });
});
