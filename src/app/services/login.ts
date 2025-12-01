import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  isLoggedIn = false;
  userImage = "";
  userEmail = "";

  login(image: string, email: string, password: string) {
    // Dummy check
    if (email && password.length >= 6) {
      this.isLoggedIn = true;
      this.userImage = image;
      this.userEmail = email;
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    this.userImage = "";
    this.userEmail = "";
  }
}
