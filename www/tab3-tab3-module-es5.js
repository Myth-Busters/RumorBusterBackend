function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n    <div class=\"w-bg custom-header\">\n        <img class=\"custom-logo\" src=\"assets/icn_logo.svg\" />\n        <h3>إحصائيات</h3>\n        <p>اكثر الشائعات انتشارا لهذا الشهر</p>\n    </div>\n\n    <!-- List of Text Items -->\n    <ion-list>\n\n        <p class=\"message animated fadeInUp\" ion-item *ngFor=\"let rumor of (rumors | async)?.results.rumors;let last = last;\">\n\n            <img *ngIf=\"rumor.url\" [src]=\"rumor.url\" /> {{ rumor.message }}\n            <img *ngIf=\"last\" class=\"custom-avatar\" src=\"assets/avatar.svg\" />\n\n        </p>\n\n    </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab3/tab3-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab3/tab3-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/tab3/tab3-routing.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".w-bg {\n  background-color: #FFFFFF !important;\n}\n\n.custom-header {\n  padding: 16px 30px;\n  direction: rtl;\n}\n\n.custom-header p {\n  color: #8e939b;\n  margin: 0px;\n  font-size: 16px;\n}\n\n.custom-header h3 {\n  margin: 30px 0px 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.message {\n  margin: 25px 40px 25px 100px;\n  padding: 14px 18px;\n  background: #EFF3F7;\n  color: #6c657b;\n  font-size: 16px;\n  border-radius: 20px;\n  position: relative;\n  direction: rtl;\n}\n\n.message .custom-avatar {\n  position: absolute;\n  left: -72px;\n  bottom: 0px;\n}\n\n.message.notAKD {\n  margin: 25px 40px 25px 80px;\n  background: #EDF0F2;\n}\n\n.custom-input {\n  background: white;\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  border-radius: 10px;\n  margin: 0 14px 24px;\n  direction: rtl;\n  padding: 5px 20px;\n  box-shadow: 0 4.5px 3.6px rgba(0, 0, 0, 0.007), 0 12.5px 10px rgba(0, 0, 0, 0.01), 0 30.1px 24.1px rgba(0, 0, 0, 0.013), 0 100px 80px rgba(0, 0, 0, 0.02);\n}\n\n.custom-input .input-item {\n  font-size: 16px;\n}\n\n.custom-input .custom-send {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  -box-shadow: 0 2px 4px #00C2C8;\n}\n\n.custom-input .custom-attached {\n  position: absolute;\n  left: 50px;\n  top: 20px;\n  -box-shadow: 0 2px 4px #00C2C8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYWwvRG9jdW1lbnRzL3BlcnNvbmFsL3Byb2plY3RzL1J1bWVyYnVzdGVyL2FwcC9ha2Qvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQUk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VSOztBREVBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFJO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQ0VSOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlKQUFBO0FDQ0o7O0FEQUk7RUFDSSxlQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUNFUjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53LWJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxNnB4IDMwcHg7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjOGU5MzliO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIG1hcmdpbjogMzBweCAwcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5tZXNzYWdlIHtcbiAgICBtYXJnaW46IDI1cHggNDBweCAyNXB4IDEwMHB4O1xuICAgIHBhZGRpbmc6IDE0cHggMThweDtcbiAgICBiYWNrZ3JvdW5kOiAjRUZGM0Y3O1xuICAgIGNvbG9yOiAjNmM2NTdiO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAuY3VzdG9tLWF2YXRhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTcycHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgIH1cbiAgICAmLm5vdEFLRCB7XG4gICAgICAgIG1hcmdpbjogMjVweCA0MHB4IDI1cHggODBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0VERjBGMjtcbiAgICB9XG59XG5cbi5jdXN0b20taW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAwIDE0cHggMjRweDtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDQuNXB4IDMuNnB4IHJnYmEoMCwgMCwgMCwgMC4wMDcpLCAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMzAuMXB4IDI0LjFweCByZ2JhKDAsIDAsIDAsIDAuMDEzKSwgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5jdXN0b20tc2VuZCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAtYm94LXNoYWRvdzogMCAycHggNHB4ICMwMEMyQzg7XG4gICAgfVxuICAgIC5jdXN0b20tYXR0YWNoZWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgLWJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDBDMkM4O1xuICAgIH1cbn0iLCIudy1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDMwcHg7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuLmN1c3RvbS1oZWFkZXIgcCB7XG4gIGNvbG9yOiAjOGU5MzliO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmN1c3RvbS1oZWFkZXIgaDMge1xuICBtYXJnaW46IDMwcHggMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZXNzYWdlIHtcbiAgbWFyZ2luOiAyNXB4IDQwcHggMjVweCAxMDBweDtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjRUZGM0Y3O1xuICBjb2xvcjogIzZjNjU3YjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuLm1lc3NhZ2UgLmN1c3RvbS1hdmF0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC03MnB4O1xuICBib3R0b206IDBweDtcbn1cbi5tZXNzYWdlLm5vdEFLRCB7XG4gIG1hcmdpbjogMjVweCA0MHB4IDI1cHggODBweDtcbiAgYmFja2dyb3VuZDogI0VERjBGMjtcbn1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwIDE0cHggMjRweDtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3gtc2hhZG93OiAwIDQuNXB4IDMuNnB4IHJnYmEoMCwgMCwgMCwgMC4wMDcpLCAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMzAuMXB4IDI0LjFweCByZ2JhKDAsIDAsIDAsIDAuMDEzKSwgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG4uY3VzdG9tLWlucHV0IC5pbnB1dC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmN1c3RvbS1pbnB1dCAuY3VzdG9tLXNlbmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbiAgLWJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDBDMkM4O1xufVxuLmN1c3RvbS1pbnB1dCAuY3VzdG9tLWF0dGFjaGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MHB4O1xuICB0b3A6IDIwcHg7XG4gIC1ib3gtc2hhZG93OiAwIDJweCA0cHggIzAwQzJDODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var Tab3Page = function Tab3Page(httpClient) {
      _classCallCheck(this, Tab3Page);

      this.httpClient = httpClient;
      this.rumors = this.httpClient.get('https://mohammed.red/getTopRumors');
    };

    Tab3Page.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map