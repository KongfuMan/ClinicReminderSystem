webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_internal_operators__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_internal_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_internal_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvider = /** @class */ (function () {
    function AuthProvider(httpClient, storage) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.signin_url = '/user/signin';
        this.jwtTokenName = 'jwt_token';
        this.authUser = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["ReplaySubject"](1);
    }
    AuthProvider.prototype.checkJwtLogin = function () {
        var _this = this;
        // this.storage.remove(this.jwtTokenName);
        // console.log('checkjwtLogin()');
        this.storage.get(this.jwtTokenName).then(function (jwt) {
            if (jwt) {
                _this.authUser.next(true);
            }
            else {
                localStorage.removeItem(_this.jwtTokenName);
                _this.storage.remove(_this.jwtTokenName).then(function () { return _this.authUser.next(false); });
            }
        });
    };
    AuthProvider.prototype.signin = function (patient) {
        var _this = this;
        //A pipe takes in data as input and transforms it to a desired output
        console.log('auth:signin');
        return this.httpClient.post(this.signin_url, { 'patient': patient })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_internal_operators__["tap"])(function (jwt) { return _this.handleJwtResponse(jwt); }));
    };
    AuthProvider.prototype.handleJwtResponse = function (jwt) {
        var _this = this;
        localStorage.setItem(this.jwtTokenName, jwt.token);
        return this.storage.set(this.jwtTokenName, jwt.token)
            .then(function () { return _this.authUser.next(true); })
            .then(function () { return jwt.token; });
    };
    AuthProvider.prototype.signout = function () {
        var _this = this;
        localStorage.removeItem(this.jwtTokenName);
        this.storage.remove(this.jwtTokenName).then(function () { return _this.authUser.next(null); });
    };
    AuthProvider.prototype.signup = function (values) {
        // return this.httpClient.post(this.url, values, {responseType: 'text'})
        //   .pipe(tap(jwt => {
        //     if (jwt !== 'EXISTS') {
        //       return this.handleJwtResponse(jwt);
        //     }
        //     return jwt;
        //   }));
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stompjs__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stompjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WebsocketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WebsocketProvider = /** @class */ (function () {
    function WebsocketProvider(http) {
        this.http = http;
        this.ws_connection = 'ws://localhost:8080/connect';
        this.patient_subscribe = '/topic/receivereminder';
        this.patient_send = '/app/senddone';
        this.stompClient = __WEBPACK_IMPORTED_MODULE_2_stompjs__["over"](new WebSocket(this.ws_connection));
        // (void) connect(headers, connectCallback): Called upon a successful connect or reconnect
        // this.stompClient.connect({},frame=>{
        //   this.stompClient.subscribe(this.patient_subscribe, reminder=>{
        //     // ;
        //     // console.log('curReminder: ', this.curReminder.description);
        //     this.reminders.push(JSON.parse(reminder.body));
        //     // console.log(this.reminders.length);
        //
        //
        //   })
        // })
    }
    WebsocketProvider.prototype.connect = function (cbfun) {
        var _this = this;
        this.stompClient.connect({}, function (frame) {
            _this.stompClient.subscribe(_this.patient_subscribe, cbfun);
        });
    };
    WebsocketProvider.prototype.sendDoneMark = function (reminder) {
        this.stompClient.send(this.patient_send, {}, JSON.stringify(reminder));
    };
    WebsocketProvider.prototype.disconnect = function () {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
    };
    WebsocketProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], WebsocketProvider);
    return WebsocketProvider;
}());

