import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromMovie from '../../state';
import { Movie, GenreType } from '../../movie.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './movie-shell.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieShellComponent implements OnInit {

  @Input() categories = GenreType;

  selectedMovie$: Observable<Movie>;
  muteTrailer$: Observable<boolean>;

    
  constructor(private router: Router,
              private route: ActivatedRoute,
              private store:Store<fromMovie.State>) { }

  ngOnInit() {
     this.selectedMovie$ = this.store.pipe(select(fromMovie.getCurrentMovie));
     this.muteTrailer$ = this.store.pipe(select(fromMovie.getMuteTrailer)); 
  }

  genre(value:string) {
     this.router.navigate(['genre',value], { relativeTo: this.route });
  }


  search(value:string) {
     this.router.navigate(['search',value], { relativeTo: this.route });
 }

 

 
 checkIfSearchIsEmpty(value:string) {
  if(value.length === 0)
  this.router.navigate(['..'], { relativeTo: this.route });
}



  
  // // setMovie(value: Movie): void {
  // //   // this.displayCode = value;
  // //   // this.store.dispatch({
  // //   //   type: 'TOGGLE_PRODUCT_CODE',
  // //   //   payload: value
  // //   // })

  // //   this.store.dispatch(new movieActions.SetCurrentMovie(value ));
  // // }

  // checkChange(value: boolean): void {
  //   this.store.dispatch(new movieActions.ToggleShowTrailer(value));
  // }

  // viewMovie(): void {
  //   this.store.dispatch(new movieActions.InitializeCurrentMovie());
  // }

  // movieSelected(movie:Movie){
  //   this.store.dispatch(new movieActions.SetCurrentMovie(movie));
  // }





}
