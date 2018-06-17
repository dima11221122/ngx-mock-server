import { RouterModule, Routes } from '@angular/router';
import { LazyMainComponent } from '../components/lazy-main/lazy-main.component';
import { NgModule } from '@angular/core';
import { ItemsResolverService } from './resolvers/items-resolver.service';
import { ItemsService } from '../services/items.service';

export const routes: Routes = [
  {
    path: '',
    component: LazyMainComponent,
    resolve: {
      items: ItemsResolverService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    ItemsResolverService,
    ItemsService
  ]
})
export class LazyRoutingModule {}

