import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: string = "";
  redirectUrl: string = "";
  constructor() { }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(userName: string, password: string): void {
    // Code here would log into a back end service and replace if conditions
    // and return user information
    if (userName == password) {
      this.currentUser = userName;
    }
  }

  logout(): void {
    this.currentUser = "";
  }
}
