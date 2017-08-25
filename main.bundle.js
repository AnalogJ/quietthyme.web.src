webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account-login/account-login.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n<div class=\"main-container\">\n    <section class=\"height-100 imagebg text-center\" data-overlay=\"4\">\n        <div class=\"background-image-holder login-bg\">\n        </div>\n        <div class=\"container pos-vertical-center\">\n            <div class=\"row\">\n                <div class=\"col-sm-7 col-md-5\">\n                    <h2>Login to continue</h2>\n\n                    <div style=\"display:none;\">\n                        <a class=\"btn block btn--icon bg--facebook type--uppercase\" href=\"#\">\n                                <span class=\"btn__text\">\n                                    <i class=\"socicon-facebook\"></i>\n                                    Login with GoodReads\n                                </span>\n                        </a>\n                        <hr>\n                    </div>\n\n                    <div >\n                        <p class=\"lead\">Welcome back, sign in with your existing QuietThyme account credentials</p>\n                        <form (ngSubmit)=\"login()\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-12\">\n                                    <input [(ngModel)]=\"loginEmail\" name=\"email\" type=\"email\" placeholder=\"Email\" required/>\n                                </div>\n                                <div class=\"col-sm-12\">\n                                    <input [(ngModel)]=\"loginPassword\" name=\"password\" type=\"password\" placeholder=\"Password\" required/>\n                                </div>\n                                <div class=\"col-sm-12\">\n                                    <button [disabled]=\"loading.login\" class=\"btn btn--primary type--uppercase\" type=\"submit\" >Login</button>\n                                </div>\n                            </div>\n                            <!--end of row-->\n                        </form>\n                        <span class=\"type--fine-print block\">Dont have an account yet?\n                                <a routerLink=\"/register\">Create account</a>\n                            </span>\n                        <span style=\"display:none;\" class=\"type--fine-print block\">Forgot your username or password?\n                                <a href=\"#\">Recover account</a>\n                            </span>\n                    </div>\n\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account-login/account-login.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-login/account-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uservoice_service__ = __webpack_require__("../../../../../src/app/services/uservoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountLoginComponent = (function () {
    function AccountLoginComponent(slimLoadingBarService, apiService, uservoiceService, notificationService, router, activatedRoute) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.apiService = apiService;
        this.uservoiceService = uservoiceService;
        this.notificationService = notificationService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loading = {
            login: false,
            oauth: true,
        };
    }
    AccountLoginComponent.prototype.ngOnInit = function () { };
    AccountLoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loading.login)
            return;
        this.loading.login = true;
        this.slimLoadingBarService.start(function () {
            console.log('Loading complete');
        });
        this.apiService
            .authLogin(this.loginEmail, this.loginPassword)
            .finally(function () {
            _this.loading.login = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (data) {
            localStorage.setItem('id_token', data.token); //set the JWT token
            _this.uservoiceService.identify();
            if (_this.activatedRoute.snapshot.params['requested']) {
                _this.router.navigate([
                    _this.activatedRoute.snapshot.params['requested'],
                ]);
            }
            else {
                _this.router.navigate(['/storage']);
            }
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    return AccountLoginComponent;
}());
AccountLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account-login',
        template: __webpack_require__("../../../../../src/app/account-login/account-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account-login/account-login.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_uservoice_service__["a" /* UservoiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_uservoice_service__["a" /* UservoiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], AccountLoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=account-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/account-register-plan/account-register-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n<div class=\"main-container\">\n    <section class=\"pricing imagebg\" data-overlay='4'>\n        <div class=\"background-image-holder register-plan-bg\">\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 col-sm-6\">\n                    <div class=\"row\">\n                        <div class=\"col-md-5 col-sm-6\">\n                            <div class=\"feature feature-6\">\n                                <i class=\"icon icon--sm icon-Preview color--primary\"></i>\n                                <h5>2 Cloud Connectors</h5>\n                                <p>\n                                    Store your books on Google Drive, Dropbox, SkyDrive or Box.net Or use our unlimited storage.\n                                </p>\n                            </div>\n                            <!--end feature-->\n                        </div>\n                        <div class=\"col-md-5 col-sm-6\">\n                            <div class=\"feature feature-6\">\n                                <i class=\"icon icon--sm icon-Road-3 color--primary\"></i>\n                                <h5>OPDS Catalog</h5>\n                                <p>\n                                    Your whole library is accessible via any OPDS compatible reader. Marvin, Moon+, Aldiko, QuickReader, or any other ebook reader.\n                                </p>\n                            </div>\n                            <!--end feature-->\n                        </div>\n                        <div class=\"col-md-5 col-sm-6\">\n                            <div class=\"feature feature-6\">\n                                <i class=\"icon icon--sm icon-Twister color--primary\"></i>\n                                <h5>Drag & Drop</h5>\n                                <p>\n                                    Want to add a book to QuietThyme? Just drag it into the blackhole folder of your connected cloud storage. We'll handle the rest\n                                </p>\n                            </div>\n                            <!--end feature-->\n                        </div>\n                        <div class=\"col-md-5 col-sm-6\">\n                            <div class=\"feature feature-6\">\n                                <i class=\"icon icon--sm icon-Data-Cloud color--primary\"></i>\n                                <h5>Calibre Integration</h5>\n                                <p>\n                                    OCD about coverart & book metadata? We are too! QuietThyme integrates with Calibre and lets you import and export books (and metadata) with a single click\n                                </p>\n                            </div>\n                            <!--end feature-->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-4 col-xs-12\">\n                    <div class=\"pricing pricing-1 boxed boxed--border boxed--lg text-center\">\n                        <h4>Reader Plan</h4>\n                        <span class=\"h1\">\n                                                        <span class=\"pricing__dollar\">$</span>Beta</span>\n                        <p>\n                            All plans come with a <span style=\"font-weight:900\">15 day</span> trial. You can cancel at any time, no questions asked.\n                        </p>\n                        <span class=\"label\">Monthly</span>\n                        <a stripeCheckoutButton\n                           [planId]=\"'reader_1'\"\n                           [planName]=\"'Reader Plan'\"\n                           [planCost]=\"1000\"\n                           (onCheckout)=\"stripeCheckoutCompleted($event)\"\n                           class=\"btn btn--primary\">\n                            <span class=\"btn__text\">\n                                Purchase Now\n                            </span>\n                        </a>\n                    </div>\n                    <!--end pricing-->\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account-register-plan/account-register-plan.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-register-plan/account-register-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegisterPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uservoice_service__ = __webpack_require__("../../../../../src/app/services/uservoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountRegisterPlanComponent = (function () {
    function AccountRegisterPlanComponent(slimLoadingBarService, uservoiceService, notificationService, apiService, router) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.uservoiceService = uservoiceService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.loading = {
            setPlan: false,
        };
    }
    AccountRegisterPlanComponent.prototype.ngOnInit = function () { };
    AccountRegisterPlanComponent.prototype.stripeCheckoutCompleted = function (stripeCheckoutData) {
        var _this = this;
        console.log(stripeCheckoutData);
        if (this.loading.setPlan)
            return;
        this.slimLoadingBarService.start();
        this.apiService
            .userPlan(stripeCheckoutData)
            .finally(function () {
            _this.loading.setPlan = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (data) {
            //update the Token here, to the new one which has an embedded plan.
            // console.log(data)
            localStorage.setItem('id_token', data.token); //set the JWT token
            _this.uservoiceService.identify();
            //redirect user to storage page
            _this.router.navigate(['/storage']);
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    return AccountRegisterPlanComponent;
}());
AccountRegisterPlanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account-register-plan',
        template: __webpack_require__("../../../../../src/app/account-register-plan/account-register-plan.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account-register-plan/account-register-plan.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_uservoice_service__["a" /* UservoiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_uservoice_service__["a" /* UservoiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object])
], AccountRegisterPlanComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=account-register-plan.component.js.map

/***/ }),

/***/ "../../../../../src/app/account-register/account-register.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n<div class=\"main-container\">\n    <section class=\"imageblock switchable feature-large height-100\">\n        <div class=\"imageblock__content col-md-6 col-sm-4 pos-right\">\n            <div class=\"background-image-holder register-bg\" >\n            </div>\n        </div>\n        <div class=\"container pos-vertical-center\">\n            <div class=\"row\">\n                <div class=\"col-md-5 col-sm-7\">\n                    <h2>Create a QuietThyme account</h2>\n                    <p class=\"lead\">Get started with a 14 day free trial. Cancel at any time.</p>\n\n                    <div style=\"display:none;\">\n                        <a class=\"btn block btn--icon bg--facebook type--uppercase\" href=\"#\">\n                                    <span class=\"btn__text\">\n                                        <i class=\"socicon-facebook\"></i>\n                                        Sign up with Facebook\n                                    </span>\n                        </a>\n                        <a class=\"btn block btn--icon bg--twitter type--uppercase\" href=\"#\">\n                                    <span class=\"btn__text\">\n                                        <i class=\"socicon-twitter\"></i>\n                                        Sign up with Twitter\n                                    </span>\n                        </a>\n                        <hr data-title=\"OR\">\n                    </div>\n                    <form (ngSubmit)=\"register()\" >\n                        <div class=\"row\">\n                            <div class=\"col-xs-12\">\n                                <input [(ngModel)]=\"regName\" name=\"name\" type=\"text\" name=\"Name \" placeholder=\"Name\" required/>\n                            </div>\n                            <div class=\"col-xs-12\">\n                                <input [(ngModel)]=\"regEmail\" name=\"email\" type=\"email\" name=\"Email Address\" placeholder=\"Email Address\" required/>\n                            </div>\n                            <div class=\"col-xs-12\">\n                                <input [(ngModel)]=\"regPassword\" name=\"password\" type=\"password\" name=\"Password\" placeholder=\"Password\" required/>\n                            </div>\n                            <div class=\"col-xs-12\">\n                                <button [disabled]=\"loading.register\" type=\"submit\" class=\"btn btn--primary type--uppercase\">Create Account</button>\n                            </div>\n                            <div class=\"col-xs-12\">\n                                        <span class=\"type--fine-print\">By signing up, you agree to the\n                                            <a routerLink=\"/terms\">Terms of Service</a>\n                                        </span>\n                            </div>\n                        </div>\n                        <!--end row-->\n                    </form>\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account-register/account-register.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account-register/account-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uservoice_service__ = __webpack_require__("../../../../../src/app/services/uservoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountRegisterComponent = (function () {
    function AccountRegisterComponent(slimLoadingBarService, apiService, uservoiceService, notificationService, router, activatedRoute) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.apiService = apiService;
        this.uservoiceService = uservoiceService;
        this.notificationService = notificationService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loading = {
            register: false,
            oauth: false,
        };
    }
    AccountRegisterComponent.prototype.ngOnInit = function () { };
    AccountRegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.loading.register)
            return;
        this.loading.register = true;
        this.slimLoadingBarService.start(function () {
            console.log('Loading complete');
        });
        this.apiService
            .authRegister(this.regName, this.regEmail, this.regPassword)
            .finally(function () {
            _this.loading.register = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('id_token', data.token); //set the JWT token
            _this.uservoiceService.identify();
            _this.router.navigate(['/register/plan']);
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    return AccountRegisterComponent;
}());
AccountRegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account-register',
        template: __webpack_require__("../../../../../src/app/account-register/account-register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account-register/account-register.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_uservoice_service__["a" /* UservoiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_uservoice_service__["a" /* UservoiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], AccountRegisterComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=account-register.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

//CONSTANTS in any other application
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "API_ENDPOINT", {
        get: function () {
            return 'https://api.quietthyme.com/' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "CATALOG_ENDPOINT", {
        get: function () {
            return 'https://catalog.quietthyme.com/' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "KLOUDLESS_STORAGE_TYPES", {
        get: function () {
            return ['box', 'dropbox', 'skydrive', 'gdrive'];
            // return ['box', 'dropbox', 'skydrive']; //TODO: disable google drive, events missing since Aug 22.
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "SUPPORTED_STORAGE_TYPES", {
        get: function () {
            return AppSettings.KLOUDLESS_STORAGE_TYPES.concat(['quietthyme']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "SUPPORTED_BOOK_TYPES", {
        get: function () {
            return ['.azw3', '.azw', '.cbr', '.cbt', '.cbz', '.chm', '.djvu', '.doc', '.docx', '.epub', '.ibooks', '.kf8', '.lrf', '.lit', '.mobi', '.pdf', '.prc', '.rtf', '.txt'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "STORAGE_DETAILS", {
        get: function () {
            return {
                quietthyme: {
                    display_name: 'QuietThyme',
                    details: 'This storage type is not available during beta.',
                    blackhole_path: null,
                },
                box: {
                    display_name: 'Box',
                    details: 'Manage content across your business; from simple file sharing to building custom apps.',
                    blackhole_path: 'QuietThyme/blackhole',
                },
                dropbox: {
                    display_name: 'Dropbox',
                    details: 'A file backup, sync, and sharing solution used by more than 500 million users.',
                    blackhole_path: 'Apps/QuietThyme/blackhole',
                },
                skydrive: {
                    display_name: 'OneDrive',
                    details: 'Get to your files and photos from anywhere, on any device. Share and work together with anyone in your work and life.',
                    blackhole_path: 'QuietThyme/blackhole',
                },
                gdrive: {
                    display_name: 'Google Drive',
                    details: 'Get access to files anywhere through secure cloud storage and file backup for your photos, videos, files and more with Google Drive.',
                    blackhole_path: 'QuietThyme/blackhole',
                },
            };
        },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());

//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div scrollSpy id=\"wrapper\" class=\"clearfix\" style=\"opacity: 1;\">\n    <!-- Notifications -->\n    <quietthyme-notification></quietthyme-notification>\n\n    <!-- Routed views go here -->\n    <router-outlet></router-outlet>\n\n</div>\n\n\n<!-- Go To Top\n============================================= -->\n<div id=\"gotoTop\" class=\"icon-angle-up\"></div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_operators__ = __webpack_require__("../../../../../src/app/rxjs-operators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(viewContainerRef) {
        this.title = 'app works!';
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_login_account_login_component__ = __webpack_require__("../../../../../src/app/account-login/account-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_register_account_register_component__ = __webpack_require__("../../../../../src/app/account-register/account-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_kloudless_authenticator_directive__ = __webpack_require__("../../../../../src/app/shared/kloudless-authenticator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partials_footer_footer_component__ = __webpack_require__("../../../../../src/app/partials/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__partials_header_header_component__ = __webpack_require__("../../../../../src/app/partials/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__storage_storage_component__ = __webpack_require__("../../../../../src/app/storage/storage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__library_library_component__ = __webpack_require__("../../../../../src/app/library/library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__book_details_book_details_component__ = __webpack_require__("../../../../../src/app/book-details/book-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__partials_storage_panel_storage_panel_component__ = __webpack_require__("../../../../../src/app/partials/storage-panel/storage-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__partials_opds_panel_opds_panel_component__ = __webpack_require__("../../../../../src/app/partials/opds-panel/opds-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_stripe_checkout_button_directive__ = __webpack_require__("../../../../../src/app/shared/stripe-checkout-button.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_file_size_pipe__ = __webpack_require__("../../../../../src/app/shared/file-size.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_cache_service__ = __webpack_require__("../../../../../src/app/services/cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_uservoice_service__ = __webpack_require__("../../../../../src/app/services/uservoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_dropzone_directive__ = __webpack_require__("../../../../../src/app/shared/dropzone.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__partials_notification_notification_component__ = __webpack_require__("../../../../../src/app/partials/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__partials_book_upload_book_upload_component__ = __webpack_require__("../../../../../src/app/partials/book-upload/book-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__account_register_plan_account_register_plan_component__ = __webpack_require__("../../../../../src/app/account-register-plan/account-register-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular2_markdown__ = __webpack_require__("../../../../angular2-markdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular2_masonry__ = __webpack_require__("../../../../angular2-masonry/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_scrollspy__ = __webpack_require__("../../../../ng2-scrollspy/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_scrollspy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng2_scrollspy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_scrollspy_dist_plugin_affix_directive__ = __webpack_require__("../../../../ng2-scrollspy/dist/plugin/affix.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_scrollspy_dist_plugin_affix_directive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ng2_scrollspy_dist_plugin_affix_directive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























//Third party









function getAuthHttp(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_30_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_30_angular2_jwt__["AuthConfig"]({
        tokenName: 'id_token',
        noJwtError: true,
        headerPrefix: 'JWT',
        tokenGetter: function () { return localStorage.getItem('id_token'); },
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__account_login_account_login_component__["a" /* AccountLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__account_register_account_register_component__["a" /* AccountRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared_kloudless_authenticator_directive__["a" /* KloudlessAuthenticatorDirective */],
            __WEBPACK_IMPORTED_MODULE_9__partials_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__partials_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__storage_storage_component__["a" /* StorageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__library_library_component__["a" /* LibraryComponent */],
            __WEBPACK_IMPORTED_MODULE_13__book_details_book_details_component__["a" /* BookDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_36_ng2_scrollspy_dist_plugin_affix_directive__["ScrollSpyAffixDirective"],
            __WEBPACK_IMPORTED_MODULE_14__partials_storage_panel_storage_panel_component__["a" /* StoragePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_19__shared_file_size_pipe__["a" /* FileSizePipe */],
            __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__privacy_privacy_component__["a" /* PrivacyComponent */],
            __WEBPACK_IMPORTED_MODULE_18__shared_stripe_checkout_button_directive__["a" /* StripeCheckoutButtonDirective */],
            __WEBPACK_IMPORTED_MODULE_29__account_register_plan_account_register_plan_component__["a" /* AccountRegisterPlanComponent */],
            __WEBPACK_IMPORTED_MODULE_17__partials_opds_panel_opds_panel_component__["a" /* OpdsPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_26__terms_terms_component__["a" /* TermsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__partials_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_28__partials_book_upload_book_upload_component__["a" /* BookUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_25__shared_dropzone_directive__["a" /* DropzoneDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_31_ngx_bootstrap__["a" /* Ng2BootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_32_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_33_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_34_angular2_masonry__["a" /* MasonryModule */],
            __WEBPACK_IMPORTED_MODULE_38_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_35_ng2_scrollspy__["ScrollSpyModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_37_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                //Public Endpoints
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__account_login_account_login_component__["a" /* AccountLoginComponent */] },
                { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__account_register_account_register_component__["a" /* AccountRegisterComponent */] },
                { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_16__privacy_privacy_component__["a" /* PrivacyComponent */] },
                { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_26__terms_terms_component__["a" /* TermsComponent */] },
                //Auth Endpoints
                {
                    path: 'register/plan',
                    component: __WEBPACK_IMPORTED_MODULE_29__account_register_plan_account_register_plan_component__["a" /* AccountRegisterPlanComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]],
                },
                {
                    path: 'storage',
                    component: __WEBPACK_IMPORTED_MODULE_11__storage_storage_component__["a" /* StorageComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]],
                },
                {
                    path: 'settings',
                    component: __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]],
                },
                {
                    path: 'storage/:source',
                    component: __WEBPACK_IMPORTED_MODULE_11__storage_storage_component__["a" /* StorageComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]],
                },
                {
                    path: 'library',
                    component: __WEBPACK_IMPORTED_MODULE_12__library_library_component__["a" /* LibraryComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]],
                },
                {
                    path: 'book/:bookId',
                    component: __WEBPACK_IMPORTED_MODULE_13__book_details_book_details_component__["a" /* BookDetailsComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */]],
                },
                // { path: 'project/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
                // { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
                // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent, canActivate: [AuthGuard] },
                // { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber/logs', component: ProjectDeployLogsComponent, canActivate: [AuthGuard] },
                { path: '', pathMatch: 'full', redirectTo: 'storage' },
                // { path: '**', component: PageNotFoundComponent }
                { path: '**', redirectTo: 'login' },
            ]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_21__services_cache_service__["a" /* CacheService */],
            __WEBPACK_IMPORTED_MODULE_23__services_uservoice_service__["a" /* UservoiceService */],
            __WEBPACK_IMPORTED_MODULE_24__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuard */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_30_angular2_jwt__["AuthHttp"],
                useFactory: getAuthHttp,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]],
            },
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_28__partials_book_upload_book_upload_component__["a" /* BookUploadComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book-details/book-details.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n<quietthyme-header></quietthyme-header>\n<div class=\"main-container\">\n    <section>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <h1>{{ book.title }}</h1>\n                    <ol class=\"breadcrumbs\">\n                        <li>\n                            <a routerLink=\"/library\">Library</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">{{ book.authors }}</a>\n                        </li>\n                        <li *ngIf=\"book.series_name\">\n                            <a href=\"#\">{{ book.series_name }}</a> #{{ book.series_number }}\n                        </li>\n                        <li *ngIf=\"book.isbn || book.isbn10\">\n                            ISBN &mdash; {{ book.isbn || book.isbn10 }}\n                        </li>\n                    </ol>\n                    <hr>\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n    <section class=\"space--lg\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-5 col-md-4\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <img *ngIf=\"book.cover\" class=\"border--round box-shadow-wide book-details-cover-image\" src=\"https://s3.amazonaws.com/{{ book.cover }}\" alt=\"{{ book.title }}\">\n                            <img *ngIf=\"!book.cover\" class=\"border--round box-shadow-wide\" src=\"assets/images/noart.png\" alt=\"{{ book.title }}\">\n\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"padding-top:40px\">\n                        <div class=\"col-md-12\">\n                            <button [disabled]=\"loading.download\" (click)=\"downloadBook()\" class=\"btn btn--primary\" >Download {{ book.storage_format}}</button>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-sm-7 col-md-6 col-md-offset-1\">\n                    <h2>{{ book.title }}</h2>\n                    <div class=\"text-block\">\n                        <span class=\"h4 inline-block\">{{ book.authors }}</span>\n                    </div>\n                    <markdown [data]=\"book.short_summary\"></markdown>\n\n                    <accordion style=\"padding-top: 30px;\" class=\"accordion accordion-2 accordion--oneopen\">\n\n                        <accordion-group heading=\"Details\">\n                            <ul class=\"bullets\">\n                                <li>\n                                    <span>Title &mdash; {{ book.title }}</span>\n                                </li>\n                                <li>\n                                    <span>Authors &mdash; {{ book.authors }}</span>\n                                </li>\n                                <li *ngIf=\"book.series_name\">\n                                    <span>Series &mdash; {{ book.series_name }} #{{ book.series_number }}</span>\n                                </li>\n\n                                <li>\n                                    <span>ISBN &mdash; {{ book.isbn || book.isbn10 }}</span>\n                                </li>\n\n                                <li *ngIf=\"book.average_rating\">\n                                    <span>Rating &mdash; {{ book.average_rating }}</span>\n                                </li>\n\n                                <li *ngIf=\"book.publisher\">\n                                    <span>Publisher &mdash; {{ book.publisher }}</span>\n                                </li>\n                                <li *ngIf=\"book.published_date\">\n                                    <span>Published &mdash; {{ book.published_date | amDateFormat:'LL' }}</span>\n                                </li>\n                                <li *ngIf=\"book.language\">\n                                    <span>Language &mdash; {{ book.language }}</span>\n                                </li>\n                                <li *ngIf=\"book.pages\">\n                                    <span>Pages &mdash; {{ book.pages }}</span>\n                                </li>\n                                <li *ngIf=\"book.last_modified\">\n                                    <span>Modified on &mdash; {{ book.last_modified | amDateFormat:'LL' }}</span>\n                                </li>\n\n                                <li *ngIf=\"book.storage_type\">\n                                    <span>Stored on &mdash; {{ book.storage_type }}</span>\n                                </li>\n\n                                <li *ngIf=\"book.storage_size\">\n                                    <span>Size &mdash; {{ book.storage_size |  fileSize}}</span>\n                                </li>\n\n                                <li *ngIf=\"book.storage_format\">\n                                    <span>Format &mdash; {{ book.storage_format}}</span>\n                                </li>\n                            </ul>\n                        </accordion-group>\n\n                        <accordion-group heading=\"Tags\">\n                            <span class=\"label label-default\" *ngFor=\"let tag of book.tags; let myIndex = index\">{{ tag }}</span>\n                        </accordion-group>\n\n                        <accordion-group heading=\"External Links\">\n                            <a *ngIf=\"book.amazon_id\" href=\"https://www.amazon.com/exec/obidos/ASIN/{{ book.amazon_id }}\" class=\"book-details-icons\">\n                                <i class=\"socicon socicon-amazon icon icon--s\"></i>\n                            </a>\n\n                            <a *ngIf=\"book.google_id\" href=\"https://books.google.com/books?id={{ book.google_id }}\" class=\"book-details-icons\">\n                                <i class=\"socicon socicon-google icon icon--s\"></i>\n                            </a>\n\n                            <a *ngIf=\"book.goodreads_id\" href=\"https://www.goodreads.com/book/show/{{ book.goodreads_id }}\" class=\"book-details-icons\">\n                                <i class=\"socicon socicon-goodreads icon icon--s\"></i>\n                            </a>\n                        </accordion-group>\n\n                    </accordion>\n\n                    <!--end accordion-->\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n\n    <quietthyme-footer></quietthyme-footer>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/book-details/book-details.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book-details/book-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookDetailsComponent = (function () {
    function BookDetailsComponent(slimLoadingBarService, apiService, notificationService, router, activatedRoute) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loading = {
            info: false,
            download: false,
        };
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slimLoadingBarService.start();
        this.loading.info = true;
        this.apiService
            .book(this.activatedRoute.snapshot.params['bookId'])
            .finally(function () {
            _this.loading.info = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (book) {
            console.log(book);
            _this.book = book;
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    BookDetailsComponent.prototype.downloadBook = function () {
        var _this = this;
        console.log(this.book.id);
        if (this.loading.download) {
            return; //dont do anything if we're already downloading this book.
        }
        this.loading.download = true;
        this.slimLoadingBarService.start();
        this.apiService
            .download(this.book.id)
            .finally(function () {
            _this.loading.download = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (response) {
            var filename = _this.book.storage_filename + _this.book.storage_format;
            var file = response.blob();
            console.log(file.size + ' bytes file downloaded. File type: ', file.type);
            __WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"](file, filename);
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    return BookDetailsComponent;
}());
BookDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book-details',
        template: __webpack_require__("../../../../../src/app/book-details/book-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/book-details/book-details.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], BookDetailsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=book-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/library/library.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n<quietthyme-header></quietthyme-header>\n<div class=\"main-container\">\n    <section class=\"space--sm switchable switchable--switch  \">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"height-50 imagebg border--round\" data-overlay=\"2\">\n                        <div class=\"background-image-holder library-bg\">\n                        </div>\n                        <div class=\"pos-vertical-center col-sm-6 boxed boxed--lg bg--none\">\n                            <h2>Library</h2>\n                            <p class=\"lead\">\n                                Your library is accessible anytime, anywhere, on any device\n\n                                It doesn't matter if your have 10 books or 1000's of books. Quietthyme can help you easily manage a library of any size.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n\n\n    <quietthyme-opds-panel></quietthyme-opds-panel>\n\n    <section class=\" \">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"masonry-filter-container\">\n                        <span>Storage:</span>\n                        <div class=\"masonry-filter-holder\">\n                            <div class=\"masonry__filters\" data-filter-all-text=\"Storage\">\n                                <ul>\n                                    <li [ngClass]=\"{'active': !filter.storage}\" (click)=\"setStorage(null)\">All Storage</li>\n\n                                    <li *ngFor=\"let serviceStatus of connected\" [ngClass]=\"{'active': filter.storage == serviceStatus}\" (click)=\"setStorage(serviceStatus)\">{{ storageDetails[serviceStatus.storage_type].display_name }}</li>\n\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"masonry-filter-container\">\n                        <span>Sort By:</span>\n                        <div class=\"masonry-filter-holder\">\n                            <div class=\"masonry__filters\" data-filter-all-text=\"Storage\">\n                                <ul>\n                                    <li [ngClass]=\"{'active': !filter.sort}\" (click)=\"setSort(null)\">Title</li>\n                                    <li [ngClass]=\"{'active': filter.sort == 'authors'}\" (click)=\"setSort('authors')\">Author</li>\n                                    <li [ngClass]=\"{'active': filter.sort == 'series_name'}\" (click)=\"setSort('series_name')\">Series</li>\n                                    <li [ngClass]=\"{'active': filter.sort == 'updated_at'}\" (click)=\"setSort('updated_at')\">Added Date</li>\n\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-sm-4\">\n                    <button type=\"button\" class=\"btn btn--primary pull-right\" (click)=\"openModalBookUpload()\">Add Books</button>\n                </div>\n\n            </div>\n            <div\n                    infiniteScroll\n                    [infiniteScrollDistance]=\"2\"\n                    [infiniteScrollThrottle]=\"500\"\n                    [infiniteScrollDisabled]=\"bookListAll\"\n                    (scrolled)=\"onScroll()\"\n                    class=\"row library-books\">\n\n\n                <masonry [useImagesLoaded]=\"true\">\n\n\n                    <masonry-brick *ngFor=\"let book of bookList; let myIndex = index\" class=\"col-sm-3 masonry__item\">\n                        <div class=\"card card-2 text-center\">\n                            <div class=\"card__top\">\n                                <span class=\"label\" *ngIf=\"book.series_name\">{{ book.series_name }}</span>\n\n                                <a routerLink=\"/book/{{ book.id }}\" class=\"library-book-cover-wrapper\">\n                                    <img *ngIf=\"book.cover\" class=\"library-book-cover\" src=\"https://s3.amazonaws.com/{{ book.cover }}\" alt=\"{{ book.title }}\">\n                                    <img *ngIf=\"!book.cover\" class=\"library-book-cover\" src=\"assets/images/noart.png\" alt=\"{{ book.title }}\">\n                                </a>\n                            </div>\n                            <div class=\"card__body\">\n                                <h4>{{ book.title }}</h4>\n                                <span class=\"type--fade\">{{ book.authors}}</span>\n\n                            </div>\n                            <div class=\"card__bottom text-center\">\n                                <div class=\"card__action\">\n                                    <span class=\"h6 type--uppercase\">Info</span>\n                                    <a routerLink=\"/book/{{ book.id }}\">\n                                        <i class=\"glyphicon glyphicon-info-sign\"></i>\n                                    </a>\n                                </div>\n                                <div class=\"card__action\">\n                                    <span class=\"h6 type--uppercase\">Download</span>\n                                    <a (click)=\"downloadBook(book)\" [ngClass]=\"{'downloading': loading.download[book.id]}\">\n                                        <i class=\"glyphicon glyphicon-download\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </masonry-brick>\n\n                </masonry><!-- #shop end -->\n\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n    <quietthyme-footer></quietthyme-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/library/library.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library/library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_book_upload_book_upload_component__ = __webpack_require__("../../../../../src/app/partials/book-upload/book-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_scrollspy__ = __webpack_require__("../../../../ng2-scrollspy/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_scrollspy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_scrollspy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LibraryComponent = (function () {
    function LibraryComponent(slimLoadingBarService, notificationService, apiService, scrollSpyService, modalService) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.scrollSpyService = scrollSpyService;
        this.modalService = modalService;
        this.bookList = [];
        this.bookListAll = false;
        this.loading = {
            list: false,
            download: {},
            status: false,
        };
        this.filter = {
            sort: null,
            storage: null,
            storage_id: null,
            page: '',
        };
        this.connected = [];
        this.storageDetails = __WEBPACK_IMPORTED_MODULE_8__app_settings__["a" /* AppSettings */].STORAGE_DETAILS;
    }
    LibraryComponent.prototype.ngAfterViewInit = function () {
        // this.getBookList();
        this.getStorage();
        // this.scrollSpyService.getObservable('sidebar').subscribe((e: any) => {
        //     console.log('ScrollSpy::sidebar: ', e);
        // });
    };
    LibraryComponent.prototype.initStorageStatus = function () {
        this.connected = [
            {
                free_space: 0,
                total_space: 0,
                prefix: 'quietthyme://',
                device_name: 'quietthyme',
                storage_id: 'quietthyme',
                storage_type: 'quietthyme',
                location_code: 'main',
            },
        ];
    };
    LibraryComponent.prototype.onScroll = function () {
        console.log('SCROLLING');
        this.getBookList();
    };
    LibraryComponent.prototype.getStorage = function () {
        var _this = this;
        var self = this;
        this.loading.status = true;
        this.slimLoadingBarService.start();
        this.apiService
            .storageStatus()
            .finally(function () {
            _this.loading.status = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (response) {
            console.log(response);
            _this.initStorageStatus();
            _this.connected = _this.connected.concat(response);
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    LibraryComponent.prototype.getBookList = function () {
        var _this = this;
        if (this.loading.list || this.bookListAll) {
            console.log('List is already loading, or all books retrieved already. ');
            return;
        }
        this.loading.list = true;
        this.slimLoadingBarService.start();
        this.apiService
            .bookList(this.filter)
            .finally(function () {
            _this.loading.list = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (book_data) {
            console.log(book_data);
            _this.bookList = _this.bookList.concat(book_data.Items);
            _this.filter.page = book_data.LastEvaluatedKey;
            if (book_data.LastEvaluatedKey == '') {
                //no more books to load:
                _this.bookListAll = true;
            }
            // .map(function(book){
            //     book.cover = encodeURI(book.cover).replace(/%20/g, '+')
            //     return book
            // })
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    LibraryComponent.prototype.downloadBook = function (book) {
        var _this = this;
        console.log(book.id);
        if (this.loading.download[book.id]) {
            return; //dont do anything if we're already downloading this book.
        }
        this.loading.download[book.id] = true;
        this.slimLoadingBarService.start();
        this.apiService
            .download(book.id)
            .finally(function () {
            _this.loading.download[book.id] = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (response) {
            var filename = book.storage_filename + book.storage_format;
            var file = response.blob();
            console.log(file.size + ' bytes file downloaded. File type: ', file.type);
            __WEBPACK_IMPORTED_MODULE_7_file_saver__["saveAs"](file, filename);
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    LibraryComponent.prototype.setStorage = function (storageStatus) {
        if (storageStatus == this.filter.storage)
            return; //user clicked an active filter
        this.filter.storage = storageStatus || null;
        this.filter.storage_id = storageStatus != null
            ? storageStatus.storage_id
            : null;
        this.filter.page = '';
        console.log('CHANGED STORAGE FILTER', this.filter.storage);
        this.bookListAll = false;
        this.bookList = [];
        this.getBookList();
    };
    LibraryComponent.prototype.setSort = function (sort) {
        if (sort == this.filter.sort)
            return; //user clicked an active filter
        this.filter.sort = sort || null;
        this.filter.page = '';
        console.log('CHANGED SORT FILTER', this.filter.sort);
        this.bookListAll = false;
        this.bookList = [];
        this.getBookList();
    };
    LibraryComponent.prototype.openModalBookUpload = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__partials_book_upload_book_upload_component__["a" /* BookUploadComponent */], {
            animated: true,
            backdrop: 'static',
            class: 'modal-container modal-active',
        });
        this.bsModalRef.content.connected = this.connected;
    };
    return LibraryComponent;
}());
LibraryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-library',
        template: __webpack_require__("../../../../../src/app/library/library.component.html"),
        styles: [__webpack_require__("../../../../../src/app/library/library.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_scrollspy__["ScrollSpyService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_scrollspy__["ScrollSpyService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _e || Object])
], LibraryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=library.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/storage-prepare-book-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePrepareBookModel; });
var StoragePrepareBookModel = (function () {
    function StoragePrepareBookModel() {
        this.storage_id = 'quietthyme'; //by default we upload to the QuietThyme storage, no where else.
        this.book_id = 'NEW';
    }
    return StoragePrepareBookModel;
}());

//# sourceMappingURL=storage-prepare-book-model.js.map

/***/ }),

/***/ "../../../../../src/app/models/storage-status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageStatus; });
var StorageStatus = (function () {
    function StorageStatus() {
    }
    return StorageStatus;
}());

//# sourceMappingURL=storage-status.js.map

/***/ }),

/***/ "../../../../../src/app/partials/book-upload/book-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"imageblock feature-large bg--site border--round \">\n    <div class=\"imageblock__content col-md-4 col-sm-3 pos-left\">\n        <div class=\"background-image-holder library-book-upload-bg\">\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-md-push-5 col-sm-7 col-sm-push-4\">\n                <h2>Upload books</h2>\n                <p>\n                    It's easy. Just Drag & Drop your books into the box below. You can also choose to upload books to your Cloud Storage.\n                </p>\n\n                <form class=\"form--clearfix\">\n                    <div class=\"col-sm-12\">\n                        <label>Destination:</label>\n                        <div class=\"input-select\">\n                            <select [(ngModel)]=\"storageId\" name=\"storageId\">\n                                <option *ngFor=\"let serviceStatus of connected\" [value]=\"serviceStatus.storage_id\">{{ storageDetails[serviceStatus.storage_type].display_name }}</option>\n                            </select>\n                        </div>\n                    </div>\n                </form>\n                <form dropzone\n                      [storageId]=\"storageId\"\n                      class=\"dropzone\"\n                      id=\"my-awesome-dropzone\"></form>\n                <p style=\"padding-top:10px;\">\n                    It's even easier to upload books via your Cloud Storage \"blackhole\" folder. Check the Storage page for more info.\n                </p>\n            </div>\n        </div>\n        <!--end of row-->\n    </div>\n    <!--end of container-->\n</section>\n<div (click)=\"closeModalBookUpload()\" class=\"modal-close modal-close-cross\"></div>"

/***/ }),

/***/ "../../../../../src/app/partials/book-upload/book-upload.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/book-upload/book-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookUploadComponent = (function () {
    function BookUploadComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.connected = [];
        this.storageDetails = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].STORAGE_DETAILS;
        this.storageId = "quietthyme";
    }
    BookUploadComponent.prototype.ngOnInit = function () {
    };
    BookUploadComponent.prototype.closeModalBookUpload = function (e) {
        this.bsModalRef.hide();
    };
    return BookUploadComponent;
}());
BookUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'quietthyme-book-upload',
        template: __webpack_require__("../../../../../src/app/partials/book-upload/book-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/book-upload/book-upload.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_options_class__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_options_class__["a" /* BsModalRef */]) === "function" && _a || Object])
], BookUploadComponent);

var _a;
//# sourceMappingURL=book-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/partials/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center-xs space--xs \">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <ul class=\"list-inline\">\n                    <li>\n                        <a href=\"#\">\n                            <span class=\"h6 type--uppercase\">About</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <span class=\"h6 type--uppercase\">Careers</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://quietthyme.uservoice.com/\">\n                            <span class=\"h6 type--uppercase\">Support</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-sm-5 text-right text-center-xs\">\n                <ul class=\"social-list list-inline list--hover\">\n                    <li>\n                        <a href=\"https://www.reddit.com/r/quietthyme\">\n                            <i class=\"socicon socicon-reddit icon icon--xs\"></i>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://twitter.com/thymetweets\">\n                            <i class=\"socicon socicon-twitter icon icon--xs\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <!--end of row-->\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <span class=\"type--fine-print\">&copy;\n                <span class=\"update-year\"></span> QuietThyme Inc.</span>\n                <a class=\"type--fine-print\" routerLink=\"/privacy\">Privacy Policy</a>\n                <a class=\"type--fine-print\" routerLink=\"/terms\">Terms of Use</a>\n            </div>\n            <div class=\"col-sm-5 text-right text-center-xs\">\n                <a class=\"type--fine-print\" href=\"mailto:hello@quietthyme.com\">hello@quietthyme.com</a>\n            </div>\n        </div>\n        <!--end of row-->\n    </div>\n    <!--end of container-->\n</footer>"

/***/ }),

/***/ "../../../../../src/app/partials/footer/footer.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'quietthyme-footer',
        template: __webpack_require__("../../../../../src/app/partials/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/footer/footer.component.less")],
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"bar bar--sm bg--dark\" id=\"menu3\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2 hidden-xs hidden-sm\">\n                <div class=\"bar__module\">\n                    <a routerLink=\"/library\">\n                        <img class=\"logo logo-dark\" alt=\"logo\" src=\"assets/images/logo/logo-large.png.svg\" />\n                        <img class=\"logo logo-light\" alt=\"logo\" src=\"assets/images/logo/logo-white-large.png.svg\" />\n                    </a>\n                </div>\n                <!--end module-->\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"bar__module\">\n                    <form class=\"hidden\">\n                        <input type=\"search\" placeholder=\"Search site\" name=\"query\" />\n                    </form>\n                </div>\n            </div>\n\n            <!--end columns-->\n            <div class=\"col-md-1\">\n                <div class=\"bar__module\"></div>\n            </div>\n            <div class=\"col-md-5 text-right text-left-xs\">\n                <div class=\"bar__module\">\n                    <ul class=\"menu-horizontal text-left\">\n                        <li>\n                            <a routerLink=\"/storage\">Storage</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/library\">Library</a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/settings\">Account</a>\n                        </li>\n                    </ul>\n                </div>\n                <!--end module-->\n                <div class=\"bar__module\">\n                    <a class=\"btn btn--primary btn--sm type--uppercase\" (click)=\"logout()\">\n                                    <span class=\"btn__text\">\n                                        Logout\n                                    </span>\n                    </a>\n                </div>\n                <!--end module-->\n            </div>\n            <!--end columns-->\n        </div>\n        <!--end of row-->\n    </div>\n    <!--end of container-->\n</nav>"

/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.logout = function () {
        //remove token, and redirect to login page.
        this.apiService.logout();
        this.router.navigate(['/login']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'quietthyme-header',
        template: __webpack_require__("../../../../../src/app/partials/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/header/header.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/partials/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible && !ignored\" class=\"notification pos-right pos-top col-sm-4 col-md-3 notification--reveal\" data-animation=\"from-top\" data-autoshow=\"200\">\n    <div class=\"boxed boxed--border border--round box-shadow\">\n        <div class=\"text-block\">\n            <h5>{{ title }}</h5>\n            <p>\n                {{ message }}\n            </p>\n        </div>\n    </div>\n    <div class=\"notification-close-cross notification-close\" (click)=\"ignoreNotification()\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/partials/notification/notification.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(notificationService) {
        this.notificationService = notificationService;
        this.visible = false;
        this.ignored = false;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationStateChanged = this.notificationService.notificationState.subscribe(function (state) {
            _this.visible = state.show;
            _this.message = state.message;
            _this.title = state.title;
            _this.ignored = false;
        });
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        this.notificationStateChanged.unsubscribe();
    };
    NotificationComponent.prototype.ignoreNotification = function () {
        this.ignored = true;
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'quietthyme-notification',
        template: __webpack_require__("../../../../../src/app/partials/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/notification/notification.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notification_service__["a" /* NotificationService */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/partials/opds-panel/opds-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"text-center cta cta-4 space--xxs border--bottom imagebg\" data-gradient-bg='#4876BD,#5448BD,#8F48BD,#BD48B1'>\n    <canvas id=\"granim-opds\"></canvas>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <span class=\"label label--inline\">OPDS</span>\n                <span>{{ catalogUrl }}</span>\n            </div>\n        </div>\n        <!--end of row-->\n    </div>\n    <!--end of container-->\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/partials/opds-panel/opds-panel.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/opds-panel/opds-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpdsPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpdsPanelComponent = (function () {
    function OpdsPanelComponent(apiService) {
        this.apiService = apiService;
        this.catalogUrl = '';
    }
    OpdsPanelComponent.prototype.ngOnInit = function () {
        this.catalogUrl = this.apiService.catalogUrl();
        var granimInstance = new Granim({
            element: '#granim-opds',
            name: 'granim',
            opacity: [1, 1],
            states: {
                'default-state': {
                    gradients: [
                        //#4876BD,#5448BD,#8F48BD,#BD48B1
                        ['#4876BD', '#5448BD'],
                        // ['#8F48BD', '#BD48B1'],
                        ['#238b53', '#669e4b'],
                    ],
                },
            },
        });
    };
    return OpdsPanelComponent;
}());
OpdsPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'quietthyme-opds-panel',
        template: __webpack_require__("../../../../../src/app/partials/opds-panel/opds-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/opds-panel/opds-panel.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], OpdsPanelComponent);

var _a;
//# sourceMappingURL=opds-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/partials/storage-panel/storage-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'feature--featured': storageData}\" class=\"feature feature-1 boxed boxed--border\">\n    <h5>{{ StorageDetails[storageData.storage_type].display_name }}</h5>\n    <p>\n        <span>{{ StorageDetails[storageData.storage_type].details }}</span>\n    </p>\n    <br/>\n    <p *ngIf=\"StorageDetails[storageData.storage_type].blackhole_path\">\n        Blackhole: \"<strong>{{ StorageDetails[storageData.storage_type].blackhole_path }}</strong>\"\n    </p>\n    <a routerLink=\"/library\">\n        Show Books\n    </a>\n    <span *ngIf=\"storageData.storage_type == 'quietthyme'\" class=\"label\">∞ GB</span>\n    <span *ngIf=\"storageData.storage_type != 'quietthyme'\" class=\"label\">{{ storageData.free_space |  fileSize}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/partials/storage-panel/storage-panel.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/storage-panel/storage-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoragePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_storage_status__ = __webpack_require__("../../../../../src/app/models/storage-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoragePanelComponent = (function () {
    function StoragePanelComponent() {
    }
    StoragePanelComponent.prototype.ngOnInit = function () {
        console.log(this.storageData);
        this.StorageDetails = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].STORAGE_DETAILS;
    };
    return StoragePanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_storage_status__["a" /* StorageStatus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_storage_status__["a" /* StorageStatus */]) === "function" && _a || Object)
], StoragePanelComponent.prototype, "storageData", void 0);
StoragePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'quietthyme-storage-panel',
        template: __webpack_require__("../../../../../src/app/partials/storage-panel/storage-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partials/storage-panel/storage-panel.component.less")],
    }),
    __metadata("design:paramtypes", [])
], StoragePanelComponent);

var _a;
//# sourceMappingURL=storage-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n\n<quietthyme-header></quietthyme-header>\n<!-- Content\n============================================= -->\n<section id=\"content\">\n\n    <div class=\"content-wrap\">\n\n        <div class=\"container clearfix\">\n\n            <div class=\"row clearfix\">\n\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <h1 class=\"text-center\">Privacy Policy</h1>\n\n\n                    <p>At QuietThyme, we collect and manage user data according to the following Privacy Policy, with the goal of incorporating our company values: transparency, accessibility, sanity, usability. This document is part of QuietThyme's Terms of Service, and by using QuietThyme.com (the \"Website\"), you agree to the terms of this Privacy Policy and the Terms of Service. Please read the Terms of Service in their entirety, and refer to those for definitions and contacts.</p>\n                    <p><strong>Data Collected</strong></p>\n                    <p>We collect anonymous data from every visitor of the Website to monitor traffic and fix bugs. For example, we collect information like web requests, the data sent in response to such requests, the Internet Protocol address, the browser type, the browser language, and a timestamp for the request.</p>\n                    <p>We ask you to log in and provide certain personal information (such as your email address and/or full name) in order to be able to save your profile and the ebooks, catalog, invoices, and other data associated with it.  In order to enable these or any other login based features, we use cookies to store session information for your convenience. Cookies are required to use the Website.</p>\n                    <p>You are able to view, change and remove your data associated with your profile. Should you choose to delete your account, please contact us at support@QuietThyme.com and we will follow up with such request as soon as possible. </p>\n                    <p><strong>Use of the Data</strong></p>\n                    <p>We only use your personal information to provide you the QuietThyme services or to communicate with you about the services or the Website.</p>\n                    <p>With respect to any data you may upload to QuietThyme, we take the privacy and confidentiality of such data seriously.</p>\n                    <p>We employ industry standard security techniques to protect against unauthorized access of data about you that we store, including personal information.</p>\n                    <p><strong>We do not share personal information you have provided to us without your consent</strong>, unless:</p>\n                    <ul>\n                        <li>doing so is appropriate to carry out a user’s request;</li>\n                        <li>we believe it's needed to enforce our Terms of Service, or that is legally required;</li>\n                        <li>we believe it's needed to detect, prevent or address fraud, security or technical issues;</li>\n                        <li>otherwise protect our property, legal rights, or that of others.</li>\n                    </ul>\n                    <p>QuietThyme is operated from Canada. If you are visiting the Website from outside Canada, you agree to any processing of any personal information you provide us according to this policy.</p>\n                    <p>QuietThyme may contact you, by email or other means. For example, QuietThyme may send you promotional emails relating to QuietThyme that we feel you would be interested in, or communicate with you about your use of the QuietThyme website. QuietThyme may also use technology to alert us via a confirmation email when you open an email from us. If you do not want to receive email from QuietThyme, please opt out of receiving emails at the bottom of any QuietThyme emails or by editing you profile preferences.</p>\n                    <p><strong>Sharing of Data</strong></p>\n                    <p>We don't sell your personal information to third parties. Aggregated, anonymized data is periodically transmitted to external services to help us improve the QuietThyme Website and service, and in some cases your user identifiers (your username or email address) may be transmitted to external services for the same reason. We currently use Google Analytics (traffic analysis, SEO optimization) but we reserve the right to include other third party analytics services in the future. We listed below what data these third parties extract exactly. Feel free to check out their own Privacy Policies to find out more.</p>\n                    <ul>\n                        <li>Google Analytics: anonymous (ad serving domains, browser type, demographics, language settings, page views, time/date), pseudonymous (IP address)</li>\n                    </ul>\n                    <p>We may also use social buttons provided by services like Twitter, Google+ and Facebook. Your use of these third party services is entirely optional. We are not responsible for the privacy policies and/or practices of these third party services, and you are responsible for reading and understanding those third party services’ privacy policies.</p>\n                    <p><strong>Changes to the Privacy Policy</strong></p>\n                    <p>We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. If we make changes in the way we collect or use information, we will notify you by posting an announcement on the Website or sending you an email. A user is bound by any changes to the Privacy Policy when he or she uses the Services after such changes have been first posted.</p>\n                    <p>Should you have any question or concern, please write to support@QuietThyme.com</p>\n\n\n\n\n                </div>\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n\n<quietthyme-footer></quietthyme-footer>\n"

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () { };
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__("../../../../../src/app/privacy/privacy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/privacy/privacy.component.less")],
    }),
    __metadata("design:paramtypes", [])
], PrivacyComponent);

//# sourceMappingURL=privacy.component.js.map

/***/ }),

/***/ "../../../../../src/app/rxjs-operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_TimerObservable__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.
// Statics

// Operators








//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cache_service__ = __webpack_require__("../../../../../src/app/services/cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = (function () {
    function ApiService(authHttp, http, cacheService) {
        this.authHttp = authHttp;
        this.http = http;
        this.cacheService = cacheService;
    }
    /////////////////////////////////////////////////////////////////////////////
    //Helper functions
    /////////////////////////////////////////////////////////////////////////////
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('RAW BODY', body);
        return body.data || {};
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error ? body.error.message : JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " - " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ApiService.prototype.cacheKey = function (method, url, query) {
        return '[' + method + ']' + url + '?' + (query || {}).toString();
    };
    ApiService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    ApiService.prototype.tokenPayload = function () {
        var token = localStorage.getItem('id_token');
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        var payload = jwtHelper.decodeToken(token);
        return payload;
    };
    /////////////////////////////////////////////////////////////////////////////
    // Unauthenticated functions
    /////////////////////////////////////////////////////////////////////////////
    ApiService.prototype.logout = function () {
        localStorage.removeItem('id_token');
    };
    ApiService.prototype.authRegister = function (name, email, password) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/auth/register", {
            name: name,
            email: email,
            password: password,
        })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.authLogin = function (email, password) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/auth/login", {
            email: email,
            password: password,
        })
            .map(this.extractData)
            .catch(this.handleError);
    };
    /////////////////////////////////////////////////////////////////////////////
    // Authenticated functions
    /////////////////////////////////////////////////////////////////////////////
    ApiService.prototype.catalogUrl = function () {
        var jwtPayload = this.tokenPayload();
        return __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].CATALOG_ENDPOINT + "/" + jwtPayload.catalog_token;
    };
    ApiService.prototype.userPlan = function (stripePlanData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/user/plan";
        return this.authHttp
            .post(url, stripePlanData)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.storageStatus = function (bustCache) {
        if (bustCache === void 0) { bustCache = false; }
        var url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/storage/status";
        var cacheKey = this.cacheKey('GET', url);
        if (bustCache) {
            this.cacheService.delete(cacheKey);
        }
        return (this.cacheService.get(cacheKey) ||
            this.cacheService.put(cacheKey, this.authHttp.get(url).map(this.extractData).catch(this.handleError)));
    };
    ApiService.prototype.storageLink = function (kloudlessData) {
        //TODO: this should bust the /storage/status cache
        return this.authHttp
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/storage/link", kloudlessData)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.storagePrepareBook = function (prepare_data) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('source', 'web'); //if we dont specify the source, we'll get the wrong kind of signedUrl from the API (one without a policy)
        //TODO: this should bust the /book cache
        return this.authHttp
            .post(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/storage/prepare/book", prepare_data, { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.bookList = function (filter) {
        var url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/book";
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        if (filter.sort)
            params.set('sort', filter.sort.toString());
        if (filter.storage_id)
            params.set('storage_id', filter.storage_id.toString());
        if (filter.storage)
            params.set('storage', filter.storage.toString());
        if (filter.page)
            params.set('page', filter.page.toString());
        var cacheKey = this.cacheKey('GET', url, params);
        return (this.cacheService.get(cacheKey) ||
            this.cacheService.put(cacheKey, this.authHttp
                .get(url, { search: params })
                .map(this.extractData)
                .catch(this.handleError)));
    };
    ApiService.prototype.book = function (bookId) {
        var url = __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/book";
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('id', bookId.toString());
        var cacheKey = this.cacheKey('GET', url, params);
        return (this.cacheService.get(cacheKey) ||
            this.cacheService.put(cacheKey, this.authHttp
                .get(url, { search: params })
                .map(this.extractData)
                .catch(this.handleError)));
    };
    ApiService.prototype.download = function (bookId) {
        var _this = this;
        //http://stackoverflow.com/a/41252342
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ Accept: '*' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        options.responseType = __WEBPACK_IMPORTED_MODULE_2__angular_http__["ResponseContentType"].Blob;
        return this.authHttp
            .get(__WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + "/storage/" + bookId)
            .map(this.extractData)
            .flatMap(function (resp) { return _this.http.get(resp.url, options); })
            .catch(this.handleError);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cache_service__["a" /* CacheService */]) === "function" && _c || Object])
], ApiService);

