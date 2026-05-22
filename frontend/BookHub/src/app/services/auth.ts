import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { LoginForm } from '../models/login-form';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../environment';

interface JwtPayload {
  exp: number;
}
@Injectable({
  providedIn: 'root',
})


export class Auth {
  // add a controller that check token dura'
   private apiUrl = `${environment.apiUrl}/auth`; // check api

  constructor(private http: HttpClient) {}

  

  register(data: User): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/register`,
      data
    ).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  login(data: LoginForm): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      data
    ).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

    isLoggedIn(): boolean {

      return !this.isTokenExpired();
    }

  isTokenExpired(): boolean {

  const token = this.getToken();

  if (!token) {
    return true;
  }

  try {

    const decoded = jwtDecode<JwtPayload>(token);

    if (!decoded.exp) {
      return true;
    }

    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp < currentTime;

  } catch (error) {

    return true;
  }
}
}

