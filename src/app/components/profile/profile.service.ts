import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = 'http://localhost:8000/api/users/profile';

  constructor(
    private http: HttpClient,
  ) { }

  getProfile(){
    return this.http.get(this.baseUrl).toPromise();
  }
}
