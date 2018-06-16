import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.users.all();
  }

  constructor(
    private users: UsersService
  ) {
  }
}
