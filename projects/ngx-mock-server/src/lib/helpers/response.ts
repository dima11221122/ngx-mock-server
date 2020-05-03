import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export function json<T>(status: number, body: T, timeout = 250): Observable<HttpResponse<T>> {
  let headers = new HttpHeaders();
  headers = headers.append('Content-Type', 'application/json');
  return requestWithDelay(
    new HttpResponse<T>({
      status,
      body,
      headers
    }),
    timeout
  );
}


export function res<T>(status: number, body: T, timeout = 250): Observable<HttpResponse<T>> {
  return requestWithDelay(
    new HttpResponse<T>({
      status,
      body
    }),
    timeout
  );
}

export function requestWithDelay<T>(data: HttpResponse<T>, timeout = 250): Observable<HttpResponse<T>> {
  return new Observable<HttpResponse<T>>(observer => {
    setTimeout(() => {
      observer.next(data);
      observer.complete();
    }, timeout);
  });
}
