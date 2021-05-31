import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sign } from './sign.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SignService {
  environment = environment;

  sign: Sign = {
    client_id: '2',
    client_secret: '5oobfaavQXXm2t6KA9HdFPxuUljbQ01YK0mTTYVk',
    grant_type: 'password',
    password: '',
    username: '',
  };

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string){
    this.sign.password = password;
    this.sign.username = email;

    return this.http.post(this.environment.baseUrl + 'oauth/token', this.sign).toPromise();
  }
}
