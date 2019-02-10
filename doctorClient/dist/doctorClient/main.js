(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _home_send_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/send/send.component */ "./src/app/home/send/send.component.ts");
/* harmony import */ var _home_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/list/list.component */ "./src/app/home/list/list.component.ts");
/* harmony import */ var _home_history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/history/history.component */ "./src/app/home/history/history.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _home_reminder_item_reminder_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/reminder-item/reminder-item.component */ "./src/app/home/reminder-item/reminder-item.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    //要注意这里这里的顺序，angular总是从前往后解析
    { path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: 'home',
        redirectTo: 'home/send',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
    },
    {
        path: 'signup',
        component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: 'send', component: _home_send_send_component__WEBPACK_IMPORTED_MODULE_5__["SendComponent"] },
            { path: 'list', component: _home_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"] },
            { path: 'list/:id', component: _home_reminder_item_reminder_item_component__WEBPACK_IMPORTED_MODULE_9__["ReminderItemComponent"] },
            { path: 'history', component: _home_history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"] }
        ]
    },
    {
        path: '',
        redirectTo: 'home/send',
        pathMatch: 'full'
    },
    {
        path: 'not-found',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
        data: { message: 'Page not found' }
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-loader></app-loader>\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {HomeService} from './home/services/home.service';

var AppComponent = /** @class */ (function () {
    //ngZone is used to fix the bug that
    //router.navigate is not execute inside the subscribe()
    function AppComponent(router, ngZone, authService) {
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.title = 'Clinic Reminder System';
    }
    //check if user has logged in at beginning
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //becareful you need to subscribe first
        this.authService.isAuthenticated().subscribe(function (loggedin) {
            if (!loggedin) {
                // this.router.navigate()
                _this.ngZone.run(function () {
                    _this.router.navigate(["/signin"]);
                });
            }
            else {
                _this.ngZone.run(function () {
                    _this.router.navigate(["/home/send"]);
                });
            }
        });
        this.authService.checkJwtLogin();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _home_send_send_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/send/send.component */ "./src/app/home/send/send.component.ts");
/* harmony import */ var _home_list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/list/list.component */ "./src/app/home/list/list.component.ts");
/* harmony import */ var _home_history_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/history/history.component */ "./src/app/home/history/history.component.ts");
/* harmony import */ var _home_services_web_socket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/services/web-socket.service */ "./src/app/home/services/web-socket.service.ts");
/* harmony import */ var _home_services_doctor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/services/doctor.service */ "./src/app/home/services/doctor.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_reminder_item_reminder_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/reminder-item/reminder-item.component */ "./src/app/home/reminder-item/reminder-item.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _services_loaderinterceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/loaderinterceptor */ "./src/app/services/loaderinterceptor.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// root module not need to export anything
// other modules don't need to import root module
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"],
                _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _home_send_send_component__WEBPACK_IMPORTED_MODULE_12__["SendComponent"],
                _home_list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"],
                _home_history_history_component__WEBPACK_IMPORTED_MODULE_14__["HistoryComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _home_reminder_item_reminder_item_component__WEBPACK_IMPORTED_MODULE_21__["ReminderItemComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_22__["ErrorComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_25__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () { return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].jwtName); },
                        whitelistedDomains: ['localhost:8080'],
                        headerName: 'Authorization',
                        authScheme: 'Bearer ',
                        throwNoTokenError: false,
                        skipWhenExpired: true
                    }
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_24__["MaterialModule"]
            ],
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtHelperService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _services_loaderinterceptor__WEBPACK_IMPORTED_MODULE_26__["LoaderInterceptor"], multi: true },
                _home_services_web_socket_service__WEBPACK_IMPORTED_MODULE_15__["WebSocketService"],
                _home_services_doctor_service__WEBPACK_IMPORTED_MODULE_16__["DoctorService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                _services_loader_service__WEBPACK_IMPORTED_MODULE_27__["LoaderService"]
            ],
            // A root NgModule always has a root component that is created during bootstrap,
            // but any NgModule can include any number of additional components,
            // which can be loaded through the router(this.router.navigate) or
            // created through the template(selector of subcomponent as a HTML tag)
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  {{errorMessage}}\n</h3>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// for all the url that doesn't exist


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.errorMessage = data['message'];
        });
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row >\n    <span class=\"mx-auto\">Clinic Reminder System</span>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <span class=\"mx-auto\">© 2018-{{date | date:'yyyy'}} Copyright Reserved</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.date = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space{\n  flex: 1 1 auto;\n}\n\n.logo-text{\n  color:white;\n}\n\n.logo-text:hover{\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n   <span>\n     <a routerLink=\"/\" routerLinkActive='active' class=\"logo-text\">Clinic Reminder System</a>\n   </span>\n   <span class=\"fill-remaining-space\"></span>\n   <span>\n      <button mat-button *ngIf=\"username.length===0\">\n        <a routerLink=\"/signin\">Signin</a>\n      </button>\n      <button mat-button *ngIf=\"username.length!==0\" (click)=\"onSignout()\">\n        Signout\n      </button>\n   </span>\n  <span>\n    <button mat-button>My Profile</button>\n  </span>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(jwtService, authService) {
        this.jwtService = jwtService;
        this.authService = authService;
        this.username = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var user = this.jwtService.decodeToken(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].jwtName));
        if (user) {
            this.username = user.sub;
        }
    };
    HeaderComponent.prototype.onSignout = function () {
        console.log('signout clicked');
        this.authService.signout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/history/history.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/history/history.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/history/history.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/history/history.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  history works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/history/history.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/history/history.component.ts ***!
  \***************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/home/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/home/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\n  margin-left: 5%;\n}\n\nmat-card-content.content{\n  margin-left: 10%;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <app-header></app-header>\n  </div>\n  <div>\n    <mat-card class=\"border border-primary\">\n        <mat-card-header>\n          <nav mat-tab-nav-bar>\n              <a class=\"mx-5\" mat-tab-link routerLink='/home/send' routerLinkActive='active'>Create Reminder\n                <mat-icon class=\"example-tab-icon\">create</mat-icon>\n              </a>\n              <a class=\"mx-5\" mat-tab-link routerLink='/home/list' routerLinkActive='active'>Reminder List\n                <mat-icon class=\"example-tab-icon\">format_list_bulleted</mat-icon>\n              </a>\n              <a class=\"mx-5\" mat-tab-link routerLink='/home/history' routerLinkActive='active'>History Reminders\n                <mat-icon class=\"example-tab-icon\">history</mat-icon>\n              </a>\n          </nav>\n        </mat-card-header>\n        <br>\n        <mat-card-content>\n            <router-outlet></router-outlet>\n        </mat-card-content>\n    </mat-card>\n  </div>\n  <div>\n    <app-footer></app-footer>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_doctor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/doctor */ "./src/app/model/doctor.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Router} from '@angular/router';

