import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MockServerModule } from '../../mock-server/module';
import { appMockRoutes } from './mock';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/main/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
