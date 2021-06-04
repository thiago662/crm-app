import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crm-app';
  isUserLogged = false;
  components = [
    'Teste',
    'teste'
  ]

  ngOnInit(): void {
    // this.isUserLogged = this.userService.isUserLogged();
    this.isUserLogged = true;

  }
}
