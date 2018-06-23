import { json, RouteDeclaration } from 'ngx-mock-server';

export function itemsCallback() {
  return json(200, [
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'}
  ]);
}

export const mockRoutes: RouteDeclaration[] = [
  {
    path: '/items',
    method: 'GET',
    callback: itemsCallback
  }
]
