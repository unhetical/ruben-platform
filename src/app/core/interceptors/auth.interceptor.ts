import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user: User = JSON.parse(localStorage.getItem('user') || '');

    if (!user) {
      return next.handle(req);
    }

    req.headers.set('Cache-Control', 'max-age=31536000, must-revalidate');
    req.headers.set('Authorization', `Bearer ${user.uid}`);

    const headers = req.clone({
      headers: req.headers,
    });
    return next.handle(headers);
  }
}
