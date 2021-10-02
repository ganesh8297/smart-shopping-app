(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 5089);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9460);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    navigateRegister() {
        this.router.navigate(['/registerpage']);
    }
    navigateLogin() {
        this.router.navigate(['/loginpage']);
    }
    navigateFirstpage() {
        this.router.navigate(['/tabs']);
    }
    ngOnInit() {
        this.userdata = (localStorage.getItem("sparrow-user-data"));
        if (this.userdata == null) {
        }
        else {
            this.navigateFirstpage();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#heading {\n  color: #52c6c2;\n  margin-top: 40px;\n}\n\n#logo {\n  position: absolute;\n  width: 245px;\n  height: 45vh;\n  border-radius: 75px;\n  margin: 10px 10px;\n}\n\n#gif-home {\n  width: 95%;\n  margin-left: 22px;\n}\n\n#divition {\n  position: absolute;\n  bottom: 90px;\n  width: 100vw;\n  text-align: center;\n}\n\n.get-started-btn {\n  background-color: #52c6c2;\n  border-radius: 40px;\n  color: #fff;\n  height: 35px;\n  width: 80vw;\n  outline: none;\n  margin-left: 10px;\n}\n\n.get-started-btn:hover {\n  background-color: #05f7e7;\n}\n\n#home-login {\n  position: absolute;\n  bottom: 25px;\n  margin-left: 30px;\n}\n\nion-content {\n  background-color: #fff !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUNBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFBSTtFQUNJLGFBQUE7QUFFUiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIFxuI2hlYWRpbmd7XG4gICAgY29sb3I6IzUyYzZjMjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIFxuICAgIH1cbiNsb2dve1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjQ1cHg7XG4gICAgaGVpZ2h0OjQ1dmg7XG4gICAgYm9yZGVyLXJhZGl1czogNzVweDtcbiAgICBtYXJnaW46MTBweCAxMHB4O1xuICAgIFxufVxuI2dpZi1ob21le1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG5cbn1cbiNkaXZpdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjkwcHg7XG4gICAgd2lkdGg6MTAwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdldC1zdGFydGVkLWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1MmM2YzI7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogODB2dztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgXG59XG4uZ2V0LXN0YXJ0ZWQtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzA1ZjdlNztcbn1cbiNob21lLWxvZ2lue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206MjVweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAvLyAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  \n  <h1 id=\"heading\" style=\"text-align: center;\"><b>Smart Shopping</b></h1>\n  <img id=\"logo\" src=\"assets/home.png\" alt=\"\">\n  <lottie-player src=\"https://assets2.lottiefiles.com/private_files/lf30_9kdbftpx.json\"   background=\"transparent\"  speed=\"1\" id=\"gif-home\"  hover loop  autoplay></lottie-player>\n    <div id=\"divition\" class=\"col-3\">\n      <button  class=\"get-started-btn\" (click)=\"navigateRegister()\" expand=\"block\">Create Account</button>\n     \n    </div>\n    <div>\n      <p id=\"home-login\" class=\"que\"  >Already have account? <span style=\"color:#52c6c2;cursor: pointer;\"><b (click)=\"navigateLogin()\">Login </b></span></p>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map