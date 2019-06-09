import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from  '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { metaReducers, } from './state/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MovieData } from './movies/data/movie-data';
import { CustomSerializer } from './router-state';
import { routerReducers } from './router-state/router.reducer';
import { RouterEffect } from './router-state/router.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    StoreModule.forRoot( {}, { metaReducers }),
    StoreModule.forFeature('router', routerReducers),
    EffectsModule.forRoot([]),
    EffectsModule.forRoot([RouterEffect]),
    StoreRouterConnectingModule.forRoot(
      {
         serializer: CustomSerializer,
      }
    ),
    StoreDevtoolsModule.instrument({
      name: 'Movie App DevTools',
      maxAge:25,
      logOnly: environment.production
    }),
    environment.production !== true ? HttpClientInMemoryWebApiModule.forRoot(MovieData, { delay: 0 }) : [],
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
