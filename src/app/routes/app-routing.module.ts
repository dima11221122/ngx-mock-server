import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { UsersResolverService } from './resolvers/users-resolver.service';
import { MockServerModule } from '../../../mock-server/module';

export const routes: Routes =  [
  {
    path: '',
    component: MainComponent,
    resolve: {
      users: UsersResolverService
    },
    children: [
      {
        path: 'lazy',
        loadChildren: './../modules/lazy/lazy.module#LazyModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MockServerModule.forChild({routes: []})
  ],
  exports: [RouterModule],
  providers: [
    UsersResolverService
  ]
})
export class AppRoutingModule {}
