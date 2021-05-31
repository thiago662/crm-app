import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignComponent } from './components/sign/sign.component';
import { ProfileComponent } from './components/profile/profile.component'

const routes: Routes = [
  {
    path: '',
    component: SignComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