// import {AuthenticationService} from '../services/authentication.service';
// import {environment} from "../../environments/environment";

var HomeComponent = /** @class */ (function () {
    function HomeComponent(jwtService) {
        this.jwtService = jwtService;
        this.doctor = new _model_doctor__WEBPACK_IMPORTED_MODULE_1__["Doctor"](null, null, null, null);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/list/list.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/list/list.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-done{\n  max-width: 80%;\n  color: white;\n  background-color: #4caf50;\n  align-content:center;\n}\n\n.card-undone{\n  max-width: 80%;\n  color: white;\n  background-color: #e57373;\n  align-content:center;\n}\n\nmat-card{\n  margin-left: 5.6%;\n}\n\nmat-card-actions.detail{\n  margin-left: 50%;\n}\n"

/***/ }),

/***/ "./src/app/home/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let reminder of reminders\">\n  <mat-card [ngClass]=\"onSelectClass(reminder)\" >\n    <mat-card-content>\n      <p class=\"center\">Description:{{reminder.description}}</p>\n      <p class=\"center\">Create at:{{reminder.create_at | date:\"HH/MM/dd/yy\"}}</p>\n      <p class=\"center\">Priority:{{reminder.priority}}</p>\n      <p class=\"center\">Duration:{{reminder.duration | date: \"HH\"}}</p>\n      <p class=\"center\">Done:{{reminder.done}}</p>\n    </mat-card-content>\n    <mat-card-actions class=\"detail\">\n      <a [routerLink]=\"['/home/list',reminder.reminderId]\" class=\"mat-raised-button\">Details</a>\n    </mat-card-actions>\n  </mat-card>\n  <br>\n</div>\n"

/***/ }),

