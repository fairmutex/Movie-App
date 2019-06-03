import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [

  {
        path: 'movies', 
        loadChildren: './movies/movies.module#MoviesModule'
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        // preloadingStrategy: PreloadAllModules,
        // useHash: false,
        // initialNavigation: true,
        // enableTracing: true,
        // anchorScrolling: 'disabled',
        // scrollPositionRestoration: 'disabled'
      })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
