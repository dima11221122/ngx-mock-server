import { HttpHeaders, HttpResponse } from '@angular/common/http';

export function json<T>(status: number, obj: T, timeout = 250): Promise<HttpResponse<T>> {
  const h = new HttpHeaders();
  h.append('Content-Type', 'application/json');
  return delay(
    new HttpResponse<T>({
      status: status,
      body: obj,
      headers: h
    }),
    timeout
  );
}


export function res<T>(status: number, body: T, timeout = 250): Promise<HttpResponse<T>> {
  return delay(
    new HttpResponse<T>({
      status: status,
      body: body
    }),
    timeout
  );
}

export function delay<T>(data: HttpResponse<T>, timeout = 250): Promise<HttpResponse<T>> {
  return new Promise<HttpResponse<T>>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
}
