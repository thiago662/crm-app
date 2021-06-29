import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignComponent } from './sign/sign.component';
import { ProfileComponent } from './profile/profile.component'
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadComponent } from './lead/lead.component';
import { ReportComponent } from './report/report.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'sign',
    component: SignComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'lead',
    component: LeadComponent,
  },
  {
    path: 'relatorio',
    component: ReportComponent,
  },
  {
    path: 'lixeira',
    component: TrashComponent,
  },
  {
    path: 'usuario',
    component: UserComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    redirectTo: 'sign',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
