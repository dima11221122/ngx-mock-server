import { HttpRequest, HttpResponse } from '@angular/common/http';
import { MockRequestParameters } from './mock-request-parameters';
import { Observable } from 'rxjs';

export type RouteCallback =
  (req?: HttpRequest<any>, queryParams?: MockRequestParameters, ...params: string[]) => Observable<HttpResponse<any>>;
export type AvailableMethod = 'POST' | 'PUT' | 'PATCH' | 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS';

export class RouteDeclaration {
  method: AvailableMethod;
  path: string | RegExp;
  callback: RouteCallback;
}
