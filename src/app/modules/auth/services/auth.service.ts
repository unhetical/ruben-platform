import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLogin() {
    // TODO: Login page & methods to validate jwt token
    const token = localStorage.getItem('auth_token');
    return token;
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

  setToken() {
    localStorage.setItem('auth_token', 'XXX');
  }

  removeToken() {
    localStorage.removeItem('auth_token');
  }

  goLogin() {
    this.router.navigateByUrl('/login');
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
