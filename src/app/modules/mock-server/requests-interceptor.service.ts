import { MockSrvRouter } from './router.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private router: MockSrvRouter) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const response: Promise<HttpResponse<any>> = this.router.serve(req);
    if (!response) {
      return next.handle(req);
    }

    return fromPromise(response);
  }
}