var _a, _b, _c;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.apiService.loggedIn()) {
            //if the user is logged in, always let them go to the register/plan page if requested.
            if (state.url == '/register/plan') {
                return true;
            }
            else if (this.apiService.tokenPayload().plan == 'none') {
                //user doesnt have a plan, redirec them to the settings page.
                console.log('No plan, redirecting to /register/plan page.');
                this.router.navigate(['/register/plan']);
                return false;
            }
            else {
                return true;
            }
        }
        else {
            console.log(route, state);
            this.router.navigate(['/login', { requested: state.url }]);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Designed around http://stackoverflow.com/a/36413003/1157633
var CacheService = (function () {
    function CacheService() {
        this._cache = {};
    }
    CacheService.prototype.get = function (cacheKey) {
        return this._cache[cacheKey];
    };
    CacheService.prototype.put = function (cacheKey, observable) {
        var currentSubject = this.get(cacheKey);
        if (!currentSubject) {
            this._cache[cacheKey] = new __WEBPACK_IMPORTED_MODULE_0_rxjs_ReplaySubject__["ReplaySubject"](1);
            currentSubject = this._cache[cacheKey]; //if the current cacheKey doesn't exist in the cache, lets ensure that we create it.
        }
        observable.subscribe(function (data) { return currentSubject.next(data); }, function (error) { return currentSubject.error(error); }, function () { return currentSubject.complete(); });
        return currentSubject;
    };
    CacheService.prototype.delete = function (cacheKey) {
        delete this._cache[cacheKey];
    };
    return CacheService;
}());
CacheService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CacheService);