//# sourceMappingURL=websocket.js.map

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/reminder/reminder.module": [
		301
	],
	"../pages/signin/signin.module": [
		268
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 267;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */]),
            ],
        })
    ], SigninPageModule);
    return SigninPageModule;
}());

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_internal_operators__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_internal_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_internal_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Patient__ = __webpack_require__(591);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {HomePage} from "../home/home";
// import {finalize} from "rxjs/operators";
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, loadingCtrl, authProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.patient = new __WEBPACK_IMPORTED_MODULE_4__models_Patient__["a" /* Patient */]();
    }
    SigninPage.prototype.signin = function (value) {
        // console.log("begin signin 1");
        // console.log("this.patient:  ",this.patient);
        this.authProvider.signin(this.patient)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_internal_operators__["first"])())
            .subscribe(function (data) { console.log('success: ', "signin success"); }, function (err) { return console.log('error: ', err); });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/chenliang/Documents/GitHub/ClinicReminderSystem/patientApp/src/pages/signin/signin.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Signin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="signin(form.value)" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [required]="true" name="username" #username="ngModel" [(ngModel)] = "patient.username"\n                   [class.invalid]="username.errors && username.dirty"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="username.errors?.required && username.dirty">\n        Username is required\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [required]="true" name="password"  #password="ngModel" [(ngModel)] = patient.password\n                   [class.invalid]="password.errors && password.dirty"></ion-input>\n      </ion-item>\n      <ion-item class="error-message" *ngIf="password.errors?.required && password.dirty">\n        Password is required\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block type="submit" [disabled]="!form.valid">Login</button>\n      </div>\n\n      <div padding>\n        <button ion-button color="secondary" block type="button" (click)="signup()">Sign up</button>\n      </div>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/chenliang/Documents/GitHub/ClinicReminderSystem/patientApp/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderPageModule", function() { return ReminderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reminder__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReminderPageModule = /** @class */ (function () {
    function ReminderPageModule() {
    }
    ReminderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reminder__["a" /* ReminderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reminder__["a" /* ReminderPage */]),
            ],
        })
    ], ReminderPageModule);
    return ReminderPageModule;
}());

//# sourceMappingURL=reminder.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_websocket__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReminderPage = /** @class */ (function () {
    function ReminderPage(navCtrl, navParams, wsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wsProvider = wsProvider;
        this.reminder = navParams.get('reminder');
    }
    ReminderPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ReminderPage');
        // console.log(this.reminder);
    };
    ReminderPage.prototype.onMarkAsDone = function () {
        console.log(this.reminder);
        this.wsProvider.sendDoneMark(this.reminder);
    };
    ReminderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reminder',template:/*ion-inline-start:"/Users/chenliang/Documents/GitHub/ClinicReminderSystem/patientApp/src/pages/reminder/reminder.html"*/'<!--\n  Generated template for the ReminderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ReminderPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ul class="collection">\n    <li class="collection-item">Create at {{reminder.create_at*1000 |  date : \'short\'}}</li>\n    <li class="collection-item">Duration {{reminder.duration | date:\'hh\'}} hours</li>\n    <li class="collection-item">Description</li>\n    <li class="collection-item">{{reminder.description}}</li>\n  </ul>\n  <a class="waves-effect waves-light btn-small" (click)="onMarkAsDone()"><i class="material-icons right">done</i>Done</a>\n</ion-content>\n'/*ion-inline-end:"/Users/chenliang/Documents/GitHub/ClinicReminderSystem/patientApp/src/pages/reminder/reminder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_websocket__["a" /* WebsocketProvider */]])
    ], ReminderPage);
    return ReminderPage;
}());

