import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MockServerModule } from './modules/mock-server';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MockServerModule.forRoot({
      routes: []
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
