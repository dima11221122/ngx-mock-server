import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxMockServerModule } from 'ngx-mock-server';
import { appMockRoutes } from './mock';
import { MainComponent } from './components/main/main.component';
import { UserComponent } from './components/main/user/user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routes/app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMockServerModule.forRoot({
      routes: appMockRoutes,
      enabled: true
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
