import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MockServerModule } from '../../mock-server/module/index';
import { appMockRoutes } from './mock-routes';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MockServerModule.forRoot({
      routes: appMockRoutes,
      enabled: true
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
