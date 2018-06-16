import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get('/users');
  }

  constructor(
    private http: HttpClient
  ) {
  }
}