//# sourceMappingURL=cache.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NotificationService = (function () {
    function NotificationService(prior) {
        this.notificationSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.notificationState = this.notificationSubject.asObservable();
        if (prior) {
            return prior;
        }
        console.log('created global notification service');
    }
    NotificationService.prototype.show = function (title, message) {
        this.notificationSubject.next({ title: title, message: message, show: true });
    };
    NotificationService.prototype.hide = function () {
        this.notificationSubject.next({ show: false });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [NotificationService])
], NotificationService);

//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/uservoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UservoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UservoiceService = (function () {
    function UservoiceService(apiService) {
        this.apiService = apiService;
    }
    UservoiceService.prototype.identify = function () {
        try {
            //set UserVoice data
            // Identify the user and pass traits
            // To enable, replace sample data with actual user traits and uncomment the line
            var tokenPayload = this.apiService.tokenPayload();
            var uservoicePayload = {
                email: tokenPayload.email,
                name: tokenPayload.name,
                //created_at: 1364406966, // Unix timestamp for the date the user signed up
                id: tokenPayload.uid,
                type: tokenPayload.plan,
                account: {
                    // Account traits are only available on some plans
                    // id:           123, // Optional: associate multiple users with a single account
                    name: tokenPayload.name,
                    // created_at:   1364406966, // Unix timestamp for the date the account was created
                    // monthly_rate: 9.99, // Decimal; monthly rate of the account
                    // ltv:          1495.00, // Decimal; lifetime value of the account
                    plan: tokenPayload.plan,
                },
            };
            console.log('User:', uservoicePayload);
            UserVoice.push(['identify', uservoicePayload]);
        }
        catch (e) {
            //do nothing with errors.
        }
    };
    return UservoiceService;
}());
UservoiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], UservoiceService);

