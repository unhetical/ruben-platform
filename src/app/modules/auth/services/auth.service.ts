import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token$ = new Subject<any>();
  token!: any;

  constructor(private router: Router) {}

  isLogin(): boolean {
    // TODO: Login page & methods to validate jwt token
    this.token = localStorage.getItem('auth_token') ? true : false;
    this.token$.next(this.token);
    return this.token;
  }

  login() {
    if (!this.isLogin()) {
      this.setToken();
    }
    this.goHome();
  }

  logout() {
    this.removeToken();
    this.goLogin();
  }

  getToken(): Observable<any> {
    return this.token$.asObservable();
  }

  setToken(token = true): void {
    localStorage.setItem('auth_token', 'XXX');
    this.token = token;
    this.token$.next(token);
  }

  removeToken() {
    localStorage.removeItem('auth_token');
    this.token = false;
    this.token$.next(this.token);
  }

  goLogin() {
    this.router.navigateByUrl('/login');
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
