import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxFlamegraphModule} from 'ngx-flamegraph';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFlamegraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