var _a;
//# sourceMappingURL=uservoice.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n\n<quietthyme-header></quietthyme-header>\n\n<div class=\"main-container\">\n    <section class=\"bg--secondary space--sm\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 col-md-offset-2\">\n                    <div class=\"boxed boxed--lg boxed--border\">\n                        <div class=\"text-block text-center\">\n                            <img alt=\"avatar\" [src]=\"gravatarUrl(userData.email)\" class=\"border--round box-shadow-wide\" />\n                            <span class=\"h5\">{{ userData.name }}</span>\n\n                            <span class=\"label\">{{ userData.plan }}</span>\n                        </div>\n                        <div class=\"text-block clearfix text-center\">\n                            <ul class=\"row row--list\">\n                                <li class=\"col-sm-4\">\n                                    <span class=\"type--fine-print block\">OPDS:</span>\n                                    <a href=\"{{ catalogUrl }}\">Catalog URL</a>\n                                </li>\n                                <li class=\"col-sm-4\">\n                                    <span class=\"type--fine-print block\">Member Since:</span>\n                                    <span>June 2016</span>\n                                </li>\n                                <li class=\"col-sm-4\">\n                                    <span class=\"type--fine-print block\">Email:</span>\n                                    <a href=\"#\">{{  userData.email }}</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"boxed boxed--border\">\n                        <ul class=\"row row--list clearfix text-center\">\n                            <li class=\"col-sm-3 col-xs-6\">\n                                <span class=\"h6 type--uppercase type--fade\">Books</span>\n                                <span class=\"h3\">220</span>\n                            </li>\n                            <li class=\"col-sm-3 col-xs-6\">\n                                <span class=\"h6 type--uppercase type--fade\">Authors</span>\n                                <span class=\"h3\">14</span>\n                            </li>\n                            <li class=\"col-sm-3 col-xs-6\">\n                                <span class=\"h6 type--uppercase type--fade\">Tags</span>\n                                <span class=\"h3\">2,129</span>\n                            </li>\n                            <li class=\"col-sm-3 col-xs-6\">\n                                <span class=\"h6 type--uppercase type--fade\">Series</span>\n                                <span class=\"h3\">119</span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"boxed boxed--border hidden\">\n                        <h4>Recent Activity</h4>\n                        <ul>\n                            <li class=\"clearfix\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-xs-3 text-center\">\n                                        <div class=\"icon-circle\">\n                                            <i class=\"icon icon--lg material-icons\">comment</i>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-8 col-xs-7\">\n                                        <span class=\"type--fine-print\">21st July, 2017</span>\n                                        <a href=\"#\" class=\"block color--primary\">Check out the relaunched Scope</a>\n                                        <p>\n                                            Discourse in writing dealing with a particular point or idea.\n                                        </p>\n                                    </div>\n                                </div>\n                                <hr>\n                            </li>\n                            <li class=\"clearfix\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-xs-3 text-center\">\n                                        <div class=\"icon-circle\">\n                                            <i class=\"icon icon--lg material-icons\">mode_edit</i>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-8 col-xs-7\">\n                                        <span class=\"type--fine-print\">14th July, 2017</span>\n                                        <a href=\"#\" class=\"block color--primary\">Tips for web typography</a>\n                                        <p>\n                                            To write beside or \"written beside\" is a self-contained unit of a discourse in writing dealing with a particular point or idea.\n                                        </p>\n                                    </div>\n                                </div>\n                                <hr>\n                            </li>\n                            <li class=\"clearfix\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-xs-3 text-center\">\n                                        <div class=\"icon-circle\">\n                                            <i class=\"icon icon--lg material-icons\">favorite</i>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-8 col-xs-7\">\n                                        <span class=\"type--fine-print\">12th July, 2017</span>\n                                        <a href=\"#\" class=\"block color--primary\">Where do you source your stock photography?</a>\n                                    </div>\n                                </div>\n                                <hr>\n                            </li>\n                            <li class=\"clearfix\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-2 col-xs-3 text-center\">\n                                        <div class=\"icon-circle\">\n                                            <i class=\"icon icon--lg material-icons\">comment</i>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-8 col-xs-7\">\n                                        <span class=\"type--fine-print\">3rd July, 2017</span>\n                                        <a href=\"#\" class=\"block color--primary\">Share your rapid development workflow</a>\n                                        <p>\n                                            Of a discourse in writing dealing with a particular point or idea.\n                                        </p>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                        <a href=\"#\" class=\"type--fine-print pull-right\">View All</a>\n                    </div>\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n    <quietthyme-footer></quietthyme-footer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(slimLoadingBarService, apiService, activatedRoute) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.userData = {};
        this.loading = {
            setPlan: false,
        };
        this.catalogUrl = '';
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.userData = this.apiService.tokenPayload();
        this.catalogUrl = this.apiService.catalogUrl();
    };
    SettingsComponent.prototype.ngAfterViewInit = function () { };
    SettingsComponent.prototype.gravatarUrl = function (email, size) {
        // MD5 (Message-Digest Algorithm) by WebToolkit
        //
        var MD5 = function (s) {
            function L(k, d) {
                return (k << d) | (k >>> (32 - d));
            }
            function K(G, k) {
                var I, d, F, H, x;
                F = G & 2147483648;
                H = k & 2147483648;
                I = G & 1073741824;
                d = k & 1073741824;
                x = (G & 1073741823) + (k & 1073741823);
                if (I & d) {
                    return x ^ 2147483648 ^ F ^ H;
                }
                if (I | d) {
                    if (x & 1073741824) {
                        return x ^ 3221225472 ^ F ^ H;
                    }
                    else {
                        return x ^ 1073741824 ^ F ^ H;
                    }
                }
                else {
                    return x ^ F ^ H;
                }
            }
            function r(d, F, k) {
                return (d & F) | (~d & k);
            }
            function q(d, F, k) {
                return (d & k) | (F & ~k);
            }
            function p(d, F, k) {
                return d ^ F ^ k;
            }
            function n(d, F, k) {
                return F ^ (d | ~k);
            }
            function u(G, F, aa, Z, k, H, I) {
                G = K(G, K(K(r(F, aa, Z), k), I));
                return K(L(G, H), F);
            }
            function f(G, F, aa, Z, k, H, I) {
                G = K(G, K(K(q(F, aa, Z), k), I));
                return K(L(G, H), F);
            }
            function D(G, F, aa, Z, k, H, I) {
                G = K(G, K(K(p(F, aa, Z), k), I));
                return K(L(G, H), F);
            }
            function t(G, F, aa, Z, k, H, I) {
                G = K(G, K(K(n(F, aa, Z), k), I));
                return K(L(G, H), F);
            }
            function e(G) {
                var Z;
                var F = G.length;
                var x = F + 8;
                var k = (x - x % 64) / 64;
                var I = (k + 1) * 16;
                var aa = Array(I - 1);
                var d = 0;
                var H = 0;
                while (H < F) {
                    Z = (H - H % 4) / 4;
                    d = H % 4 * 8;
                    aa[Z] = aa[Z] | (G.charCodeAt(H) << d);
                    H++;
                }
                Z = (H - H % 4) / 4;
                d = H % 4 * 8;
                aa[Z] = aa[Z] | (128 << d);
                aa[I - 2] = F << 3;
                aa[I - 1] = F >>> 29;
                return aa;
            }
            function B(x) {
                var k = '', F = '', G, d;
                for (d = 0; d <= 3; d++) {
                    G = (x >>> (d * 8)) & 255;
                    F = '0' + G.toString(16);
                    k = k + F.substr(F.length - 2, 2);
                }
                return k;
            }
            function J(k) {
                k = k.replace(/rn/g, 'n');
                var d = '';
                for (var F = 0; F < k.length; F++) {
                    var x = k.charCodeAt(F);
                    if (x < 128) {
                        d += String.fromCharCode(x);
                    }
                    else {
                        if (x > 127 && x < 2048) {
                            d += String.fromCharCode((x >> 6) | 192);
                            d += String.fromCharCode((x & 63) | 128);
                        }
                        else {
                            d += String.fromCharCode((x >> 12) | 224);
                            d += String.fromCharCode(((x >> 6) & 63) | 128);
                            d += String.fromCharCode((x & 63) | 128);
                        }
                    }
                }
                return d;
            }
            var C = Array();
            var P, h, E, v, g, Y, X, W, V;
            var S = 7, Q = 12, N = 17, M = 22;
            var A = 5, z = 9, y = 14, w = 20;
            var o = 4, m = 11, l = 16, j = 23;
            var U = 6, T = 10, R = 15, O = 21;
            s = J(s);
            C = e(s);
            Y = 1732584193;
            X = 4023233417;
            W = 2562383102;
            V = 271733878;
            for (P = 0; P < C.length; P += 16) {
                h = Y;
                E = X;
                v = W;
                g = V;
                Y = u(Y, X, W, V, C[P + 0], S, 3614090360);
                V = u(V, Y, X, W, C[P + 1], Q, 3905402710);
                W = u(W, V, Y, X, C[P + 2], N, 606105819);
                X = u(X, W, V, Y, C[P + 3], M, 3250441966);
                Y = u(Y, X, W, V, C[P + 4], S, 4118548399);
                V = u(V, Y, X, W, C[P + 5], Q, 1200080426);
                W = u(W, V, Y, X, C[P + 6], N, 2821735955);
                X = u(X, W, V, Y, C[P + 7], M, 4249261313);
                Y = u(Y, X, W, V, C[P + 8], S, 1770035416);
                V = u(V, Y, X, W, C[P + 9], Q, 2336552879);
                W = u(W, V, Y, X, C[P + 10], N, 4294925233);
                X = u(X, W, V, Y, C[P + 11], M, 2304563134);
                Y = u(Y, X, W, V, C[P + 12], S, 1804603682);
                V = u(V, Y, X, W, C[P + 13], Q, 4254626195);
                W = u(W, V, Y, X, C[P + 14], N, 2792965006);
                X = u(X, W, V, Y, C[P + 15], M, 1236535329);
                Y = f(Y, X, W, V, C[P + 1], A, 4129170786);
                V = f(V, Y, X, W, C[P + 6], z, 3225465664);
                W = f(W, V, Y, X, C[P + 11], y, 643717713);
                X = f(X, W, V, Y, C[P + 0], w, 3921069994);
                Y = f(Y, X, W, V, C[P + 5], A, 3593408605);
                V = f(V, Y, X, W, C[P + 10], z, 38016083);
                W = f(W, V, Y, X, C[P + 15], y, 3634488961);
                X = f(X, W, V, Y, C[P + 4], w, 3889429448);
                Y = f(Y, X, W, V, C[P + 9], A, 568446438);
                V = f(V, Y, X, W, C[P + 14], z, 3275163606);
                W = f(W, V, Y, X, C[P + 3], y, 4107603335);
                X = f(X, W, V, Y, C[P + 8], w, 1163531501);
                Y = f(Y, X, W, V, C[P + 13], A, 2850285829);
                V = f(V, Y, X, W, C[P + 2], z, 4243563512);
                W = f(W, V, Y, X, C[P + 7], y, 1735328473);
                X = f(X, W, V, Y, C[P + 12], w, 2368359562);
                Y = D(Y, X, W, V, C[P + 5], o, 4294588738);
                V = D(V, Y, X, W, C[P + 8], m, 2272392833);
                W = D(W, V, Y, X, C[P + 11], l, 1839030562);
                X = D(X, W, V, Y, C[P + 14], j, 4259657740);
                Y = D(Y, X, W, V, C[P + 1], o, 2763975236);
                V = D(V, Y, X, W, C[P + 4], m, 1272893353);
                W = D(W, V, Y, X, C[P + 7], l, 4139469664);
                X = D(X, W, V, Y, C[P + 10], j, 3200236656);
                Y = D(Y, X, W, V, C[P + 13], o, 681279174);
                V = D(V, Y, X, W, C[P + 0], m, 3936430074);
                W = D(W, V, Y, X, C[P + 3], l, 3572445317);
                X = D(X, W, V, Y, C[P + 6], j, 76029189);
                Y = D(Y, X, W, V, C[P + 9], o, 3654602809);
                V = D(V, Y, X, W, C[P + 12], m, 3873151461);
                W = D(W, V, Y, X, C[P + 15], l, 530742520);
                X = D(X, W, V, Y, C[P + 2], j, 3299628645);
                Y = t(Y, X, W, V, C[P + 0], U, 4096336452);
                V = t(V, Y, X, W, C[P + 7], T, 1126891415);
                W = t(W, V, Y, X, C[P + 14], R, 2878612391);
                X = t(X, W, V, Y, C[P + 5], O, 4237533241);
                Y = t(Y, X, W, V, C[P + 12], U, 1700485571);
                V = t(V, Y, X, W, C[P + 3], T, 2399980690);
                W = t(W, V, Y, X, C[P + 10], R, 4293915773);
                X = t(X, W, V, Y, C[P + 1], O, 2240044497);
                Y = t(Y, X, W, V, C[P + 8], U, 1873313359);
                V = t(V, Y, X, W, C[P + 15], T, 4264355552);
                W = t(W, V, Y, X, C[P + 6], R, 2734768916);
                X = t(X, W, V, Y, C[P + 13], O, 1309151649);
                Y = t(Y, X, W, V, C[P + 4], U, 4149444226);
                V = t(V, Y, X, W, C[P + 11], T, 3174756917);
                W = t(W, V, Y, X, C[P + 2], R, 718787259);
                X = t(X, W, V, Y, C[P + 9], O, 3951481745);
                Y = K(Y, h);
                X = K(X, E);
                W = K(W, v);
                V = K(V, g);
            }
            var i = B(Y) + B(X) + B(W) + B(V);
            return i.toLowerCase();
        };
        var size = size || 100;
        return '//www.gravatar.com/avatar/' + MD5(email) + '.jpg?d=mm&s=' + size;
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropzone.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_storage_prepare_book_model__ = __webpack_require__("../../../../../src/app/models/storage-prepare-book-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DropzoneDirective = (function () {
    function DropzoneDirective(_elt, apiService) {
        this.apiService = apiService;
        this.onCheckout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.acceptedFiles = __WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */].SUPPORTED_BOOK_TYPES.join(',');
        this.elt = _elt;
    }
    DropzoneDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        var myDropzone = new Dropzone(self.elt.nativeElement, {
            url: "https://s3.amazonaws.com/placeholder",
            paramName: "file",
            maxThumbnailFilesize: 5,
            // uploadMultiple: false,
            // headers: {"Accept": "text/plain"},
            // In the `accept` function we request a signed upload URL when a file being accepted
            acceptedFiles: self.acceptedFiles,
            accept: function (file, done) {
                var filename_parts = file.name.split(".");
                if (filename_parts.length == 1) {
                    done('Invalid file name');
                }
                var extension = "." + filename_parts.pop();
                var filename = filename_parts.join('.');
                var prepareData = new __WEBPACK_IMPORTED_MODULE_2__models_storage_prepare_book_model__["a" /* StoragePrepareBookModel */]();
                prepareData.storage_size = file.size;
                prepareData.storage_filename = filename;
                prepareData.storage_format = extension;
                prepareData.storage_id = self.storageId;
                console.log("Storage Destination data:", prepareData);
                self.apiService.storagePrepareBook(prepareData)
                    .subscribe(function (data) {
                    console.log("THIS IS THE RESPONSE DATA");
                    console.log(data);
                    file.signedFormFields = data['upload_url']['fields'];
                    file.uploadURL = data['upload_url']['url'];
                    done();
                }, function (error) {
                    done(error);
                });
            },
            sending: function (file, xhr, formData) {
                var signedFields = file.signedFormFields;
                console.log("Retrieving signed fields", signedFields);
                for (var key in signedFields) {
                    console.log(key, signedFields[key]);
                    formData.append(key, signedFields[key]);
                }
                // var _send = xhr.send;
                // xhr.send = function() {
                //     _send.call(xhr, file);
                // };
            }
        });
        // Set signed upload URL for each file being processing
        myDropzone.on('processing', function (file) {
            myDropzone.options.url = file.uploadURL;
        });
    };
    return DropzoneDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DropzoneDirective.prototype, "onCheckout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DropzoneDirective.prototype, "storageId", void 0);
DropzoneDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[dropzone]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
], DropzoneDirective);

var _a, _b, _c;
//# sourceMappingURL=dropzone.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/file-size.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//https://gist.github.com/JonCatmull/ecdf9441aaa37336d9ae2c7f9cb7289a
/*
 * Convert bytes into largest possible unit.
 * Takes an precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 1024 |  fileSize}}
 *   formats to: 1 KB
 */
var FileSizePipe = (function () {
    function FileSizePipe() {
        this.units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    }
    FileSizePipe.prototype.transform = function (bytes, precision) {
        if (bytes === void 0) { bytes = 0; }
        if (precision === void 0) { precision = 2; }
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes))
            return '?';
        var unit = 0;
        while (bytes >= 1024) {
            bytes /= 1024;
            unit++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unit];
    };
    return FileSizePipe;
}());
FileSizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'fileSize' })
], FileSizePipe);

//# sourceMappingURL=file-size.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/kloudless-authenticator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KloudlessAuthenticatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// based off of http://stackoverflow.com/questions/37412398/creating-angular2-component-directive-wrapper-for-dygraphs

var KloudlessAuthenticatorDirective = (function () {
    function KloudlessAuthenticatorDirective(_elt) {
        this.onAuthenticated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.elt = _elt;
    }
    KloudlessAuthenticatorDirective.prototype.ngAfterViewInit = function () {
        console.log(this.scope);
        console.log(this.clientId);
        var self = this;
        Kloudless.authenticator(this.elt.nativeElement, {
            scope: this.scope,
            client_id: this.clientId,
        }, function (auth_result) {
            self.onAuthenticated.emit(auth_result);
        });
    };
    KloudlessAuthenticatorDirective.prototype.ngOnChanges = function (changes) {
        if (changes.scope) {
            console.log('scope changed: ' + this.scope);
            Kloudless.stop(this.elt.nativeElement);
            var self = this;
            //reinitialize
            Kloudless.authenticator(this.elt.nativeElement, {
                scope: this.scope,
                client_id: this.clientId,
            }, function (auth_result) {
                self.onAuthenticated.emit(auth_result);
            });
        }
    };
    return KloudlessAuthenticatorDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KloudlessAuthenticatorDirective.prototype, "scope", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KloudlessAuthenticatorDirective.prototype, "clientId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], KloudlessAuthenticatorDirective.prototype, "onAuthenticated", void 0);
KloudlessAuthenticatorDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[kloudlessAuthenticator]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], KloudlessAuthenticatorDirective);

