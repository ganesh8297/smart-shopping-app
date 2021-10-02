(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_login-page_login-page_module_ts"],{

/***/ 6825:
/*!*********************************************************!*\
  !*** ./src/app/login-page/login-page-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPagePageRoutingModule": () => (/* binding */ LoginPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.page */ 1552);




const routes = [
    {
        path: '',
        component: _login_page_page__WEBPACK_IMPORTED_MODULE_0__.LoginPagePage
    }
];
let LoginPagePageRoutingModule = class LoginPagePageRoutingModule {
};
LoginPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPagePageRoutingModule);



/***/ }),

/***/ 4297:
/*!*************************************************!*\
  !*** ./src/app/login-page/login-page.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPagePageModule": () => (/* binding */ LoginPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _login_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page-routing.module */ 6825);
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.page */ 1552);







let LoginPagePageModule = class LoginPagePageModule {
};
LoginPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPagePageRoutingModule
        ],
        declarations: [_login_page_page__WEBPACK_IMPORTED_MODULE_1__.LoginPagePage]
    })
], LoginPagePageModule);



/***/ }),

/***/ 1552:
/*!***********************************************!*\
  !*** ./src/app/login-page/login-page.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPagePage": () => (/* binding */ LoginPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_login_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-page.page.html */ 8203);
/* harmony import */ var _login_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.page.scss */ 2742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 5558);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 3420);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);







let LoginPagePage = class LoginPagePage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.signinusername = '';
        this.signinpassword = '';
        this.encryptedPassword = '';
        this.md5Hash = '';
    }
    ngOnInit() {
    }
    signin() {
        this.md5Hash = CryptoJS.MD5(this.signinpassword);
        this.encryptedPassword = (this.md5Hash.toString());
        console.log(this.encryptedPassword);
        const Data = {
            username: this.signinusername,
            password: this.encryptedPassword
        };
        console.log(Data);
        this.http.post('/signin', Data).subscribe((response) => {
            console.log(response);
            if (response.success == true) {
                const obj = {
                    "id": response.id,
                    "username": response.username,
                    "fullname": response.fullname
                };
                console.log(obj);
                const encodeText = btoa(JSON.stringify(obj));
                localStorage.setItem("sparrow-user-data", encodeText);
                console.log(encodeText);
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Login  successfully'
                });
                this.navigateTabs();
            }
            else {
                this.signinusername = '';
                this.signinpassword = '';
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'please enter correct username & password'
                });
            }
        }, (error) => {
        });
    }
    navigateRegister() {
        this.router.navigate(['/registerpage']);
    }
    navigateTabs() {
        this.router.navigate(['/tabs']);
    }
    navigateArrow() {
        this.router.navigate(['/']);
    }
    passwordToggle() {
        this.fieldTextType = !this.fieldTextType;
    }
};
LoginPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService }
];
LoginPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-page',
        template: _raw_loader_login_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPagePage);



/***/ }),

/***/ 2742:
/*!*************************************************!*\
  !*** ./src/app/login-page/login-page.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".signup {\n  position: absolute;\n  bottom: 20px;\n  color: #545557;\n  margin-left: 12px;\n}\n\nion-content {\n  background-color: #fff !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUFJO0VBQ0ksYUFBQTtBQUVSIiwiZmlsZSI6ImxvZ2luLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiM1NDU1NTc7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgLy8gLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ 8203:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container\">\n    <div id=\"arrow\" (click)=\"navigateArrow()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </div>\n    <h3><b> LOGIN</b></h3>\n    <div>\n      <button class=\"btn  facebook-btn\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>Facebook\n      </button>\n      &nbsp;\n      <button class=\"btn  twiter-btn\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>&nbsp;Twiter\n      </button>\n    </div>\n    <div>\n      <p id=\"paragraph\">Or Sign up with Ur Email.</p>\n    </div>\n    <div>\n      <div><input [(ngModel)]=\"signinusername\" class=\"signup-inputfield\" placeholder=\"usrename\" type=\"text\"></div>\n      <div id=\"search-divition\">\n        <input [(ngModel)]=\"signinpassword\"  [type]=\"fieldTextType ? 'text' : 'password'\" id=\"search-inputfield\" placeholder=\"password \" >\n        <i id=\"eye-icon\" (click)=\"passwordToggle()\" class=\"fa\" [ngClass]=\"{\n          'fa-eye-slash': !fieldTextType,\n          'fa-eye': fieldTextType\n        }\"></i>\n      </div>\n\n    </div>\n    <div>\n      <button (click)=\"signin()\" class=\"btn login-btn\">\n        Login\n      </button>\n    </div>\n    <lottie-player src=\"https://assets3.lottiefiles.com/packages/lf20_h7dcmwwl.json\" background=\"transparent\"\n      speed=\"1.5\" style=\"width:100%;margin-left:15px;\" loop autoplay></lottie-player>\n    <div style=\"margin-top: 20px;\">\n      <div class=\"signup\">\n        <p class=\"que\">Don't have account? <span style=\"color:#52d6c2;cursor: pointer;\"><b\n              (click)=\"navigateRegister()\">Signup</b></span></p>\n      </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login-page_login-page_module_ts.js.map