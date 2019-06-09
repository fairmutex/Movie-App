import { TestBed, inject, async } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { MovieData } from './data/movie-data';
import { MovieService } from "./movie.service";

describe('MovieService', () => {
    let MOVIES;

 
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [MovieService],
            imports: [
                HttpClientTestingModule
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
    });

    it('should be initialized', 
        inject([MovieService], (service: MovieService) => {
        expect(service).toBeTruthy();
    }));

    it('getAll should call get with correct URL',
        inject([MovieService, HttpTestingController], 
               (service: MovieService, controller: HttpTestingController) => {

        service.getMovies('').subscribe();
        const req = controller.expectOne('api/movies');
        req.flush(MOVIES); 
        controller.verify();
    }));


    it('getMovieByKey should call get with correct URL to get Deadpool record',
        inject([MovieService, HttpTestingController], 
               (service: MovieService, controller: HttpTestingController) => {

        service.getMovieByKey('deadpool').subscribe();
        const req = controller.expectOne('api/movies?key=deadpool');
        req.flush(MOVIES[0]); 
        controller.verify();
    }));


    it('getAll should call get with correct URL to search deadpool',
        inject([MovieService, HttpTestingController], 
            (service: MovieService, controller: HttpTestingController) => {

        service.getMovies({action:'search',value:'deadpool'}).subscribe();
        const req = controller.expectOne('api/movies?name=deadpool');
        req.flush(MOVIES[0]); 
        controller.verify();
    }));


    it('getAll should call get with correct URL to filter by comedy genre',
        inject([MovieService, HttpTestingController], 
            (service: MovieService, controller: HttpTestingController) => {

        service.getMovies({action:'genre',value:'comedy'}).subscribe();
        const req = controller.expectOne('api/movies?genres=comedy');
        req.flush(MOVIES.filter(m => m.genres.includes('comedy'))); 
        controller.verify();
    }));

 });  