import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieDetailsShellComponent } from './movie-details-shell.component';
import { Input, Output, EventEmitter, Component } from '@angular/core';
import { Movie } from '../../movie.model';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import * as MOVIES from "../../../data/movie.mock-data.json";

describe('MovieDetailsShellComponent', () => {
  let component: MovieDetailsShellComponent;
  let fixture: ComponentFixture<MovieDetailsShellComponent>;





  @Component({
    selector:    'ma-movie-detail',
    template: `<div></div>`
  })
  class FakeMovieDetailComponent {
    @Input() errorMessage: string;
    @Input() movie: Movie;
    @Input() mute: boolean;
    @Output() muteClicked = new EventEmitter<boolean>();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
          MovieDetailsShellComponent ,
          FakeMovieDetailComponent
        ],
      providers:[
        provideMockStore({} )
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('mute change called', () => {
//      this.selectedMovie$ = of(MOVIES[0] as Movie);
//      this.mute$ = of(false);
//      component.muteChanged(true);
//      spyOn(store, 'dispatch');
//      expect(store.dispatch).toHaveBeenCalledWith([this.mute$]);
//   });


});
