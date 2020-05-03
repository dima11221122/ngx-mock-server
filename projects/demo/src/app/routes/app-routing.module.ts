import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { UsersResolverService } from './resolvers/users-resolver.service';
import { NgxMockServerModule } from 'ngx-mock-server';
import { UserComponent } from '../components/main/user/user.component';
import { UserResolverService } from './resolvers/user-resolver.service';
import { UsersService } from './services/users.service';
import { MenuComponent } from '../components/menu/menu.component';

export const routes: Routes =  [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'users',
        component: MainComponent,
        resolve: {
          users: UsersResolverService
        },
        children: [
          {
            path: ':id',
            component: UserComponent,
            resolve: {
              user: UserResolverService
            }
          },
        ]
      },
      {
        path: 'lazy',
        loadChildren: () => import('./../modules/lazy/lazy.module').then(m => m.LazyModule)
      },
      { path: '', redirectTo: 'users', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxMockServerModule.forChild({routes: []})
  ],
  exports: [RouterModule],
  providers: [
    UsersService,
    UsersResolverService,
    UserResolverService
  ]
})
export class AppRoutingModule {}