var _a, _b;
//# sourceMappingURL=kloudless-authenticator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/stripe-checkout-button.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeCheckoutButtonDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StripeCheckoutButtonDirective = (function () {
    function StripeCheckoutButtonDirective(_elt, apiService) {
        this.apiService = apiService;
        this.onCheckout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.elt = _elt;
    }
    StripeCheckoutButtonDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        this.handler = StripeCheckout.configure({
            key: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].stripeAccount,
            // image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            image: 'assets/images/services/quietthyme.png',
            locale: 'auto',
            zipCode: true,
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                self.onCheckout.emit({ token: token, planId: self.planId });
            },
        });
    };
    StripeCheckoutButtonDirective.prototype.onClick = function (event) {
        this.handler.open({
            name: 'QuietThyme',
            description: this.planName,
            amount: this.planCost,
            panelLabel: 'Subscribe',
            email: this.apiService.tokenPayload().email,
        });
        event.preventDefault();
    };
    return StripeCheckoutButtonDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StripeCheckoutButtonDirective.prototype, "onCheckout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StripeCheckoutButtonDirective.prototype, "planName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StripeCheckoutButtonDirective.prototype, "planId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StripeCheckoutButtonDirective.prototype, "planCost", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StripeCheckoutButtonDirective.prototype, "onClick", null);
StripeCheckoutButtonDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[stripeCheckoutButton]',
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
], StripeCheckoutButtonDirective);

var _a, _b, _c;
//# sourceMappingURL=stripe-checkout-button.directive.js.map

/***/ }),

/***/ "../../../../../src/app/storage/storage.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n<quietthyme-header></quietthyme-header>\n<div class=\"main-container\">\n\n    <section class=\"switchable feature-large \">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-5 col-sm-6 switchable__text\">\n                    <h2>Storage</h2>\n                    <p class=\"lead\">\n                        Connecting your cloud storage providers ensure that you always have access to your books. QuietThyme will only have access to a custom folder on each provider, ensuring that your other data is always safe.\n                    </p>\n                    <button kloudlessAuthenticator\n                       [disabled]=\"loading.link\"\n                       [clientId]=\"'mddXeszdchTlRQEFN3LGhxLzqaTjgYwbXGLHCeXOqJdrzRyd'\"\n                       [scope]=\"kloudlessStorageTypes.join(' ')\"\n                       (onAuthenticated)=\"kloudlessAuthenticatedStorage($event)\"\n                            [ngClass]=\"{'disabled': kloudlessStorageTypes.length == 0}\"\n                       class=\"btn btn--primary type--uppercase\">\n                                                    <span class=\"btn__text\">\n                                                        Connect Storage\n                                                    </span>\n                    </button>\n                </div>\n                <div class=\"col-md-4 col-sm-6 col-md-pull-1 col-xs-12\">\n                    <div class=\"boxed boxed--lg boxed--border box-shadow-wide\">\n\n                        <carousel id=\"storage-carousel\">\n                            <slide>\n                                <div class=\"feature feature-3 text-center\">\n                                    <i class=\"icon icon--lg icon-Twister color--primary\"></i>\n                                    <h4>Blackhole Folder</h4>\n                                    <p>\n                                        It's easy to import your existing library. Just drag and drop your books into a special Blackhole folder, and we'll process and add them to your library.\n                                    </p>\n\n                                </div>\n                            </slide>\n                            <slide>\n                                <div class=\"feature feature-3 text-center\">\n                                    <i class=\"icon icon--lg icon-Data-Cloud color--primary\"></i>\n                                    <h4>Calibre Support</h4>\n                                    <p>\n                                        QuietThyme fully integrates with Calibre. Once you install the QuietThyme plugin, you can import and export books just like you would to any ebook reader.\n                                    </p>\n                                    <a href=\"https://github.com/AnalogJ/quietthyme.plugin/releases\" target=\"_blank\">\n                                        Download Plugin\n                                    </a>\n                                </div>\n                            </slide>\n                            <slide>\n                                <div class=\"feature feature-3 text-center\">\n                                    <i class=\"icon icon--lg icon-Folder-Archive color--primary\"></i>\n                                    <h4>QuietThyme Storage</h4>\n                                    <p>\n                                        Unlimited storage. QuietThyme doesn't care if you have 10 books or 10,000 books, we can handle any size library.\n                                    </p>\n\n                                </div>\n                            </slide>\n\n                        </carousel>\n                    </div>\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n\n    <section class=\" \">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-4\" *ngFor=\"let storageData of connected; let myIndex = index\">\n                    <quietthyme-storage-panel [storageData]=\"storageData\"></quietthyme-storage-panel>\n                </div>\n            </div>\n            <!--end of row-->\n        </div>\n        <!--end of container-->\n    </section>\n\n    <quietthyme-footer></quietthyme-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/storage/storage.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/storage/storage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app-settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StorageComponent = (function () {
    function StorageComponent(slimLoadingBarService, notificationService, apiService) {
        this.slimLoadingBarService = slimLoadingBarService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.kloudlessStorageTypes = __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].KLOUDLESS_STORAGE_TYPES;
        this.connected = [];
        this.loading = {
            status: false,
            link: false,
        };
    }
    StorageComponent.prototype.ngOnInit = function () {
        this.initStorageStatus();
        this.getStorageStatus();
    };
    StorageComponent.prototype.initStorageStatus = function () {
        this.connected = [
            {
                free_space: 0,
                total_space: 0,
                prefix: 'quietthyme://',
                device_name: 'quietthyme',
                storage_id: 'quietthyme',
                storage_type: 'quietthyme',
                location_code: 'main',
            },
        ];
    };
    StorageComponent.prototype.getStorageStatus = function (bustCache) {
        var _this = this;
        if (bustCache === void 0) { bustCache = false; }
        this.loading.status = true;
        this.slimLoadingBarService.start();
        this.apiService
            .storageStatus(bustCache)
            .finally(function () {
            _this.loading.status = false;
            _this.slimLoadingBarService.complete();
        })
            .subscribe(function (response) {
            console.log(response);
            _this.initStorageStatus();
            _this.connected = _this.connected.concat(response);
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var storage = response_1[_i];
                //update the kloudlessStorageTypes array (remove any connected services)
                var kndx = _this.kloudlessStorageTypes.indexOf(storage.storage_type, 0);
                if (kndx > -1) {
                    console.log('removed: ' + storage.storage_type);
                    _this.kloudlessStorageTypes.splice(kndx, 1);
                }
            }
            console.log('connected:', _this.connected);
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    StorageComponent.prototype.kloudlessAuthenticatedStorage = function (kloudlessData) {
        var _this = this;
        console.log(kloudlessData);
        if (this.loading.link)
            return;
        this.slimLoadingBarService.start();
        this.apiService
            .storageLink(kloudlessData)
            .finally(function () {
            _this.loading.status = false;
            _this.slimLoadingBarService.complete();
            _this.getStorageStatus(true);
        })
            .subscribe(function (data) {
            console.log("Connected a new storage.");
            console.log(data);
        }, function (error) {
            _this.notificationService.show('An error occurred!', error);
        });
    };
    return StorageComponent;
}());
StorageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-storage',
        template: __webpack_require__("../../../../../src/app/storage/storage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/storage/storage.component.less")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _c || Object])
], StorageComponent);

