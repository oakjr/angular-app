import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = signal(false);
  private _username = signal<string | null>(null);

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this._isLoggedIn.set(true);
      this._username.set(username);
      return true;
    }
    return false;
  }

  logout() {
    this._isLoggedIn.set(false);
    this._username.set(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this._isLoggedIn();
  }

  getUsername() {
    return this._username();
  }
}
