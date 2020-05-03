import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsResolverService implements Resolve<Item[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.itemsService.all();
  }

  constructor(private itemsService: ItemsService) { }
}
