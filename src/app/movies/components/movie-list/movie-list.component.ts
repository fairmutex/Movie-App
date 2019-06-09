import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Movie } from '../../movie.model';

@Component({
  selector: 'ma-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Input() errorMessage: string;
  @Input() movies: Movie[];

  @Output() selected = new EventEmitter<Movie>();

  movieSelected(movie: Movie): void {
    this.selected.emit(movie);
  }

}
