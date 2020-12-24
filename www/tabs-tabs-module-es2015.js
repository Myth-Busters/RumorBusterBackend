(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\" class=\"customtabs\">\n        <ion-tab-button tab=\"tab1\" class=\"customtab\">\n            <ion-icon src=\"assets/icn_report_tab.svg\" class=\"customIcon\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab2\" class=\"customtab\">\n            <ion-icon src=\"assets/icn_varify_tab.svg\" class=\"customIcon\"></ion-icon>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab3\" class=\"customtab\">\n            <ion-icon src=\"assets/icn_top_tab.svg\" class=\"customIcon\"></ion-icon>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts")).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts")).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab2',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon[class*=custom-] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\nion-icon[class*=custom-report] {\n  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20.777\" height=\"26.25\" viewBox=\"0 0 20.777 26.25\"><path id=\"Shape\" d=\"M1.01,25H0V0L.695.29,17.864,7.506,19,7.989l-1.136.483L1.01,15.561V25Zm0-23.454V14.433L16.333,7.989Z\" transform=\"translate(0.5 0.75)\" fill=\"#c8c8ce\" stroke=\"#c8c8ce\" stroke-miterlimit=\"10\" stroke-width=\"1\"/></svg>');\n          mask-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20.777\" height=\"26.25\" viewBox=\"0 0 20.777 26.25\"><path id=\"Shape\" d=\"M1.01,25H0V0L.695.29,17.864,7.506,19,7.989l-1.136.483L1.01,15.561V25Zm0-23.454V14.433L16.333,7.989Z\" transform=\"translate(0.5 0.75)\" fill=\"#c8c8ce\" stroke=\"#c8c8ce\" stroke-miterlimit=\"10\" stroke-width=\"1\"/></svg>');\n}\nion-icon[class*=custom-top] {\n  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"26.057\" viewBox=\"0 0 18 26.057\"><path id=\"Shape\" d=\"M8.453,25h0L6.019,22.438l.792-.384a5.783,5.783,0,0,0,1.233-.995,9.94,9.94,0,0,0,2.172-3.522l-.427.086a10.5,10.5,0,0,1-1.9.276,7.39,7.39,0,0,1-5.7-2.652A9.673,9.673,0,0,1,0,8.95,9.128,9.128,0,0,1,2.5,2.629a8.168,8.168,0,0,1,12.006,0A9.128,9.128,0,0,1,17,8.95c0,7.054-2.2,11-4.041,13.076A9.787,9.787,0,0,1,8.787,24.91L8.453,25Zm3.635-9.256v0l-.314,1.174a9.376,9.376,0,0,1-3.794,5.773l.806.849a7.859,7.859,0,0,0,3.287-2.39,13.271,13.271,0,0,0,2.545-4.44,23.431,23.431,0,0,0,1.17-7.762A7.494,7.494,0,0,0,8.5,1.279,7.494,7.494,0,0,0,1.214,8.95a8.4,8.4,0,0,0,1.835,5.442A6.238,6.238,0,0,0,7.893,16.62a12.68,12.68,0,0,0,3.1-.48l1.093-.4Z\" transform=\"translate(0.5 0.5)\" fill=\"#c8c8ce\" stroke=\"#c8c8ce\" stroke-miterlimit=\"10\" stroke-width=\"1\"/></svg>');\n          mask-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"26.057\" viewBox=\"0 0 18 26.057\"><path id=\"Shape\" d=\"M8.453,25h0L6.019,22.438l.792-.384a5.783,5.783,0,0,0,1.233-.995,9.94,9.94,0,0,0,2.172-3.522l-.427.086a10.5,10.5,0,0,1-1.9.276,7.39,7.39,0,0,1-5.7-2.652A9.673,9.673,0,0,1,0,8.95,9.128,9.128,0,0,1,2.5,2.629a8.168,8.168,0,0,1,12.006,0A9.128,9.128,0,0,1,17,8.95c0,7.054-2.2,11-4.041,13.076A9.787,9.787,0,0,1,8.787,24.91L8.453,25Zm3.635-9.256v0l-.314,1.174a9.376,9.376,0,0,1-3.794,5.773l.806.849a7.859,7.859,0,0,0,3.287-2.39,13.271,13.271,0,0,0,2.545-4.44,23.431,23.431,0,0,0,1.17-7.762A7.494,7.494,0,0,0,8.5,1.279,7.494,7.494,0,0,0,1.214,8.95a8.4,8.4,0,0,0,1.835,5.442A6.238,6.238,0,0,0,7.893,16.62a12.68,12.68,0,0,0,3.1-.48l1.093-.4Z\" transform=\"translate(0.5 0.5)\" fill=\"#c8c8ce\" stroke=\"#c8c8ce\" stroke-miterlimit=\"10\" stroke-width=\"1\"/></svg>');\n}\nion-icon[class*=custom-varify] {\n  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27.022\" height=\"26\" viewBox=\"0 0 27.022 26\"><path id=\"Shape\" d=\"M10.217,25a.571.571,0,0,1-.382-.146L7.827,23.044,5.15,22.6a.567.567,0,0,1-.431-.342l-1-2.468-2.23-1.537a.556.556,0,0,1-.24-.489l.167-2.689-1.337-2.3a.548.548,0,0,1,0-.552l1.337-2.3L1.245,7.232a.549.549,0,0,1,.24-.489l2.23-1.537,1-2.468A.566.566,0,0,1,5.15,2.4l2.678-.438L9.835.147A.57.57,0,0,1,10.211,0a.582.582,0,0,1,.167.024L13,.792,15.622.024A.574.574,0,0,1,15.784,0a.567.567,0,0,1,.381.146l2.008,1.811,2.677.438a.567.567,0,0,1,.432.343l1,2.468,2.23,1.537a.549.549,0,0,1,.24.489l-.167,2.689,1.337,2.3a.552.552,0,0,1,0,.552l-1.337,2.3.167,2.689a.556.556,0,0,1-.24.489l-2.23,1.537-1,2.468a.567.567,0,0,1-.432.342l-2.677.439-2.008,1.811a.573.573,0,0,1-.543.122L13,24.209l-2.622.768A.571.571,0,0,1,10.217,25ZM13,23.072a.563.563,0,0,1,.162.024l2.476.725,1.9-1.71a.563.563,0,0,1,.289-.138l2.528-.415.948-2.331a.562.562,0,0,1,.2-.249l2.108-1.453-.157-2.544a.545.545,0,0,1,.073-.31L24.783,12.5l-1.261-2.171a.549.549,0,0,1-.073-.31l.157-2.544L21.5,6.022a.564.564,0,0,1-.2-.248L20.35,3.442l-2.528-.415a.566.566,0,0,1-.289-.139l-1.9-1.709-2.476.725a.58.58,0,0,1-.323,0L10.363,1.18l-1.9,1.709a.571.571,0,0,1-.289.139L5.65,3.442,4.7,5.773a.555.555,0,0,1-.2.248L2.392,7.475l.158,2.544a.557.557,0,0,1-.073.31L1.217,12.5l1.261,2.172a.553.553,0,0,1,.073.31l-.158,2.544L4.5,18.978a.554.554,0,0,1,.2.249l.949,2.331,2.528.415a.569.569,0,0,1,.289.138l1.9,1.71,2.476-.725A.563.563,0,0,1,13,23.072ZM12.154,17.8h0L7.025,13.246l.758-.825L11.925,16.1l6.195-9.46.95.6L12.155,17.8Z\" transform=\"translate(0.511 0.5)\" fill=\"#c8c8ce\" stroke=\"#c8c8ce\" stroke-miterlimit=\"10\" stroke-width=\"1\"/></svg>');\n          mask-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27.022\" height=\"26\" viewBox=\"0 0 27.022 26\"><path id=\"Shape\" d=\"M10.217,25a.571.571,0,0,1-.382-.146L7.827,23.044,5.15,22.6a.567.567,0,0,1-.431-.342l-1-2.468-2.23-1.537a.556.556,0,0,1-.24-.489l.167-2.689-1.337-2.3a.548.548,0,0,1,0-.552l1.337-2.3L1.245,7.232a.549.549,0,0,1,.24-.489l2.23-1.537,1-2.468A.566.566,0,0,1,5.15,2.4l2.678-.438L9.835.147A.57.57,0,0,1,10.211,0a.582.582,0,0,1,.167.024L13,.792,15.622.024A.574.574,0,0,1,15.784,0a.567.567,0,0,1,.381.146l2.008,1.811,2.677.438a.567.567,0,0,1,.432.343l1,2.468,2.23,1.537a.549.549,0,0,1,.24.489l-.167,2.689,1.337,2.3a.552.552,0,0,1,0,.552l-1.337,2.3.167,2.689a.556.556,0,0,1-.24.489l-2.23,1.537-1,2.468a.567.567,0,0,1-.432.342l-2.677.439-2.008,1.811a.573.573,0,0,1-.543.122L13,24.209l-2.622.768A.571.571,0,0,1,10.217,25ZM13,23.072a.563.563,0,0,1,.162.024l2.476.725,1.9-1.71a.563.563,0,0,1,.289-.138l2.528-.415.948-2.331a.562.562,0,0,1,.2-.249l2.108-1.453-.157-2.544a.545.545,0,0,1,.073-.31L24.783,12.5l-1.261-2.171a.549.549,0,0,1-.073-.31l.157-2.544L21.5,6.022a.564.564,0,0,1-.2-.248L20.35,3.442l-2.528-.415a.566.566,0,0,1-.289-.139l-1.9-1.709-2.476.725a.58.58,0,0,1-.323,0L10.363,1.18l-1.9,1.709a.571.571,0,0,1-.289.139L5.65,3.442,4.7,5.773a.555.555,0,0,1-.2.248L2.392,7.475l.158,2.544a.557.557,0,0,1-.073.31L1.217,12.5l1.261,2.172a.553.553,0,0,1,.073.31l-.158,2.544L4.5,18.978a.554.554,0,0,1,.2.249l.949,2.331,2.528.415a.569.569,0,0,1,.289.138l1.9,1.71,2.476-.725A.563.563,0,0,1,13,23.072ZM12.154,17.8h0L7.025,13.246l.758-.825L11.925,16.1l6.195-9.46.95.6L12.155,17.8Z\" transform=\"translate(0.511 0.5)\" fill=\"#c8c8ce\" stroke=\"#c8c8ce\" stroke-miterlimit=\"10\" stroke-width=\"1\"/></svg>');\n}\n.customtabs {\n  height: 68px;\n  border: none;\n  background: white;\n  box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.003), 0 0px 5.3px rgba(0, 0, 0, 0.004), 0 0px 10px rgba(0, 0, 0, 0.005), 0 0px 17.9px rgba(0, 0, 0, 0.006), 0 0px 33.4px rgba(0, 0, 0, 0.007), 0 0px 80px rgba(0, 0, 0, 0.01);\n}\n.customtab {\n  color: #C8C8CE;\n  background: white;\n}\n.customtab[aria-selected=true] {\n  background: white url(\"/assets/btn.svg\") center center no-repeat;\n  color: #fff;\n}\n.customIcon {\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYWwvRG9jdW1lbnRzL3BlcnNvbmFsL3Byb2plY3RzL1J1bWVyYnVzdGVyL2FwcC9ha2Qvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksMEJBQUE7VUFBQSxrQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERUk7RUFDSSw0WEFBQTtVQUFBLG9YQUFBO0FDQVI7QURFSTtFQUNJLHc0QkFBQTtVQUFBLGc0QkFBQTtBQ0FSO0FERUk7RUFDSSxvc0RBQUE7VUFBQSw0ckRBQUE7QUNBUjtBRElBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFOQUFBO0FDREo7QURJQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0RKO0FESUE7RUFDSSxnRUFBQTtFQUNBLFdBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgICAmW2NsYXNzKj1cImN1c3RvbS1cIl0ge1xuICAgICAgICBtYXNrLXNpemU6IGNvbnRhaW47XG4gICAgICAgIG1hc2stcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxuICAgICZbY2xhc3MqPVwiY3VzdG9tLXJlcG9ydFwiXSB7XG4gICAgICAgIG1hc2staW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMC43NzdcIiBoZWlnaHQ9XCIyNi4yNVwiIHZpZXdCb3g9XCIwIDAgMjAuNzc3IDI2LjI1XCI+PHBhdGggaWQ9XCJTaGFwZVwiIGQ9XCJNMS4wMSwyNUgwVjBMLjY5NS4yOSwxNy44NjQsNy41MDYsMTksNy45ODlsLTEuMTM2LjQ4M0wxLjAxLDE1LjU2MVYyNVptMC0yMy40NTRWMTQuNDMzTDE2LjMzMyw3Ljk4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC41IDAuNzUpXCIgZmlsbD1cIiNjOGM4Y2VcIiBzdHJva2U9XCIjYzhjOGNlXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZS13aWR0aD1cIjFcIi8+PC9zdmc+Jyk7XG4gICAgfVxuICAgICZbY2xhc3MqPVwiY3VzdG9tLXRvcFwiXSB7XG4gICAgICAgIG1hc2staW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjI2LjA1N1wiIHZpZXdCb3g9XCIwIDAgMTggMjYuMDU3XCI+PHBhdGggaWQ9XCJTaGFwZVwiIGQ9XCJNOC40NTMsMjVoMEw2LjAxOSwyMi40MzhsLjc5Mi0uMzg0YTUuNzgzLDUuNzgzLDAsMCwwLDEuMjMzLS45OTUsOS45NCw5Ljk0LDAsMCwwLDIuMTcyLTMuNTIybC0uNDI3LjA4NmExMC41LDEwLjUsMCwwLDEtMS45LjI3Niw3LjM5LDcuMzksMCwwLDEtNS43LTIuNjUyQTkuNjczLDkuNjczLDAsMCwxLDAsOC45NSw5LjEyOCw5LjEyOCwwLDAsMSwyLjUsMi42MjlhOC4xNjgsOC4xNjgsMCwwLDEsMTIuMDA2LDBBOS4xMjgsOS4xMjgsMCwwLDEsMTcsOC45NWMwLDcuMDU0LTIuMiwxMS00LjA0MSwxMy4wNzZBOS43ODcsOS43ODcsMCwwLDEsOC43ODcsMjQuOTFMOC40NTMsMjVabTMuNjM1LTkuMjU2djBsLS4zMTQsMS4xNzRhOS4zNzYsOS4zNzYsMCwwLDEtMy43OTQsNS43NzNsLjgwNi44NDlhNy44NTksNy44NTksMCwwLDAsMy4yODctMi4zOSwxMy4yNzEsMTMuMjcxLDAsMCwwLDIuNTQ1LTQuNDQsMjMuNDMxLDIzLjQzMSwwLDAsMCwxLjE3LTcuNzYyQTcuNDk0LDcuNDk0LDAsMCwwLDguNSwxLjI3OSw3LjQ5NCw3LjQ5NCwwLDAsMCwxLjIxNCw4Ljk1YTguNCw4LjQsMCwwLDAsMS44MzUsNS40NDJBNi4yMzgsNi4yMzgsMCwwLDAsNy44OTMsMTYuNjJhMTIuNjgsMTIuNjgsMCwwLDAsMy4xLS40OGwxLjA5My0uNFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC41IDAuNSlcIiBmaWxsPVwiI2M4YzhjZVwiIHN0cm9rZT1cIiNjOGM4Y2VcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgc3Ryb2tlLXdpZHRoPVwiMVwiLz48L3N2Zz4nKTtcbiAgICB9XG4gICAgJltjbGFzcyo9XCJjdXN0b20tdmFyaWZ5XCJdIHtcbiAgICAgICAgbWFzay1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI3LjAyMlwiIGhlaWdodD1cIjI2XCIgdmlld0JveD1cIjAgMCAyNy4wMjIgMjZcIj48cGF0aCBpZD1cIlNoYXBlXCIgZD1cIk0xMC4yMTcsMjVhLjU3MS41NzEsMCwwLDEtLjM4Mi0uMTQ2TDcuODI3LDIzLjA0NCw1LjE1LDIyLjZhLjU2Ny41NjcsMCwwLDEtLjQzMS0uMzQybC0xLTIuNDY4LTIuMjMtMS41MzdhLjU1Ni41NTYsMCwwLDEtLjI0LS40ODlsLjE2Ny0yLjY4OS0xLjMzNy0yLjNhLjU0OC41NDgsMCwwLDEsMC0uNTUybDEuMzM3LTIuM0wxLjI0NSw3LjIzMmEuNTQ5LjU0OSwwLDAsMSwuMjQtLjQ4OWwyLjIzLTEuNTM3LDEtMi40NjhBLjU2Ni41NjYsMCwwLDEsNS4xNSwyLjRsMi42NzgtLjQzOEw5LjgzNS4xNDdBLjU3LjU3LDAsMCwxLDEwLjIxMSwwYS41ODIuNTgyLDAsMCwxLC4xNjcuMDI0TDEzLC43OTIsMTUuNjIyLjAyNEEuNTc0LjU3NCwwLDAsMSwxNS43ODQsMGEuNTY3LjU2NywwLDAsMSwuMzgxLjE0NmwyLjAwOCwxLjgxMSwyLjY3Ny40MzhhLjU2Ny41NjcsMCwwLDEsLjQzMi4zNDNsMSwyLjQ2OCwyLjIzLDEuNTM3YS41NDkuNTQ5LDAsMCwxLC4yNC40ODlsLS4xNjcsMi42ODksMS4zMzcsMi4zYS41NTIuNTUyLDAsMCwxLDAsLjU1MmwtMS4zMzcsMi4zLjE2NywyLjY4OWEuNTU2LjU1NiwwLDAsMS0uMjQuNDg5bC0yLjIzLDEuNTM3LTEsMi40NjhhLjU2Ny41NjcsMCwwLDEtLjQzMi4zNDJsLTIuNjc3LjQzOS0yLjAwOCwxLjgxMWEuNTczLjU3MywwLDAsMS0uNTQzLjEyMkwxMywyNC4yMDlsLTIuNjIyLjc2OEEuNTcxLjU3MSwwLDAsMSwxMC4yMTcsMjVaTTEzLDIzLjA3MmEuNTYzLjU2MywwLDAsMSwuMTYyLjAyNGwyLjQ3Ni43MjUsMS45LTEuNzFhLjU2My41NjMsMCwwLDEsLjI4OS0uMTM4bDIuNTI4LS40MTUuOTQ4LTIuMzMxYS41NjIuNTYyLDAsMCwxLC4yLS4yNDlsMi4xMDgtMS40NTMtLjE1Ny0yLjU0NGEuNTQ1LjU0NSwwLDAsMSwuMDczLS4zMUwyNC43ODMsMTIuNWwtMS4yNjEtMi4xNzFhLjU0OS41NDksMCwwLDEtLjA3My0uMzFsLjE1Ny0yLjU0NEwyMS41LDYuMDIyYS41NjQuNTY0LDAsMCwxLS4yLS4yNDhMMjAuMzUsMy40NDJsLTIuNTI4LS40MTVhLjU2Ni41NjYsMCwwLDEtLjI4OS0uMTM5bC0xLjktMS43MDktMi40NzYuNzI1YS41OC41OCwwLDAsMS0uMzIzLDBMMTAuMzYzLDEuMThsLTEuOSwxLjcwOWEuNTcxLjU3MSwwLDAsMS0uMjg5LjEzOUw1LjY1LDMuNDQyLDQuNyw1Ljc3M2EuNTU1LjU1NSwwLDAsMS0uMi4yNDhMMi4zOTIsNy40NzVsLjE1OCwyLjU0NGEuNTU3LjU1NywwLDAsMS0uMDczLjMxTDEuMjE3LDEyLjVsMS4yNjEsMi4xNzJhLjU1My41NTMsMCwwLDEsLjA3My4zMWwtLjE1OCwyLjU0NEw0LjUsMTguOTc4YS41NTQuNTU0LDAsMCwxLC4yLjI0OWwuOTQ5LDIuMzMxLDIuNTI4LjQxNWEuNTY5LjU2OSwwLDAsMSwuMjg5LjEzOGwxLjksMS43MSwyLjQ3Ni0uNzI1QS41NjMuNTYzLDAsMCwxLDEzLDIzLjA3MlpNMTIuMTU0LDE3LjhoMEw3LjAyNSwxMy4yNDZsLjc1OC0uODI1TDExLjkyNSwxNi4xbDYuMTk1LTkuNDYuOTUuNkwxMi4xNTUsMTcuOFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC41MTEgMC41KVwiIGZpbGw9XCIjYzhjOGNlXCIgc3Ryb2tlPVwiI2M4YzhjZVwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiBzdHJva2Utd2lkdGg9XCIxXCIvPjwvc3ZnPicpO1xuICAgIH1cbn1cblxuLmN1c3RvbXRhYnMge1xuICAgIGhlaWdodDogNjhweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAwMyksIDAgMHB4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wMDQpLCAwIDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMDUpLCAwIDBweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjAwNiksIDAgMHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDA3KSwgMCAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMDEpO1xufVxuXG4uY3VzdG9tdGFiIHtcbiAgICBjb2xvcjogI0M4QzhDRTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmN1c3RvbXRhYlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKFwiL2Fzc2V0cy9idG4uc3ZnXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY3VzdG9tSWNvbiB7XG4gICAgaGVpZ2h0OiAyNXB4O1xufSIsImlvbi1pY29uW2NsYXNzKj1jdXN0b20tXSB7XG4gIG1hc2stc2l6ZTogY29udGFpbjtcbiAgbWFzay1wb3NpdGlvbjogNTAlIDUwJTtcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbn1cbmlvbi1pY29uW2NsYXNzKj1jdXN0b20tcmVwb3J0XSB7XG4gIG1hc2staW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMC43NzdcIiBoZWlnaHQ9XCIyNi4yNVwiIHZpZXdCb3g9XCIwIDAgMjAuNzc3IDI2LjI1XCI+PHBhdGggaWQ9XCJTaGFwZVwiIGQ9XCJNMS4wMSwyNUgwVjBMLjY5NS4yOSwxNy44NjQsNy41MDYsMTksNy45ODlsLTEuMTM2LjQ4M0wxLjAxLDE1LjU2MVYyNVptMC0yMy40NTRWMTQuNDMzTDE2LjMzMyw3Ljk4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC41IDAuNzUpXCIgZmlsbD1cIiNjOGM4Y2VcIiBzdHJva2U9XCIjYzhjOGNlXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZS13aWR0aD1cIjFcIi8+PC9zdmc+Jyk7XG59XG5pb24taWNvbltjbGFzcyo9Y3VzdG9tLXRvcF0ge1xuICBtYXNrLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIyNi4wNTdcIiB2aWV3Qm94PVwiMCAwIDE4IDI2LjA1N1wiPjxwYXRoIGlkPVwiU2hhcGVcIiBkPVwiTTguNDUzLDI1aDBMNi4wMTksMjIuNDM4bC43OTItLjM4NGE1Ljc4Myw1Ljc4MywwLDAsMCwxLjIzMy0uOTk1LDkuOTQsOS45NCwwLDAsMCwyLjE3Mi0zLjUyMmwtLjQyNy4wODZhMTAuNSwxMC41LDAsMCwxLTEuOS4yNzYsNy4zOSw3LjM5LDAsMCwxLTUuNy0yLjY1MkE5LjY3Myw5LjY3MywwLDAsMSwwLDguOTUsOS4xMjgsOS4xMjgsMCwwLDEsMi41LDIuNjI5YTguMTY4LDguMTY4LDAsMCwxLDEyLjAwNiwwQTkuMTI4LDkuMTI4LDAsMCwxLDE3LDguOTVjMCw3LjA1NC0yLjIsMTEtNC4wNDEsMTMuMDc2QTkuNzg3LDkuNzg3LDAsMCwxLDguNzg3LDI0LjkxTDguNDUzLDI1Wm0zLjYzNS05LjI1NnYwbC0uMzE0LDEuMTc0YTkuMzc2LDkuMzc2LDAsMCwxLTMuNzk0LDUuNzczbC44MDYuODQ5YTcuODU5LDcuODU5LDAsMCwwLDMuMjg3LTIuMzksMTMuMjcxLDEzLjI3MSwwLDAsMCwyLjU0NS00LjQ0LDIzLjQzMSwyMy40MzEsMCwwLDAsMS4xNy03Ljc2MkE3LjQ5NCw3LjQ5NCwwLDAsMCw4LjUsMS4yNzksNy40OTQsNy40OTQsMCwwLDAsMS4yMTQsOC45NWE4LjQsOC40LDAsMCwwLDEuODM1LDUuNDQyQTYuMjM4LDYuMjM4LDAsMCwwLDcuODkzLDE2LjYyYTEyLjY4LDEyLjY4LDAsMCwwLDMuMS0uNDhsMS4wOTMtLjRaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuNSAwLjUpXCIgZmlsbD1cIiNjOGM4Y2VcIiBzdHJva2U9XCIjYzhjOGNlXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZS13aWR0aD1cIjFcIi8+PC9zdmc+Jyk7XG59XG5pb24taWNvbltjbGFzcyo9Y3VzdG9tLXZhcmlmeV0ge1xuICBtYXNrLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjcuMDIyXCIgaGVpZ2h0PVwiMjZcIiB2aWV3Qm94PVwiMCAwIDI3LjAyMiAyNlwiPjxwYXRoIGlkPVwiU2hhcGVcIiBkPVwiTTEwLjIxNywyNWEuNTcxLjU3MSwwLDAsMS0uMzgyLS4xNDZMNy44MjcsMjMuMDQ0LDUuMTUsMjIuNmEuNTY3LjU2NywwLDAsMS0uNDMxLS4zNDJsLTEtMi40NjgtMi4yMy0xLjUzN2EuNTU2LjU1NiwwLDAsMS0uMjQtLjQ4OWwuMTY3LTIuNjg5LTEuMzM3LTIuM2EuNTQ4LjU0OCwwLDAsMSwwLS41NTJsMS4zMzctMi4zTDEuMjQ1LDcuMjMyYS41NDkuNTQ5LDAsMCwxLC4yNC0uNDg5bDIuMjMtMS41MzcsMS0yLjQ2OEEuNTY2LjU2NiwwLDAsMSw1LjE1LDIuNGwyLjY3OC0uNDM4TDkuODM1LjE0N0EuNTcuNTcsMCwwLDEsMTAuMjExLDBhLjU4Mi41ODIsMCwwLDEsLjE2Ny4wMjRMMTMsLjc5MiwxNS42MjIuMDI0QS41NzQuNTc0LDAsMCwxLDE1Ljc4NCwwYS41NjcuNTY3LDAsMCwxLC4zODEuMTQ2bDIuMDA4LDEuODExLDIuNjc3LjQzOGEuNTY3LjU2NywwLDAsMSwuNDMyLjM0M2wxLDIuNDY4LDIuMjMsMS41MzdhLjU0OS41NDksMCwwLDEsLjI0LjQ4OWwtLjE2NywyLjY4OSwxLjMzNywyLjNhLjU1Mi41NTIsMCwwLDEsMCwuNTUybC0xLjMzNywyLjMuMTY3LDIuNjg5YS41NTYuNTU2LDAsMCwxLS4yNC40ODlsLTIuMjMsMS41MzctMSwyLjQ2OGEuNTY3LjU2NywwLDAsMS0uNDMyLjM0MmwtMi42NzcuNDM5LTIuMDA4LDEuODExYS41NzMuNTczLDAsMCwxLS41NDMuMTIyTDEzLDI0LjIwOWwtMi42MjIuNzY4QS41NzEuNTcxLDAsMCwxLDEwLjIxNywyNVpNMTMsMjMuMDcyYS41NjMuNTYzLDAsMCwxLC4xNjIuMDI0bDIuNDc2LjcyNSwxLjktMS43MWEuNTYzLjU2MywwLDAsMSwuMjg5LS4xMzhsMi41MjgtLjQxNS45NDgtMi4zMzFhLjU2Mi41NjIsMCwwLDEsLjItLjI0OWwyLjEwOC0xLjQ1My0uMTU3LTIuNTQ0YS41NDUuNTQ1LDAsMCwxLC4wNzMtLjMxTDI0Ljc4MywxMi41bC0xLjI2MS0yLjE3MWEuNTQ5LjU0OSwwLDAsMS0uMDczLS4zMWwuMTU3LTIuNTQ0TDIxLjUsNi4wMjJhLjU2NC41NjQsMCwwLDEtLjItLjI0OEwyMC4zNSwzLjQ0MmwtMi41MjgtLjQxNWEuNTY2LjU2NiwwLDAsMS0uMjg5LS4xMzlsLTEuOS0xLjcwOS0yLjQ3Ni43MjVhLjU4LjU4LDAsMCwxLS4zMjMsMEwxMC4zNjMsMS4xOGwtMS45LDEuNzA5YS41NzEuNTcxLDAsMCwxLS4yODkuMTM5TDUuNjUsMy40NDIsNC43LDUuNzczYS41NTUuNTU1LDAsMCwxLS4yLjI0OEwyLjM5Miw3LjQ3NWwuMTU4LDIuNTQ0YS41NTcuNTU3LDAsMCwxLS4wNzMuMzFMMS4yMTcsMTIuNWwxLjI2MSwyLjE3MmEuNTUzLjU1MywwLDAsMSwuMDczLjMxbC0uMTU4LDIuNTQ0TDQuNSwxOC45NzhhLjU1NC41NTQsMCwwLDEsLjIuMjQ5bC45NDksMi4zMzEsMi41MjguNDE1YS41NjkuNTY5LDAsMCwxLC4yODkuMTM4bDEuOSwxLjcxLDIuNDc2LS43MjVBLjU2My41NjMsMCwwLDEsMTMsMjMuMDcyWk0xMi4xNTQsMTcuOGgwTDcuMDI1LDEzLjI0NmwuNzU4LS44MjVMMTEuOTI1LDE2LjFsNi4xOTUtOS40Ni45NS42TDEyLjE1NSwxNy44WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjUxMSAwLjUpXCIgZmlsbD1cIiNjOGM4Y2VcIiBzdHJva2U9XCIjYzhjOGNlXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIHN0cm9rZS13aWR0aD1cIjFcIi8+PC9zdmc+Jyk7XG59XG5cbi5jdXN0b210YWJzIHtcbiAgaGVpZ2h0OiA2OHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDBweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDAzKSwgMCAwcHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjAwNCksIDAgMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAwNSksIDAgMHB4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDA2KSwgMCAwcHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wMDcpLCAwIDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wMSk7XG59XG5cbi5jdXN0b210YWIge1xuICBjb2xvcjogI0M4QzhDRTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jdXN0b210YWJbYXJpYS1zZWxlY3RlZD10cnVlXSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlIHVybChcIi9hc3NldHMvYnRuLnN2Z1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b21JY29uIHtcbiAgaGVpZ2h0OiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map