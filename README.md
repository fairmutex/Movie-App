[![License][license-image]][license-url] 

# Movies Application  

Application utilizing Angular 7, Angular OnPush change detection strategy, Smart/Dumb components, Redux (NgRx Store/Effects/Router Store), RxJS, SCSS, Redux Dev Tools, Jasmine, Jasmine Marbles and Karma

## Running the Application  

git clone https://github.com/fairmutex/Movie-App.git  
   
cd movie-app   
   
npm install   
   
ng s    

http://localhost:4200/    

It is also hosted [here](https://code.fairmutex.com/projects/web/movie-app/)   
   
## Running Tests

npm test   
   
or   

ng test --environment=test   

## Code Coverage   

ng test --code-coverage   
    
## Media  

Media files are not in the repository, so an internet connection is required even after cloning the repository.

## About UX   
   
This was created with the mindset that it is not a system for production so I was experimenting with UX in reducing clicks required to enjoy the experience. (not the usual kind of content delivery).  
   
The following is only for large screens > 800px:    
Application is in the middle of the orange rectangle and is displayed only if the mouse is hovering.   
   
I just learned the hard way about Video playing in Firefox and IE, so it works best in Chrome with less favourable fall backs for the rest.  

## Technical Details

### Assumptions   
   
API is only sending a subset of the data and not full records   
So Searching, filtering and Get Record and a new page must hit the backend   
   
   
The Effects are using routing data supplied NgRx Router Store from the state to execute backend calls. Keeping routing state in the store merges routing state and application state into one and work in tandem.
It also adds the benefit less code clutter    
   
### Why this choice?   
   
This comes from big datasets over a source such an API which expose several features Pagination, Page Size, Sorting, filtering, Search   
   
Static paging of such data powered by Redux is simple using a strategy such as the one described [here](https://medium.com/@bo.vandersteene/advanced-pagination-with-ngrx-store-and-angular-5-f26ca4761cef)


but when any of Page Size, Sorting, filtering and Search is altered. The state must be cleared and the backend would need to be hit again.

I did start working on it [here](https://stackblitz.com/edit/angular-ubwakn) to extend my own [tabular Library](https://github.com/fairmutex/FTable)  but I haven't connected the table service to NgRx powered by a backend as I figured this needs some ideas to mature first and ..... time.   

## Testing   
     
47 specs, a mix of Unit/Shallow Integration/Deep Integration tests    
   
Testing MovieService with mocking Httpclient module and checks, although I still don't see this replacing real integration testing with a real API like in movie.service.old.spec.ts but somehow it fails at times when it should pass something async is missing.

Dumb Components both shallow and deep for the first two.  
MovieDetailComponent, MovieListComponent and StarComponent  

Testing Shell components incomplete. encountered a very weird situation in which when tests of MovieShellComponent are not commented MovieService tests are failing and these two are totally unrelated .

Movie State
Actions, Reducers, Selectors and Effects.

Effects still missing testing of errors

E2E is still in the pipeline.
   
How much testing is too few/much testing?   
     
## Lessons Learned   
   
Exposure to NgRx and already feel that this would minimize service clutter and to keep in mind how to design dumb/smart Components comensurate with OnPush change Detection strategy for better performance.

Testing Unit/Shallow Integration and Deep Integration using Jasmine/Jasmine Marbles and Karma

## Could Haves  

A Pause/Stop button and store the setting in local storage by using an Effect and reading checking local storage using NgRx upon visit.   

What would I do?   

Rewrite a better version   
Better, well thought Redux Actions and more features   
for example: Estimating internet speed and if its slow, not playing the trailers http://speed-test.cfapps.io/.   
   
All videos are taken from https://www.traileraddict.com/ and some posters from google.

[MIT license]: http://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/license-MIT-green.svg
[license-url]: http://opensource.org/licenses/MIT