/***/ "./src/app/home/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/home/services/doctor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(doctorService) {
        this.doctorService = doctorService;
        this.reminders = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doctorService.getAllReminders().subscribe(function (data) {
            if (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var reminder = data_1[_i];
                    _this.reminders.push(reminder);
                }
            }
        });
    };
    ListComponent.prototype.onSelectClass = function (reminder) {
        var classes = {
            "card-done": reminder.done,
            "card-undone": !reminder.done
        };
        return classes;
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/home/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/home/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/home/reminder-item/reminder-item.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/reminder-item/reminder-item.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/reminder-item/reminder-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/reminder-item/reminder-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row center-align\">\n  <div class=\"col s12 m6\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">{{reminder.reminderId}}</span>\n      </div>\n      <div class=\"card-action\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/reminder-item/reminder-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/reminder-item/reminder-item.component.ts ***!
  \***************************************************************/
/*! exports provided: ReminderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderItemComponent", function() { return ReminderItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_reminder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/reminder */ "./src/app/model/reminder.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReminderItemComponent = /** @class */ (function () {
    function ReminderItemComponent(route) {
        this.route = route;
        this.reminder = new _model_reminder__WEBPACK_IMPORTED_MODULE_1__["Reminder"]();
    }
    ReminderItemComponent.prototype.ngOnInit = function () {
        // this.reminder.reminderId = this.route.snapshot.params['id'];
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.reminder.reminderId = params['id']; });
        this.reminder.description = 'this is a fake reminder';
        this.reminder.priority = 1;
        this.reminder.duration = 1234;
        this.reminder.create_at = 128319241924;
    };
    ReminderItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reminder-item',
            template: __webpack_require__(/*! ./reminder-item.component.html */ "./src/app/home/reminder-item/reminder-item.component.html"),
            styles: [__webpack_require__(/*! ./reminder-item.component.css */ "./src/app/home/reminder-item/reminder-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ReminderItemComponent);
    return ReminderItemComponent;
}());



/***/ }),

/***/ "./src/app/home/send/send.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/send/send.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".send-container {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20%;\n}\n\n.send-container > * {\n  width: 60%;\n}\n\nbutton.submit{\n  margin-left: 40%;\n}\n"

/***/ }),

/***/ "./src/app/home/send/send.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/send/send.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #sendAReminderForm=\"ngForm\" (ngSubmit)=\"OnSubmit()\">\n  <div class=\"send-container\">\n    <mat-form-field hideRequiredMarker>\n      <input matInput placeholder=\"Input Description\" required name=\"Description\"\n             #Description=\"ngModel\" [(ngModel)]=\"reminder.description\">\n    </mat-form-field>\n\n    <mat-form-field hideRequiredMarker>\n      <input matInput placeholder=\"Input Duration(Hours)\" required name=\"Duration\" #Duration=\"ngModel\" [(ngModel)]=\"reminder.duration\">\n    </mat-form-field>\n\n    <mat-form-field hideRequiredMarker>\n      <mat-select placeholder=\"Select a patient\"  name=\"Patients\" #Patients=\"ngModel\" [(ngModel)] = \"reminder.patientName\">\n        <mat-option *ngFor=\"let p of patients\" [value] = \"p\">\n          {{p}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field hideRequiredMarker>\n      <mat-select placeholder=\"Set Priority\" name=\"Priority\" #Priority=\"ngModel\" [(ngModel)] = \"reminder.priority\">\n        <mat-option *ngFor=\"let p of priorities\" [value] = \"p.value\">\n          {{p.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"form-group\">\n    <button class=\"submit\" mat-flat-button [disabled]=\"!sendAReminderForm.valid\" type=\"submit\">Submit\n      <mat-icon>send</mat-icon>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/home/send/send.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/send/send.component.ts ***!
  \*********************************************/
