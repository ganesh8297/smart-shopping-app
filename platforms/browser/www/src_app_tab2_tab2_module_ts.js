(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 5558:
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4766);




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(serviceName) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        const options = { headers: headers, withCredentials: false };
        return this.http.get(url, options);
    }
    post(serviceName, data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        const options = { headers: headers, withCredentials: false };
        console.log(data);
        return this.http.post(url, JSON.stringify(data), options);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 6434:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4156);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 1284:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 4156);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 9370);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 6434);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 4156:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././shared/http.service */ 5558);





let Tab2Page = class Tab2Page {
    constructor(http) {
        this.http = http;
        this.count = 0;
        this.productDetails = [];
        this.cartId = [];
        this.data = {};
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this.http.post('/cart', '').subscribe((response) => {
            for (let i = 0; i < response.cartData.length; i++) {
                this.data = {
                    productid: response.cartData[i].productid,
                    imgurl: response.cartData[i].imgurl,
                    productname: response.cartData[i].productname,
                    category: response.cartData[i].category,
                    netweight: response.cartData[i].netweight,
                    price: response.cartData[i].price,
                    quentity: response.cartData[i].quentity,
                    total: response.cartData[i].total
                };
                this.productDetails.push(this.data);
                this.cartId.push(this.data.productid);
            }
        }, (error) => {
            console.log(error);
        });
    }
    delete(event) {
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        let cartid = idAttr.nodeValue;
        console.log(cartid);
        const obj = {
            id: cartid
        };
        this.statusClass = 'active';
        this.http.post('/delete', obj).subscribe((response) => {
            if (response.success == true) {
                this.get();
            }
        }, (error) => {
            console.log(error);
        });
    }
    add() {
        this.count++;
    }
    minus() {
        if (this.count > 0) {
            this.count--;
        }
    }
};
Tab2Page.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#delete {\n  margin-left: 18px;\n  margin-top: 0px;\n  color: #52d6c2;\n}\n\n#delete:hover {\n  color: red;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.minus-icon {\n  color: gray;\n  margin-left: -18px;\n}\n\n.plus-icon {\n  color: gray;\n  margin-left: 0px;\n  margin-top: 15px !important;\n}\n\n.count {\n  color: gray;\n  font-size: 1.1rem;\n  padding: 2px;\n}\n\n#test {\n  margin-top: -45px;\n  margin-left: 70%;\n}\n\n#badge {\n  margin-top: -5px !important;\n  height: 40px !important;\n}\n\n#total {\n  margin-top: -10px;\n  font-family: \"Volkhov\", serif;\n  color: #212020;\n}\n\nion-badge {\n  margin-top: -10px;\n  border-radius: 4px !important;\n  font-size: 15px;\n  padding: 5px !important;\n  background-color: #52d6c2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFBO0VBQ0ksaUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUZJO0VBQ0ksYUFBQTtBQUlSOztBQURFO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBSU47O0FBREU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQUlKOztBQUZFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUZFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0EsMkJBQUE7RUFHQSx1QkFBQTtBQUlBOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQU1GIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlbGV0ZXtcbiAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgY29sb3I6IzUyZDZjMlxufVxuI2RlbGV0ZTpob3ZlcntcbiAgICBjb2xvcjogcmVkO1xufVxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLm1pbnVzLWljb257XG4gICAgICBjb2xvcjpncmF5O1xuICAgICAgbWFyZ2luLWxlZnQ6LTE4cHg7XG4gICAgIFxuICB9XG4gIC5wbHVzLWljb257XG4gICAgY29sb3I6Z3JheTtcbiAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb3VudHtcbiAgICBjb2xvcjpncmF5O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIFxuICB9XG4gICN0ZXN0e1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gIH1cbiNiYWRnZXtcbm1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbi8vIGJvcmRlci10b3A6MXB4ICBzb2xpZCAjYmJiZmJmO1xuLy8gYm9yZGVyLWJvdHRvbToxcHggIHNvbGlkICNiYmJmYmY7XG5oZWlnaHQ6NDBweCAhaW1wb3J0YW50O1xufVxuI3RvdGFse1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgZm9udC1mYW1pbHk6ICdWb2xraG92Jywgc2VyaWY7XG4gIGNvbG9yOiMyMTIwMjA7XG59XG5pb24tYmFkZ2V7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyZDZjMiAhaW1wb3J0YW50O1xuXG59Il19 */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content [fullscreen]=\"true\">\n  \n    <h1 style=\"margin-top: 30px;\"><b>My Cart</b></h1>\n    <div>\n      <!-- <img id=\"profile\" src=\"assets/cart.png\" alt=\"\"> -->\n      <lottie-player id=\"profile\" src=\"https://assets10.lottiefiles.com/temp/lf20_6wEpxn.json\"   background=\"transparent\"  speed=\"1\"    autoplay></lottie-player>\n    </div>\n\n    <div id=\"mycart-search-divition\">\n      <input id=\"search-inputfield\" placeholder=\"Search \" type=\"text\">\n      <span><ion-icon id=\"search-icon\" name=\"search-outline\"></ion-icon></span>\n     </div>\n     \n\n\n    <ion-item-sliding *ngFor=\"let product of productDetails\" class=\"sliding\" >\n      <ion-item class=\"item-inner\" style=\"width: 100%;\" >\n        <div  class=\"mycart-card\">\n          <div class=\"row\" id=\"card\">\n            <div class=\"col-5\">\n              <img id=\"search-product\" [src]=\"product.imgurl\" alt=\"\">\n            </div>\n            <div class=\"col-7\" >\n             <p class=\"mycart-product-name\"> {{product.productname}}</p>\n             <p class=\"price\" > {{product.price}}</p>\n             <p id=\"test\"><ion-icon class=\"minus-icon\" (click)=\"minus()\" name=\"remove-outline\"></ion-icon><span class=\"count\" style=\"margin-top: -10px;\" ><b>{{count}}</b></span><ion-icon class=\"plus-icon\" (click)=\"add()\" name=\"add-outline\"></ion-icon></p>\n            </div>\n          </div>\n        </div>\n      </ion-item>\n      <ion-item-options>\n        <ion-icon [id]=\"product.productid\" (click)=\"delete($event)\" name=\"trash\"></ion-icon>\n        <!-- <button class=\"trash\" [ngClass]=\"statusClass\" [id]=\"product.productid\" (click)=\"delete($event)\" ion-button><img class=\"trash-img\" style=\"margin-left:-3px;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1MLl-zipJLKPkBe52hs-p0YxRMR5ukAg1vmFrZDqpSscZrDxp2uAucFaDc1x0g_ErOQ&usqp=CAU\" alt=\"\"></button> -->\n\n\n        <!-- <ion-button [id]=\"product.productid\" (click)=\"delete($event)\">\n          <img class=\"trash-img\" style=\"margin-left:-3px;\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1MLl-zipJLKPkBe52hs-p0YxRMR5ukAg1vmFrZDqpSscZrDxp2uAucFaDc1x0g_ErOQ&usqp=CAU\" alt=\"\">\n        </ion-button> -->\n        \n      </ion-item-options>\n    </ion-item-sliding>\n\n    <div class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRHA000GYV8luUpCRrpFC5TuNcvf2dI-KwQ&usqp=CAU\"  alt=\"\">\n        </div>\n        <div class=\"col-7\">\n         <p class=\"product-name\">Lays</p>\n         <p class=\"categories\">Categories:Cookies</p>\n         <p class=\"price\" >Rs/45</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRHA000GYV8luUpCRrpFC5TuNcvf2dI-KwQ&usqp=CAU\"  alt=\"\">\n        </div>\n        <div class=\"col-7\">\n         <p class=\"product-name\">Lays</p>\n         <p class=\"categories\">Categories:Cookies</p>\n         <p class=\"price\" >Rs/45</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRHA000GYV8luUpCRrpFC5TuNcvf2dI-KwQ&usqp=CAU\"  alt=\"\">\n        </div>\n        <div class=\"col-7\">\n         <p class=\"product-name\">Lays</p>\n         <p class=\"categories\">Categories:Cookies</p>\n         <p class=\"price\" >Rs/45</p>\n        </div>\n      </div>\n    </div>\n\n</ion-content>\n    <ion-item id=\"badge\">\n      <ion-label id=\"total\">Total</ion-label>\n      <ion-badge color=\"secondary\" slot=\"end\">999/-</ion-badge>\n    </ion-item>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map