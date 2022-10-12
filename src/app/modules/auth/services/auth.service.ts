import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  User,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged$ = new Subject<boolean>();

  constructor(private router: Router, private auth: Auth) {}

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle(): Promise<UserCredential> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(): Promise<void> {
    this.router.navigateByUrl('/login');
    return signOut(this.auth);
  }

  setUser(user: User): void {
    const item = localStorage.getItem('user');
    if (item) {
      localStorage.removeItem('user');
    }

    localStorage.setItem('user', JSON.stringify(user));
    this.logged$.next(true);
  }

  removeUser(): void {
    localStorage.removeItem('user');
    this.logged$.next(false);
  }

  getUser(): User {
    let user = null;
    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user') || '');
    }
    return user;
  }
}
