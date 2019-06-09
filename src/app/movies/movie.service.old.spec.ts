import { TestBed, inject, async } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MovieData } from './data/movie-data';
import { MovieService } from "./movie.service";

describe('MovieService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [MovieService],
            imports: [
                HttpClientTestingModule,  
                HttpClientInMemoryWebApiModule.forRoot(MovieData, { delay: 0 })
            ]
        })    
      .compileComponents();
    }));
  
    beforeEach(() => {

    });


    it('should be initialized', inject([MovieService], (service: MovieService) => {
        expect(service).toBeTruthy();
    }));

    it('should get all data', async(inject([MovieService], (service: MovieService) => {

        spyOn(service, 'getMovies').and.callThrough();
        service.getMovies('').subscribe(result => {
            expect(result).toBeTruthy();
            expect(result.length).toBeGreaterThan(0);
            expect(result.length).toBeLessThan(25);
        });
        expect(service.getMovies).toHaveBeenCalledWith('');
    })));

    it('should get deadpool record', async(inject([MovieService], (service: MovieService) => {
        spyOn(service, 'getMovieByKey').and.callThrough();
        service.getMovieByKey('deadpool').subscribe(data => {
            expect(data).toBeTruthy();
            expect(data.name === "Deadpool").toBeTruthy();

        });
        expect(service.getMovieByKey).toHaveBeenCalledWith("deadpool");
    })));

    it('should search deadpool', async(inject([MovieService], (service: MovieService) => {
        spyOn(service, 'getMovies').and.callThrough();
        service.getMovies({action:'search',value:'deadpool'}).subscribe(data => {
            expect(data.length).toBeGreaterThan(0);
            expect(data.length).toBeLessThan(2);
            expect(data[0].name === "Deadpool").toBeTruthy();
        });
        expect(service.getMovies).toHaveBeenCalledWith({action:'search',value:'deadpool'});

    })));

    it('should get comedy genre', async(inject([MovieService], (service: MovieService) => {
        spyOn(service, 'getMovies').and.callThrough();
        service.getMovies({action:'genre',value:'comedy'}).subscribe(data => {
            expect(data.length).toBeGreaterThan(0);
            expect(data.length).toBeLessThan(6);
        });
        expect(service.getMovies).toHaveBeenCalledWith({action:'genre',value:'comedy'});

    })));
 });  