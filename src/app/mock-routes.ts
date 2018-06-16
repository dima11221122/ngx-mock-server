import { json, RouteDeclaration } from '../../mock-server/module/index';
import { HttpResponse } from '@angular/common/http';

export const usersCallback = (): Promise<HttpResponse<any>> => {
  return json(200, [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' }
  ]);
}

export const appMockRoutes: RouteDeclaration[] = [
  {
    path: '/users',
    method: 'GET',
    callback: usersCallback
  }
]
