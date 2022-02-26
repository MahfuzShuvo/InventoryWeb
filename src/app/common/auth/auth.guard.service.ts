import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn:'root'
})
export class AuthGuardService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private router: Router) {

  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  setLoggedIn() {
    this.loggedIn.next(true);
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem("Token");
  }
}
