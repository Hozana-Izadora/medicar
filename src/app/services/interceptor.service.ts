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
    request = request.clone({
      // body:{...request.body,
      //   'username':"hozana-izadora",
      //   'password':"izadora2352"
      // }
      setHeaders: {
        Authorization: 'Token 5eb4fdc343dd922663945a0496dca7569b2514ab',
      },
    });
    return next.handle(request);
  }
}
