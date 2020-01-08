(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu/breakfasts/breakfasts.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu/breakfasts/breakfasts.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-menu-breakasf\">\n    <div class=\"accordion\" id=\"accordionExample\">\n            <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingOne\">\n                        <h2 class=\"mb-0\">\n                            <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Café\n                            </button>\n                      \n        \n    \n\n          \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu/burguer/burguer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu/burguer/burguer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"containert\">\n    <section class=\"container-menu-Almz\">\n        <div class=\"accordion\" id=\"accordionExample\">\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingOne\">\n                    <h2 class=\"mb-0\">\n                        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                        Hamburguesa\n                    </button>\n                    </h2>\n                </div>\n\n                <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n\n                    <div class=\"card-body centerbtn\" *ngFor=\"let item of burguer\">\n                        {{item.name}} ${{item.price}}\n                        <button (click)=\"addItem(item.name, item.price, item.categoria)\" class=\" btn btn-success\"> <i class=\"fa fa-plus\"></i> Agregar</button>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\"accordion\" id=\"accordionExample\">\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingOne\">\n                    <h2 class=\"mb-0\">\n                        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Relleno\n                  </button>\n                    </h2>\n                </div>\n\n                <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n\n                    <div class=\"card-body centerbtn\" *ngFor=\"let item of filling\">{{item.name}} ${{item.price}}\n                        <button (click)=\"addItem(item.name, item.price, item.categoria)\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i>Agregar</button>\n\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"accordion\" id=\"accordionExample\">\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingOne\">\n                    <h2 class=\"mb-0\">\n                        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                            Acompañamiento\n                      </button>\n                    </h2>\n                </div>\n\n                <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n\n                    <div class=\"card-body centerbtn\" *ngFor=\"let item of accom\">{{item.name}} ${{item.price}}\n                        <button (click)=\"addItem(item.name, item.price, item.categoria)\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i>Agregar</button>\n\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"accordion\" id=\"accordionExample\">\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingOne\">\n                    <h2 class=\"mb-0\">\n                        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Bebidas\n                    </button>\n                    </h2>\n                </div>\n\n                <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n\n                    <div class=\"card-body centerbtn\" *ngFor=\"let item of drinks\">{{item.name}} ${{item.price}}\n                        <button (click)=\"addItem(item.name, item.price, item.categoria)\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i>Agregar</button>\n\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"container-pedido\">\n        <table class=\"table\">\n            <thead>\n                <tr class=\"table-info\">\n\n                    <th scope=\"col\">Item</th>\n                    <th scope=\"col\">Precio</th>\n                    <th scope=\"col\">Borrar</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of arrayOrder;let i = index\">\n                    <th scope=\"row\">{{item.name}} </th>\n                    <td>${{item.price}}</td>\n                    <td> <button (click)=\"deleteItem(i, item.price)\" class=\"btn btn-danger\"><i class=\"far fa-trash-alt\"></i></button></td>\n\n\n\n                </tr>\n                <tr>\n                    <th>Total</th>\n                    <td>${{total}}</td>\n                </tr>\n\n            </tbody>\n        </table>\n        <div class=\"contenbutton\">\n            <button (click)=\"addOrderfire(arrayOrder)\" class=\"btn btn-info\">Enviar pedido</button>\n        </div>\n    </section>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/menu/menu.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<section class=\"btn-group\">\n    <button [routerLink]=\"['breakfasts']\" type=\"button\" class=\"btnsT\">Desayuno</button>\n    <button [routerLink]=\"['burguer']\" type=\"button\" class=\" btnsT\">Almuerzo</button>\n\n</section>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mesas/mesas.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mesas/mesas.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<section class=\"main-g animated fast fadeIn \">\n\n    <table class=\"table  animated fast fadeIn \">\n        <thead>\n            <tr>\n                <th scope=\"col\" class=\"table-primary\">Mesa</th>\n\n            </tr>\n        </thead>\n        <tbody>\n\n            <tr *ngFor=\"let table of tables\">\n\n                <th scope=\"row\">\n                    <button (click)=\"getTable(table.numbertable)\" class=\"btntable\" [routerLink]=\"['/menu',10]\"> \n                                {{table.nametable}}\n                    </button>\n                </th>\n\n            </tr>\n\n        </tbody>\n    </table>\n\n    <app-loading class=\"animated fast fadeIn\" *ngIf=\"loading\"></app-loading>\n    <hr>\n    <h4>Agregar mesa</h4>\n    <hr>\n    <form (ngSubmit)=\"addtabls()\">\n\n        <div>\n\n            <div class=\"form-group row\">\n                <label class=\"col-2 col-form-label\">Nombre de mesa</label>\n                <div class=\"col-8\">\n\n                    <input name=\"nametable\" [(ngModel)]=\"table.nametable\" class=\"form-control\" type=\"text\" placeholder=\"Nombre de mesa\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label class=\"col-2 col-form-label\">Numero de mesa</label>\n                <div class=\"col-8\">\n                    <input name=\"numbertable\" [(ngModel)]=\"table.numbertable\" class=\"form-control\" type=\"number\" placeholder=\"Numero de mesa\" minlength=\"6\">\n                </div>\n            </div>\n\n        </div>\n\n\n        <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">&nbsp;</label>\n            <div class=\"input-group col-md-8\">\n                <button class=\"btn btn-success\" type=\"submit\"><i class=\"fa fa-plus\"></i> Agregar nueva mesa </button>\n            </div>\n        </div>\n\n    </form>\n\n\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pedidos/pedidos.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pedidos/pedidos.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<section class=\"main-p containerP animated fast fadeIn \">\n    <div *ngFor=\"let item of order\" class=\"pricing-table recommended  table-responsive-lg\">\n\n        <h4 class=\"table-title table-primary\">Mesa 1</h4>\n        <table class=\"table\">\n\n\n            <tbody>\n                <tr class=\"table-primary\">\n                    <td>Hamburguesa</td>\n                    <td>{{item.burguer}}</td>\n                </tr>\n                <tr>\n                    <td>Relleno</td>\n                    <td>{{item.filling}}</td>\n                </tr>\n                <tr class=\"table-primary\">\n                    <td>Acompañante</td>\n                    <td>{{item.acomp}}</td>\n                </tr>\n                <tr>\n                    <td>Bebida</td>\n                    <td>{{item.drinks}}</td>\n                </tr>\n                <tr class=\"table-primary\">\n                    <td>Mesa</td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>Tiempo</td>\n                    <td></td>\n                </tr>\n                <tr class=\"table-primary\">\n                    <td>Total</td>\n                    <td>{{item.total}}$</td>\n                </tr>\n\n            </tbody>\n        </table>\n        <div class=\"form-group row\">\n            <label class=\"col-2 col-form-label\">&nbsp;</label>\n            <div class=\"btnlisto\">\n                <button class=\"btn btn-success\"> Pedido listo</button>\n            </div>\n        </div>\n    </div>\n\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/loading/loading.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/loading/loading.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info text-center mt-3\" role=\"alert\">\n    <h4 class=\"alert-heading\">Cargando lista de mesas</h4>\n    <p>\n        <i class=\"fa fa-sync-alt fa-spin fa-2x\"></i>\n    </p>\n    <p class=\"mb-0\">\n        Espere por favor\n    </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n\n    <!-- Menu -->\n    <nav class=\"nav\">\n        <div class=\"bran-d\">\n            <img [routerLink]=\"['/home']\" id=\"brand\" src=\"../../../assets/img/waiterQueenN.png\" alt=\"Logo-png\">\n        </div>\n        <div class=\"links\">\n            <a [routerLink]=\"['/mesas']\">Mesas</a>\n\n            <a [routerLink]=\"['/menu',10]\">Menu</a>\n        </div>\n    </nav>\n\n\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/startScreen/startScreen.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/startScreen/startScreen.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-image\">\n    <article class=\"welcome\">\n        <h1>Bienvenido</h1>\n        <h4>Toma y entrega tus pedidos mas rapido con WaiQueen </h4>\n        <div class=\"contenBtns\">\n            <a class=\"btn btnM\" [routerLink]=\"['/mesas']\">Mesero</a>\n            <a class=\"btn btnC\" [routerLink]=\"['/pedidos']\">Cocinero</a>\n\n        </div>\n    </article>\n\n</section>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_startScreen_startScreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/startScreen/startScreen.component */ "./src/app/components/startScreen/startScreen.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _app_components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/components/pedidos/pedidos.component */ "./src/app/components/pedidos/pedidos.component.ts");
/* harmony import */ var _components_mesas_mesas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mesas/mesas.component */ "./src/app/components/mesas/mesas.component.ts");
/* harmony import */ var _components_menu_burguer_burguer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/burguer/burguer.component */ "./src/app/components/menu/burguer/burguer.component.ts");
/* harmony import */ var _components_menu_breakfasts_breakfasts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu/breakfasts/breakfasts.component */ "./src/app/components/menu/breakfasts/breakfasts.component.ts");









