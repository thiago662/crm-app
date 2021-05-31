import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sign } from './sign.model';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  // baseUrl = 'http://127.0.0.1:8000/oauth/token';
  baseUrl = 'http://localhost:8000/oauth/token';
  // sign: sign = {};

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string){
    // this.sign = {
    //   clientId: "2",
    //   clientSecret: "5oobfaavQXXm2t6KA9HdFPxuUljbQ01YK0mTTYVk",
    //   grantType: "password",
    //   password: password,
    //   username: email,
    // };

    var sign = {
      client_id: "2",
      client_secret: "5oobfaavQXXm2t6KA9HdFPxuUljbQ01YK0mTTYVk",
      grant_type: "password",
      password: password,
      username: email,
    };

    // return this.http.post(this.baseUrl, this.sign).toPromise();
    return this.http.post(this.baseUrl, sign).toPromise();
  }
}
