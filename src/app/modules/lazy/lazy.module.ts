import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyMainComponent } from './components/lazy-main/lazy-main.component';
import { MockServerModule } from '../../../../mock-server/module';
import { mockRoutes } from './mock';
import { LazyRoutingModule } from './routes/lazy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MockServerModule.forChild({
      routes: mockRoutes
    }),
    LazyRoutingModule
  ],
  declarations: [LazyMainComponent]
})
export class LazyModule { }