var ROUTES = [
    { path: 'home', component: _components_startScreen_startScreen_component__WEBPACK_IMPORTED_MODULE_3__["startScreenComponent"] },
    { path: 'pedidos', component: _app_components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_5__["PedidosComponent"] },
    {
        path: 'menu/:id',
        component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
        children: [
            { path: 'burguer', component: _components_menu_burguer_burguer_component__WEBPACK_IMPORTED_MODULE_7__["BurguerComponent"] },
            { path: 'breakfasts', component: _components_menu_breakfasts_breakfasts_component__WEBPACK_IMPORTED_MODULE_8__["BreakfastsComponent"] },
        ]
    },
    { path: 'pedidos', component: _app_components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_5__["PedidosComponent"] },
    { path: 'mesas', component: _components_mesas_mesas_component__WEBPACK_IMPORTED_MODULE_6__["MesasComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', component: _components_startScreen_startScreen_component__WEBPACK_IMPORTED_MODULE_3__["startScreenComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(db) {
        this.title = 'Waiqueen';
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_services_waiqueen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/services/waiqueen.service */ "./src/app/services/waiqueen.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_startScreen_startScreen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/startScreen/startScreen.component */ "./src/app/components/startScreen/startScreen.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pedidos/pedidos.component */ "./src/app/components/pedidos/pedidos.component.ts");
/* harmony import */ var _components_mesas_mesas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/mesas/mesas.component */ "./src/app/components/mesas/mesas.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_menu_burguer_burguer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/menu/burguer/burguer.component */ "./src/app/components/menu/burguer/burguer.component.ts");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shared/loading/loading.component */ "./src/app/components/shared/loading/loading.component.ts");
/* harmony import */ var _components_menu_breakfasts_breakfasts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/menu/breakfasts/breakfasts.component */ "./src/app/components/menu/breakfasts/breakfasts.component.ts");




//Modulos de firebase





//Modulo de peticiones http

//Rutas

//Servicios

//Componentes









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_startScreen_startScreen_component__WEBPACK_IMPORTED_MODULE_13__["startScreenComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _components_pedidos_pedidos_component__WEBPACK_IMPORTED_MODULE_15__["PedidosComponent"],
                _components_mesas_mesas_component__WEBPACK_IMPORTED_MODULE_16__["MesasComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _components_menu_burguer_burguer_component__WEBPACK_IMPORTED_MODULE_18__["BurguerComponent"],
                _components_menu_breakfasts_breakfasts_component__WEBPACK_IMPORTED_MODULE_20__["BreakfastsComponent"],
                _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"] //Necesario para las funciones de almacenamiento
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [
                _app_services_waiqueen_service__WEBPACK_IMPORTED_MODULE_11__["WaiqueenService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/menu/breakfasts/breakfasts.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/menu/breakfasts/breakfasts.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9icmVha2Zhc3RzL2JyZWFrZmFzdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/menu/breakfasts/breakfasts.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/menu/breakfasts/breakfasts.component.ts ***!
  \********************************************************************/
/*! exports provided: BreakfastsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakfastsComponent", function() { return BreakfastsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/waiqueen.service */ "./src/app/services/waiqueen.service.ts");



var BreakfastsComponent = /** @class */ (function () {
    function BreakfastsComponent(waiqueenservice) {
        this.waiqueenservice = waiqueenservice;
        //variable para guardar loque retorna
        this.menu = [];
        this.breakfasts = [];
    }
    BreakfastsComponent.prototype.ngOnInit = function () {
    };
    BreakfastsComponent.ctorParameters = function () { return [
        { type: _services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__["WaiqueenService"] }
    ]; };
    BreakfastsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breakfasts',
            template: __webpack_require__(/*! raw-loader!./breakfasts.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu/breakfasts/breakfasts.component.html"),
            styles: [__webpack_require__(/*! ./breakfasts.component.css */ "./src/app/components/menu/breakfasts/breakfasts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__["WaiqueenService"]])
    ], BreakfastsComponent);
    return BreakfastsComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/burguer/burguer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/menu/burguer/burguer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Rutas del desayuno y almuerzo*/\n\n.centerbtn {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n\n/* Contenedor de items del menu */\n\n.container-menu-Almz {\n    width: 500px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center !important;\n    margin-left: 4em;\n    margin-top: 25px;\n}\n\n.container-pedido {\n    margin-top: 25px;\n    margin-left: 20em;\n    margin-right: 4em;\n}\n\n/*Boton Enviar pedido*/\n\n.contenbutton {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L2J1cmd1ZXIvYnVyZ3Vlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQzs7QUFFaEM7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFHQSxpQ0FBaUM7O0FBRWpDO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFHQSxzQkFBc0I7O0FBRXRCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvYnVyZ3Vlci9idXJndWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlJ1dGFzIGRlbCBkZXNheXVubyB5IGFsbXVlcnpvKi9cblxuLmNlbnRlcmJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5cbi8qIENvbnRlbmVkb3IgZGUgaXRlbXMgZGVsIG1lbnUgKi9cblxuLmNvbnRhaW5lci1tZW51LUFsbXoge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jb250YWluZXItcGVkaWRvIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMGVtO1xuICAgIG1hcmdpbi1yaWdodDogNGVtO1xufVxuXG5cbi8qQm90b24gRW52aWFyIHBlZGlkbyovXG5cbi5jb250ZW5idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/burguer/burguer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/menu/burguer/burguer.component.ts ***!
  \**************************************************************/
/*! exports provided: BurguerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurguerComponent", function() { return BurguerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/waiqueen.service */ "./src/app/services/waiqueen.service.ts");



var BurguerComponent = /** @class */ (function () {
    //inyecto mi servicion
    function BurguerComponent(waiqueenservice) {
        this.waiqueenservice = waiqueenservice;
        this.tableNumber = 0;
        //Variable que almacena el total
        this.total = 0;
        //Variable de tipo objeto para almacenar la orden final que se enviara finalmente a firebase
        this.objOrderF = {
            burguer: '',
            filling: '',
            acomp: '',
            drinks: '',
            total: 0,
            mesa: 0
        };
        //Variable para almacenar orden
        this.arrayOrder = [];
        this.objOrder = {
            categoria: '',
            name: '',
            price: 0,
            id: ''
        };
        //Varible para almacenar lo que retorna la funcion que esta alojada en el servicio
        this.menus = [];
        //Variables de almacenamiento segun el filtrado
        this.burguer = [];
        this.drinks = [];
        this.filling = [];
        this.bFast = [];
        this.accom = [];
        console.log('Servicio activo');
    }
    BurguerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Filtrado de data segun categoria
        var filter = function (array, type) {
            var result = array.filter((function (element) {
                if (type === 'burguer') {
                    return element['categoria'] === 'Hamburguesas';
                }
                else if (type === 'drinks') {
                    return element['categoria'] === 'Bebidas';
                }
                else if (type === 'accom') {
                    return element['categoria'] === 'Acompañamientos';
                }
                if (type === 'bFast') {
                    return element['categoria'] === 'Desayuno';
                }
                else if (type === 'filling') {
                    return element['categoria'] === 'Relleno';
                }
            }));
            return result;
        };
        this.waiqueenservice.getmens()
            .subscribe(function (resp) {
            _this.menus = resp;
            console.log('entro');
            console.log(_this.menus);
            _this.burguer = filter(_this.menus, 'burguer');
            _this.drinks = filter(_this.menus, 'drinks');
            _this.bFast = filter(_this.menus, 'bFast');
            _this.filling = filter(_this.menus, 'filling');
            _this.accom = filter(_this.menus, 'accom');
        });
    };
    BurguerComponent.prototype.addItem = function (name, price, categoria) {
        this.objOrder.categoria = categoria;
        this.objOrder.name = name;
        this.objOrder.price = price;
        this.total += this.objOrder.price;
        this.arrayOrder.push(this.objOrder);
        this.objOrder = { id: '', categoria: '', name: '', price: 0 };
    };
    //Funcion que elimina el Item
    BurguerComponent.prototype.deleteItem = function (i, price) {
        //Obtengo el indice del objeto
        this.arrayOrder.splice(i, 1);
        this.total -= price;
    };
    BurguerComponent.prototype.addOrderfire = function () {
        var _this = this;
        this.arrayOrder.forEach(function (element) {
            switch (element.categoria) {
                case 'Hamburguesas':
                    _this.objOrderF['burguer'] = element.name;
                    break;
                case 'Relleno':
                    _this.objOrderF['filling'] = element.name;
                    break;
                case 'Bebidas':
                    _this.objOrderF['drinks'] = element.name;
                    break;
                case 'Acompañamientos':
                    _this.objOrderF['acomp'] = element.name;
                    break;
            }
            ;
            _this.objOrderF['total'] = _this.total;
        });
        // return this.objOrderF;
        this.waiqueenservice.addOrder(this.objOrderF);
        this.objOrderF = { burguer: '', filling: '', acomp: '', drinks: '', total: 0, mesa: 0 };
        this.arrayOrder = [];
        this.total = 0;
    };
    BurguerComponent.ctorParameters = function () { return [
        { type: _services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__["WaiqueenService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BurguerComponent.prototype, "tableNumber", void 0);
    BurguerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-burguer',
            template: __webpack_require__(/*! raw-loader!./burguer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu/burguer/burguer.component.html"),
            styles: [__webpack_require__(/*! ./burguer.component.css */ "./src/app/components/menu/burguer/burguer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__["WaiqueenService"]])
    ], BurguerComponent);
    return BurguerComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.mostrar = true;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/mesas/mesas.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/mesas/mesas.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btntable {\n    background-color: rgb(26, 135, 206);\n    border: none;\n    color: white;\n    padding: 10px 100px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZXNhcy9tZXNhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzYXMvbWVzYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG50YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAxMzUsIDIwNik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/mesas/mesas.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/mesas/mesas.component.ts ***!
  \*****************************************************/
/*! exports provided: MesasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesasComponent", function() { return MesasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/waiqueen.service */ "./src/app/services/waiqueen.service.ts");



var MesasComponent = /** @class */ (function () {
    //Inyecto mi servicio dentro del contructor para que la data cargue antes de la interfaz
    function MesasComponent(waiqueenService) {
        this.waiqueenService = waiqueenService;
        //json donde guardo la informacion que viene en el formulario
        this.table = {
            nametable: '',
            numbertable: ''
        };
        // Declarando variable donde se almacena resp del getTabls para poder pintarla en la interfaz
        this.tables = [];
        this.loading = false;
        //Llamo el metodo getTabls creado en el services y me suscribo al evento
    }
    //Funcion Obtener data del servicio
    MesasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.waiqueenService.getTabls()
            .subscribe(function (resp) {
            console.log('entro a asignar la data');
            _this.tables = resp;
            _this.loading = false;
        });
    };
    //Funcion obtener numero de mesa
    MesasComponent.prototype.getTable = function (tableNumber) {
        console.log(tableNumber);
        return tableNumber;
    };
    MesasComponent.prototype.addtabls = function () {
        this.waiqueenService.addItem(this.table);
        console.log(this.table);
        this.table = " ";
    };
    MesasComponent.ctorParameters = function () { return [
        { type: _services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__["WaiqueenService"] }
    ]; };
    MesasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mesas',
            template: __webpack_require__(/*! raw-loader!./mesas.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mesas/mesas.component.html"),
            styles: [__webpack_require__(/*! ./mesas.component.css */ "./src/app/components/mesas/mesas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__["WaiqueenService"]])
    ], MesasComponent);
    return MesasComponent;
}());



/***/ }),

/***/ "./src/app/components/pedidos/pedidos.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pedidos/pedidos.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** ========================\n * Contenedor\n ============================*/\n\n.main-p {\n    width: 90%;\n    margin: 20px auto;\n    padding: 20px;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.75);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.tsize {\n    width: 30%;\n}\n\n.pricing-table {\n    margin: 0 10px;\n    width: 300px;\n    float: left;\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);\n    transition: all 0.25s ease;\n}\n\n.table-title {\n    color: #FFF;\n    padding: 15px 0;\n    text-transform: uppercase;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);\n}\n\n.table-title {\n    text-align: center;\n    background: rgba(19, 144, 231, 0.7);\n}\n\n.btnlisto {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n/** ================\n * Responsive\n ===================*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZWRpZG9zL3BlZGlkb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OEJBRThCOztBQUU5QjtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUVYLHVDQUF1QztJQUd2QywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBR0E7O3FCQUVxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVkaWRvcy9wZWRpZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogPT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb250ZW5lZG9yXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5tYWluLXAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnRzaXplIHtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4ucHJpY2luZy10YWJsZSB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xufVxuXG4udGFibGUtdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udGFibGUtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5LCAxNDQsIDIzMSwgMC43KTtcbn1cblxuLmJ0bmxpc3RvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLyoqID09PT09PT09PT09PT09PT1cbiAqIFJlc3BvbnNpdmVcbiA9PT09PT09PT09PT09PT09PT09Ki8iXX0= */"

/***/ }),

/***/ "./src/app/components/pedidos/pedidos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pedidos/pedidos.component.ts ***!
  \*********************************************************/
/*! exports provided: PedidosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosComponent", function() { return PedidosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/waiqueen.service */ "./src/app/services/waiqueen.service.ts");



var PedidosComponent = /** @class */ (function () {
    function PedidosComponent(waiqueenservice) {
        this.waiqueenservice = waiqueenservice;
        this.order = [];
    }
    PedidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.waiqueenservice.getOrder().subscribe(function (resp) {
            _this.order = resp;
            console.log(_this.order);
        });
    };
    PedidosComponent.ctorParameters = function () { return [
        { type: _services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__["WaiqueenService"] }
    ]; };
    PedidosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pedidos',
            template: __webpack_require__(/*! raw-loader!./pedidos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pedidos/pedidos.component.html"),
            styles: [__webpack_require__(/*! ./pedidos.component.css */ "./src/app/components/pedidos/pedidos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_waiqueen_service__WEBPACK_IMPORTED_MODULE_2__["WaiqueenService"]])
    ], PedidosComponent);
    return PedidosComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shared/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/shared/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    background: rgb(18, 144, 231);\n    justify-content: flex-start;\n    width: 100%;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.75);\n}\n\n.nav {\n    width: 90%;\n    max-width: 1800px;\n    margin: auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.nav .bran-d {\n    display: inline-block;\n    margin-right: 1em;\n}\n\n.nav .bran-d img {\n    vertical-align: top;\n    height: 80px;\n}\n\n.nav .links {\n    display: inline-block;\n    text-align: right;\n}\n\n.nav .links a {\n    padding: 1em;\n    text-align: center;\n    font-size: 1em;\n    margin-right: 5px;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE4LCAxNDQsIDIzMSk7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5uYXYge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiAxODAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdiAuYnJhbi1kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi5uYXYgLmJyYW4tZCBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubmF2IC5saW5rcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubmF2IC5saW5rcyBhIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/startScreen/startScreen.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/startScreen/startScreen.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Glegoo&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');\n/*Contenedor de la imagen*/\n.container-image {\n    background-image: url('waiterQueen.jpg');\n    background-repeat: no-repeat;\n    width: 100%;\n    height: 650px;\n    background-size: cover;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.container-image::before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgb(63, 146, 210);\n    opacity: 0.6;\n}\n/*Bienvenido*/\n.welcome {\n    z-index: 1;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.contenBtns {\n    margin: 10px;\n}\na.btn {\n    color: rgb(253, 253, 253);\n    margin: 5px;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    box-shadow: rgb(253, 253, 253) 0 0px 0px 2px inset;\n}\na.btn:hover {\n    color: rgb(63, 146, 210);\n    background: rgba(255, 255, 255, 0.85);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydFNjcmVlbi9zdGFydFNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTtBQUMxRSw2RUFBNkU7QUFFN0UsMEJBQTBCO0FBRTFCO0lBQ0ksd0NBQTREO0lBQzVELDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEI7QUFHQSxhQUFhO0FBRWI7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtEQUFrRDtBQUN0RDtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFDQUFxQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnRTY3JlZW4vc3RhcnRTY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9R2xlZ29vJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQmZGlzcGxheT1zd2FwJyk7XG5cbi8qQ29udGVuZWRvciBkZSBsYSBpbWFnZW4qL1xuXG4uY29udGFpbmVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3dhaXRlclF1ZWVuLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItaW1hZ2U6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgMTQ2LCAyMTApO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuXG4vKkJpZW52ZW5pZG8qL1xuXG4ud2VsY29tZSB7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW5CdG5zIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbmEuYnRuIHtcbiAgICBjb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm94LXNoYWRvdzogcmdiKDI1MywgMjUzLCAyNTMpIDAgMHB4IDBweCAycHggaW5zZXQ7XG59XG5cbmEuYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDYzLCAxNDYsIDIxMCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/startScreen/startScreen.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/startScreen/startScreen.component.ts ***!
  \*****************************************************************/
/*! exports provided: startScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startScreenComponent", function() { return startScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var startScreenComponent = /** @class */ (function () {
    function startScreenComponent() {
    }
    startScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-startScreen',
            template: __webpack_require__(/*! raw-loader!./startScreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/startScreen/startScreen.component.html"),
            styles: [__webpack_require__(/*! ./startScreen.component.css */ "./src/app/components/startScreen/startScreen.component.css")]
        })
    ], startScreenComponent);
    return startScreenComponent;
}());



