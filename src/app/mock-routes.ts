import { json, RouteDeclaration } from '../../mock-server/module/index';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { MockRequestParameters } from '../../mock-server/module/interfaces/mock-request-parameters';

const users = [
  { id: 1, username: 'user1' },
  { id: 2, username: 'user2' }
];

export const usersCallback = (): Promise<HttpResponse<any>> => {
  return json(200, users);
}

export const userCallback = (req?: HttpRequest<any>): Promise<HttpResponse<any>> => {
  const id = +req.url.match(/\d+/)[0];
  return json(200, users.find(it => it.id === id));
}

export const searchCallback = (req?: HttpRequest<any>, queryParams?: MockRequestParameters): Promise<HttpResponse<any>> => {
  const res = users.filter((user) => user.username.match(queryParams.query));
  return json(200, res);
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
  },
  {
    path: '/users?query',
    method: 'GET',
    callback: searchCallback
  }
]
