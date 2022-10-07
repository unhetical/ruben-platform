import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLogin() {
    // TODO: Login page & methods to validate jwt token
    return true;
  }
}
