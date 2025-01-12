import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginData } from './login-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  initState: LoginData = {loggedIn: false};
  subject = new BehaviorSubject<LoginData>(this.initState);
  loginData$: Observable<LoginData> = this.subject.asObservable();
  
  login() {
    const newState: LoginData = {loggedIn: true};
    this.subject.next(newState);
  }

  logout() {
    const newState: LoginData = {loggedIn: false};
    this.subject.next(newState);
  }
}
