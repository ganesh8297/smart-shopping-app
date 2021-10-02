(self["webpackChunkionic_app"] = self["webpackChunkionic_app"] || []).push([["src_app_tab1_tab1_module_ts"],{

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

/***/ 4588:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 1028);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 9634:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 5103);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page */ 1028);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 9370);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1-routing.module */ 4588);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_1__.Tab1Page],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera]
    })
], Tab1PageModule);



/***/ }),

/***/ 1028:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 5103);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././shared/http.service */ 5558);






let Tab1Page = class Tab1Page {
    constructor(http, camera) {
        this.http = http;
        this.camera = camera;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.productDetails = [];
        this.data = {};
    }
    ngOnInit() {
        this.get();
    }
    getPicture() {
        this.camera.getPicture(this.options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(base64Image);
        }, (err) => {
            // Handle error
        });
    }
    cartDetails(id) {
        console.log(id);
        for (let i = 0; i < this.productDetails.length; i++) {
            console.log(this.productDetails[i].productname);
            if (this.productDetails[i].id == id) {
                // let obj ={
                //  id : this.productDetails[i].id,
                // 	userid :this.productDetails[i].,
                // 	productid : this.productDetails[i].id,
                // 	imgurl : this.productDetails[i].imgurl,
                // 	productname : this.productDetails[i].id,
                // 	category : this.productDetails[i].id,
                // 	netweight: this.productDetails[i].id,
                // 	price: this.productDetails[i].id,
                // 	quentity:this.productDetails[i].id ,
                // 	total: this.productDetails[i].id
                // }
                // return obj
            }
        }
    }
    get() {
        this.http.post('/productdetails', '').subscribe((response) => {
            for (let i = 0; i < response.productData.length; i++) {
                this.data = {
                    imgurl: response.productData[i].imgurl,
                    productname: response.productData[i].productname,
                    category: response.productData[i].category,
                    netweight: response.productData[i].netweight,
                    price: response.productData[i].price,
                    id: response.productData[i].id
                };
                this.productDetails.push(this.data);
            }
        }, (error) => {
            console.log(error);
        });
    }
    addToCart(event) {
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        let productid = idAttr.nodeValue;
        console.log(productid);
        let requestObj = this.cartDetails(productid);
        this.http.post('/addtocart', requestObj).subscribe((response) => {
            if (response.success == true) {
            }
        }, (error) => {
            console.log(error);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".take-photo {\n  margin: 35px auto;\n  border-radius: 10px;\n  text-align: center;\n  border: none;\n  outline: none;\n  box-shadow: 3px 4px 12px #cdf;\n  height: 100px;\n}\n\n#touch-fetch {\n  font-family: \"Volkhov\", serif;\n  font-size: 15px;\n  color: gray;\n  margin-bottom: 10px;\n}\n\n#cam-icon {\n  cursor: pointer;\n  width: 75px;\n  margin-left: 85px !important;\n}\n\n.cart-icon {\n  color: #52d6c2;\n  margin-top: 60px;\n  margin-left: -55px;\n  width: 75px;\n}\n\n#cart-icon:hover {\n  color: blue;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDRTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUFFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUU7RUFDRSxXQUFBO0FBR0o7O0FBRUU7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQUk7RUFDSSxhQUFBO0FBRVIiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFrZS1waG90byB7XG4gICAgbWFyZ2luOjM1cHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6M3B4IDRweCAxMnB4ICNjZGY7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICB9XG4gICN0b3VjaC1mZXRjaHtcbiAgICBmb250LWZhbWlseTogJ1ZvbGtob3YnLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6Z3JheTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAjY2FtLWljb257XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4NXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcnQtaWNvbntcbiAgICBjb2xvcjojNTJkNmMyO1xuICAgIG1hcmdpbi10b3A6NjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTU1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgICBcbiAgfVxuICAjY2FydC1pY29uOmhvdmVye1xuICAgIGNvbG9yOmJsdWU7XG4gIH1cblxuXG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG5cbiAiXX0= */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content  [fullscreen]=\"true\">\n  \n  <div class=\"container\">\n    <div class=\"take-photo\">\n     \n      <lottie-player id=\"cam-icon\" (click)=\"getPicture()\"  src=\"https://assets5.lottiefiles.com/packages/lf20_SUPRtH.json\"   background=\"transparent\"  speed=\"1.5\"  style=\"margin-left: 100px;\"  loop  autoplay></lottie-player>\n      <!-- <img (click)=\"getpicture()\" src=\"assets/cam.png\" id=\"cam-icon\" alt=\"\"> -->\n      <h5 id=\"touch-fetch\" >Touch figure fetch details</h5>\n    </div>\n    <!-- <lottie-player src=\"https://assets7.lottiefiles.com/packages/lf20_9aaqrsgf.json\"   background=\"transparent\"  speed=\"1\"  style=\"width: 200px; height: 300px;\" hover loop  autoplay></lottie-player> -->\n    \n   <img src=\"{{imgUrl}}\" height=\"200\" weight=\"200\" alt=\"\">\n    <div id=\"search-divition\">\n     <input id=\"search-inputfield\" placeholder=\"Search \" type=\"text\">\n     <span><ion-icon id=\"search-icon\" name=\"search-outline\"></ion-icon></span>\n    </div>\n    <h4 id=\"search-item\">Search Items</h4>\n    \n    <div *ngFor=\"let product of productDetails\" class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" [src]=\"product.imgurl\"  alt=\"\">\n        </div>\n        <div class=\"col-6\" style=\"margin-left: -10px;\">\n         <p class=\"product-name\">{{product.productname}}</p>\n         <p class=\"categories\">{{product.category}}</p>\n         <p class=\"price\" >{{product.price}}</p>\n        </div>\n        <div class=\"col-1\">\n          \n          <ion-icon (click)=\"addToCart($event)\" [id]=\"product.id\" class=\"cart-icon\"  name=\"cart\"></ion-icon>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRHA000GYV8luUpCRrpFC5TuNcvf2dI-KwQ&usqp=CAU\"  alt=\"\">\n        </div>\n        <div class=\"col-7\">\n         <p class=\"product-name\">Lays</p>\n         <p class=\"categories\">Categories:Cookies</p>\n         <p class=\"price\" >Rs/45</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKYTLCNOMGMHbtsTkV8K6qJrx5g65VIS0DA&usqp=CAU\"  alt=\"\">\n        </div>\n        <div class=\"col-7\">\n         <p class=\"product-name\">Orio</p>\n         <p class=\"categories\">Categories:Cookies</p>\n         <p class=\"price\" >Rs/45</p>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiK2zNCfcKcCnNytq0D2XVIkeqkfV6MeDsbw&usqp=CAU\"  alt=\"\">\n        </div>\n        <div class=\"col-7\">\n         <p class=\"product-name\">Milk bikis</p>\n         <p class=\"categories\">Categories:Cookies</p>\n         <p class=\"price\" >Rs/45</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhPKWdG0hyGa3Bmw8-8D_A1UNX_6XQOyndg&usqp=CAU\"  alt=\"\">\n        </div>\n        <div class=\"col-7\">\n         <p class=\"product-name\">Ginder Joy</p>\n         <p class=\"categories\">Categories:Cookies</p>\n         <p class=\"price\" >Rs/45</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"row\" id=\"card\">\n        <div class=\"col-5\">\n          <img id=\"search-product-home\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIucR8edBnTs1onWzETitHYmwS6jtlmD80Dg&usqp=CAU\"  alt=\"\">\n        </div>\n        <div class=\"col-7\">\n         <p class=\"product-name\">Kurkure</p>\n         <p class=\"categories\">Categories:Cookies</p>\n         <p class=\"price\" >Rs/45</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map