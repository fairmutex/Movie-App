import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../movie.model';

@Component({
  selector: 'ma-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  @Input() errorMessage: string;
  @Input() movie: Movie;
  @Input() mute: boolean;
  @Output() muteClicked = new EventEmitter<boolean>();

  toggleMute(value: boolean): void {
    this.muteClicked.emit(value);
  }

}