var _a, _b, _c;
//# sourceMappingURL=storage.component.js.map

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar class=\"navbar-fixed-top\" [color]=\"'#128950'\" [height]=\"'3px'\"></ng2-slim-loading-bar>\n\n<quietthyme-header></quietthyme-header>\n<!-- Content\n============================================= -->\n<section id=\"content\">\n\n    <div class=\"content-wrap\">\n\n        <div class=\"container clearfix\">\n\n            <div class=\"row clearfix\">\n\n                <div class=\"col-md-offset-2 col-md-8\">\n                    <h1 class=\"text-center\">Terms of Use</h1>\n\n\n                    <h3 style=\"text-align: left;\">1. Acceptance of the Terms of Use</h3>\n                    <p>Welcome to <strong>QuietThyme</strong>! We, <strong>SparkTree Inc.</strong> (a.k.a. \"<strong>we</strong>\" or \"<strong>us</strong>\" or &nbsp;\"<strong>QuietThyme\"</strong>&nbsp;or&nbsp;the \"<strong>Company</strong>\") are excited to have you as user. The following terms and conditions (collectively, these \"<strong>Terms of Use</strong>\") apply to your use of QuietThyme, including any content, functionality and services offered on or via QuietThyme (the \"<strong>Website</strong>\"). The Terms of Use also include our <strong>Privacy Policy</strong>, that you can review here:<a href=\"/privacy\">https://www.quietthyme.com/privacy</a></p>\n                    <p>We want to keep our relationship with you as lean and informal as possible, but please read the Terms of Use carefully before you start using QuietThyme, because <strong>by using the Website you accept and agree to be bound and abide by these Terms of Use</strong>.</p>\n                    <p>Should you disagree with some of the provisions herein, you can either leave the Website (although we'll be sad to see you go!), or contact us at support@QuietThyme.com. We'll be happy to hear your comments and suggestions.&nbsp;</p>\n                    <h3>2. Changes to the Terms of Use and the Website</h3>\n                    <p>QuietThyme is a work in progress, meaning that a lot will change in the near future. We reserve the right to update the Website and these Terms of Use from time to time, at our discretion and without notice. Nevertheless, this document will be made public on Docracy, and you will be able to track the changes for any new version. <strong>Your continued use of the Website following the publishing of updated Terms of Use means that you accept and agree to the changes.</strong></p>\n                    <h3>3. Accessing the Website, Security, and Privacy</h3>\n                    <p>We are working hard on improving QuietThyme, but we can't guarantee that the Website will be up and running 24/7. We also reserve the right to suspend or restrict access to some features to users. In any case, we&nbsp;will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period, nor for any data loss (see also section 7 below).</p>\n                    <p>To access certain features of the Website you have to register by signing in with your Facebook, Microsoft, Twitter, LinkedIn, Google or other OpenId provider account as part of our security&nbsp;procedures. You must treat your login credentials as confidential, not disclosing them to any third party and only using QuietThyme in person. We highly recommend that you choose a strong password (e.g. \"<a href=\"http://xkcd.com/936/\" target=\"_blank\">correcthorsebatterystaple</a>\") for your provider account and that you log out from your account at the end of every session.</p>\n                    <p>It is a condition of your use of the Website that all the information you provide on the Website is correct, current and&nbsp;complete. In the future, you may be asked to provide certain registration details or other information.&nbsp;As custom for internet websites, we reserve the right to disable any user account, at any time in our sole&nbsp;discretion for any or no reason, including, if in our opinion you have failed to comply with any provision of&nbsp;these Terms of Use.&nbsp;</p>\n                    <p>We use SSL encrypted browsing for all logged-in users, but we cannot guarantee that all use will be secure. We also do not guarantee that the Website or any content provided on the Website is error-free. We manage your personal data according to our <strong>Privacy Policy</strong>, that you can review in detail here: /Legal/PrivacyPolicy.</p>\n                    <h3>4. Intellectual Property Rights and Use Guidelines.</h3>\n                    <p>The Website and its entire content, features and functionality (including look!), are owned by QuietThyme and are protected by United States, Canadian and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.&nbsp;You agree to not copy, modify, create derivative works of, publicly display, publicly perform, republish, any of our copyrighted material, except to the extent permitted by the Website itself. If you have doubts about whether and how to use of material on the Website, please address your concerns&nbsp;to:&nbsp;support@QuietThyme.com</p>\n                    <p>You are permitted to use the Website for your personal, non-commercial use, or legitimate business purposes, provided that your activities are lawful and in accordance with these Terms of Use. Prohibited uses include violation of laws and regulations, or hacking &nbsp;the Website in any manner.&nbsp;No right, title or interest in or to the Website or any content on the site is transferred to you, and all rights not expressly granted are reserved. Any use of the Website not expressly permitted by these Terms of Use is a breach of these Terms of Use and can lead to account termination.&nbsp;</p>\n                    <h3>5. Disclaimer of Warranties, Limitations of Liability and Indemnification.</h3>\n                    <p><strong>Your use of QuietThyme is at your sole risk. The service is provided \"as is\" and \"as available\".</strong> We disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. We are not liable for damages, direct or consequential, resulting from your use of the Website, and you agree to defend, indemnify and hold us harmless from any claims, losses, liability costs and expenses (including but not limites to attorney's fees) arising from your violation of any third-party's rights. You acknowledge that you have only a limited, non-exclusive, nontransferable license to use the Website. Because the Website is not error or bug free, you agree that you will use it carefully and avoid using it ways which might result in any loss of your or any third party's property or information.</p>\n                    <h3>6. Governing Law and Jurisdiction</h3>\n                    <p>\n                        These Terms of Use and any dispute or claim arising out of, or related to them, shall be governed by and construed in accordance with the internal laws of the Province of Alberta without giving effect to any choice or conflict of law provision or rule.\n                        <br>\n                        Any legal suit, action or proceeding arising out of, or related to, these Terms of Use or the Website shall&nbsp;be instituted exclusively in the federal courts of Canada or the courts of the Province of Alberta.&nbsp;\n                    </p>\n                    <h3>7. Waiver and Severability</h3>\n                    <p>Our failure to exercise or enforce any right or provision of the Terms of Use shall not constitute a waiver of such right or provision. The Terms of Use constitutes the entire agreement between you and QuietThyme and govern your use of the service, superseding any prior agreements (including, but not limited to, any prior versions of the Terms of Use). If any provision of these Terms of Use is held by a court of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.</p>\n                    <h3>8. Feedback</h3>\n                    <p>We welcome any comment, question and communication at support@QuietThyme.com&nbsp;</p>\n\n\n\n                </div>\n\n\n            </div>\n\n        </div>\n\n    </div>\n\n</section><!-- #content end -->\n\n<quietthyme-footer></quietthyme-footer>\n"

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () { };
    return TermsComponent;
}());
TermsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/terms/terms.component.less")],
    }),
    __metadata("design:paramtypes", [])
], TermsComponent);

//# sourceMappingURL=terms.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiVersion: 'beta',
    stripeAccount: 'pk_test_uApReS8yYqD5v6CajPSuXj3Z',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map