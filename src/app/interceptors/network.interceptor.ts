import { finalize, Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { loadingOff, loadingOn } from '../reducers/main/main.actions';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userReq = request.clone({
      setHeaders: {
        'x-api-key': 'live_oYBTjScZZAklIzgkODT4lBgg2U5Z9X7P9qwsFq2xdc9G9iUs71sY3v7OE0pNH0oJ',
      }
    });

    this.store.dispatch(loadingOn());

    return next
      .handle(userReq)
      .pipe(finalize(() => {
        this.store.dispatch(loadingOff());
      }));
  }
}
