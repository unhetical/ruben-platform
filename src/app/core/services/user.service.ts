import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  constructor() {}

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }

  getToken(){
    this.user = JSON.parse(localStorage.getItem('user') || '');
    return this.user.uid;
  }
}
