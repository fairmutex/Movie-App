import { Action } from '@ngrx/store';
import { Movie } from '../movie.model';

export enum MovieActionTypes {
    SetCurrentMovie = '[Movie] Set Current Movie',
    InitializeCurrentMovie = '[Movie] Initialize Current Movie',
    ToggleMute = '[Movie] Toggle Mute Trailer',
    Load = '[Movie] Load',
    LoadSuccess = '[Movie] Load Success',
    LoadFail = '[Movie] Load Fail',
    // If search and filtering was done frontend
    // SearchMovie = '[Movie] Search',
    // FilterMovies = '[Movie] Filter Movies',

    GetMovieByKey = '[Movie] Get Movie By Key',
    GetMovieByKeySuccess ='[Movie] Get Movie By Key Success',
    GetMovieByKeyFail =  '[Movie] Get Movie By Key Fail'

}


export class SetCurrentMovie implements Action {
    readonly type = MovieActionTypes.SetCurrentMovie;

    constructor(public payload: Movie) {}
}

export class InitializeCurrentMovie implements Action {
    readonly type = MovieActionTypes.InitializeCurrentMovie;
}

export class ToggleMute implements Action {
   readonly type = MovieActionTypes.ToggleMute;
   constructor(public payload: boolean) { }
}

export class Load implements Action {
    readonly type = MovieActionTypes.Load;
  }
  
  export class LoadSuccess implements Action {
    readonly type = MovieActionTypes.LoadSuccess;
    constructor(public payload:Movie[]){}

  }
  
  export class LoadFail implements Action {
    readonly type = MovieActionTypes.LoadFail;
    constructor(public payload:string){}
  }


  export class GetMovieByKey implements Action {
    readonly type = MovieActionTypes.GetMovieByKey;
  }
  
  export class GetMovieByKeySuccess implements Action {
    readonly type = MovieActionTypes.GetMovieByKeySuccess;
    constructor(public payload:Movie){}

  }
  
  export class GetMovieByKeyFail implements Action {
    readonly type = MovieActionTypes.GetMovieByKeyFail;
    constructor(public payload:string){}
  }




  // export class SearchMovie implements Action {
  //   readonly type = MovieActionTypes.LoadFail;
  //   constructor(public payload:string){}
  // }

  // export class FilterMovie implements Action {
  //   readonly type = MovieActionTypes.LoadFail;
  //   constructor(public payload:string){}
  // }


export type MovieActions = 
  SetCurrentMovie 
| InitializeCurrentMovie
| ToggleMute
| Load
| LoadSuccess
| LoadFail
// | SearchMovie
// | FilterMovie
| GetMovieByKey
| GetMovieByKeySuccess
| GetMovieByKeyFail;