/*! exports provided: SendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendComponent", function() { return SendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_reminder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/reminder */ "./src/app/model/reminder.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web-socket.service */ "./src/app/home/services/web-socket.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/home/services/doctor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendComponent = /** @class */ (function () {
    function SendComponent(websocketService, doctorService) {
        this.websocketService = websocketService;
        this.doctorService = doctorService;
        this.reminder = new _model_reminder__WEBPACK_IMPORTED_MODULE_1__["Reminder"]();
        this.patients = [];
        this.priorities = [
            { value: 0, viewValue: "High" },
            { value: 1, viewValue: "Middle" },
            { value: 2, viewValue: "Low" }
        ];
    }
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isConnect) {
            this.websocketService.connect();
            _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isConnect = true;
        }
        this.doctorService.getAllPatients().subscribe(function (patients) {
            if (patients) {
                for (var _i = 0, patients_1 = patients; _i < patients_1.length; _i++) {
                    var patient = patients_1[_i];
                    _this.patients.push(patient.patient.username);
                }
            }
        });
    };
    SendComponent.prototype.OnSubmit = function () {
        this.reminder.doctorName = this.doctorService.getUserName();
        this.websocketService.sendReminder(this.reminder);
    };
    SendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send',
            template: __webpack_require__(/*! ./send.component.html */ "./src/app/home/send/send.component.html"),
            styles: [__webpack_require__(/*! ./send.component.css */ "./src/app/home/send/send.component.css")]
        }),
        __metadata("design:paramtypes", [_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"],
            _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "./src/app/home/services/doctor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/home/services/doctor.service.ts ***!
  \*************************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoctorService = /** @class */ (function () {
    function DoctorService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    DoctorService.prototype.getAllReminders = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getAllReminder).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    DoctorService.prototype.getAllPatients = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getAllPatients).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    DoctorService.prototype.getUserName = function () {
        var userInfo = this.jwtHelper.decodeToken(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jwtName));
        if (userInfo === null) {
            return '';
        }
        return userInfo.sub;
    };
    DoctorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], DoctorService);
    return DoctorService;
}());



/***/ }),

/***/ "./src/app/home/services/web-socket.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/services/web-socket.service.ts ***!
  \*****************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
        var socket = new WebSocket(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wsconnetion);
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_1__["over"](socket);
    }
    WebSocketService.prototype.connect = function () {
        var _this = this;
        this.stompClient.connect({}, function (frame) {
            _this.stompClient.subscribe(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].doctorsubscribe, function (reminder) {
                console.log(reminder.body);
                alert('reminder is done');
            });
        });
    };
    WebSocketService.prototype.disconnect = function () {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
    };
    WebSocketService.prototype.sendReminder = function (reminder) {
        console.log(reminder);
        this.stompClient.send(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].doctorsend, {}, JSON.stringify(reminder));
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\n  visibility: hidden;\n}\n.loader-overlay {\n  position: absolute;\n  width: 100%;\n  z-index: 500000;\n  top: 0;\n}\n.loader {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #FFF;\n}\n.loader:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: red;\n  -webkit-animation: loading 2s linear infinite;\n          animation: loading 2s linear infinite;\n}\n@-webkit-keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n@keyframes loading {\n  from {left: -200px; width: 30%;}\n  50% {width: 30%;}\n  70% {width: 70%;}\n  80% {left: 50%;}\n  95% {left: 120%;}\n  to {left: 100%;}\n}\n"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.hidden]=\"!show\">\n  <div class=\"loader-overlay\">\n    <div *ngIf=\"show\" class=\"loader\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/model/doctor.ts":
/*!*********************************!*\
  !*** ./src/app/model/doctor.ts ***!
  \*********************************/
/*! exports provided: Doctor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
var Doctor = /** @class */ (function () {
    function Doctor(username, password, reminders, title) {
        this.username = username;
        this.password = password;
        this.reminders = reminders;
        this.title = title;
    }
    return Doctor;
}());



/***/ }),

