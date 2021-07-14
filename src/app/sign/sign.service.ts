import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sign } from './sign.model';
import { environment } from '../../environments/environment';
import { auth } from './auth.model';
@Injectable({
  providedIn: 'root',
})
export class SignService {
  environment = environment;

  sign: Sign = {
    client_id: this.environment.clientId,
    client_secret: this.environment.clientSecret,
    grant_type: this.environment.grantType,
    password: '',
    username: '',
  };

  constructor(
    private http: HttpClient,
  ) { }

  authorization(email: string, password: string): Promise<auth> {
    this.sign.password = password;
    this.sign.username = email;

    return this.http.post<auth>(this.environment.baseUrl + 'oauth/token', this.sign).toPromise();
  }

  setToken(token: auth): void {
    localStorage.setItem('accessToken', JSON.stringify(token));
  }

  getToken(): auth | void {
    if (typeof localStorage.getItem('accessToken') == 'string') {
      return JSON.parse(<string>localStorage.getItem('accessToken'));
    }
  }
}
