function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" class=\"g-bg\">\n    <div class=\"w-bg custom-header\">\n        <img class=\"custom-logo\" src=\"assets/icn_logo.svg\" />\n        <h3>إبلاغ عن إشاعة.</h3>\n        <p>الرجاء إرفاق الخبر أو الصورة للتبليغ عنها.</p>\n    </div>\n\n    <ion-list>\n        <div>\n            <p class=\"message animated fadeInUp\">\n                أهلا بك كيف أقدر اساعدك اليوم؟\n                <img class=\"custom-avatar\" src=\"assets/avatar.svg\" />\n            </p>\n        </div>\n\n\n\n        <p class=\"message animated fadeInUp\" [ngClass]=\"{'notAKD': !item.isAKD}\" ion-item *ngFor=\"let item of data;let last = last;\">\n            <img *ngIf=\"item.src\" [src]=\"item.src\" /> {{ item.text }}\n            <img *ngIf=\"item.isAKD\" class=\"custom-avatar\" src=\"assets/avatar.svg\" />\n\n        </p>\n\n    </ion-list>\n\n    <div class=\"custom-input\">\n        <ion-input autofocus=\"true\" class=\"input-item\" [(ngModel)]=\"message\" (keypress)=\"eventHandler($event.keyCode)\" placeholder=\"اكتب الرسالة …\"></ion-input>\n        <ion-icon class=\"custom-send\" (click)=\"submit()\" src=\"assets/send.svg\"></ion-icon>\n        <ion-icon class=\"custom-attached\" (click)=\"openPWAPhotoPicker()\" src=\"assets/attachment.svg\"></ion-icon>\n\n    </div>\n    <div id=\"pwa\" style=\"display: none;\">\n        <input type=\"file\" id=\"pwaphoto\" #pwaphoto accept=\"image/x-png,image/jpeg\" (change)=\"uploadPWA()\">\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tab1/tab1-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab1/tab1-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");

    var routes = [{
      path: '',
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/tab1/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".w-bg {\n  background-color: #FFFFFF !important;\n}\n\n.custom-header {\n  padding: 16px 30px;\n  direction: rtl;\n}\n\n.custom-header p {\n  color: #8e939b;\n  margin: 0px;\n  font-size: 16px;\n}\n\n.custom-header h3 {\n  margin: 30px 0px 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.message {\n  margin: 25px 40px 25px 100px;\n  padding: 14px 18px;\n  background: #EFF3F7;\n  color: #6c657b;\n  font-size: 16px;\n  border-radius: 20px;\n  position: relative;\n  direction: rtl;\n}\n\n.message .custom-avatar {\n  position: absolute;\n  left: -72px;\n  bottom: 0px;\n}\n\n.message.notAKD {\n  margin: 25px 40px 25px 80px;\n  background: #EDF0F2;\n}\n\n.custom-input {\n  background: white;\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  border-radius: 10px;\n  margin: 0 14px 24px;\n  direction: rtl;\n  padding: 5px 20px 5px 80px;\n  box-shadow: 0 4.5px 3.6px rgba(0, 0, 0, 0.007), 0 12.5px 10px rgba(0, 0, 0, 0.01), 0 30.1px 24.1px rgba(0, 0, 0, 0.013), 0 100px 80px rgba(0, 0, 0, 0.02);\n}\n\n.custom-input .input-item {\n  font-size: 16px;\n}\n\n.custom-input .custom-send {\n  cursor: pointer;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  -box-shadow: 0 2px 4px #00C2C8;\n}\n\n.custom-input .custom-attached {\n  cursor: pointer;\n  position: absolute;\n  left: 50px;\n  top: 20px;\n  -box-shadow: 0 2px 4px #00C2C8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYWwvRG9jdW1lbnRzL3BlcnNvbmFsL3Byb2plY3RzL1J1bWVyYnVzdGVyL2FwcC9ha2Qvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQUk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VSOztBREVBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFJO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBQ0VSOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLHlKQUFBO0FDQ0o7O0FEQUk7RUFDSSxlQUFBO0FDRVI7O0FEQUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDRVI7O0FEQUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMzBweDtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM4ZTkzOWI7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDBweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cblxuLm1lc3NhZ2Uge1xuICAgIG1hcmdpbjogMjVweCA0MHB4IDI1cHggMTAwcHg7XG4gICAgcGFkZGluZzogMTRweCAxOHB4O1xuICAgIGJhY2tncm91bmQ6ICNFRkYzRjc7XG4gICAgY29sb3I6ICM2YzY1N2I7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIC5jdXN0b20tYXZhdGFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAtNzJweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgfVxuICAgICYubm90QUtEIHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDQwcHggMjVweCA4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRURGMEYyO1xuICAgIH1cbn1cblxuLmN1c3RvbS1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDAgMTRweCAyNHB4O1xuICAgIGRpcmVjdGlvbjogcnRsO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCA4MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNC41cHggMy42cHggcmdiYSgwLCAwLCAwLCAwLjAwNyksIDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAxKSwgMCAzMC4xcHggMjQuMXB4IHJnYmEoMCwgMCwgMCwgMC4wMTMpLCAwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgICAuaW5wdXQtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmN1c3RvbS1zZW5kIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgLWJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDBDMkM4O1xuICAgIH1cbiAgICAuY3VzdG9tLWF0dGFjaGVkIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgLWJveC1zaGFkb3c6IDAgMnB4IDRweCAjMDBDMkM4O1xuICAgIH1cbn0iLCIudy1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1oZWFkZXIge1xuICBwYWRkaW5nOiAxNnB4IDMwcHg7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuLmN1c3RvbS1oZWFkZXIgcCB7XG4gIGNvbG9yOiAjOGU5MzliO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmN1c3RvbS1oZWFkZXIgaDMge1xuICBtYXJnaW46IDMwcHggMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZXNzYWdlIHtcbiAgbWFyZ2luOiAyNXB4IDQwcHggMjVweCAxMDBweDtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjRUZGM0Y3O1xuICBjb2xvcjogIzZjNjU3YjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuLm1lc3NhZ2UgLmN1c3RvbS1hdmF0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC03MnB4O1xuICBib3R0b206IDBweDtcbn1cbi5tZXNzYWdlLm5vdEFLRCB7XG4gIG1hcmdpbjogMjVweCA0MHB4IDI1cHggODBweDtcbiAgYmFja2dyb3VuZDogI0VERjBGMjtcbn1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwIDE0cHggMjRweDtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCA4MHB4O1xuICBib3gtc2hhZG93OiAwIDQuNXB4IDMuNnB4IHJnYmEoMCwgMCwgMCwgMC4wMDcpLCAwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMzAuMXB4IDI0LjFweCByZ2JhKDAsIDAsIDAsIDAuMDEzKSwgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG4uY3VzdG9tLWlucHV0IC5pbnB1dC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmN1c3RvbS1pbnB1dCAuY3VzdG9tLXNlbmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiAyMHB4O1xuICAtYm94LXNoYWRvdzogMCAycHggNHB4ICMwMEMyQzg7XG59XG4uY3VzdG9tLWlucHV0IC5jdXN0b20tYXR0YWNoZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTBweDtcbiAgdG9wOiAyMHB4O1xuICAtYm94LXNoYWRvdzogMCAycHggNHB4ICMwMEMyQzg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(httpClient) {
        _classCallCheck(this, Tab1Page);

        this.httpClient = httpClient;
        this.data = [];
        this.imgURI = null;
      }

      _createClass(Tab1Page, [{
        key: "submit",
        value: function submit() {
          var _this = this;

          if (this.message != "" && this.message != undefined) {
            this.data.push({
              "text": this.message,
              isAKD: false
            }); //"url": "url1",

            this.httpClient.post("https://mohammed.red/reportRumor", {
              "message": this.message,
              "language": "ar"
            }).subscribe(function (data) {
              console.log("POST Request is successful ", data);

              _this.data.push({
                "text": data.message,
                isAKD: true
              });
            }, function (error) {
              console.log("Error", error);
            });
            this.message = "";
          }
        }
      }, {
        key: "eventHandler",
        value: function eventHandler(keyCode) {
          if (keyCode == 13) {
            this.submit();
          }
        }
      }, {
        key: "openPWAPhotoPicker",
        value: function openPWAPhotoPicker() {
          if (this.pwaphoto == null) {
            return;
          }

          this.pwaphoto.nativeElement.click();
        }
      }, {
        key: "uploadPWA",
        value: function uploadPWA() {
          var _this2 = this;

          if (this.pwaphoto == null) {
            return;
          }

          var fileList = this.pwaphoto.nativeElement.files;

          if (fileList && fileList.length > 0) {
            this.firstFileToBase64(fileList[0]).then(function (result) {
              //this.imgURI = result;
              _this2.data.push({
                "src": result,
                isAKD: false
              });

              _this2.httpClient.post("https://mohammed.red/reportRumor", {
                "uri": result,
                "language": "ar"
              }).subscribe(function (data) {
                console.log("POST Request is successful ", data);

                _this2.data.push({
                  "text": data.message,
                  isAKD: true
                });
              }, function (error) {
                console.log("Error", error);
              });
            }, function (err) {
              // Ignore error, do nothing
              _this2.imgURI = null;
            });
          }
        }
      }, {
        key: "firstFileToBase64",
        value: function firstFileToBase64(fileImage) {
          return new Promise(function (resolve, reject) {
            var fileReader = new FileReader();

            if (fileReader && fileImage != null) {
              fileReader.readAsDataURL(fileImage);

              fileReader.onload = function () {
                resolve(fileReader.result);
              };

              fileReader.onerror = function (error) {
                reject(error);
              };
            } else {
              reject(new Error('No file found'));
            }
          });
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pwaphoto', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], Tab1Page.prototype, "pwaphoto", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map