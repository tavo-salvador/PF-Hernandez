import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, tap } from 'rxjs';

export interface LoginSuccessful {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  apiUrl = 'https://reqres.in';


  constructor( private readonly httpClient: HttpClient, private readonly router: Router, ) {}

  login(data: { email: string; password: string }): Observable<any> {

    const resp = this.httpClient
      .post<LoginSuccessful>(`${this.apiUrl}/api/login`, data)
      .pipe(
        tap((data) => localStorage.setItem('token', data.token))
      );
    return resp;  
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const lsToken = localStorage.getItem('token');

    return of(lsToken)
      .pipe(
        tap((token) => {
          if (!token) throw new Error('Token invalido')
        }),
        map(val => true),
        catchError(() => of(false))
      )
  }

}