/***/ "./src/app/model/reminder.ts":
/*!***********************************!*\
  !*** ./src/app/model/reminder.ts ***!
  \***********************************/
/*! exports provided: PRIORITY, Reminder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIORITY", function() { return PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reminder", function() { return Reminder; });
var PRIORITY;
(function (PRIORITY) {
    PRIORITY[PRIORITY["HIGH"] = 0] = "HIGH";
    PRIORITY[PRIORITY["MIDDLE"] = 1] = "MIDDLE";
    PRIORITY[PRIORITY["LOW"] = 2] = "LOW";
})(PRIORITY || (PRIORITY = {}));
var Reminder = /** @class */ (function () {
    function Reminder() {
        this.reminderId = -1;
        this.done = false;
    }
    return Reminder;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.logger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthenticationService.prototype.signin = function (doctor) {
        var _this = this;
        localStorage.clear();
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].signin_url, { 'doctor': doctor })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // signin successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jwtName, user.token);
                _this.logger.next(true);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.signout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jwtName);
        this.logger.next(false);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.logger;
    };
    AuthenticationService.prototype.checkJwtLogin = function () {
        var _this = this;
        var jwt = localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].jwtName);
        if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].authenticate_url).subscribe(function (jwt) {
                if (jwt && jwt.token) {
                    _this.logger.next(true);
                }
            });
        }
        else {
            this.logger.next(false);
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/loaderinterceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/loaderinterceptor.ts ***!
  \***********************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoaderInterceptor = /** @class */ (function () {
    function LoaderInterceptor(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.showLoader();
        return next.handle(req).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.onEnd();
            }
        }, function (err) {
            _this.onEnd();
        }));
    };
    LoaderInterceptor.prototype.onEnd = function () {
        this.hideLoader();
    };
    LoaderInterceptor.prototype.showLoader = function () {
        this.loaderService.show();
    };
    LoaderInterceptor.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    LoaderInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderInterceptor);
    return LoaderInterceptor;
}());



/***/ }),

/***/ "./src/app/user/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.signin-form{\n  margin-left: 30%;\n  margin-right: 30%;\n  margin-top:5%;\n  border: 1px solid grey;\n}\n"

/***/ }),

