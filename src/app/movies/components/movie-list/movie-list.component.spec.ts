import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Input, Component } from '@angular/core';
import { MovieListComponent } from './movie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarComponent } from 'src/app/shared/components/star.component';

// shallow
describe('MovieListComponent: Shallow', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let MOVIES;

  @Component({
    selector:    'ma-star',
    template: `<div></div>`
  })
  class FakeStarComponent {
    @Input() num: number;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [ 
        MovieListComponent,
        FakeStarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    MOVIES = [
      { "id": 1, "key": "deadpool", "name": "Deadpool", "description": "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.", "genres": [ "action", "adventure", "comedy" ], "rate": "8.6", "length": "1hr 48mins", "img": "deadpool.jpg" },
      { "id": 2, "key": "we-are-the-millers", "name": "We're the Millers", "description": "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.", "genres": [ "adventure", "comedy", "crime" ], "rate": "7.0", "length": "1hr 50mins", "img": "we-are-the-millers.jpg" },
      { "id": 3, "key": "straight-outta-compton", "name": "Straight Outta Compton", "description": "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.", "genres": [ "biography", "drama", "history" ], "rate": "8.0", "length": "2hr 27mins", "img": "straight-outta-compton.jpg" },
      { "id": 4, "key": "gridiron-gang", "name": "Gridiron Gang", "description": "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.", "genres": [ "crime", "drama", "sport" ], "rate": "6.9", "length": "2hr 5mins", "img": "gridiron-gang.jpg" },
    ];
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the movies', function () {
    // Act
    fixture.componentInstance.movies = MOVIES;               
    fixture.detectChanges();
    // Assert
    expect(fixture.debugElement.queryAll(By.css('.movie-box')).length).toBe(MOVIES.length);
    MOVIES.forEach(movie => {
      expect(fixture.debugElement.query(By.css('#'+movie.key))).toBeDefined();
    });
    // Or
    expect(fixture.nativeElement.querySelectorAll('.movie-box').length).toBe(MOVIES.length);
    MOVIES.forEach(movie => {
      expect(fixture.nativeElement.querySelector('#'+movie.key)).toBeDefined();
    });
  });

  it('should fire movieSelected and emit selected with movie "straight-outta-compton"', function () {
    // Arrange
    fixture.componentInstance.movies = MOVIES;    
    fixture.detectChanges();           
    spyOn(fixture.componentInstance.selected, 'emit');
    // Act
    fixture.nativeElement.querySelector("#"+MOVIES[2].key).dispatchEvent(new Event('click'));
    fixture.detectChanges();
    // Assert
    expect(fixture.componentInstance.selected.emit).toHaveBeenCalledWith(MOVIES[2]);
  });

});




describe('MovieListComponent: Deep', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let MOVIES;

 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [ 
        MovieListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    MOVIES = [
      { "id": 1, "key": "deadpool", "name": "Deadpool", "description": "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.", "genres": [ "action", "adventure", "comedy" ], "rate": "8.6", "length": "1hr 48mins", "img": "deadpool.jpg" },
      { "id": 2, "key": "we-are-the-millers", "name": "We're the Millers", "description": "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.", "genres": [ "adventure", "comedy", "crime" ], "rate": "7.0", "length": "1hr 50mins", "img": "we-are-the-millers.jpg" },
      { "id": 3, "key": "straight-outta-compton", "name": "Straight Outta Compton", "description": "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.", "genres": [ "biography", "drama", "history" ], "rate": "8.0", "length": "2hr 27mins", "img": "straight-outta-compton.jpg" },
      { "id": 4, "key": "gridiron-gang", "name": "Gridiron Gang", "description": "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.", "genres": [ "crime", "drama", "sport" ], "rate": "6.9", "length": "2hr 5mins", "img": "gridiron-gang.jpg" },
    ];
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should render the movie rate as a StarComponent', function () {
    // Act
    fixture.componentInstance.movies = MOVIES;               
    fixture.detectChanges();
    // Assert
    const stars1 = fixture.debugElement.queryAll(By.directive(StarComponent));
    expect(stars1.length).toBe(MOVIES.length);
    
    for(let i = 0 ; i <  stars1.length; i++){
      expect(stars1[i].componentInstance.num).toBe(MOVIES[i].rate);
    }

  });

});