//# sourceMappingURL=reminder.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reminder_reminder__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_websocket__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_reminder__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as Stomp from 'stompjs'
// import {HttpClient} from "@angular/common/http";





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, localNotification, wsProvider, plt, alt, authProvider, reminderProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localNotification = localNotification;
        this.wsProvider = wsProvider;
        this.plt = plt;
        this.alt = alt;
        this.authProvider = authProvider;
        this.reminderProvider = reminderProvider;
        this.reminders = [];
        this.plt.ready().then(function (rdy) {
            _this.localNotification.on('click').subscribe(function (notification) {
                var json = JSON.parse(notification.data);
                var alter = _this.alt.create({
                    title: notification.title,
                    subTitle: json.mydata
                });
                alter.present();
            }, function (error) { return console.log(error); });
        });
        this.reminderProvider.getAllReminders().subscribe(function (data) {
            for (var key in data) {
                _this.reminders.push(data[key]);
                console.log(data);
            }
        });
        // for (let i of [1]){
        //   let reminder = new Reminder();
        //   reminder.description = 'reminder' + i;
        //   reminder.duration = 1234;
        //   this.reminders.push(reminder);
        // }
        // for (let reminder of this.reminders){
        //   console.log(reminder.title + "\n");
        // }
        // this.stompClient = Stomp.over(new WebSocket(this.ws_connection));
        // (void) connect(headers, connectCallback): Called upon a successful connect or reconnect
        // this.stompClient.connect({},frame=>{
        //   this.stompClient.subscribe(this.patient_subscribe, reminder=>{
        //     // ;
        //     // console.log('curReminder: ', this.curReminder.description);
        //     // this.reminders.push(JSON.parse(reminder.body));
        //     // console.log(this.reminders.length);
        //
        //
        //   })
        // })
        this.wsProvider.connect(function (reminder) {
            if (reminder.body) {
                alert("A new reminder!");
            }
            _this.reminders.unshift(JSON.parse(reminder.body));
        });
    }
    HomePage.prototype.onHomeClick = function () {
        this.authProvider.signout();
    };
    HomePage.prototype.onNavToReminderPage = function (reminder) {
        console.log("will jump to detail reminder page!");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reminder_reminder__["a" /* ReminderPage */], { 'reminder': reminder });
    };
    HomePage.prototype.scheduleNotification = function () {
        this.localNotification.schedule({
            id: 1,
            title: 'attention',
            text: 'test',
            data: { mydata: "hidden message is this" }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/chenliang/Documents/GitHub/ClinicReminderSystem/patientApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="onHomeClick()">\n          <ion-icon name="exit"></ion-icon>\n        </button>\n      </ion-buttons>\n      Home\n    </ion-title>\n    <ion-title>Total reminders: {{reminders.length}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-content>\n    <div class="row" *ngFor="let reminder of reminders">\n      <div class="col s12 m6">\n        <div class="card blue-grey darken-1">\n          <div class="card-content white-text">\n            <span class="card-title">{{reminder.title}}</span>\n            <p>{{reminder.description}}</p>\n          </div>\n          <div class="card-action">\n            <a class="waves-effect waves-light btn-small" (click)="onNavToReminderPage(reminder)">Details\n              <i class="material-icons right">format_align_justify\n            </i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/chenliang/Documents/GitHub/ClinicReminderSystem/patientApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_websocket__["a" /* WebsocketProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_websocket__["a" /* WebsocketProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* AuthProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_reminder__["a" /* ReminderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_reminder__["a" /* ReminderProvider */]) === "function" && _g || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_internal_operators__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_internal_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_internal_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ReminderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReminderProvider = /** @class */ (function () {
    function ReminderProvider(http) {
        this.http = http;
        this.get_all_history_reminders_url = '/patient/getallhistoryreminders';
        console.log('Hello ReminderProvider Provider');
    }
    ReminderProvider.prototype.markReminderAsDone = function (reminder) {
        reminder.done = true;
    };
    ReminderProvider.prototype.getAllReminders = function () {
        return this.http.get(this.get_all_history_reminders_url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_internal_operators__["tap"])(function (data) {
            if (data) {
                console.log(data);
                return data;
            }
        }));
    };
    ReminderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ReminderProvider);
    return ReminderProvider;
}());

//# sourceMappingURL=reminder.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(463);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jwtOptionsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reminder_reminder_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_reminder__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_websocket__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_token__ = __webpack_require__(624);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import {JwtModule,JWT_OPTIONS,JwtInterceptor,JwtHelperService} from '@auth0/angular-jwt'


// import {SigninPage} from "../pages/signin/signin";




function jwtOptionsFactory(storage) {
    return {
        tokenGetter: function () { return storage.get('jwt_token'); },
        whitelistedDomains: ['localhost:8080']
    };
}
// config: {
//   tokenGetter: ()=>this.storage.getItem('token'),
//     whitelistedDomains: ['localhost:8080'],
//     headerName: 'Authorization',
//     authScheme: 'Bearer ',
//     throwNoTokenError: false,
//     skipWhenExpired: true
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reminder/reminder.module#ReminderPageModule', name: 'ReminderPage', segment: 'reminder', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin_module__["SigninPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_reminder_reminder_module__["ReminderPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_auth__["a" /* AuthProvider */],
                // JwtHelperService,
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_15__providers_token__["a" /* TokenProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_13__providers_reminder__["a" /* ReminderProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_websocket__["a" /* WebsocketProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_token__["a" /* TokenProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
var Patient = /** @class */ (function () {
    function Patient() {
    }
    return Patient;
}());

//# sourceMappingURL=Patient.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authProvider) {
        var _this = this;
        this.authProvider = authProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.authProvider.checkJwtLogin();
        this.authProvider.authUser.subscribe(function (bsuccess) {
            if (bsuccess) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chenliang/Documents/GitHub/ClinicReminderSystem/patientApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chenliang/Documents/GitHub/ClinicReminderSystem/patientApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TokenProvider = /** @class */ (function () {
    function TokenProvider() {
        this.jwtTokenName = 'jwt_token';
    }
    TokenProvider.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem(this.jwtTokenName);
        if (idToken) {
            console.log("localstorage: ", idToken);
            var cloned = req.clone({
                setHeaders: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                    Authorization: "Bearer " + idToken
                }
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    TokenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TokenProvider);
    return TokenProvider;
}());

//# sourceMappingURL=token.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map