import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignUpCredentials {
  username: string;
  password: string;
  confirmPassword: string;
}

interface SignInCredentials{
  username: string;
  password: string;
}

interface SignUpResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com';
  signedin$:any = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username,
      }
    );
  }

  signup(credentials: SignUpCredentials) {
    return this.http
      .post<SignUpResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http
      .get<SignedinResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({authenticated}) => {
          this.signedin$.next(authenticated);
        })
      );
  }

  signout(){
    return this.http
    .post(`${this.rootUrl}/auth/signout`, {})
    .pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

  signin(credentials: SignInCredentials) {
    return this.http
      .post<SignInCredentials>(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
}
