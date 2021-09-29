import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let tokenAuth = localStorage.getItem('token');
    request = request.clone({
      setHeaders: {
        Authorization: `${tokenAuth}`,
      },
    });
    return next.handle(request);
  }
}
