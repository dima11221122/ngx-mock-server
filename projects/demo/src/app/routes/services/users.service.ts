import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  all(): Observable<User[]> {
    return this.http.get<User[]>('/users');
  }

  one(id: number): Observable<User> {
    return this.http.get<User>(`/users/${id}`);
  }

  search(query: string): Observable<User[]> {
    return this.http.get<User[]>('/users', {
      params: {
        query
      }
    });
  }
}
