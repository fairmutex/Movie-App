import { TestBed, inject, async } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { MovieService } from "./movie.service";
import * as MOVIES from "../data/movie.mock-data.json";

describe('MovieService', () => {
 
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
 