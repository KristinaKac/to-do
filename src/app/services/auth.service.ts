import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = `${environment.backendOrigin}/auth`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public get token(): string | null {
    return localStorage.getItem('token');
  }

  public get user(): IUser | null {
    const token = localStorage.getItem('token');
    if (!token) { return null }
    return this.parseJWT(token);
  }

  login(email: string, password: string): Observable<IUser | null> {
    return this.http
      .post<{ token: string }>(`${this.baseURL}/login`, { email, password })
      .pipe(
        tap((response: { token: string }) =>
          localStorage.setItem('token', response.token)
        ),
        map((response: { token: string }) =>
          this.parseJWT(response.token)
        ),
        catchError((err): Observable<null> => {
          alert(err.error.message)
          return of(null);
        })
      )
  }
  registration(fio: string, email: string, password: string): Observable<IUser | null> {
    return this.http
      .post<{ token: string }>(`${this.baseURL}/registration`, { fio, email, password })
      .pipe(
        tap((response: { token: string }) =>
        localStorage.setItem('token', response.token)
        ),
        map((response: { token: string }) =>
          this.parseJWT(response.token)
        ),
        catchError((err): Observable<null> => {
          alert(err.error.message)
          return of(null);
        })
      )
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  private parseJWT(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
}