/***/ "./src/app/user/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <span class=\"card-title\">SIGN IN</span>\n          <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n            <div class=\"form-group\">\n              <label data-error=\"Required field!\">Username:</label>\n              <!-- 注意ngModel跟name属性的顺序不能搞反了 -->\n              <input type=\"text\" required #name=\"ngModel\" class=\"validate\" [class.is-invalid]=\"name.invalid && name.touched\"\n                     [(ngModel)]=\"userModel.username\" name=\"userName\">\n            </div>\n\n            <div class=\"form-group\">\n              <label data-error=\"Required field!\">Password:</label>\n              <input type=\"password\" required #password=\"ngModel\" class=\"validate\" [class.is-invalid]=\"password.invalid && password.touched\"\n                     [(ngModel)]=\"userModel.password\" name=\"password\">\n            </div>\n            <button [disabled]=\"!userForm.valid\" type=\"submit\" class=\"btn btn-primary\" name=\"action\">Submit\n            </button>\n          </form>\n      </div>\n      <div class=\"card-action\">\n        <a routerLink=\"/signup\">Sign up</a>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_model_doctor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/doctor */ "./src/app/model/doctor.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.userModel = new src_app_model_doctor__WEBPACK_IMPORTED_MODULE_2__["Doctor"](null, null, null, null);
        this.loading = false;
        this.submitted = false;
        this.returnUrl = 'home';
        this.error = '';
        this.jwtTokenName = 'token';
    }
    SigninComponent.prototype.ngOnInit = function () {
        localStorage.removeItem(this.jwtTokenName);
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.userModel);
        this.authenticationService.signin(this.userModel)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            if (data != null) {
                console.log('signin return data', data);
                _this.router.navigate([_this.returnUrl]);
            }
        }, function (error) {
            console.log(error);
            _this.error = error;
            _this.loading = false;
            localStorage.removeItem(_this.jwtTokenName);
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/user/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/user/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container  {\n  display: flex;\n  position: absolute;\n  top: 100px;\n  left: 450px;\n  height: 100%;\n  width: 100%;\n}\n\n.container .row {\n  margin: 0 auto;\n}\n\n.card {\n  width:400px;\n}\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col s12 m6\">\n    <div class=\"card\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title black-text\">Sign up</span>\n        <form class=\"col s12 white\" #userRegistrationForm=\"ngForm\" (ngSubmit)=\"OnSubmit(userRegistrationForm)\">\n\n          <div class=\"form-group\">\n            <label data-error=\"Required field!\" class=\"left black-text\">Username</label>\n            <input type=\"text\" required #name=\"ngModel\" class=\"validate\"  name=\"UserName\" #UserName=\"ngModel\" [(ngModel)]=\"user.username\" >\n          </div>\n\n          <div class=\"form-group\">\n            <label data-error=\"Required field!\" class=\"left black-text\">Password</label>\n            <input type=\"password\" required class=\"validate\" minlength=\"3\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"user.password\">\n          </div>\n\n          <div class=\"form-group\">\n            <label  class=\"left black-text\">Reenter your password</label>\n            <input type=\"password\" required class=\"validate\" minlength=\"3\" name=\"Password\" #Password=\"ngModel\" [(ngModel)]=\"user.password\">\n          </div>\n\n          <div class=\"form-group\">\n            <label  class=\"left black-text\">Email</label>\n            <input type=\"email\" required class=\"validate\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.password\">\n          </div>\n\n          <button [disabled]=\"!userRegistrationForm.valid\" class=\"btn btn-primary\" type=\"submit\" name=\"action\">Submit</button>\n        </form>\n      </div>\n      <div class=\"card-action\">\n        <a routerLink=\"/signin\">Sign in</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_doctor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/doctor */ "./src/app/model/doctor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.user = new _model_doctor__WEBPACK_IMPORTED_MODULE_1__["Doctor"](null, null, null, null);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.OnSubmit = function (userRegistrationForm) {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card grey lighten-2\">\n        <div class=\"card-tabs\">\n          <ul class=\"tabs tabs-fixed-width tabs-transparent\">\n            <li class=\"tab\">\n              <a routerLink='/login' routerLinkActive='active'>Sign In</a>\n            </li>\n            <li class=\"tab\">\n              <a  routerLink='/signup' routerLinkActive='active'>Sign Up</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-content white\">\n          <div class=\"row\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    wsconnetion: 'ws://localhost:8080/connect',
    doctorsubscribe: '/topic/receivedone',
    doctorsend: '/app/sendreminder',
    getAllReminder: '/doctor/getallreminders',
    getAllPatients: '/doctor/getallpatients',
    jwtName: 'token',
    isConnect: false,
    signin_url: '/user/signin',
    signup_url: '/user/signup',
    authenticate_url: '/user/authenticate'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenliang/Documents/GitHub/ClinicReminderSystem/doctorClient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map