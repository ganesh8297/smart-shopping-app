(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_register-page_register-page_module_ts"],{

/***/ 550:
/*!***************************************************************!*\
  !*** ./src/app/register-page/register-page-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPagePageRoutingModule": () => (/* binding */ RegisterPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _register_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-page.page */ 4477);




const routes = [
    {
        path: '',
        component: _register_page_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPagePage
    }
];
let RegisterPagePageRoutingModule = class RegisterPagePageRoutingModule {
};
RegisterPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPagePageRoutingModule);



/***/ }),

/***/ 7794:
/*!*******************************************************!*\
  !*** ./src/app/register-page/register-page.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPagePageModule": () => (/* binding */ RegisterPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _register_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-page-routing.module */ 550);
/* harmony import */ var _register_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-page.page */ 4477);







let RegisterPagePageModule = class RegisterPagePageModule {
};
RegisterPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPagePageRoutingModule
        ],
        declarations: [_register_page_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPagePage]
    })
], RegisterPagePageModule);



/***/ }),

/***/ 4477:
/*!*****************************************************!*\
  !*** ./src/app/register-page/register-page.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPagePage": () => (/* binding */ RegisterPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_register_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-page.page.html */ 4806);
/* harmony import */ var _register_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-page.page.scss */ 5362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 5558);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 3420);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);








let RegisterPagePage = class RegisterPagePage {
    constructor(router, http, toastCtrl) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.emailid = '';
        this.full_name = '';
        this.username = '';
        this.password = '';
        this.encryptedPassword = '';
        this.fieldTextType = true;
    }
    ngOnInit() {
    }
    signup() {
        console.log(this.password);
        this.md5Hash = CryptoJS.MD5(this.password);
        this.encryptedPassword = (this.md5Hash.toString());
        const userData = {
            email: this.emailid,
            fullname: this.full_name,
            username: this.username,
            password: this.encryptedPassword
        };
        this.http.post('/signup', userData).subscribe((response) => {
            if (response.success == true) {
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
                    title: 'Signed in successfully'
                });
                this.navigateLogin();
            }
        }, (error) => {
            console.log(error);
        });
    }
    navigateLogin() {
        this.router.navigate(['/loginpage']);
    }
    navigateArrow() {
        this.router.navigate(['/']);
    }
    passwordToggle() {
        this.fieldTextType = !this.fieldTextType;
    }
};
RegisterPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
RegisterPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register-page',
        template: _raw_loader_register_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPagePage);



/***/ }),

/***/ 5362:
/*!*******************************************************!*\
  !*** ./src/app/register-page/register-page.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0FBRVIiLCJmaWxlIjoicmVnaXN0ZXItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 4806:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register-page.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container\">\n    <div id=\"arrow\" (click)=\"navigateArrow()\" >\n      <ion-icon  name=\"arrow-back-outline\"></ion-icon>\n    </div>\n    <h3><b> SIGN UP</b></h3>\n    <div>\n      <button class=\"btn  facebook-btn\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>Facebook\n      </button>\n      &nbsp;\n      <button class=\"btn  twiter-btn\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>&nbsp;Twiter\n      </button>\n    </div>\n    <div>\n      <p id=\"paragraph\">Or Sign up with Ur Email.</p>\n    </div>\n    <div>\n      <div><input [(ngModel)]=\"emailid\" class=\"signup-inputfield\" placeholder=\"email\" type=\"email\"></div>\n      <div><input [(ngModel)]=\"full_name\" class=\"signup-inputfield\" placeholder=\"fullname\" type=\"text\"></div>\n      <div><input [(ngModel)]=\"username\" class=\"signup-inputfield\" placeholder=\"username\" type=\"text\"></div>\n      <div id=\"search-divition\">\n        <input [(ngModel)]=\"signinpassword\"  [type]=\"fieldTextType ? 'text' : 'password'\" id=\"search-inputfield\" placeholder=\"password \" >\n        <i id=\"eye-icon\" (click)=\"passwordToggle()\" class=\"fa\" [ngClass]=\"{\n          'fa-eye-slash': !fieldTextType,\n          'fa-eye': fieldTextType\n        }\"></i>\n       </div>\n      \n    </div>\n    <div>\n      <button (click)=\"signup()\" class=\"btn signup-btn\">\n        Sign Up\n      </button>\n      \n    </div>\n    <div style=\"margin-top: 20px;\">\n      <p><span id=\"terms-condition\">By Signing up, you agreed with our Terms</span> <span id=\"Services\"> of Services and policy</span> </p>\n    <div id=\"login\">\n    <p class=\"que\">Already have account? <span (click)=\"navigateLogin()\" style=\"color:#52d6c2;cursor: pointer;\">Login</span></p>\n    </div>\n    </div>\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_register-page_register-page_module_ts.js.map