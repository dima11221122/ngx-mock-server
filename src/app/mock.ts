import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouteDeclaration, json } from 'ngx-mock-server';

const users = [
  { id: 1, username: 'user1' },
  { id: 2, username: 'user2' }
];

export function usersCallback(req?: HttpRequest<any>): Observable<HttpResponse<any>> {
  const query = req.params.get('query');
  return json(200, query ? users.filter(it => it.username.match(query)) : users);
}

export function userCallback(req?: HttpRequest<any>): Observable<HttpResponse<any>> {
  const id = +req.url.match(/\d+/)[0];
  return json(200, users.find(it => it.id === id));
}

export const appMockRoutes: RouteDeclaration[] = [
  {
    path: '/users',
    method: 'GET',
    callback: usersCallback
  },
  {
    path: '/users/:id',
    method: 'GET',
    callback: userCallback
  }
]
