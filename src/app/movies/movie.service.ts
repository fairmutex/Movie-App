import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Movie } from './movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = environment.MOVIES_API;

  constructor(private http: HttpClient) { }

  getMovies(query:any): Observable<Movie[]> {
    let url = this.moviesUrl;
    if(query)
    if(query.action == "genre"){
      url = `${url + '?genres='}${query.value}`
    }
    else if(query.action == "search"){
      url = `${url + '?name='}${query.value}`
    }
    return this.http.get<Movie[]>(url)
      .pipe(
        // tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  //  If data was retreived only once Search and filtering was handled at client side
  // getMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.moviesUrl)
  //     .pipe(
  //       tap(data => console.log(JSON.stringify(data))),
  //       // tap(data => this.movies = data),
  //       catchError(this.handleError)
  //     );
  // }

  getMovieByKey(key:string): Observable<Movie> {
    return this.http.get<Movie[]>(`${this.moviesUrl + '?key='}${key}`)
      .pipe(
        // tap(data => console.log(JSON.stringify())),
        map(
          data => data[0]
        ),
        // tap(data => this.movies = data),
        catchError(this.handleError)
      );
  }


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
