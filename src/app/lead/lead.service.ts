import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignService } from '../sign/sign.service';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  environment = environment;

  constructor(
    private http: HttpClient,
    private signService: SignService,
  ) { }

  getLeads() {
    var authorization: any = this.signService.getToken();

    return this.http.get(this.environment.baseUrl + 'api/contacts', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authorization.access_token,
      })
    }).toPromise();
  }

  createLead(params: any) {
    var authorization: any = this.signService.getToken();

    return this.http.post(this.environment.baseUrl + 'api/contacts', params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authorization.access_token,
      })
    }).toPromise();
  }
}
