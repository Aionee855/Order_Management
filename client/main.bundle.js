webpackJsonp([1,4],{

/***/ 385:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(504);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/main.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(672),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/app.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_orders_orders_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_add_order_add_order_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_edit_order_edit_order_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_order_details_order_details_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_order_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_orders_orders_component__["a" /* OrdersComponent */] },
    { path: 'order/add', component: __WEBPACK_IMPORTED_MODULE_8__components_add_order_add_order_component__["a" /* AddOrderComponent */] },
    { path: 'order/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_order_details_order_details_component__["a" /* OrderDetailsComponent */] },
    { path: 'order/edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_edit_order_edit_order_component__["a" /* EditOrderComponent */] },
    { path: 'invoice/add/:order_id', component: __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__["a" /* AddInvoiceComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_add_order_add_order_component__["a" /* AddOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_edit_order_edit_order_component__["a" /* EditOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_order_details_order_details_component__["a" /* OrderDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_add_invoice_add_invoice_component__["a" /* AddInvoiceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_order_service__["a" /* OrderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/app.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddInvoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddInvoiceComponent = (function () {
    function AddInvoiceComponent(orderService, router, route) {
        this.orderService = orderService;
        this.router = router;
        this.route = route;
    }
    AddInvoiceComponent.prototype.ngOnInit = function () {
    };
    AddInvoiceComponent.prototype.onAddSubmit = function () {
        var _this = this;
        this.order = this.route.snapshot.params['order_id'];
        var invoice = {
            order: this.order,
            item_number: this.item_number,
            description: this.description,
            price: this.price,
            quantity: this.quantity,
            total: this.total
        };
        this.orderService.saveInvoice(invoice).subscribe(function (invoice) {
            _this.router.navigate(['/']);
        });
    };
    AddInvoiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-invoice',
            template: __webpack_require__(673),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], AddInvoiceComponent);
    return AddInvoiceComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/add-invoice.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddOrderComponent = (function () {
    function AddOrderComponent(orderService, router) {
        this.orderService = orderService;
        this.router = router;
    }
    AddOrderComponent.prototype.ngOnInit = function () {
    };
    AddOrderComponent.prototype.onAddSubmit = function () {
        var _this = this;
        var order = {
            channel: this.channel,
            invoice_number: this.invoice_number,
            customer_name: this.customer_name,
            description: this.description,
            status: this.status
        };
        this.orderService.saveOrder(order).subscribe(function (order) {
            _this.router.navigate(['/']);
        });
    };
    AddOrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-order',
            template: __webpack_require__(674),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddOrderComponent);
    return AddOrderComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/add-order.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditOrderComponent = (function () {
    function EditOrderComponent(orderService, router, route) {
        this.orderService = orderService;
        this.router = router;
        this.route = route;
    }
    EditOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.orderService.getOrder(this.id).subscribe(function (order) {
            _this.channel = order.channel;
            _this.invoice_number = order.invoice_number;
            _this.customer_name = order.customer_name;
            _this.description = order.description;
            _this.status = order.status;
        });
    };
    EditOrderComponent.prototype.onEditSubmit = function () {
        var _this = this;
        var order = {
            channel: this.channel,
            invoice_number: this.invoice_number,
            customer_name: this.customer_name,
            description: this.description,
            status: this.status
        };
        this.orderService.updateOrder(this.id, order).subscribe(function (order) {
            _this.router.navigate(['/']);
        });
    };
    EditOrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-edit-order',
            template: __webpack_require__(675),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], EditOrderComponent);
    return EditOrderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/edit-order.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(676),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/navbar.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailsComponent = (function () {
    function OrderDetailsComponent(orderService, router, route) {
        this.orderService = orderService;
        this.router = router;
        this.route = route;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.orderService.getOrder(this.id).subscribe(function (order) {
            _this.order = order;
        });
        this.orderService.getInvoices(this.id).subscribe(function (invoices) {
            _this.invoices = invoices;
        });
    };
    OrderDetailsComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.orderService.deleteInvoice(id).subscribe(function (invoice) {
            _this.router.navigate(['/order/' + _this.id]);
        });
    };
    OrderDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-order-details',
            template: __webpack_require__(677),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/order-details.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = (function () {
    function OrdersComponent(orderService, router) {
        this.orderService = orderService;
        this.router = router;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    OrdersComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.orderService.deleteOrder(id).subscribe(function (order) {
            _this.router.navigate(['/']);
        });
    };
    OrdersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__(678),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/orders.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/environment.js.map

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Add Invoice</h1>\n<form (submit)=\"onAddSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n          <label>Item Number</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"item_number\" name=\"item_number\" placeholder=\"Item Number\">\n      </div>\n      <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\">\n      </div>\n      <div class=\"form-group\">\n          <label>Price</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"price\" name=\"price\" placeholder=\"Price\">\n      </div>\n      <div class=\"form-group\">\n          <label>Quantity</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"quantity\" name=\"quantity\" placeholder=\"Quantity\">\n      </div>\n      <div class=\"form-group\">\n          <label>Total</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"total\" name=\"total\" placeholder=\"Total\">\n      </div>\n\n\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Add Order</h1>\n<form (submit)=\"onAddSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n          <label>Channel</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"channel\" name=\"channel\" placeholder=\"Channel\">\n      </div>\n      <div class=\"form-group\">\n          <label>Invoice Number</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"invoice_number\" name=\"invoice_number\" placeholder=\"Invoice Number\">\n      </div>\n      <div class=\"form-group\">\n          <label>Customer Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer_name\" name=\"customer_name\" placeholder=\"Customer Name\">\n      </div>\n      <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\">\n      </div>\n      <div class=\"form-group\">\n          <label>Status</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status\" name=\"status\" placeholder=\"Status\">\n      </div>\n\n\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n"

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Order</h1>\n<form (submit)=\"onEditSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n          <label>Channel</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"channel\" name=\"channel\" placeholder=\"Channel\">\n      </div>\n      <div class=\"form-group\">\n          <label>Invoice Number</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"invoice_number\" name=\"invoice_number\" placeholder=\"Invoice Number\">\n      </div>\n      <div class=\"form-group\">\n          <label>Customer Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customer_name\" name=\"customer_name\" placeholder=\"Customer Name\">\n      </div>\n      <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\">\n      </div>\n      <div class=\"form-group\">\n          <label>Status</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status\" name=\"status\" placeholder=\"Status\">\n      </div>\n\n\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n     <div class=\"container-fluid\">\n       <div class=\"navbar-header\">\n         <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n           <span class=\"sr-only\">Toggle navigation</span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n         </button>\n         <a class=\"navbar-brand\" href=\"#\">Order Management</a>\n       </div>\n       <div id=\"navbar\" class=\"navbar-collapse collapse\">\n         <ul class=\"nav navbar-nav navbar-right\">\n           <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Dashboard</a></li>\n           <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/order/add']\">Add New Order</a></li>\n\n         </ul>\n         <form class=\"navbar-form navbar-right\">\n           <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n         </form>\n       </div>\n     </div>\n   </nav>\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"order\">\r\n<h1 class=\"page-header\">{{order.customer_name}}</h1>\r\n<h4>Order Details</h4>\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item\"><strong>Channel: </strong>{{order.channel}}</li>\r\n  <li class=\"list-group-item\"><strong>Invoice Number: </strong>{{order.invoice_number}}</li>\r\n  <li class=\"list-group-item\"><strong>Description: </strong>{{order.description}}</li>\r\n</ul>\r\n\r\n<h4 class=\"page-header\">Invoices <a routerLink=\"/invoice/add/{{order._id}}\">Create Invoice</a></h4>\r\n<div class=\"orders\">\r\n  <table class=\"table table-striped\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Item Number</th>\r\n      <th>Description</th>\r\n      <th>Price</th>\r\n      <th>Quantity</th>\r\n      <th>Total</th>\r\n      <th></th>\r\n    </tr>\r\n    <tr *ngFor=\"let invoice of invoices\">\r\n      <td>{{invoice._id}}</td>\r\n      <td>{{invoice.item_number}}</td>\r\n      <td>{{invoice.description}}</td>\r\n      <td>{{invoice.price}}</td>\r\n      <td>{{invoice.quantity}}</td>\r\n      <td>{{invoice.total}}</td>\r\n      <td>\r\n        <a href=\"\" (click)=\"onDeleteClick(invoice._id)\" class=\"btn btn-danger\">Delete</a>\r\n      </td>\r\n  </table>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Orders</h1>\n<div class=\"orders\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>Channel</th>\n      <th>Invoice Number</th>\n      <th>Customer Name</th>\n      <th>Description</th>\n      <th>Status</th>\n      <th></th>\n    </tr>\n    <tr *ngFor=\"let order of orders\">\n      <td>{{order.channel}}</td>\n      <td>{{order.invoice_number}}</td>\n      <td>{{order.customer_name}}</td>\n      <td>{{order.description}}</td>\n      <td>{{order.status}}</td>\n      <td>\n        <a routerLink=\"/order/{{order._id}}\" class=\"btn btn-success\">Details</a>\n        <a routerLink=\"/order/edit/{{order._id}}\" class=\"btn btn-default\">Edit</a>\n        <a href=\"\" (click)=\"onDeleteClick(order._id)\" class=\"btn btn-danger\">Delete</a>\n      </td>\n  </table>\n</div>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get('http://localhost:3100/api/orders')
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getOrder = function (id) {
        return this.http.get('http://localhost:3100/api/orders/' + id)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.saveOrder = function (order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3100/api/orders', order, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.updateOrder = function (id, order) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3100/api/orders/' + id, order, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.deleteOrder = function (id) {
        return this.http.delete('http://localhost:3100/api/orders/' + id)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.getInvoices = function (order_id) {
        return this.http.get('http://localhost:3100/api/invoices/order/' + order_id)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.deleteInvoice = function (id) {
        return this.http.delete('http://localhost:3100/api/invoices/' + id)
            .map(function (res) { return res.json(); });
    };
    OrderService.prototype.saveInvoice = function (invoice) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3100/api/invoices', invoice, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    OrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dawid/Desktop/Order Management/order_management/order-angular/src/order.service.js.map

/***/ })

},[697]);
//# sourceMappingURL=main.bundle.map