import { Component } from '@angular/core';
import { SignService } from './sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {

  constructor(
    private signService: SignService,
  ) { }

  login(): void{
    this.signService.login('thiago@followize.com.br', '@123mudar')
      .then((data: any) => {
        console.log(data);
        localStorage.setItem('accessToken', data.access_token);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
      });
  }
}
