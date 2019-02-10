import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './services/authentication.service';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './user/signup/signup.component';
import { AppRoutingModule } from './app-routing.module'
import { JwtModule,JwtInterceptor,JwtHelperService } from '@auth0/angular-jwt';
import { SendComponent } from './home/send/send.component';
import { ListComponent } from './home/list/list.component';
import { HistoryComponent } from './home/history/history.component';
import { WebSocketService } from './home/services/web-socket.service';
import { DoctorService } from './home/services/doctor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from "./guards/auth.guard";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReminderItemComponent } from './home/reminder-item/reminder-item.component';
import { ErrorComponent } from './error/error.component';
import { environment } from '../environments/environment';

import { MaterialModule } from './material.module';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './services/loaderinterceptor';
import { LoaderService } from './services/loader.service';

// root module not need to export anything
// other modules don't need to import root module
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    HomeComponent,
    SendComponent,
    ListComponent,
    HistoryComponent,
    HeaderComponent,
    FooterComponent,
    ReminderItemComponent,
    ErrorComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: ()=>localStorage.getItem(environment.jwtName),
        whitelistedDomains: ['localhost:8080'],
        headerName: 'Authorization',
        authScheme: 'Bearer ',
        throwNoTokenError: false,
        skipWhenExpired: true
      }
    }),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthenticationService,
    JwtHelperService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    WebSocketService,
    DoctorService,
    AuthGuard,
    LoaderService
  ],
  // A root NgModule always has a root component that is created during bootstrap,
  // but any NgModule can include any number of additional components,
  // which can be loaded through the router(this.router.navigate) or
  // created through the template(selector of subcomponent as a HTML tag)
  bootstrap: [AppComponent]
})
export class AppModule { }