/***/ }),

/***/ "./src/app/services/waiqueen.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/waiqueen.service.ts ***!
  \**********************************************/
/*! exports provided: WaiqueenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiqueenService", function() { return WaiqueenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var WaiqueenService = /** @class */ (function () {
    function WaiqueenService(afs) {
        //------------------------------ Mesas -------------------------------------------------//
        this.afs = afs;
        //Peticion de coleccion de mesas
        this.tablsCollection = afs.collection('mesas');
        //Guardo coleccion en array
        this.arrayTabls = this.tablsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
        //------------------------------ Menu -------------------------------------------------//
        //Peticion de coleccion menu
        this.menuCollection = afs.collection('menu');
        //Guardo coleccion en array
        this.arraymens = this.menuCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
        //------------------------------ Ordenes -------------------------------------------------//
        //Peticion de coleccion Ordenes
        this.orderCollection = afs.collection('order');
        //Guardo coleccion en array
        this.arrayOrder = this.orderCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
        }); }));
    }
    //------------------------------ Menu -------------------------------------------------//
    //Funcion que retorna la data de menu en un array
    WaiqueenService.prototype.getmens = function () {
        return this.arraymens;
    };
    //------------------------------ Mesas -------------------------------------------------//
    //Funcion que retorna la data de mesa en un array
    WaiqueenService.prototype.getTabls = function () {
        console.log('retornara la data');
        return this.arrayTabls;
    };
    WaiqueenService.prototype.addItem = function (mesas) {
        this.tablsCollection.add(mesas);
    };
    //-------------------------------Ordenes----------------------------------//
    //Funcion que retorna la data de ordenes en un array
    WaiqueenService.prototype.getOrder = function () {
        return this.arrayOrder;
    };
    WaiqueenService.prototype.addOrder = function (order) {
        this.orderCollection.add(order);
    };
    WaiqueenService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    WaiqueenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], WaiqueenService);
    return WaiqueenService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDl_0NPCp5xmqcVz_nKH2tqC4yg1c-ck2k",
        authDomain: "burguer-queen-7d0ee.firebaseapp.com",
        databaseURL: "https://burguer-queen-7d0ee.firebaseio.com",
        projectId: "burguer-queen-7d0ee",
        storageBucket: "burguer-queen-7d0ee.appspot.com",
        messagingSenderId: "985843273352",
        appId: "1:985843273352:web:bcf8ade3028721819f193d"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/crusiris/Proyectos/Angular/SCL011-Burger-Queen/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map