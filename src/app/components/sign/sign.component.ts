import { Component, OnInit } from '@angular/core';
import { auth } from './auth.model';
import { SignService } from './sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor(
    private signService: SignService
  ) { }

  ngOnInit(): void {
  }

  login(): void{
    this.signService.login('thiago@followize.com.br', '@123mudar')
      .then(data => {
        console.log('then');
        console.log(data);
        localStorage.setItem('accessToken', data.access_token);
      })
      .catch(() => {
        console.log('catch');
      })
      .finally(() => {
        console.log('finally');
      });
  }
}
