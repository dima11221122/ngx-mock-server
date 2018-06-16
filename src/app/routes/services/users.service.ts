import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get('/users');
  }

  one(id: number) {
    return this.http.get(`/users/${id}`);
  }

  search(query: string) {
    return this.http.get('/users', {
      params: {
        query
      }
    });
  }
}
