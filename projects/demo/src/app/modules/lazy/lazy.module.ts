import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyMainComponent } from './components/lazy-main/lazy-main.component';
import { NgxMockServerModule } from 'ngx-mock-server';
import { mockRoutes } from './mock';
import { LazyRoutingModule } from './routes/lazy-routing.module';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    NgxMockServerModule.forChild({
      routes: mockRoutes
    }),
    LazyRoutingModule,
    CdkTableModule,
    MatTableModule,
  ],
  declarations: [LazyMainComponent]
})
export class LazyModule { }
