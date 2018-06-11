import { HttpRequest, HttpResponse } from '@angular/common/http';
import { MockRequestParameters } from './mock-request-parameters';

export type RouteCallback =
  (req?: HttpRequest<any>, queryParams?: MockRequestParameters, ...params: string[]) => Promise<HttpResponse<any>>;
export type AvailableMethod = 'POST' | 'PUT' | 'PATCH' | 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS';

export class RouteDeclaration {
  method: AvailableMethod;
  path: string | RegExp;
  callback: RouteCallback;
}
