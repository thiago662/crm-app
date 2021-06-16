import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignService } from '../sign/sign.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  environment = environment;

  constructor(
    private http: HttpClient,
    private signService: SignService,
  ) { }

  getUsers() {
    var authorization: any = this.signService.getToken();

    // return this.http.get(this.environment.baseUrl + 'api/users/?' + 'df=' + 'sagsfg' + '&sg=' + 'sgh').toPromise();

    return this.http.get(this.environment.baseUrl + 'api/users', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authorization.access_token,
      })
    }).toPromise();
  }
}
