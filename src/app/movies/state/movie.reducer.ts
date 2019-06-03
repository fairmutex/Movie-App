import { Movie } from '../movie.model';
import { MovieActions, MovieActionTypes } from './movie.actions';



export interface MovieState {
    currentMovie: Movie;
    currentMovieId: number | null;
    movies: Movie[];
    error:string;
    muteTrailer: boolean;
}

const initialState: MovieState = {
    currentMovie: null,
    currentMovieId: null,
    movies: [],
    error:'',
    muteTrailer: false
}

export function reducer(state: MovieState = initialState, action: MovieActions): MovieState {
    switch (action.type) {
        case MovieActionTypes.ToggleMute:
            return {
              ...state,
              muteTrailer: action.payload
            };
        
        case MovieActionTypes.SetCurrentMovie:
            return {
                ...state,
                currentMovie: { ...action.payload }
            };

        case MovieActionTypes.InitializeCurrentMovie:
            return {
                ...state,
                currentMovie: {
                    id: 0,
                    key: '',
                    name: '',
                    description: '',
                    genres: null,
                    rate: '',
                    length: '',
                    img: ''
                }
            };
        case MovieActionTypes.LoadSuccess:
            return {
                ...state,
                movies: action.payload,
                error: ''
            }
        case MovieActionTypes.LoadFail: 
            return {
                ...state,
                movies: [],
                error: action.payload
            }
      
        case MovieActionTypes.GetMovieByKeySuccess: {
            return {
                ...state,
                currentMovie: action.payload,
                error: ''
            }
        } 
        case MovieActionTypes.GetMovieByKeyFail: {
            return {
                ...state,
                movies: [],
                error: action.payload
            }
        }   

        // this is how search movie would be if source of data is not large and doesn't change from other sources
        // case MovieActionTypes.SearchMovies: {
        //     return {
        //         ...state,
        //         movies: state.movies
        //                    .filter((m)=>{
        //                        return Object.keys(m)
        //                            .reduce((a, c)=>{
        //                                 return a || s[c].toLowerCase().includes(action.payload.toLowerCase());
        //                       }, false)
        //                      }
        //                     ),
        //         error:''
        //     }
        // }  

        // this is how filter movie would be if source of data is not large and doesn't change from other sources
        // case MovieActionTypes.FilterMovies: {
        //     return {
        //         ...state,
        //         movies: state.movies.filter(m => m.genres.includes(action.payload) ),
        //         error:''
        //     }
        // }          
        
        default:
            return state;
    }
}