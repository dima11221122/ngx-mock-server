import { json, RouteDeclaration } from '../../mock-server/module/index';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { MockRequestParameters } from '../../mock-server/module/interfaces/mock-request-parameters';

const users = [
  { id: 1, username: 'user1' },
  { id: 2, username: 'user2' }
];

export const usersCallback = (req?: HttpRequest<any>): Promise<HttpResponse<any>> => {
  const query = req.params.get('query');
  return json(200, query ? users.filter(it => it.username.match(query)) : users);
}

export const userCallback = (req?: HttpRequest<any>): Promise<HttpResponse<any>> => {
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
