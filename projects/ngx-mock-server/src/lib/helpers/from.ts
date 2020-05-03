import { Observable } from 'rxjs';

export function from<T>(data: T): Observable<T> {
  return new Observable<T>(observer => {
    observer.next(data);
    observer.complete();
  });
}
