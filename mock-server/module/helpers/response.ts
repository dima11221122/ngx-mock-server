import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export function json<T>(status: number, obj: T, timeout = 250): Observable<HttpResponse<T>> {
  const h = new HttpHeaders();
  h.append('Content-Type', 'application/json');
  return requestWithDelay(
    new HttpResponse<T>({
      status: status,
      body: obj,
      headers: h
    }),
    timeout
  );
}


export function res<T>(status: number, body: T, timeout = 250): Observable<HttpResponse<T>> {
  return requestWithDelay(
    new HttpResponse<T>({
      status: status,
      body: body
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
