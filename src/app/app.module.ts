import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as Components from '../components';

@NgModule({
  declarations: [
    AppComponent,
    Components.HomeComponent,
    Components.PhotosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: Components.HomeComponent
      },
      {
        path: 'photos',
        component: Components.PhotosComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    Components.HomeComponent,
    Components.PhotosComponent
  ]
})
export class AppModule { }
