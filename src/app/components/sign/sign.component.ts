import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from './auth.model';
import { SignService } from './sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  email: string = '';
  password: string = '';

  constructor(
    private signService: SignService,
    private router: Router,
  ) { }

  login(): void {
    this.signService.authorization(this.email, this.password)
      .then((data: auth) => {
        this.signService.setToken(data);
        this.router.navigate(['/profile']);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
      });
  }
}
