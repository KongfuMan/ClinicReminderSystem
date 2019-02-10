import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { SigninComponent } from './user/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import {SendComponent} from './home/send/send.component';
import {ListComponent} from './home/list/list.component';
import {HistoryComponent} from './home/history/history.component';
import {AuthGuard} from "./guards/auth.guard";
import {ReminderItemComponent} from './home/reminder-item/reminder-item.component';
import {ErrorComponent} from './error/error.component';

const appRoutes: Routes = [
  //要注意这里这里的顺序，angular总是从前往后解析
  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'home',
    redirectTo:'home/send',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component : SigninComponent,
  },
  {
    path: 'signup',
    component : SignupComponent,  //correspond to the base component
  },
  {
    path: 'home',
    component : HomeComponent,
    children: [
      {path:'send', component:SendComponent},
      {path:'list', component:ListComponent},
      {path:'list/:id', component:ReminderItemComponent},
      {path:'history',component:HistoryComponent}
      ]
  },
  {
    path:'',
    redirectTo:'home/send',
    pathMatch: 'full'
  },
  {
    path:'not-found',
    component:ErrorComponent,
    data:{message: 'Page not found'}
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
