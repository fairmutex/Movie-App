import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Movie } from '../../movie.model';

@Component({
  selector: 'ma-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent implements OnInit {
  pageTitle = 'Movies';
  @Input() errorMessage: string;
  @Input() movies: Movie[];
  @Output() selected = new EventEmitter<Movie>();

  @Output() checked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }


  showTrailer(value:boolean){
    //  this.checked.emit(value);
  }

  movieSelected(movie: Movie): void {
    this.selected.emit(movie);
  }

}
