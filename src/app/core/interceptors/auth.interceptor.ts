import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return next.handle(req);
    }

    req.headers.set('Cache-Control', 'max-age=3000, must-revalidate');
    req.headers.set('Authorization', `Bearer ${token}`);

    const headers = req.clone({
      headers: req.headers,
    });
    return next.handle(headers);
  }
}
