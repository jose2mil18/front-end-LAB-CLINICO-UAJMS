(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-solicitudes-solicitudes-module"],{

/***/ "./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js ***!
  \*********************************************************************/
/*! exports provided: QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return QRCodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/dist/components/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var QRCodeModule = /** @class */ (function () {
    function QRCodeModule() {
    }
    QRCodeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
            ],
            exports: [
                _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
            ]
        })
    ], QRCodeModule);
    return QRCodeModule;
}());

//# sourceMappingURL=angularx-qrcode.module.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js ***!
  \***************************************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return QRCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var QRCode;
var QRCodeComponent = /** @class */ (function () {
    function QRCodeComponent(el, platformId) {
        var _this = this;
        this.el = el;
        this.platformId = platformId;
        /** @internal */
        this.allowEmptyString = false;
        this.colordark = '#000000';
        this.colorlight = '#ffffff';
        this.level = 'M';
        this.hidetitle = false;
        this.qrdata = '';
        this.size = 256;
        this.usesvg = false;
        this.isValidQrCodeText = function (data) {
            if (_this.allowEmptyString === false) {
                return !(typeof data === 'undefined' || data === '');
            }
            return !(typeof data === 'undefined');
        };
    }
    QRCodeComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!QRCode) {
            QRCode = __webpack_require__(/*! qrcodejs2 */ "./node_modules/qrcodejs2/qrcode.js");
        }
        try {
            if (!this.isValidQrCodeText(this.qrdata)) {
                throw new Error('Empty QR Code data');
            }
            this.qrcode = new QRCode(this.el.nativeElement, {
                colorDark: this.colordark,
                colorLight: this.colorlight,
                correctLevel: QRCode.CorrectLevel[this.level.toString()],
                height: this.size,
                text: this.qrdata || ' ',
                useSVG: this.usesvg,
                width: this.size,
            });
        }
        catch (e) {
            console.error('Error generating QR Code: ' + e.message);
        }
    };
    QRCodeComponent.prototype.ngOnChanges = function (changes) {
        if (!this.qrcode) {
            return;
        }
        var qrData = changes['qrdata'];
        if (qrData && this.isValidQrCodeText(qrData.currentValue)) {
            this.qrcode.clear();
            this.qrcode.makeCode(qrData.currentValue);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "allowEmptyString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "colordark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "colorlight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "level", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "hidetitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], QRCodeComponent.prototype, "qrdata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QRCodeComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], QRCodeComponent.prototype, "usesvg", void 0);
    QRCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'qrcode',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: ''
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], QRCodeComponent);
    return QRCodeComponent;
}());

//# sourceMappingURL=angularx-qrcode.component.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js ***!
  \*******************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode.component */ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/index.js ***!
  \***************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode */ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/index.js ***!
  \****************************************************/
/*! exports provided: QRCodeComponent, QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });

/* harmony import */ var _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angularx-qrcode.module */ "./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__["QRCodeModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-print/fesm5/ngx-print.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-print/fesm5/ngx-print.js ***!
  \***************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 0;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        return "<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>";
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n        <body>\n          " + printContents + "\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(() => {\n                window.print();\n                setTimeout(function() { window.close(); }, 0);\n              }, " + this.printDelay + ");\n            }\n            window.addEventListener('load', triggerPrint, false);\n          </script>\n        </body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "button[ngxPrint]"
                },] }
    ];
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
    };
    return NgxPrintDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintModule = /** @class */ (function () {
    function NgxPrintModule() {
    }
    NgxPrintModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [NgxPrintDirective],
                    imports: [],
                    exports: [NgxPrintDirective]
                },] }
    ];
    return NgxPrintModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ }),

/***/ "./node_modules/primeng/calendar.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/calendar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js"));

/***/ }),

/***/ "./node_modules/primeng/codehighlighter.js":
/*!*************************************************!*\
  !*** ./node_modules/primeng/codehighlighter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/codehighlighter/codehighlighter */ "./node_modules/primeng/components/codehighlighter/codehighlighter.js"));

/***/ }),

/***/ "./node_modules/primeng/tabview.js":
/*!*****************************************!*\
  !*** ./node_modules/primeng/tabview.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/tabview/tabview */ "./node_modules/primeng/components/tabview/tabview.js"));

/***/ }),

/***/ "./node_modules/qrcodejs2/qrcode.js":
/*!******************************************!*\
  !*** ./node_modules/qrcodejs2/qrcode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */
var QRCode;

(function (root, factory) {

	/* CommonJS */
  if (true) module.exports = factory()

  /* AMD module */
  else {}

}(this, function () {	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
		this.parsedData = [];

		// Added to support UTF-8 Characters
		for (var i = 0, l = this.data.length; i < l; i++) {
			var byteArray = [];
			var code = this.data.charCodeAt(i);

			if (code > 0x10000) {
				byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
				byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
				byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[3] = 0x80 | (code & 0x3F);
			} else if (code > 0x800) {
				byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
				byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[2] = 0x80 | (code & 0x3F);
			} else if (code > 0x80) {
				byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
				byteArray[1] = 0x80 | (code & 0x3F);
			} else {
				byteArray[0] = code;
			}

			this.parsedData.push(byteArray);
		}

		this.parsedData = Array.prototype.concat.apply([], this.parsedData);

		if (this.parsedData.length != this.data.length) {
			this.parsedData.unshift(191);
			this.parsedData.unshift(187);
			this.parsedData.unshift(239);
		}
	}

	QR8bitByte.prototype = {
		getLength: function (buffer) {
			return this.parsedData.length;
		},
		write: function (buffer) {
			for (var i = 0, l = this.parsedData.length; i < l; i++) {
				buffer.put(this.parsedData[i], 8);
			}
		}
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}

	QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
	return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
	this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
	if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
	this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
	return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
	return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
	this.modules[r][6]=(r%2==0);}
	for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
	this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
	for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
	for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else{this.modules[this.moduleCount-15+i][8]=mod;}}
	for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else{this.modules[8][15-i-1]=mod;}}
	this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
	var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
	this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
	row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
	var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
	if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
	+buffer.getLengthInBits()
	+">"
	+totalDataCount*8
	+")");}
	if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
	while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
	while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD1,8);}
	return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
	offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
	var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
	var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
	for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
	return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
	return((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
	return(data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
	return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return(i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return(i+j)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return(i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
	return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else{throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
	for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
	if(r==0&&c==0){continue;}
	if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
	if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
	for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
	for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
	for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
	var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
	var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
	return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
	while(n>=256){n-=255;}
	return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
	for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
	for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
	function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
	var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
	this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
	QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
	return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
	var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
	for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
	return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
	var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
	return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
	QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
	if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
	this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];

	function _isSupportCanvas() {
		return typeof CanvasRenderingContext2D != "undefined";
	}

	// android 2.x doesn't support Data-URI spec
	function _getAndroid() {
		var android = false;
		var sAgent = navigator.userAgent;

		if (/android/i.test(sAgent)) { // android
			android = true;
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);

			if (aMat && aMat[1]) {
				android = parseFloat(aMat[1]);
			}
		}

		return android;
	}

	var svgDrawer = (function() {

		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		Drawing.prototype.draw = function (oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);

			this.clear();

			function makeSVG(tag, attrs) {
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
				for (var k in attrs)
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
				return el;
			}

			var svg = makeSVG("svg" , {'viewBox': '0 0 ' + String(nCount) + " " + String(nCount), 'width': '100%', 'height': '100%', 'fill': _htOption.colorLight});
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
			_el.appendChild(svg);

			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorLight, "width": "100%", "height": "100%"}));
			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorDark, "width": "1", "height": "1", "id": "template"}));

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					if (oQRCode.isDark(row, col)) {
						var child = makeSVG("use", {"x": String(col), "y": String(row)});
						child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template")
						svg.appendChild(child);
					}
				}
			}
		};
		Drawing.prototype.clear = function () {
			while (this._el.hasChildNodes())
				this._el.removeChild(this._el.lastChild);
		};
		return Drawing;
	})();

	var useSVG = document.documentElement.tagName.toLowerCase() === "svg";

	// Drawing in DOM by using Table tag
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function () {
		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

			for (var row = 0; row < nCount; row++) {
				aHTML.push('<tr>');

				for (var col = 0; col < nCount; col++) {
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
				}

				aHTML.push('</tr>');
			}

			aHTML.push('</table>');
			_el.innerHTML = aHTML.join('');

			// Fix the margin values as real size.
			var elTable = _el.childNodes[0];
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
			}
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._el.innerHTML = '';
		};

		return Drawing;
	})() : (function () { // Drawing in Canvas
		function _onMakeImage() {
			this._elImage.src = this._elCanvas.toDataURL("image/png");
			this._elImage.style.display = "block";
			this._elCanvas.style.display = "none";
		}

		// Android 2.1 bug workaround
		// http://code.google.com/p/android/issues/detail?id=5141
		if (this._android && this._android <= 2.1) {
	    	var factor = 1 / window.devicePixelRatio;
	        var drawImage = CanvasRenderingContext2D.prototype.drawImage;
	    	CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	    		if (("nodeName" in image) && /img/i.test(image.nodeName)) {
		        	for (var i = arguments.length - 1; i >= 1; i--) {
		            	arguments[i] = arguments[i] * factor;
		        	}
	    		} else if (typeof dw == "undefined") {
	    			arguments[1] *= factor;
	    			arguments[2] *= factor;
	    			arguments[3] *= factor;
	    			arguments[4] *= factor;
	    		}

	        	drawImage.apply(this, arguments);
	    	};
		}

		/**
		 * Check whether the user's browser supports Data URI or not
		 *
		 * @private
		 * @param {Function} fSuccess Occurs if it supports Data URI
		 * @param {Function} fFail Occurs if it doesn't support Data URI
		 */
		function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;

            // Check it just once
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;

                    if (self._fFail) {
                        self._fFail.call(self);
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;

                    if (self._fSuccess) {
                        self._fSuccess.call(self);
                    }
                };

                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self);
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self);
            }
		};

		/**
		 * Drawing QRCode by using canvas
		 *
		 * @constructor
		 * @param {HTMLElement} el
		 * @param {Object} htOption QRCode Options
		 */
		var Drawing = function (el, htOption) {
    		this._bIsPainted = false;
    		this._android = _getAndroid();

			this._htOption = htOption;
			this._elCanvas = document.createElement("canvas");
			this._elCanvas.width = htOption.width;
			this._elCanvas.height = htOption.height;
			el.appendChild(this._elCanvas);
			this._el = el;
			this._oContext = this._elCanvas.getContext("2d");
			this._bIsPainted = false;
			this._elImage = document.createElement("img");
			this._elImage.alt = "Scan me!";
			this._elImage.style.display = "none";
			this._el.appendChild(this._elImage);
			this._bSupportDataURI = null;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;

			var nCount = oQRCode.getModuleCount();
			var nWidth = _htOption.width / nCount;
			var nHeight = _htOption.height / nCount;
			var nRoundedWidth = Math.round(nWidth);
			var nRoundedHeight = Math.round(nHeight);

			_elImage.style.display = "none";
			this.clear();

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var bIsDark = oQRCode.isDark(row, col);
					var nLeft = col * nWidth;
					var nTop = row * nHeight;
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.lineWidth = 1;
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.fillRect(nLeft, nTop, nWidth, nHeight);

					// 안티 앨리어싱 방지 처리
					_oContext.strokeRect(
						Math.floor(nLeft) + 0.5,
						Math.floor(nTop) + 0.5,
						nRoundedWidth,
						nRoundedHeight
					);

					_oContext.strokeRect(
						Math.ceil(nLeft) - 0.5,
						Math.ceil(nTop) - 0.5,
						nRoundedWidth,
						nRoundedHeight
					);
				}
			}

			this._bIsPainted = true;
		};

		/**
		 * Make the image from Canvas if the browser supports Data URI.
		 */
		Drawing.prototype.makeImage = function () {
			if (this._bIsPainted) {
				_safeSetDataURI.call(this, _onMakeImage);
			}
		};

		/**
		 * Return whether the QRCode is painted or not
		 *
		 * @return {Boolean}
		 */
		Drawing.prototype.isPainted = function () {
			return this._bIsPainted;
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			this._bIsPainted = false;
		};

		/**
		 * @private
		 * @param {Number} nNumber
		 */
		Drawing.prototype.round = function (nNumber) {
			if (!nNumber) {
				return nNumber;
			}

			return Math.floor(nNumber * 1000) / 1000;
		};

		return Drawing;
	})();

	/**
	 * Get the type by string length
	 *
	 * @private
	 * @param {String} sText
	 * @param {Number} nCorrectLevel
	 * @return {Number} type
	 */
	function _getTypeNumber(sText, nCorrectLevel) {
		var nType = 1;
		var length = _getUTF8Length(sText);

		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
			var nLimit = 0;

			switch (nCorrectLevel) {
				case QRErrorCorrectLevel.L :
					nLimit = QRCodeLimitLength[i][0];
					break;
				case QRErrorCorrectLevel.M :
					nLimit = QRCodeLimitLength[i][1];
					break;
				case QRErrorCorrectLevel.Q :
					nLimit = QRCodeLimitLength[i][2];
					break;
				case QRErrorCorrectLevel.H :
					nLimit = QRCodeLimitLength[i][3];
					break;
			}

			if (length <= nLimit) {
				break;
			} else {
				nType++;
			}
		}

		if (nType > QRCodeLimitLength.length) {
			throw new Error("Too long data");
		}

		return nType;
	}

	function _getUTF8Length(sText) {
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return replacedText.length + (replacedText.length != sText ? 3 : 0);
	}

	/**
	 * @class QRCode
	 * @constructor
	 * @example
	 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	 *
	 * @example
	 * var oQRCode = new QRCode("test", {
	 *    text : "http://naver.com",
	 *    width : 128,
	 *    height : 128
	 * });
	 *
	 * oQRCode.clear(); // Clear the QRCode.
	 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	 *
	 * @param {HTMLElement|String} el target element or 'id' attribute of element.
	 * @param {Object|String} vOption
	 * @param {String} vOption.text QRCode link data
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
	 */
	QRCode = function (el, vOption) {
		this._htOption = {
			width : 256,
			height : 256,
			typeNumber : 4,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRErrorCorrectLevel.H
		};

		if (typeof vOption === 'string') {
			vOption	= {
				text : vOption
			};
		}

		// Overwrites options
		if (vOption) {
			for (var i in vOption) {
				this._htOption[i] = vOption[i];
			}
		}

		if (typeof el == "string") {
			el = document.getElementById(el);
		}

		if (this._htOption.useSVG) {
			Drawing = svgDrawer;
		}

		this._android = _getAndroid();
		this._el = el;
		this._oQRCode = null;
		this._oDrawing = new Drawing(this._el, this._htOption);

		if (this._htOption.text) {
			this.makeCode(this._htOption.text);
		}
	};

	/**
	 * Make the QRCode
	 *
	 * @param {String} sText link data
	 */
	QRCode.prototype.makeCode = function (sText) {
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
		this._oQRCode.addData(sText);
		this._oQRCode.make();
		this._el.title = sText;
		this._oDrawing.draw(this._oQRCode);
		this.makeImage();
	};

	/**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 *
	 * @private
	 */
	QRCode.prototype.makeImage = function () {
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
			this._oDrawing.makeImage();
		}
	};

	/**
	 * Clear the QRCode
	 */
	QRCode.prototype.clear = function () {
		this._oDrawing.clear();
	};

	/**
	 * @name QRCode.CorrectLevel
	 */
	QRCode.CorrectLevel = QRErrorCorrectLevel;
	
	return QRCode;
	
}));


/***/ }),

/***/ "./src/app/solicitudes/factura/factura.component.css":
/*!***********************************************************!*\
  !*** ./src/app/solicitudes/factura/factura.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".css-title {\r\n    font-weight: bolder;\r\n    font-size: 2.5em;\r\n}\r\n\r\n.css-business_data div {\r\n    padding: 10px;\r\n}\r\n\r\n.css-user_data_panel,\r\n.css-business_data_panel {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n.css-invoice_data {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border: 1px solid #dbdbdb;\r\n}\r\n\r\n.css-invoice_data td {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.css-logo {\r\n    max-width: 150px;\r\n    max-height: 150px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.table>tbody>tr>td,\r\n.table>tbody>tr>th,\r\n.table>tfoot>tr>td,\r\n.table>tfoot>tr>th,\r\n.table>thead>tr>td,\r\n.table>thead>tr>th {\r\n    padding: 0;\r\n}\r\n\r\n@media print {\r\n    .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\r\n         float: left;\r\n    }\r\n    .col-sm-12 {\r\n         width: 100%;\r\n    }\r\n    .col-sm-11 {\r\n         width: 91.66666667%;\r\n    }\r\n    .col-sm-10 {\r\n         width: 83.33333333%;\r\n    }\r\n    .col-sm-9 {\r\n         width: 75%;\r\n    }\r\n    .col-sm-8 {\r\n         width: 66.66666667%;\r\n    }\r\n    .col-sm-7 {\r\n         width: 58.33333333%;\r\n    }\r\n    .col-sm-6 {\r\n         width: 50%;\r\n    }\r\n    .col-sm-5 {\r\n         width: 41.66666667%;\r\n    }\r\n    .col-sm-4 {\r\n         width: 33.33333333%;\r\n    }\r\n    .col-sm-3 {\r\n         width: 25%;\r\n    }\r\n    .col-sm-2 {\r\n         width: 16.66666667%;\r\n    }\r\n    .col-sm-1 {\r\n         width: 8.33333333%;\r\n    }\r\n }"

/***/ }),

/***/ "./src/app/solicitudes/factura/factura.component.html":
/*!************************************************************!*\
  !*** ./src/app/solicitudes/factura/factura.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body\" class=\"body\">\n \n    <section class=\"container\" >\n        <div id=\"imprimir\">\n\n\n\n\n\n        <br>\n            <div class='row'>\n                <div class='col-sm-6 text-left'>\n                    <div class=\"row\" style=\"padding: 10px;\">\n                        <div style=\"width: 140px; height: 140px;\">\n                            <img src='../../assets/images/logo original.png' class=\"css-logo\" />\n                        </div>\n                        <div >\n                            <p> <span class=\"font-weight-bold\">LABORATORIO DE ANÁLISIS </span><br>\n                              \n                            <span class=\"font-weight-bold\">CLÍNICO UAJMS</span><br>\n                                <span class=\"\">AVENIDA VICTOR PAZ</span><br>\n                                <span class=\"\">Edif. CAMPUS UNIVERSITARIO</span><br>\n                                <span class=\"\">Telf. 66-43120</span><br>\n                                <span class=\"\">Tarija-Bolivia</span> \n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class='col-sm-6 text-right'>\n                    <div class=\"css-business_data\">\n                        <div class=\"text-left\">\n                            <table class=\"css-invoice_data\">\n                                <tr>\n                                    <td><b>NIT:</b></td>\n                                    <td>{{form.factura.dosificacion.nit}}</td>\n                                </tr>\n                                <tr>\n                                    <td><b>FACTURA No.:</b></td>\n                                    <td>{{form.factura.cod_factura}}</td>\n                                </tr>\n                                <tr>\n                                    <td><b>AUTORIZACIÓN No.:</b></td>\n                                    <td>{{form.factura.dosificacion.autorizacion}}</td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                  \n                   \n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <p class=\"css-title text-center\">FACTURA</p>\n                </div>\n            </div>\n            <div class='row css-user_data_panel'>\n                <div class='col-sm-6 text-left'>\n                    <p>Lugar y Fecha:<b> Tarija, {{fechita}}</b></p>\n                    <p>Señor(a):<b> {{form.paciente.persona.nombre}} {{form.paciente.persona.ap}} {{form.paciente.persona.am}}</b></p>\n                </div>\n                <div class='col-sm-6 text-right'>\n                    <p>NIT/CI:<b> {{form.cedula_paciente}}</b></p>\n                </div>\n            </div>\n            <div class=''></div>\n            <table class='table table-bordered table-striped' id=\"Tabla\">\n                <thead>\n                    <tr class='bg-dark' >\n                        <th class='text-center'>Cantidad</th>\n                        <th class='text-center'>Detalle</th>\n                        <th class='text-center'>P. Unit</th>\n                        <th class='text-center'>SubTotal</th>\n                    </tr>\n                </thead>\n                <tbody>\n                        <tr *ngFor=\" let e of form.examenes_solicitados\"> \n                            <th class='text-center'>1</th>\n                            <td class='text-center'>{{e.precio_examen.examen.nombre}}</td>\n                            <td class='text-center precio_ref'>{{e.precio_examen.costo}}</td>\n                            <td class='text-center subtotal_ref'>{{e.precio_examen.costo}}</td>\n                        </tr>\n             \n                </tbody>\n                <tfoot>\n                   \n                    <tr>\n                        <th colspan=\"3\" class=\"text-right\">Total (Bs.)</th>\n                        <th class='text-center'>{{form.costoTotal}}</th>\n                    </tr>\n                </tfoot>\n            </table>\n            <div class='row css-user_data_panel'>\n                <div class='col-sm-6 text-left'>\n                    <p>Son: <b class=\"salida\">{{costo_total_en_letras}}</b></p>\n                    <p>Código de control: <b>{{form.factura.cod_control}}</b></p>\n                </div>\n                <div class='col-sm-6 text-right pull-right'>\n                    Fecha límite de emisión:\n                    <b>{{form.factura.dosificacion.fecha_limite_emision | date: 'dd-MM-yyyy'}}</b>\n                </div>\n            </div>\n            <div class='row'>\n                <div class=\"col-sm-10 text-left\">\n                    <p><b>{{form.factura.dosificacion.leyenda}}</b></p>\n                  \n                </div>\n                \n                <div class=\"col-sm-2 text-center\" id=\"qrcode\"> <qrcode [qrdata]=\"codigoQr\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n                 </div>\n            </div>\n        </div>\n        \n        \n            <div class=\"row\" id=\"buttons_panel\">\n                <div class=\"col text-center\">\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"salir()\">Salir</button>\n                    \n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onPrint()\">Impresión</button>\n                </div>\n            </div>\n        \n    </section>\n\n\n\n\n\n  \n</div>"

/***/ }),

/***/ "./src/app/solicitudes/factura/factura.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/solicitudes/factura/factura.component.ts ***!
  \**********************************************************/
/*! exports provided: FacturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaComponent", function() { return FacturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _utilidades_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilidades/utils */ "./src/app/utilidades/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitudes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FacturaComponent = /** @class */ (function () {
    function FacturaComponent(datePipe, solicitudesService, router) {
        var _this = this;
        this.datePipe = datePipe;
        this.solicitudesService = solicitudesService;
        this.router = router;
        this.form = new _models__WEBPACK_IMPORTED_MODULE_1__["Solicitud"]();
        this.u = new _utilidades_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]();
        this.solicitud = new _models__WEBPACK_IMPORTED_MODULE_1__["Solicitud"]();
        this.codigoQr = "";
        this.costo_total_en_letras = '';
        this.datetime = new Date();
        this.fechita = this.datePipe.transform(new Date(), "dd-MM-yyyy HH:mm");
        this.solicitud = JSON.parse(localStorage.getItem('solicitudfacturar'));
        console.log(this.solicitud);
        var letras;
        if (this.solicitud.factura.cod_factura == 0) {
            this.solicitudesService.generarFactura(this.solicitud).subscribe(function (data) {
                console.log(data);
                _this.form = data;
                _this.codigoQr = _this.form.factura.dosificacion.nit + _this.form.factura.cod_factura + _this.form.factura.dosificacion.autorizacion + _this.form.factura.dosificacion.fecha_limite_emision + _this.form.costoTotal + _this.form.factura.cod_control + _this.form.paciente.cedula;
                var letras = _this.u.numeroALetras(_this.solicitud.costoTotal, {
                    plural: "BOLIVIANOS",
                    singular: "BOLIVIANO",
                    centPlural: "CENTAVOS",
                    centSingular: "CENTAVO"
                });
                _this.costo_total_en_letras = letras;
            });
        }
        else {
            this.form = JSON.parse(localStorage.getItem('solicitudfacturar'));
            this.codigoQr = this.form.factura.dosificacion.nit + this.form.factura.cod_factura + this.form.factura.dosificacion.autorizacion + this.form.factura.dosificacion.fecha_limite_emision + this.form.costoTotal + this.form.factura.cod_control + this.form.paciente.cedula;
            letras = this.u.numeroALetras(this.solicitud.costoTotal, {
                plural: "BOLIVIANOS",
                singular: "BOLIVIANO",
                centPlural: "CENTAVOS",
                centSingular: "CENTAVO"
            });
            this.costo_total_en_letras = letras;
        }
    }
    FacturaComponent.prototype.klp = function () {
        window.print();
        /*
        $('#buttons_panel').hide();
        var data = document.getElementById('body');
           html2canvas(data).then(canvas => {
              // Few necessary setting options
              var imgWidth = 216;
              var pageHeight = 160;
              var pagewidth=237;
              var margins = {
                bottom:2,
                top:4,
                left:2,
                right:2
           };
              var imgHeight = canvas.height * imgWidth / canvas.width;
              var heightLeft = imgHeight;
          
              const contentDataURL = canvas.toDataURL('image/png')
      
              let pdf = new jsPDF('p', 'mm',"letter"),
              margin = 10;
              var width = pdf.internal.pageSize.getWidth();
            console.log(pdf.internal.pageSize.getHeight())
            fdfd
              console.log("asfestewidth"+width+" " )
              console.log(pdf.internal.pageSize.getHeight())
        pdf.text(45, 45, 'letter');
              var position = 0
              pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, margins, 'center')
            //  window.open(pdf.output('datauristring'))
           // pdf.autoPrint({variant: 'non-conform'});
              pdf.save('MYPdf.pdf'); // Generated PDF
           
              $("#buttons_panel").show();
            });
            */
    };
    FacturaComponent.prototype.ngOnInit = function () {
    };
    FacturaComponent.prototype.imprim1 = function (imp1) {
        var printContents = document.getElementById('body').innerHTML;
        var w = window.open();
        w.print();
        w.close();
        return true;
    };
    FacturaComponent.prototype.onPrint = function () {
        $(document).ready(function () {
            $('#buttons_panel').hide();
            window.print();
            $("#buttons_panel").show();
        });
    };
    FacturaComponent.prototype.salir = function () {
        window.location.href = 'http://localhost:4200/solicitudes/listar';
    };
    FacturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factura',
            template: __webpack_require__(/*! ./factura.component.html */ "./src/app/solicitudes/factura/factura.component.html"),
            styles: [__webpack_require__(/*! ./factura.component.css */ "./src/app/solicitudes/factura/factura.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _solicitudes_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FacturaComponent);
    return FacturaComponent;
}());



/***/ }),

/***/ "./src/app/solicitudes/listar/listar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/solicitudes/listar/listar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:0.85em;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap;justify-content:flex-end}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:before,table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:0.9em;display:block;opacity:0.3}table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:before{right:1em;content:\"\\2191\"}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{right:0.5em;content:\"\\2193\"}table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:after{opacity:1}table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{opacity:0}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot>.dataTables_scrollFootInner{box-sizing:content-box}div.dataTables_scrollFoot>.dataTables_scrollFootInner>table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.table-sm>thead>tr>th{padding-right:20px}table.dataTable.table-sm .sorting:before,table.dataTable.table-sm .sorting_asc:before,table.dataTable.table-sm .sorting_desc:before{top:5px;right:0.85em}table.dataTable.table-sm .sorting:after,table.dataTable.table-sm .sorting_asc:after,table.dataTable.table-sm .sorting_desc:after{top:5px}table.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}table.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}div.dataTables_scrollHead table.table-bordered{border-bottom-width:0}div.table-responsive>div.dataTables_wrapper>div.row{margin:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:first-child{padding-left:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:last-child{padding-right:0}.dtp { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); z-index: 2000; font-size: 15px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }.dtp > .dtp-content { background: #fff; max-width: 300px; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); max-height: 520px; position: relative; left: 50%; }.dtp > .dtp-content > .dtp-date-view > header.dtp-header { background: #689F38; color: #fff; text-align: center; padding: 0.3em; }.dtp div.dtp-date, .dtp div.dtp-time { background: #8BC34A; text-align: center; color: #fff; padding: 10px; }.dtp div.dtp-date > div { padding: 0; margin: 0; }.dtp div.dtp-actual-month { font-size: 1.5em; }.dtp div.dtp-actual-num { font-size: 3em; line-height: 0.9; }.dtp div.dtp-actual-maxtime { font-size: 3em; line-height: 0.9; }.dtp div.dtp-actual-year { font-size: 1.5em; color: #DCEDC8; }.dtp div.dtp-picker { padding: 1em; text-align: center; }.dtp div.dtp-picker-month, .dtp div.dtp-actual-time { font-weight: 500; text-align: center; }.dtp div.dtp-picker-month { padding-bottom:20px!important; text-transform: uppercase!important; }.dtp .dtp-close { position: absolute; top: 0.5em; right: 1em; }.dtp .dtp-close > a { color: #fff; }.dtp .dtp-close > a > i { font-size: 1em; }.dtp table.dtp-picker-days { margin: 0; min-height: 251px;}.dtp table.dtp-picker-days, .dtp table.dtp-picker-days tr, .dtp table.dtp-picker-days tr > td { border: none; }.dtp table.dtp-picker-days tr > td {  font-weight: 700; font-size: 0.8em; text-align: center; padding: 0.5em 0.3em; }.dtp table.dtp-picker-days tr > td > span.dtp-select-day { color: #BDBDBD!important; }.dtp table.dtp-picker-days tr > td > a, .dtp .dtp-picker-time > a { color: #212121; text-decoration: none; padding: 0.4em 0.5em 0.5em 0.6em; border-radius: 50%!important; }.dtp table.dtp-picker-days tr > td > a.selected{ background: #8BC34A; color: #fff; }.dtp table.dtp-picker-days tr > th { color: #757575; text-align: center; font-weight: 700; padding: 0.4em 0.3em; }.dtp .p10 > a { color: #689F38; text-decoration: none; }.dtp .p10 { width: 10%; display: inline-block; }.dtp .p20 { width: 20%; display: inline-block; }.dtp .p60 { width: 60%; display: inline-block; }.dtp .p80 { width: 80%; display: inline-block; }.dtp a.dtp-meridien-am, .dtp a.dtp-meridien-pm { position: relative; top: 10px; color: #212121; font-weight: 500; padding: 0.7em 0.5em; border-radius: 50%!important;text-decoration: none; background: #eee; font-size:1em; }.dtp .dtp-actual-meridien a.selected { background: #689F38; color: #fff; }.dtp .dtp-picker-time > .dtp-select-hour { cursor: pointer; }.dtp .dtp-picker-time > .dtp-select-minute { cursor: pointer; }.dtp .dtp-buttons { padding: 0 1em 1em 1em; text-align: right; }.dtp.hidden, .dtp .hidden { display: none; }.dtp .invisible { visibility: hidden; }.dtp .left { float: left; }.dtp .right { float: right; }.dtp .clearfix { clear: both; }.dtp .center { text-align: center; }/*!\n * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)\n *\n * Copyright 2013-2017 bootstrap-select\n * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)\n */.color-rojo{\n  background-color: red;\n}select.bs-select-hidden,\nselect.selectpicker {\n  display: none !important;\n}.bootstrap-select {\n  width: 220px \\0;\n  /*IE9 and below*/\n}.bootstrap-select > .dropdown-toggle {\n  width: 100%;\n  padding-right: 25px;\n  z-index: 1;\n}.bootstrap-select > .dropdown-toggle.bs-placeholder,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:active {\n  color: #999;\n}.bootstrap-select > select {\n  position: absolute !important;\n  bottom: 0;\n  left: 50%;\n  display: block !important;\n  width: 0.5px !important;\n  height: 100% !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  border: none;\n}.bootstrap-select > select.mobile-device {\n  top: 0;\n  left: 0;\n  display: block !important;\n  width: 100% !important;\n  z-index: 2;\n}.has-error .bootstrap-select .dropdown-toggle,\n.error .bootstrap-select .dropdown-toggle {\n  border-color: #b94a48;\n}.bootstrap-select.fit-width {\n  width: auto !important;\n}.bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) {\n  width: 220px;\n}.bootstrap-select .dropdown-toggle:focus {\n  outline: thin dotted #333333 !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n  outline-offset: -2px;\n}.bootstrap-select.form-control {\n  margin-bottom: 0;\n  padding: 0;\n  border: none;\n}.bootstrap-select.form-control:not([class*=\"col-\"]) {\n  width: 100%;\n}.bootstrap-select.form-control.input-group-btn {\n  z-index: auto;\n}.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}.bootstrap-select.btn-group:not(.input-group-btn),\n.bootstrap-select.btn-group[class*=\"col-\"] {\n  float: none;\n  display: inline-block;\n  margin-left: 0;\n}.bootstrap-select.btn-group.dropdown-menu-right,\n.bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right,\n.row .bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right {\n  float: right;\n}.form-inline .bootstrap-select.btn-group,\n.form-horizontal .bootstrap-select.btn-group,\n.form-group .bootstrap-select.btn-group {\n  margin-bottom: 0;\n}.form-group-lg .bootstrap-select.btn-group.form-control,\n.form-group-sm .bootstrap-select.btn-group.form-control {\n  padding: 0;\n}.form-group-lg .bootstrap-select.btn-group.form-control .dropdown-toggle,\n.form-group-sm .bootstrap-select.btn-group.form-control .dropdown-toggle {\n  height: 100%;\n  font-size: inherit;\n  line-height: inherit;\n  border-radius: inherit;\n}.form-inline .bootstrap-select.btn-group .form-control {\n  width: 100%;\n}.bootstrap-select.btn-group.disabled,\n.bootstrap-select.btn-group > .disabled {\n  cursor: not-allowed;\n}.bootstrap-select.btn-group.disabled:focus,\n.bootstrap-select.btn-group > .disabled:focus {\n  outline: none !important;\n}.bootstrap-select.btn-group.bs-container {\n  position: absolute;\n  height: 0 !important;\n  padding: 0 !important;\n}.bootstrap-select.btn-group.bs-container .dropdown-menu {\n  z-index: 1060;\n}.bootstrap-select.btn-group .dropdown-toggle .filter-option {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  text-align: left;\n}.bootstrap-select.btn-group .dropdown-toggle .caret {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  margin-top: -2px;\n  vertical-align: middle;\n}.bootstrap-select.btn-group[class*=\"col-\"] .dropdown-toggle {\n  width: 100%;\n}.bootstrap-select.btn-group .dropdown-menu {\n  min-width: 100%;\n  box-sizing: border-box;\n}.bootstrap-select.btn-group .dropdown-menu.inner {\n  position: static;\n  float: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}.bootstrap-select.btn-group .dropdown-menu li {\n  position: relative;\n}.bootstrap-select.btn-group .dropdown-menu li.active small {\n  color: #fff;\n}.bootstrap-select.btn-group .dropdown-menu li.disabled a {\n  cursor: not-allowed;\n}.bootstrap-select.btn-group .dropdown-menu li a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}.bootstrap-select.btn-group .dropdown-menu li a.opt {\n  position: relative;\n  padding-left: 2.25em;\n}.bootstrap-select.btn-group .dropdown-menu li a span.check-mark {\n  display: none;\n}.bootstrap-select.btn-group .dropdown-menu li a span.text {\n  display: inline-block;\n}.bootstrap-select.btn-group .dropdown-menu li small {\n  padding-left: 0.5em;\n}.bootstrap-select.btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n  opacity: 0.9;\n  box-sizing: border-box;\n}.bootstrap-select.btn-group .no-results {\n  padding: 3px;\n  background: #f5f5f5;\n  margin: 0 5px;\n  white-space: nowrap;\n}.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option {\n  position: static;\n}.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret {\n  position: static;\n  top: auto;\n  margin-top: -1px;\n}.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text {\n  margin-right: 34px;\n}.bootstrap-select.show-menu-arrow.open > .dropdown-toggle {\n  z-index: 1061;\n}.bootstrap-select.show-menu-arrow .dropdown-toggle:before {\n  content: '';\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(204, 204, 204, 0.2);\n  position: absolute;\n  bottom: -4px;\n  left: 9px;\n  display: none;\n}.bootstrap-select.show-menu-arrow .dropdown-toggle:after {\n  content: '';\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  position: absolute;\n  bottom: -4px;\n  left: 10px;\n  display: none;\n}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before {\n  bottom: auto;\n  top: -3px;\n  border-top: 7px solid rgba(204, 204, 204, 0.2);\n  border-bottom: 0;\n}.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after {\n  bottom: auto;\n  top: -3px;\n  border-top: 6px solid white;\n  border-bottom: 0;\n}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before {\n  right: 12px;\n  left: auto;\n}.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after {\n  right: 13px;\n  left: auto;\n}.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:before,\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:after {\n  display: block;\n}.bs-searchbox,\n.bs-actionsbox,\n.bs-donebutton {\n  padding: 4px 8px;\n}.bs-actionsbox {\n  width: 100%;\n  box-sizing: border-box;\n}.bs-actionsbox .btn-group button {\n  width: 50%;\n}.bs-donebutton {\n  float: left;\n  width: 100%;\n  box-sizing: border-box;\n}.bs-donebutton .btn-group button {\n  width: 100%;\n}.bs-searchbox + .bs-actionsbox {\n  padding: 0 8px 4px;\n}.bs-searchbox .form-control {\n  margin-bottom: 0;\n  width: 100%;\n  float: none;\n}/*input::-webkit-calendar-picker-indicator {\r\n    display: none;\r\n  }\r\n  */.link{\r\n \r\n  \r\n    cursor: pointer\r\n  }input{\r\n    width:100%\r\n}.btn-pequeño{height:1.675rem;min-width:1.675rem;width:1.675rem;padding:0;\r\n    font-size:.9375rem;overflow:hidden;position:relative;line-height:normal}.btn-light {\r\n        color: #212529;\r\n        background-color: #f8f9fa;\r\n        border-color: #f8f9fa;\r\n      }.modal-login {\t\t\r\n        color: #636363;\r\n        width: 520px;\r\n    }.modal-login .modal-content {\r\n        padding: 20px;\r\n        border-radius: 5px;\r\n        border: none;\r\n    }.modal-login .modal-header {\r\n        border-bottom: none;   \r\n        position: relative;\r\n        justify-content: center;\r\n    }.modal-login h4 {\r\n        text-align: center;\r\n        font-size: 26px;\r\n        margin: 30px 0 -15px;\r\n    }.modal-login .form-control:focus {\r\n        border-color: #70c5c0;\r\n    }.modal-login .form-control, .modal-login .btn {\r\n        min-height: 40px;\r\n        border-radius: 3px; \r\n    }.modal-login .close {\r\n        position: absolute;\r\n        top: -5px;\r\n        right: -5px;\r\n    }.modal-login .modal-footer {\r\n     \r\n        text-align: center;\r\n        justify-content: center;\r\n        margin: 0 -20px -20px;\r\n        border-radius: 5px;\r\n        font-size: 13px;\r\n    }.modal-login .modal-footer a {\r\n        color: #999;\r\n    }.modal-login .avatar {\r\n        position: absolute;\r\n        margin: 0 auto;\r\n        left: 0;\r\n        right: 0;\r\n        top: -70px;\r\n        width: 95px;\r\n        height: 95px;\r\n        border-radius: 50%;\r\n        z-index: 9;\r\n      \r\n    \r\n        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\r\n    }.modal-login.modal-dialog {\r\n        margin-top: 80px;\r\n    }.modal-login .btn {\r\n        color: #fff;\r\n        border-radius: 4px;\r\n        text-decoration: none;\r\n        transition: all 0.4s;\r\n        line-height: normal;\r\n        border: none;\r\n    }.modal-login .btn:hover, .modal-login .btn:focus {\r\n       \r\n        outline: none;\r\n    }.trigger-btn {\r\n        display: inline-block;\r\n        margin: 100px auto;\r\n    }body .ui-table .ui-table-caption,\r\nbody .ui-table .ui-table-summary {\r\n  background-color:red;\r\n  color: #333333;\r\n  border: 1px solid #c8c8c8;\r\n  padding: 0.571em 1em;\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/solicitudes/listar/listar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/solicitudes/listar/listar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Solicitudes\n          \n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">solicitudes</a></li>\n           <li class=\"breadcrumb-item active\">listar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <!-- Basic Examples -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            \n              <button data-type=\"success\" type=\"button\" routerLink=\"/solicitudes/registrar\" class=\"btn btn-raised btn-primary btn-round waves-effect\">Registrar</button>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n           \n            \n    <!---          \n<div class=\"row\">\n              <div class=\"col-md-3\">\n                  <div class=\"input-group search\">\n                    <input id=\"pac\" type=\"text\" class=\"form-control\" placeholder=\"buscar por nombre de paciente\" (input)=\"buscaPaciente($event)\">\n                    <span class=\"input-group-addon\">\n                                          <i class=\"zmdi zmdi-search\"></i>\n                                      </span>\n                  </div>\n  \n                  \n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"zmdi zmdi-calendar\"></i>\n                                        </span>\n                      <input   [(ngModel)]=\"form.fech\" (input)=\"buscar_por_fecha($event)\" name=\"fech\" id=\"fech\" type=\"text\" class=\" dtp-btn-ok form-control fechapicker\" placeholder=\"buscar por fecha\">\n                      <span class=\"input-group-addon\" >\n                          <i class=\"zmdi zmdi-search\" (click)=\"buscar_por_fecha()\"></i>\n                      </span>\n                    </div>\n                  \n                  </div>\n\n</div>\n-->\n<!--\n<p-dataTable #dt styleClass=\"table table-hover\" [value]=\"solicitudes\" [paginator]=\"true\" [rows]=\"5\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\" >\n    <p-column header = \"#\"  >\n        <ng-template  let-i=\"rowIndex\" pTemplate=\"body\">\n          {{i+1}}\n        </ng-template>\n      \n    </p-column>  \n\n  <p-column field=\"nombres_paciente\" header=\"Paciente\" [filter]=\"true\" [sortable]=\"true\">\n    \n  </p-column>\n  <p-column field=\"estado\" header=\"Estado\"  [sortable]=\"true\" [filter]=\"true\">\n     \n  </p-column>\n\n  <p-column header = \"Analisis\" >\n    <ng-template  let-solicitud=\"rowData\" pTemplate=\"body\">\n      <ng-select  placeholder=\"mostrar analisis\">\n        <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n      \n      </ng-select>\n     </ng-template>\n  \n</p-column>\n          <p-column field=\"fecha\" header=\"Fecha\" [filter]=\"true\" [sortable]=\"true\">\n          \n          </p-column>\n          <p-column header = \"Edit\">\n              <ng-template  let-solicitud=\"rowData\" pTemplate=\"body\">\n                <a (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\" class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n              </ng-template>\n            \n          </p-column>\n         \n      </p-dataTable>\n    --> \n    <!--\n      select s.cod_solicitud, s.fecha, s.fecha_entrega, s.cedula_paciente, s.cedula_usuario, s.estado, s.cod_institucion, s.gestion, s.cod_doctor_solicitante, s.estado_solicitud \nfrom solicitud s, pacientes pa, persona pe where s.cedula_paciente=pa.cedula and pe.cod_persona=pa.cod_persona and (pe.nombre ilike '%sanch%' or pe.ap ilike '%sanch%' or pe.am ilike '%sanch%');\n\n    -->\n    <!--   \n    <input type=\"text\"  list=\"valores_area\" class=\"form-control\" [ngClass]=\"borde\">\n    <datalist id=\"valores_area\">\n      <option *ngFor=\"let p of pacientes\" [value]=\"p.nombres\" ></option>\n    </datalist> \n  -->\n  \n  <datalist id=\"valores_paciente\">\n    <option *ngFor=\"let p of pacientes\" [value]=\"p.nombres\" ></option>\n  </datalist> \n  \n  \n    \n<p-table id=\"table\" #dd [value]=\"solicitudes\" [columns]=\"cols\" [paginator]=\"true\" [rows]=\"10\" [pageLinks]=\"2\" [rowsPerPageOptions]=\"[5,10,20]\" >\n  \n  <ng-template pTemplate=\"caption\" style=\"background-color: red;\">\n      \n    <div class=\"ui-helper-clearfix\" style=\"text-align: left\">\n     \n      <button type=\"button\" pButton icon=\"pi pi-file\" iconPos=\"left\" label=\"PDF\" (click)=\"exportPdf()\" class=\"btn btn-warning\"></button>\n       \n      </div>\n</ng-template>\n  <ng-template pTemplate=\"header\" let-solicitud=\"rowData\">\n      <tr><th style=\"width:45px\" class=\"text-center\">#</th>\n          <th *ngFor=\"let col of cols\" >\n              {{col.header}}\n          </th>\n          \n          <th style=\"width:200px\"> Fecha</th>\n          <th>Estado</th>\n          <th  >Exámenes</th>\n          \n          <th style=\"width:115px\">Acciones</th>\n     \n      </tr>\n      <tr>\n        <th></th>\n          <th  style=\"width:auto\" *ngFor=\"let col of cols\" [ngSwitch]=\"col.field\">\n            <ng-container  *ngSwitchCase=\"'nombres_paciente'\">\n           \n              <input   pInputText  [(ngModel)]=\"form.caracter_nombre\" list=\"valores_paciente\" (input)=\"busca_pacientes()\"  name=\"caracter_nombre\" type=\"text\"  placeholder=\"\">\n      \n             </ng-container>\n              <ng-select  *ngSwitchCase=\"'estado'\"  placeholder=\"\"  [(ngModel)]=\"form.resultados\" class=\"\" (ngModelChange)=\"filtro_completo(formulario)\"   name=\"resultados\" required>\n                <ng-option  *ngFor=\" let rol of brands\" [value]=\"rol.value\" >{{rol.label}}</ng-option>\n               \n               </ng-select>\n             \n\n           \n          </th>\n          <th>\n              <div class=\"ui-inputgroup\">\n                  <span  style=\"width: 20%;\" class=\"ui-inputgroup-addon\" data-toggle=\"modal\" data-target=\"#addevent\"><i class=\"pi pi-calendar\" style=\"line-height: 1.25;\"></i></span>\n                  <input  style=\"width: 80%;\" [(ngModel)]=\"form.fech\" pInputText data-date-format=\"YYYYY-MMMM-DD\" (ngModelChange)=\"filtro_completo(formulario)\" name=\"fech\" type=\"date\"  placeholder=\"fecha_inicio\">         \n              </div>\n         \n          </th>\n          <th>\n            <ng-select   placeholder=\"Selecciona un estado\"  [(ngModel)]=\"form.estado_solicitud\" class=\"\" (ngModelChange)=\"filtro_completo(formulario)\"   name=\"estado\" required>\n              <ng-option  *ngFor=\" let rol of brands2\" [value]=\"rol.value\" >{{rol.label}}</ng-option>\n             \n             </ng-select>\n          </th>\n          <th>\n            <!--\n             <input pInputText type=\"text\" placeholder=\"buscar por nombre de paciente\" (input)=\"buscaPaciente($event)\">\n          -->\n          </th>\n          <th></th>\n      </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\"   let-i=\"rowIndex\" let-solicitud>\n      <tr>\n        <td class=\"text-left\">\n                {{i+1}}\n        \n        </td>\n          <td *ngFor=\"let col of cols; index as i\" [style]=\"{'width':'100%'}\">\n              {{solicitud[col.field]}}\n          </td>\n          <td>\n            {{solicitud.fecha | date: 'dd-MM-yyyy'}}\n          </td>\n          <td pEditableColumn>\n            <p-cellEditor>\n                <ng-template pTemplate=\"input\">\n                  <ng-select   placeholder=\"\"  [(ngModel)]=\"solicitud.estado_solicitud\" class=\"\" (ngModelChange)=\"cambiar_estado(solicitud)\"   name=\"estado\" required>\n                    <ng-option  *ngFor=\" let rol of brands2\" [value]=\"rol.value\" >{{rol.label}}</ng-option>\n                   \n                   </ng-select>\n                </ng-template>\n                <ng-template pTemplate=\"output\">\n                    {{solicitud.estado_solicitud}}\n                </ng-template>\n            </p-cellEditor>\n        </td>\n          <td>  \n              <ng-select  placeholder=\"Mostrar exámenes\">\n                <ng-option *ngFor=\"let e of solicitud.examenes_solicitados\" [value]=\"e\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n              \n              </ng-select>\n              \n             </td>\n             <td  class=\"text-center\">\n              <div class=\"row\">\n                          \n                <div class=\"col-md-1\" >\n              <button  rel=\"tooltip\" data-placement=\"top\" title=\"Ver Datos\" (click)=\"ver(solicitud)\"  data-toggle=\"modal\" data-target=\"#defaultModal\" class=\"btn btn-info btn-pequeño  btn-icon-mini btn-round\">\n                <i class=\"zmdi zmdi-eye col-white\" style=\"color:white; font-size:17px\"></i></button>\n          </div>\n        \n          <div class=\"col-md-1\" >\n            <ng-container  *ngIf=\"solicitud.estado=='Sin Registrar'\">\n            <button  rel=\"tooltip\" data-placement=\"top\" title=\"Modificar\" (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\"  class=\"btn btn-warning btn-pequeño  btn-icon-mini btn-round\">\n              <i class=\"zmdi zmdi-edit col-white\" style=\"color:white; font-size:17px\"></i></button>\n            </ng-container>\n            <ng-container  *ngIf=\"solicitud.estado=='Registrado' || solicitud.estado=='Pendiente'\">\n              <button  rel=\"tooltip\" data-placement=\"top\" title=\"Modificar\" (click)=\"actualizar(solicitud)\" routerLink=\"/solicitudes/modificar\"  class=\"btn btn-warning btn-pequeño  btn-icon-mini btn-round\" disabled>\n                <i class=\"zmdi zmdi-edit col-white\" style=\"color:white; font-size:17px\"></i></button>\n              </ng-container>\n          </div>\n          \n          <div class=\"col-md-1\" >\n            \n            <ng-container  *ngIf=\"solicitud.estado=='Registrado'\">\n            <button rel=\"tooltip\" data-placement=\"top\" title=\"Ver factura\" (click)=\"facturar(solicitud)\" routerLink=\"/solicitudes/factura\" class=\"btn btn-secondary btn-pequeño  btn-icon-mini btn-round\"><i class=\"zmdi zmdi-assignment col-white\" style=\"color:white; font-size:17px\"></i></button>\n          </ng-container>\n          <ng-container  *ngIf=\"solicitud.estado=='Sin Registrar' || solicitud.estado=='Pendiente'\">\n            <button rel=\"tooltip\" data-placement=\"top\" title=\"Ver factura\" (click)=\"facturar(solicitud)\" routerLink=\"/solicitudes/factura\" class=\"btn btn-secondary btn-pequeño  btn-icon-mini btn-round\" disabled><i class=\"zmdi zmdi-assignment col-white\" style=\"color:white; font-size:17px\"></i></button>\n          </ng-container>\n            </div>\n       \n          </div>\n              \n           </td>\n      </tr>\n  </ng-template>\n    \n    \n</p-table>\n<!--\n              <table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\">\n                \n                <thead>\n                  <tr>\n                      <th>#</th>\n                      \n                      <th>PACIENTE</th>\n                      <th>ANALISIS</th>\n                      <th>ESTADO</th>\n                      <TH>FECHA</TH>\n                      <TH>MODIFICAR</TH>\n                      \n                  </tr>\n                </thead>\n              \n                <tbody>\n                    <tr *ngFor=\"let s of solicitudes | paginate: {itemsPerPage: 5, currentPage: pageActual}; index as i\">\n                        <th scope=\"row\">{{i+1}}</th>\n                     \n                        <td>{{s.paciente.persona.nombre}} {{s.paciente.persona.ap}} {{s.paciente.persona.am}}</td>\n                        <td> \n                          \n                          \n                                <ng-select  placeholder=\"mostrar analisis \">\n                                 <ng-option *ngFor=\"let e of s.examenes_solicitados\" [value]=\"e.precio_examen.examen.nombre\"  >{{e.precio_examen.examen.nombre}}</ng-option>\n                               \n                               </ng-select>\n                            \n                        </td>\n                          <td>{{s.estado}}</td>\n                          <td>{{s.fecha}}</td>\n                          <td><a  *ngIf=\"s.estado==='Sin Registrar'\" routerLink=\"/solicitudes/modificar\" (click)=\"actualizar(s)\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-edit\"></i></a>\n                      \n                          </td>\n                      </tr>\n                  \n                 \n              </tbody>\n              </table>\n              <pagination-controls (pageChange)=\"pageActual = $event\"   previousLabel=\"Atras\" nextLabel=\"Siguiente\"></pagination-controls>\n            -->\n      \n   \n          </div>\n\n        </div>\n      </div>\n    </div>\n    <!-- #END# Basic Examples -->\n    <!-- Exportable Table -->\n    \n    <!-- #END# Exportable Table -->\n  </div>\n</section>\n<div class=\"modal fade\" id=\"addevent\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"title\" id=\"defaultModalLabel\" >Periodo Entre Fechas</h4>\n      </div>\n      <div class=\"modal-body\">\n           <form  ngNativeValidate  #formulario=\"ngForm\">\n          <div class=\" row\">\n            \n  <div class=\"col-lg-4\">\n            <label for=\"fecha_inicio\">Desde:</label>\n            </div>\n            \n  <div class=\"col-lg-8\">\n            <input id=\"fecha_inicio\" class=\"form-control\" [(ngModel)]=\"form.fecha_inicio\" name=\"fecha_inicio\" type=\"date\" placeholder=\"fecha_inicio\" required max=\"form.fecha_fin\">\n        \n                  </div>\n<br>\n<div class=\"col-lg-4\"></div><div class=\"col-lg-8\"></div>\n                  <div class=\"col-lg-4\">\n                      <label for=\"fecha_fin\">Hasta:</label>\n                      </div>\n                      \n            <div class=\"col-lg-8\">\n                      <input  class=\"form-control\"  id=\"fecha_fin\" [(ngModel)]=\"form.fecha_fin\"  name=\"fecha_fin\" type=\"date\"  placeholder=\"fecha_final\" required>\n                  \n                            </div>\n              </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" (click)=\"filtro_completo(formulario)\" id=\"a\" class=\"btn btn-primary btn-round waves-effect\" >Guardar</button>\n        <button type=\"button\" class=\"btn btn-simple btn-round waves-effect\" data-dismiss=\"modal\">Salir</button>\n      </div>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n<!-- j modal de ver solicitud-->\n<div class=\"modal fade\" id=\"defaultModal\" >\n  <div class=\"modal-dialog modal-login\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        \n        <!-- \n        <h4 class=\"title\" id=\"defaultModalLabel\">Datos del Paciente</h4>\n      -->\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container text-center\">\n         \n       \n        <div class=\"row\">\n          <div class=\"col \">\n              <p class=\"font-weight-bold\">Paciente: \n                  <span class=\"font-weight-normal\">{{solicitud.paciente.nombres}}</span>\n              </p>\n          </div>\n      </div>\n    \n        \n    <div class=\"row\">\n      <div class=\"col \">\n          <p class=\"font-weight-bold\">Institución: \n              <span class=\"font-weight-normal\">{{solicitud.institucion.nombre}}</span>\n          </p>\n      </div>\n  </div>\n      \n  <div class=\"row\" *ngIf=\"solicitud.doctor_solicitante!=null\">\n    <div class=\"col \">\n        <p class=\"font-weight-bold\">Doctor solicitante: \n            <span class=\"font-weight-normal\">{{solicitud.doctor_solicitante.nombre}} {{solicitud.doctor_solicitante.ap}} {{solicitud.doctor_solicitante.am}}</span>\n        </p>\n    </div>\n</div>\n    \n<div class=\"row\">\n  <div class=\"col \">\n      <p class=\"font-weight-bold\">Fecha: \n          <span class=\"font-weight-normal\" >{{solicitud.fecha  | date: 'dd-MM-yyyy'}}</span>\n      </p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col \">\n      <p class=\"font-weight-bold\">Fecha de entrega:  \n          <span  class=\"font-weight-normal\" ><input  style=\"width: 140px;\" type=\"date\" id=\"fecha_entregas\" [(ngModel)]=\"fecha_entregas\" (change)=\"cambiar_estado(solicitud)\"></span>\n      </p>\n  </div>\n</div>\n\n\n<div class=\"row\" >\n  <div class=\"col \">\n      <p class=\"font-weight-bold\">Estado: \n          <span class=\"font-weight-normal\" >{{solicitud.estado_solicitud}}</span>\n      </p>\n  </div>\n</div>\n<div class=\"row\" >\n  <div class=\"col \">\n      <p class=\"font-weight-bold\">Resultados: \n          <span class=\"font-weight-normal\" >{{solicitud.estado}}</span>\n      </p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6 \"style=\"padding: 0px;\" > <p class=\"font-weight-bold\">Exámenes: \n  \n</p></div>\n  <div class=\"col-md-3 \" style=\"padding: 0px;\">  <p class=\"font-weight-bold\">Resultados: \n</p></div>\n  \n  <div class=\"col-md-3 \" style=\"padding: 0px;\"> <p class=\"font-weight-bold\">Fecha: \n  \n</p></div>\n</div>\n<div class=\"row\" *ngFor=\"let e of solicitud.examenes_solicitados\" > \n  <div class=\"col-md-6 \"style=\"padding: 0px;\">\n    \n          <span class=\"font-weight-normal\" >\n            <div  >{{e.precio_examen.examen.nombre}} </div>\n        </span>\n   \n  </div>\n  <div class=\"col-md-3 \" style=\"padding: 0px;\">\n   \n        <span class=\"font-weight-normal\" >\n          <div  >{{e.estado}}</div>\n      </span>\n\n</div>\n<div class=\"col-md-3 \" style=\"padding: 0px;\">\n \n      <span class=\"font-weight-normal\" >\n        <div  >{{e.fecha | date: 'dd-MM-yyyy'}}</div>\n    </span>\n \n</div>\n</div>\n\n\n\n</div>\n       </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"cerrar()\" class=\"btn btn-danger btn-round waves-effect\" data-dismiss=\"modal\">CERRAR</button>\n       \n      </div>\n    </div>\n\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/solicitudes/listar/listar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/solicitudes/listar/listar.component.ts ***!
  \********************************************************/
/*! exports provided: ListarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarComponent", function() { return ListarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _solicitudes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
/* harmony import */ var _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pacientes/pacientes.service */ "./src/app/pacientes/pacientes.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListarComponent = /** @class */ (function () {
    function ListarComponent(datePipe, titleCasePipe, solicitudesService, pacientesService, node) {
        var _this = this;
        this.datePipe = datePipe;
        this.titleCasePipe = titleCasePipe;
        this.solicitudesService = solicitudesService;
        this.pacientesService = pacientesService;
        this.node = node;
        this.inventory = [
            { name: 'apples', quantity: 2 },
            { name: 'bananas', quantity: 0 },
            { name: 'cherries', quantity: 5 }
        ];
        this.palabra = 'word';
        this.solicitudes_paciente = [];
        this.solicitud = new _models__WEBPACK_IMPORTED_MODULE_3__["Solicitud"]();
        this.solicitudes = [];
        this.fecha_entregas = "";
        this.form = {
            fech: '',
            fecha_inicio: '',
            fecha_fin: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
            caracter_nombre: '',
            cedula: '',
            estado_solicitud: '',
            resultados: ''
        };
        this.solicitudesService.minimaFecha().subscribe(function (data) {
            _this.fecha_solicitud_minima = data;
            console.log(_this.fecha_solicitud_minima);
            _this.form.fecha_inicio = data;
            console.log(_this.form.fecha_inicio);
        });
        this.solicitudesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
        });
        console.log(this.inventory.find(function (e) { return e.quantity === 5; }).name);
        console.log(this.titleCasePipe.transform(this.palabra));
        this.datetime = new Date();
        this.fechita = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.texto = "Usuario: " + this.currentUser.personal_laboratorio.persona.nombre + " " + this.currentUser.personal_laboratorio.persona.ap + " " + this.currentUser.personal_laboratorio.persona.am;
        this.rootNode = node;
        this.fecha = $('#datepicker').val();
        this.listar();
        this.form.fecha_inicio = this.fecha_solicitud_minima;
        this.fecha = '';
    }
    ListarComponent.prototype.listar = function () {
        var _this = this;
        this.solicitudesService.getAll().subscribe(function (data) {
            console.log(data);
            _this.solicitudes = data;
            for (var i = 0; i < _this.solicitudes.length; i++) {
                console.log(_this.solicitudes[i].examenes_solicitados.length);
                _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
                // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
            }
        });
    };
    ListarComponent.prototype.ngOnInit = function () {
        this.fecha = '29-11-2019';
        $(function () {
            $('#datepicker').datepicker();
            $.datepicker.regional['es'] = {
                closeText: 'Cerrar',
                prevText: '&#x3c;Ant',
                nextText: 'Sig&#x3e;',
                currentText: 'Hoy',
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
                dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mi&eacute;', 'Juv', 'Vie', 'S&aacute;b'],
                dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;'],
                weekHeader: 'Sm',
                dateFormat: 'dd-mm-yy',
                changeYear: true,
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['es']);
        });
        this.brands = [
            { label: 'Registrado', value: 'Registrado' },
            { label: 'Sin Registrar', value: 'Sin Registrar' },
            { label: 'Pendiente', value: 'Pendiente' }
        ];
        this.brands2 = [
            { label: 'Entregado', value: 'Entregado' },
            { label: 'Recibido', value: 'Recibido' }
        ];
        this.cols = [
            { field: "nombres_paciente", header: 'Paciente' },
            { field: 'estado', header: 'Resultados' }
        ];
        //var el=$(this.rootNode.nativeElemnt).find('.solicitudes')[0]
        /*
            $(function () {
              $('.js-basic-example').dataTable(
                {
                 
                  searching:false
              }
              );
        
            
          });
        
           */
        $(function () {
            $('.js-basic-exampl').dataTable({
                "searching": false
            });
            // Exportable table
        });
        $(function () {
            $('.selectpicker').selectpicker();
            // Datetimepicker plugin
            $('.datetimepicker').bootstrapMaterialDatePicker({
                format: 'dddd DD MMMM YYYY - HH:mm',
                clearButton: true,
                weekStart: 1
            });
            $('.timepicker').bootstrapMaterialDatePicker({
                format: 'HH:mm',
                clearButton: true,
                date: false
            });
            $('.fechapicker').bootstrapMaterialDatePicker({
                dateFormat: 'yyyy-mm-dd',
                clearButton: true,
                weekStart: 1,
                time: false,
                lang: 'es'
                /*
              }).on('change', function (e, date) {
              console.log($('#fech').val())
              console.log(e.val()+' '+date)
              date.solicitudesService.getAll().subscribe(data => {
                console.log(data)
                this.solicitudes=data;
              });*/
            });
        });
    };
    ListarComponent.prototype.actualizar = function (solicitud) {
        localStorage.removeItem('solicitudamodificar');
        localStorage.setItem('solicitudamodificar', JSON.stringify(solicitud));
    };
    ListarComponent.prototype.facturar = function (solicitud) {
        localStorage.removeItem('solicitudamodificar');
        localStorage.setItem('solicitudfacturar', JSON.stringify(solicitud));
    };
    ListarComponent.prototype.busca_pacientes = function () {
        var _this = this;
        console.log(this.form.caracter_nombre);
        this.pacientesService.buscarPacientePorCaracterDeNombres(this.form.caracter_nombre, this.form.resultados).subscribe(function (data) {
            _this.pacientes = data;
            for (var i = 0; i < _this.pacientes.length; i++) {
                _this.pacientes[i].nombres = _this.pacientes[i].persona.nombre + " " + _this.pacientes[i].persona.ap + " " + _this.pacientes[i].persona.am;
                // this.pacientes[i].fnac=this.datePipe.transform(this.pacientes[i].fnac,"dd-MM-yyyy")
            }
            console.log(_this.pacientes);
        }); //----------------------------------
        for (var i = 0; i < this.pacientes.length; i++) {
            if (this.pacientes[i].nombres == this.form.caracter_nombre) {
                this.form.cedula = this.pacientes[i].cedula;
            }
            else {
                this.form.cedula = '';
            }
        }
        console.log(this.form.cedula);
        if (this.form.cedula != '' || this.form.caracter_nombre == '') {
            this.solicitudesService.filtrarPaciente(this.form.cedula, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(function (data) {
                console.log(data);
                console.log(_this.form.cedula);
                _this.solicitudes = data;
                for (var i = 0; i < _this.solicitudes.length; i++) {
                    _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
                }
            });
        }
    };
    ListarComponent.prototype.filtro_completo = function (formu) {
        var _this = this;
        //console.log(this.form.fech)
        if (this.form.resultados == null) {
            this.form.resultados = "";
        }
        if (this.form.estado_solicitud == null) {
            this.form.estado_solicitud = "";
        }
        console.log(this.form.estado_solicitud);
        validatefechas();
        if (formu.valid && ($('#fecha_inicio').val() <= $('#fecha_fin').val())) {
            $('#addevent').removeClass('show');
            this.solicitudesService.filtrarPaciente(this.form.cedula, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(function (data) {
                console.log(data);
                console.log(_this.form.cedula);
                _this.solicitudes = data;
                for (var i = 0; i < _this.solicitudes.length; i++) {
                    _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
                }
            });
        }
    };
    ListarComponent.prototype.buscaPaciente = function () {
        var _this = this;
        if (this.form.caracter_nombre != "") {
            console.log("ajfdjf" + this.form.caracter_nombre);
            this.solicitudesService.filtrarPaciente(this.form.cedula, this.form.fech, this.form.fecha_inicio, this.form.fecha_fin, this.form.estado_solicitud, this.form.resultados).subscribe(function (data) {
                console.log(data);
                _this.solicitudes = data;
                for (var i = 0; i < _this.solicitudes.length; i++) {
                    _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
                }
            });
        }
        else {
            this.solicitudesService.getAll().subscribe(function (data) {
                console.log(data);
                _this.solicitudes = data;
                for (var i = 0; i < _this.solicitudes.length; i++) {
                    _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
                }
            });
        }
    };
    ListarComponent.prototype.buscar_por_fecha = function (fech) {
        var _this = this;
        console.log(fech);
        this.solicitudesService.filtrarPorFechaSolicitud(fech).subscribe(function (data) {
            console.log(data);
            _this.solicitudes = data;
            for (var i = 0; i < _this.solicitudes.length; i++) {
                console.log(_this.solicitudes[i].examenes_solicitados.length);
                _this.solicitudes[i].nombres_paciente = _this.solicitudes[i].paciente.persona.nombre + " " + _this.solicitudes[i].paciente.persona.ap + " " + _this.solicitudes[i].paciente.persona.am;
                // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
            }
        });
    };
    ListarComponent.prototype.funcion = function (event) {
        alert(event.target.value);
    };
    ListarComponent.prototype.exportPdf = function () {
        console.log(this.form.fecha_fin);
        if (this.datePipe.transform(this.form.fecha_inicio, "yyyy-MM-dd") == this.datePipe.transform(new Date(), "yyyy-MM-dd") || this.datePipe.transform(this.form.fecha_final, "yyyy-MM-dd") == this.datePipe.transform(new Date(), "yyyy-MM-dd")) {
            window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/solicitudes.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&estado_solicitud=' + this.form.estado_solicitud + '&resultados=' + this.form.resultados + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
        }
        else {
            window.location.href = 'http://localhost:8080/jasperserver/rest_v2/reports/reports/solicitudes.pdf?am_usuario=' + this.currentUser.personal_laboratorio.persona.am + '&cedula=' + this.form.cedula + '&ap_usuario=' + this.currentUser.personal_laboratorio.persona.ap + '&nombre_usuario=' + this.currentUser.personal_laboratorio.persona.nombre + '&fecha_inicio=' + this.form.fecha_inicio + '&fecha_fin=' + this.form.fecha_fin + '&estado_solicitud=' + this.form.estado_solicitud + '&resultados=' + this.form.resultados + '&j_username=' + 'jasperadmin' + '&j_password=' + 'jasperadmin';
        }
        /*
        let examenes=""
        let doc = new jsPDF();
        @gmail.com
      //doc.text('Hello world!', 10, 10)
      var logo = new Image();
      logo.src = 'assets/images/logo.svg';
      doc.addImage(logo, 'JPEG', 15, 40,148,210);
      let col = ["#", "Paciente", "Estado","Fecha","Analisis"];
      let rows = [];
      for(let i=0; i<this.solicitudes.length; i++){
        examenes=""
        if(this.solicitudes[i].examenes_solicitados.length>0){
          for(let j=0;j<this.solicitudes[i].examenes_solicitados.length; j++){
            console.log(i+" "+j)
            console.log(this.solicitudes[i].examenes_solicitados.length)
      examenes=examenes+this.solicitudes[i].examenes_solicitados[j].precio_examen.examen.nombre+"\n"
          }
        }
        let temp = [i+1,this.solicitudes[i].nombres_paciente,this.solicitudes[i].estado,this.solicitudes[i].fecha,examenes];
        rows.push(temp);
      }
      doc.autoTable({
        head: [['Name', 'Email', 'Country']],
        body: [
            ['David', 'david@example.com', 'Sweden'],
            ['Castille', 'castille@example.com', 'Norway'],
            // ...
        ]
      });
      doc.autoTable({
        head: [col],
        body: [
            rows
        ]
      });
      doc.save('solicitudes.pdf');
      }
      a(){
        
        let doc = new jsPDF();
        var img = new Image()
        img.src = 'assets/images/logo-original-labclinico.png'
        doc.addImage(img, 'png', 10, 12, 12, 15)
        doc.text( 'This text is rotated\rand centered around\rthis point.', 10,180, 'center' );
        doc.setFontSize(12);
      doc.addPage();
      doc.addPage();
      doc.addPage();
      doc.addPage();
      doc.addPage();
      doc.addPage();
      var pageCount = doc.internal.getNumberOfPages();
      for(let i = 0; i < pageCount; i++) {
      doc.setPage(i);
      doc.text(10,10, doc.internal.getCurrentPageInfo().pageNumber + "/" + pageCount);
      
      }
      
      doc.save('solicitudes.pdf');
      }
      buscar_por_rango_fechas(){
        console.log(this.form.fecha_inicio+"  "+this.form.fecha_fin)
        this. solicitudesService.filtrarPorRangoFecha(this.form.fecha_inicio, this.form.fecha_fin).subscribe(data => {
          console.log(data)
          this.solicitudes=data;
          for(let i=0;i<this.solicitudes.length; i++){
            console.log(this.solicitudes[i].examenes_solicitados.length)
            this.solicitudes[i].nombres_paciente=this.solicitudes[i].paciente.persona.nombre+" "+this.solicitudes[i].paciente.persona.ap+" "+this.solicitudes[i].paciente.persona.am
          
         // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
          }
      });
      */
    };
    /*
    public captureScreen()
    {
    
      
     
      let examenes=""
      let col = ["#", "Paciente", "Estado","Fecha","Analisis"];
      let rows = [];
      for(let i=0; i<this.solicitudes.length; i++){
        examenes=""
        if(this.solicitudes[i].examenes_solicitados.length>0){
          for(let j=0;j<this.solicitudes[i].examenes_solicitados.length; j++){
            console.log(i+" "+j)
            console.log(this.solicitudes[i].examenes_solicitados.length)
      examenes=examenes+this.solicitudes[i].examenes_solicitados[j].precio_examen.examen.nombre+"\n"
          }
        }
        let temp = [i+1,this.solicitudes[i].nombres_paciente,this.solicitudes[i].estado,this.solicitudes[i].fecha,examenes];
        rows.push(temp);
      }
      var data = document.getElementById('contentToConvert');
      
     
         var pdf = new jsPDF('p', 'mm', 'letter'),margin = 10;
         pdf.page=1;
         var pageCount = pdf.internal.getNumberOfPages();
         for(let i = 0; i < pageCount; i++) {
          var str = "Pagina " + pdf.page+" - "+this.fechita;
          pdf.text(str, 50, pdf.internal.pageSize.height - 10);//key is the interal pageSize function
        
         // pdf.setPage(i);
          //pdf.text(10,10, pdf.internal.getCurrentPageInfo().pageNumber + "/" + pageCount);
          
          }
         var img = new Image();
         img.src = 'assets/images/logo-original-labclinico.png';
         var width = pdf.internal.pageSize.getWidth();
       console.log(pdf.internal.pageSize.getHeight())
       
         console.log("asfestewidth"+width+" " )
         console.log(pdf.internal.pageSize.getHeight())
    pdf.text(30, 20, 'Laboratorio de Analisis Clinico UAJMS');
    
    pdf.text(55, 45, 'Lista de solicitudes de analisis clinicos');
    
    pdf.text(10, 55, this.texto);
    
         var position =10;
         pdf.addImage(img, 'PNG', 10, position, 20, 25)
    
         //tabla
        
    
    
    /*
    for(let i = 0; i < pageCount; i++) {
    
      pdf.page ++;
      
      var str = "Pagina " + pdf.page+" - "+this.fechita;
      pdf.text(str, 50, pdf.internal.pageSize.height - 10);//key is the interal pageSize function
    
    
      //pdf.setPage(i);
      //pdf.text(10,10, pdf.internal.getCurrentPageInfo().pageNumber + "/" + pageCount);
      
      }
      
    pdf.save("pdf.pdf");
    
    }
    */
    /*
    b(){
      var doc = new jsPDF('p', 'pt', 'letter');
            doc.page = 1; // use this as a counter.
            var totalPages = 10; // define total amount of pages
            // HEADER
            doc.setFontSize(20);//optional
            doc.setTextColor(40);//optional
            doc.setFontStyle('normal');//optional
            doc.text("Report", 50, 22);// set your margins
            
    doc.text(10, 55, this.texto);
            // FOOTER
            var str = "Page " + doc.page  + " of " +  totalPages;
            doc.setFontSize(10);// optional
            doc.text(str, 50, doc.internal.pageSize.height - 10);//key is the interal pageSize function
    
    
           
    
            //Add new page and increase page count
            doc.addPage();
            doc.page ++;
            
            var str = "Page " + doc.page  + " of " +  totalPages;
            doc.text(str, 50, doc.internal.pageSize.height - 10);//key is the interal pageSize function
         
            doc.save("footer.pdf");
    }
    */
    ListarComponent.prototype.prueba = function () {
        alert(this.form.fech);
    };
    ListarComponent.prototype.buscarPaciente = function () {
        for (var i = 0; i < this.solicitudes.length; i++) {
            if (this.solicitudes[i].paciente.persona.nombre == this.form.caracter_nombre) {
                this.solicitudes_paciente.push(this.solicitudes[i]);
            }
        }
        if (this.solicitudes_paciente.length > 0) {
            this.solicitudes = this.solicitudes_paciente;
            for (var i = 0; i < this.solicitudes.length; i++) {
                console.log(this.solicitudes[i].examenes_solicitados.length);
                this.solicitudes[i].nombres_paciente = this.solicitudes[i].paciente.persona.nombre + " " + this.solicitudes[i].paciente.persona.ap + " " + this.solicitudes[i].paciente.persona.am;
                // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
            }
        }
        else {
            for (var i = 0; i < this.solicitudes.length; i++) {
                console.log(this.solicitudes[i].examenes_solicitados.length);
                this.solicitudes[i].nombres_paciente = this.solicitudes[i].paciente.persona.nombre + " " + this.solicitudes[i].paciente.persona.ap + " " + this.solicitudes[i].paciente.persona.am;
                // this.solicitudes[i].fecha_entrega=this.datePipe.transform(this.solicitudes[i].fecha_entrega,"dd/MM/yyyy")
            }
        }
        console.log(this.solicitudes);
    };
    ListarComponent.prototype.ver = function (s) {
        this.solicitud = s;
        this.fecha_entregas = s.fecha_entrega;
    };
    ListarComponent.prototype.enviar = function (formsolicitud) {
        if (formsolicitud.valid) {
            window.location.href = "https://www.google.com";
        }
    };
    ListarComponent.prototype.keyPressHandler = function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            e.stopPropagation();
            // Perform your custom logic here if any
        }
    };
    ListarComponent.prototype.cambiar_estado = function (solicitud) {
        var _this = this;
        var e = $('#fecha_entregas').val();
        solicitud.fecha_entrega = this.datePipe.transform(e, 'dd-MM-yyyy');
        solicitud.fecha = this.datePipe.transform(solicitud.fecha, 'dd-MM-yyyy');
        this.solicitudesService.modificar(solicitud).subscribe(function (data) {
            _this.fecha_entregas = data.fecha_entrega;
            _this.solicitud = data;
            _this.listar();
        });
    };
    ListarComponent.prototype.cerrar = function () {
        this.listar();
    };
    ListarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listar',
            template: __webpack_require__(/*! ./listar.component.html */ "./src/app/solicitudes/listar/listar.component.html"),
            styles: [__webpack_require__(/*! ./listar.component.css */ "./src/app/solicitudes/listar/listar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _solicitudes_service__WEBPACK_IMPORTED_MODULE_1__["SolicitudesService"], _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_2__["PacientesService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ListarComponent);
    return ListarComponent;
}());



/***/ }),

/***/ "./src/app/solicitudes/modificar/modificar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/solicitudes/modificar/modificar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:0.85em;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap;justify-content:flex-end}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:before,table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:0.9em;display:block;opacity:0.3}table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:before{right:1em;content:\"\\2191\"}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{right:0.5em;content:\"\\2193\"}table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:after{opacity:1}table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{opacity:0}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot>.dataTables_scrollFootInner{box-sizing:content-box}div.dataTables_scrollFoot>.dataTables_scrollFootInner>table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.table-sm>thead>tr>th{padding-right:20px}table.dataTable.table-sm .sorting:before,table.dataTable.table-sm .sorting_asc:before,table.dataTable.table-sm .sorting_desc:before{top:5px;right:0.85em}table.dataTable.table-sm .sorting:after,table.dataTable.table-sm .sorting_asc:after,table.dataTable.table-sm .sorting_desc:after{top:5px}table.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}table.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}div.dataTables_scrollHead table.table-bordered{border-bottom-width:0}div.table-responsive>div.dataTables_wrapper>div.row{margin:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:first-child{padding-left:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:last-child{padding-right:0}.dtp { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); z-index: 2000; font-size: 15px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }.dtp > .dtp-content { background: #fff; max-width: 300px; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); max-height: 520px; position: relative; left: 50%; }.dtp > .dtp-content > .dtp-date-view > header.dtp-header { background: #689F38; color: #fff; text-align: center; padding: 0.3em; }.dtp div.dtp-date, .dtp div.dtp-time { background: #8BC34A; text-align: center; color: #fff; padding: 10px; }.dtp div.dtp-date > div { padding: 0; margin: 0; }.dtp div.dtp-actual-month { font-size: 1.5em; }.dtp div.dtp-actual-num { font-size: 3em; line-height: 0.9; }.dtp div.dtp-actual-maxtime { font-size: 3em; line-height: 0.9; }.dtp div.dtp-actual-year { font-size: 1.5em; color: #DCEDC8; }.dtp div.dtp-picker { padding: 1em; text-align: center; }.dtp div.dtp-picker-month, .dtp div.dtp-actual-time { font-weight: 500; text-align: center; }.dtp div.dtp-picker-month { padding-bottom:20px!important; text-transform: uppercase!important; }.dtp .dtp-close { position: absolute; top: 0.5em; right: 1em; }.dtp .dtp-close > a { color: #fff; }.dtp .dtp-close > a > i { font-size: 1em; }.dtp table.dtp-picker-days { margin: 0; min-height: 251px;}.dtp table.dtp-picker-days, .dtp table.dtp-picker-days tr, .dtp table.dtp-picker-days tr > td { border: none; }.dtp table.dtp-picker-days tr > td {  font-weight: 700; font-size: 0.8em; text-align: center; padding: 0.5em 0.3em; }.dtp table.dtp-picker-days tr > td > span.dtp-select-day { color: #BDBDBD!important; }.dtp table.dtp-picker-days tr > td > a, .dtp .dtp-picker-time > a { color: #212121; text-decoration: none; padding: 0.4em 0.5em 0.5em 0.6em; border-radius: 50%!important; }.dtp table.dtp-picker-days tr > td > a.selected{ background: #8BC34A; color: #fff; }.dtp table.dtp-picker-days tr > th { color: #757575; text-align: center; font-weight: 700; padding: 0.4em 0.3em; }.dtp .p10 > a { color: #689F38; text-decoration: none; }.dtp .p10 { width: 10%; display: inline-block; }.dtp .p20 { width: 20%; display: inline-block; }.dtp .p60 { width: 60%; display: inline-block; }.dtp .p80 { width: 80%; display: inline-block; }.dtp a.dtp-meridien-am, .dtp a.dtp-meridien-pm { position: relative; top: 10px; color: #212121; font-weight: 500; padding: 0.7em 0.5em; border-radius: 50%!important;text-decoration: none; background: #eee; font-size:1em; }.dtp .dtp-actual-meridien a.selected { background: #689F38; color: #fff; }.dtp .dtp-picker-time > .dtp-select-hour { cursor: pointer; }.dtp .dtp-picker-time > .dtp-select-minute { cursor: pointer; }.dtp .dtp-buttons { padding: 0 1em 1em 1em; text-align: right; }.dtp.hidden, .dtp .hidden { display: none; }.dtp .invisible { visibility: hidden; }.dtp .left { float: left; }.dtp .right { float: right; }.dtp .clearfix { clear: both; }.dtp .center { text-align: center; }select:required:invalid {\r\n    color: gray;\r\n  }option[value=\"\"][disabled] {\r\n    display: none;\r\n  }option {\r\n    color: black;\r\n  }.titulo{\r\n   \r\n    text-transform: capitalize;\r\n  }.link{\r\n \r\n  \r\n    cursor: pointer\r\n  }\r\n"

/***/ }),

/***/ "./src/app/solicitudes/modificar/modificar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/solicitudes/modificar/modificar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Solicitudes\n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">solicitudes</a></li>\n          <li class=\"breadcrumb-item active\">modificar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2><strong>Modificar</strong> Solicitud</h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n\n\n          \n            <form class=\"needs-validation\" ngNativeValidate  #formsolicitud=\"ngForm\" autocomplete=\"off\" >\n\n                <div class=\"row clearfix\">\n                    <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                      <label for=\"ap\">Paciente</label>\n                    </div>\n                    <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                      <div class=\"form-group\">\n                     <label for=\"\">{{form.paciente.persona.nombre}} {{form.paciente.persona.ap}} {{form.paciente.persona.am}}</label>  </div>\n                    </div>\n                  </div>\n<!--  \n              <div style=\"display:none\" class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"cedula\">Cedula del Paciente</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                    <input  type=\"search\" id=\"cedula\" value=\"{{form.paciente.nombre}}\" [(ngModel)]=\"form.paciente.cedula\" name=\"cedula\" class=\"form-control\" placeholder=\"Entra tu cedula\" [disabled]='true'required>\n                    <button *ngIf=\"false\" type=\"button\" (click)=\"buscar_paciente()\"  class=\"btn btn-raised btn-primary btn-round waves-effect\"   >buscar</button>\n                   \n                     \n\n\n\n\n                    <table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\" *ngIf=\"show\">\n                      <thead>\n                        <tr>\n                            <th>CEDULA</th>\n                            \n                            <th>PACIENTE</th>\n                          \n                        </tr>\n                      </thead>\n                    \n                      <tbody>\n                        <tr >\n                          <td >{{pacientebuscado.cedula}}</td>\n                       \n                          <td> {{pacientebuscado.nombre}} {{pacientebuscado.ap}} {{pacientebuscado.am}}</td>\n                         \n                        </tr>\n                       \n                    </tbody>\n                    </table>\n\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n              \n            -->\n            \n\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"nombre\">Institución</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"\">\n     \n      <select class=\"form-control \" [(ngModel)]=\"form.institucion.cod_institucion\" name=\"institucion\" class=\"form-control\" placeholder=\"buscar institucion\"  (ngModelChange)=\"institucionbuscar($event)\" required>\n       \n        <optgroup label=\"\">\n            <option *ngFor=\"let i of institucionesFaltantes\"  [value]=\"i.cod_institucion\"  > {{i.nombre}}</option>\n     \n        </optgroup>\n        <optgroup label=\"SIS\">\n          \n          <option *ngFor=\"let posta of instituciones\" [value]=\"posta.cod_institucion\"  >Posta de {{posta.nombre}}</option>\n        </optgroup>\n      </select>\n      </div>\n  </div>\n</div> \n<br>\n<ng-container *ngIf=\"form.institucion.cod_institucion_padre!=''\">\n  <div class=\"row clearfix\" *ngIf=\"form.institucion.cod_institucion_padre!='LABORATORIO UNIVERSIDAD'\" >\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n  \n\n\n    <div class=\"row clearfix\" style=\"padding-top:2px\" >\n      <div class=\"col-sm-8\">\n        <div class=\"form-group\"  ><label for=\"ap\">Doctor Solicitante </label>\n        </div>\n      </div>\n      <div class=\"col-sm-2\">\n        <div class=\"form-group\"  >  <a  (click)=\"agregarDoctor()\" class=\"link\">\n       \n          <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n        </a>\n        </div>\n      </div>\n    \n    \n      <div class=\"col-sm-2\" >\n        <ng-container >\n          <ng-container >\n        <div class=\"form-group\" style=\"padding-top:2px;\"  > \n          <a  class=\"link\" (click)=\"removerDoctor()\"> \n        \n            <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n          </a>\n          </div>\n        </ng-container>\n      </ng-container>\n      </div>\n    \n    \n    \n    </div>\n\n\n\n  </div>\n  <!---\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n      <input [(ngModel)]=\"form.doctor\" name=\"doctor\" class=\"form-control\" placeholder=\"doctor\" required>\n    </div>\n  </div>\n-->\n\n<div class=\"col-lg-10 col-md-10 col-sm-8\">\n  \n    <div class=\"row clearfix\"  *ngIf=\"form.doctor_solicitante!=null\">\n  <div class=\"col-sm-4\">\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"form.doctor_solicitante.nombre\" name=\"nombre\" class=\"form-control titulo\" placeholder=\"nombre\" required />\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"form.doctor_solicitante.ap\" name=\"ap\" class=\"form-control titulo\" placeholder=\"apellido paterno\"  required/>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"form.doctor_solicitante.am\" name=\"am\" class=\"form-control titulo\"  placeholder=\"apellido materno\" />\n    </div>\n  </div>\n</div>\n\n</div>\n</div>\n\n</ng-container>\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"login\">Fecha</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n     \n    <!--  <input [(ngModel)]=\"form.fecha_entrega\" name=\"fecha_entrega\" type=\"date\" id=\"fecha_entrega\" class=\"form-control\" placeholder=\"Entra tu procedencia\">-->\n    <input type=\"date\" [(ngModel)]=\"fecha\" name=\"fecha\" id=\"fecha\" class=\"form-control\" placeholder=\"fecha\"  size=\"12\" required/>\n            \n  </div>\n  </div>\n</div>\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"login\">Fecha Entrega</label>\n  </div>\n  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n    <div class=\"form-group\">\n     \n    <!--  <input [(ngModel)]=\"form.fecha_entrega\" name=\"fecha_entrega\" type=\"date\" id=\"fecha_entrega\" class=\"form-control\" placeholder=\"Entra tu procedencia\">-->\n    <input type=\"date\" [(ngModel)]=\"fecha_entrega\" id=\"fecha_entrega\" name=\"fecha_entrega\" class=\"form-control\" placeholder=\"Fecha de entreg\"  size=\"12\" required [min]=\"fecha\"/>\n  </div>\n  </div>\n</div>\n<div class=\"row clearfix\">\n    <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n      <label for=\"login\">Exámenes Solicitados</label>\n    </div>\n  \n  </div>\n<div class=\"row clearfix \">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"login\">Area</label>\n  </div>\n    <div class=\"col-lg-10 col-md-10 col-sm-8\" >\n   \n        <ng-select  class=\"\" placeholder=\"Seleccione el area donde esta el examen\"  style=\"width:100%\" [(ngModel)]=\"cod_area\" (ngModelChange)=\"listarExamenesdeArea()\"  name=\"cod_area\">\n       \n          <ng-option *ngFor=\"let area of areas\" [value]=\"area.cod_area\"  >{{area.nombre}}</ng-option>\n        \n        </ng-select>\n    \n\n     \n   \n \n  </div>\n</div>\n\n\n<br>\n<div class=\"row clearfix\">\n  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n    <label for=\"login\">Examen</label>\n  </div>\n    <div class=\"col-lg-10 col-md-10 col-sm-8\">\n     \n        <ng-select  id=\"cod_precio_examen\" class=\"\" [(ngModel)]=\"cod_precio_examen\" #e=\"ngModel\"  placeholder=\"Seleccione el examen\" (ngModelChange)=\"examenseleccionar()\"   name=\"cod_examen\" >\n      \n       \n            <ng-option [value]=\"e.cod_precio_examen\"  *ngFor=\"let e of examenes\" >{{e.examen.nombre}}</ng-option>\n    \n       \n    \n        </ng-select>\n        <br>\n\n \n  </div>\n</div>\n\n\n\n\n\n\n<div class=\"body\">\n    <div class=\"table-responsive\">\n<table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\">\n                      <thead>\n                        <tr>\n                            <th>#</th>\n                            \n                            <th>NOMBRE</th>\n                            <th>QUITAR EXAMEN</th>\n                          \n                        </tr>\n                      </thead>\n    \n                      <tbody>  <ng-container *ngFor=\"let e of form.examenes_solicitados; index as in\" > \n                        <tr *ngIf=\" e.estado=='Sin Registrar'\">\n                            <th scope=\"row\">{{in+1}}</th>\n                          <td >{{e.precio_examen.examen.nombre}}</td>\n                          <td><a  routerLink=\"/solicitudes/modificar\" (click)=\"quitar_examen(e.precio_examen.examen.cod_examen, in )\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-delete\"></i></a>\n                  \n                       \n                             \n                        </tr>\n                      </ng-container>\n                       \n                    </tbody>\n                    </table>\n\n\n\n\n\n\n                  \n                </div>\n              </div>\n              \n\n              \n\n\n\n\n\n<div *ngIf=\"bandera\" class=\"alert alert-danger\" role=\"alert\">tiene que haber como minimo un examen en la solicitud</div>\n\n\n\n\n\n\n              \n<div class=\"row clearfix\">\n  <div class=\"col-sm-8 offset-sm-2\">\n    \n  </div>\n  <div class=\"col-sm-8 offset-sm-2\">\n    <button type=\"submit\"  (click)=\"modificar_solicitud(formsolicitud)\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n  </div>\n\n</div>\n\n            </form>\n\n          \n            \n\n\n            \n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n</section>"

/***/ }),

/***/ "./src/app/solicitudes/modificar/modificar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/solicitudes/modificar/modificar.component.ts ***!
  \**************************************************************/
/*! exports provided: ModificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarComponent", function() { return ModificarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pacientes/pacientes.service */ "./src/app/pacientes/pacientes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solicitudes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModificarComponent = /** @class */ (function () {
    function ModificarComponent(titleCasePipe, datePipe, pacientesService, solicitudesService, router) {
        var _this = this;
        this.titleCasePipe = titleCasePipe;
        this.datePipe = datePipe;
        this.pacientesService = pacientesService;
        this.solicitudesService = solicitudesService;
        this.router = router;
        this.name = 'Angular';
        this.Category = "";
        this.myBusinessList = [{
                id: 1,
                name: 'item 1'
            }, {
                id: 2,
                name: 'item 2'
            }, {
                id: 2,
                name: 'item 3'
            }];
        this.show = false;
        this.seleccionado = 3;
        this.areas = [];
        this.instituciones = [];
        this.examenes = [];
        this.fecha = '';
        this.fecha_entrega = '';
        this.precio_examen = new _models__WEBPACK_IMPORTED_MODULE_1__["Precio_examen"]();
        this.area = new _models__WEBPACK_IMPORTED_MODULE_1__["Area"]();
        this.cod_area = null;
        this.cod_precio_examen = null;
        this.cadena = '';
        this.estado = false;
        this.IsmodelShow = false;
        this.mostrar_doctor = false;
        console.log(this.precio_examen);
        console.log(this.myBusinessList);
        this.form = JSON.parse(localStorage.getItem('solicitudamodificar'));
        this.i = this.form.examenes_solicitados.length - 1;
        this.precio_examen.cod_institucion = this.form.institucion.cod_institucion;
        this.cod_precio_examen = null;
        //this.cod_area=this.form.examenes_solicitados[this.i].precio_examen.examen.cod_area
        if (this.form.institucion.cod_institucion_padre == 'SIS') {
            console.log("sis");
            this.precio_examen.cod_institucion = this.form.institucion.cod_institucion_padre;
        }
        console.log(this.form);
        this.fecha = datePipe.transform(this.form.fecha, "yyyy-MM-dd");
        this.fecha_entrega = this.form.fecha_entrega;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.form.cedula_usuario = this.currentUser.cedula;
        solicitudesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
        });
        solicitudesService.getPostas().subscribe(function (data) {
            _this.instituciones = data;
            console.log(_this.instituciones);
        });
        solicitudesService.getInstitucionesFaltantes().subscribe(function (data) {
            _this.institucionesFaltantes = data;
            console.log(_this.institucionesFaltantes);
        });
        // this.listarExamenesdeArea()
    }
    ModificarComponent.prototype.no_mostrar_examenes_ya_asignados = function () {
        for (var i = 0; i < this.examenes.length; i++) {
            console.log(this.examenes[i].cod_precio_examen);
            for (var j = 0; j < this.form.examenes_solicitados.length; j++) {
                console.log(this.examenes[i].cod_precio_examen);
                console.log(this.form.examenes_solicitados[j].precio_examen.cod_precio_examen);
                if (this.examenes[i].cod_precio_examen == this.form.examenes_solicitados[j].precio_examen.cod_precio_examen) {
                    this.examenes.splice(i, 1);
                }
            }
        }
        console.log(this.examenes.length);
    };
    ModificarComponent.prototype.listarExamenesdeArea = function () {
        var _this = this;
        this.cod_precio_examen = null;
        /*this.form.examenes_solicitados[this.i].precio_examen.cod_institucion=this.form.institucion.cod_institucion
        
        if(this.form.institucion.cod_institucion_padre== 'SIS'){
          console.log("sis")
        this.form.examenes_solicitados[this.i].precio_examen.cod_institucion= this.form.institucion.cod_institucion_padre
        }
        */
        this.precio_examen.examen.area.cod_area = this.cod_area;
        console.log(this.precio_examen.cod_institucion);
        console.log(this.precio_examen.examen.area.cod_area);
        this.solicitudesService.obtenerexamenesporarea(this.precio_examen).subscribe(function (data1) {
            _this.examenes = data1;
            console.log(_this.examenes);
            console.log(_this.examenes.length);
            console.log(_this.form.examenes_solicitados.length);
            //compara si estos examenes ya estan asignados a la solicitud
            //this.no_mostrar_examenes_ya_asignados()
            console.log(_this.cod_precio_examen);
            console.log(data1);
            if (_this.contar_examenes_no_eliminados() == 0) {
                _this.cod_precio_examen = undefined;
            }
        });
    };
    ModificarComponent.prototype.examenseleccionar = function () {
        var _this = this;
        this.estado = false;
        console.log(this.cod_precio_examen);
        console.log($('#cod_precio_examen').val);
        this.solicitudesService.getByIdPrecio_examen(this.cod_precio_examen).subscribe(function (data) {
            _this.precio_examen = data;
            console.log("precio examen" + _this.precio_examen);
            for (var j = 0; j < _this.form.examenes_solicitados.length; j++) {
                console.log(_this.form.examenes_solicitados[j].precio_examen.cod_precio_examen);
                if (_this.cod_precio_examen == _this.form.examenes_solicitados[j].precio_examen.cod_precio_examen) {
                    _this.estado = true;
                }
            }
            console.log(_this.estado);
            if (!_this.estado) {
                _this.i++;
                console.log(data);
                console.log(_this.precio_examen);
                _this.form.examenes_solicitados[_this.i] = new _models__WEBPACK_IMPORTED_MODULE_1__["Examen_solicitado"]();
                _this.form.examenes_solicitados[_this.i].precio_examen = data;
            }
        });
        //this.form.examenes_solicitados[this.i].precio_examen=this.precio_examen
        // this.form.cod_examen='selecciona un examen'
        this.bandera = false;
    };
    ModificarComponent.prototype.contar_examenes_no_eliminados = function () {
        this.contador = 0;
        for (var _i = 0, _a = this.form.examenes_solicitados; _i < _a.length; _i++) {
            var e_so = _a[_i];
            if (e_so.estado != 'Eliminado') {
                this.contador++;
            }
        }
        return this.contador;
    };
    ModificarComponent.prototype.quitar_examen = function (cod_examen, i) {
        var _this = this;
        Swal({
            title: 'Esta seguro de eliminar este examen?',
            text: 'Sera eliminado ' + this.form.examenes_solicitados[i].precio_examen.examen.nombre + '!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d9534f',
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            closeOnConfirm: false,
        }).then(function (result) {
            if (result.value) {
                Swal.fire('Eliminado!', 'Examen eliminado', 'success');
                console.log("elimnar examen");
                console.log(_this.form.examenes_solicitados.length);
                _this.form.examenes_solicitados[i].estado = "Eliminado";
                //this.precio_examen=new Precio_examen()
                if (_this.contar_examenes_no_eliminados() == 0) {
                    _this.cod_precio_examen = null;
                }
            }
        });
        this.bandera = false;
        if (this.form.examenes_solicitados.length > 0) {
            /*
               this.form.examenes_solicitados.splice(i, 1);
             this.i--;*/
        }
        else {
            this.bandera = true;
        }
    };
    ModificarComponent.prototype.ngOnInit = function () {
        $(function () {
            'use strict';
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        });
        $(function () {
            $('#datepicker').datepicker();
            $.datepicker.regional['es'] = {
                closeText: 'Cerrar',
                prevText: '&#x3c;Ant',
                nextText: 'Sig&#x3e;',
                currentText: 'Hoy',
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
                dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mi&eacute;', 'Juv', 'Vie', 'S&aacute;b'],
                dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;'],
                weekHeader: 'Sm',
                dateFormat: 'dd-mm-yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['es']);
        });
        $(function () {
            $('#datepicker2').datepicker();
            $.datepicker.regional['es'] = {
                closeText: 'Cerrar',
                prevText: '&#x3c;Ant',
                nextText: 'Sig&#x3e;',
                currentText: 'Hoy',
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
                dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mi&eacute;', 'Juv', 'Vie', 'S&aacute;b'],
                dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;'],
                weekHeader: 'Sm',
                dateFormat: 'dd-mm-yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['es']);
        });
        //this.datePipe.transform(this.form.fecha,"yyyy-MM-dd")
        //this.datePipe.transform(this.form.fecha_entrega,"yyyy-MM-dd")
        $(function () {
            $('.fechapicker').bootstrapMaterialDatePicker({
                dateFormat: 'yyyy-mm-dd',
                clearButton: true,
                weekStart: 1,
                time: false,
            }).on('change', function (e, date) {
            });
            $('.fechaentregapicker').bootstrapMaterialDatePicker({
                dateFormat: 'yyyy-mm-dd',
                clearButton: true,
                weekStart: 1,
                time: false,
            }).on('change', function (e, date) {
            });
        });
        $(function () {
            $('.colorpicker').colorpicker();
            // Masked Input
            var $demoMaskedInput = $('.demo-masked-input');
            // Date
            $demoMaskedInput.find('.date').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });
            // Time
            $demoMaskedInput.find('.time12').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
            $demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });
            // Date Time
            $demoMaskedInput.find('.datetime').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: 'datetime', hourFormat: '24' });
            // Mobile Phone Number
            $demoMaskedInput.find('.mobile-phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
            // Phone Number
            $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
            // Dollar Money
            $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });
            // IP Address
            $demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });
            // Credit Card
            $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });
            // Email
            $demoMaskedInput.find('.email').inputmask({ alias: 'email' });
            // Serial Key
            $demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });
            // Multi-select
            $('#optgroup').multiSelect({ selectableOptgroup: true });
            // noUISlider
            var sliderBasic = document.getElementById('nouislider_basic_example');
            noUiSlider.create(sliderBasic, {
                start: [30],
                connect: 'lower',
                step: 1,
                range: {
                    'min': [0],
                    'max': [100]
                }
            });
            getNoUISliderValue(sliderBasic, true);
            // Range Example
            var rangeSlider = document.getElementById('nouislider_range_example');
            noUiSlider.create(rangeSlider, {
                start: [32500, 62500],
                connect: true,
                range: {
                    'min': 25000,
                    'max': 100000
                }
            });
            getNoUISliderValue(rangeSlider, false);
        });
        // Get noUISlider Value and write on
        function getNoUISliderValue(slider, percentage) {
            slider.noUiSlider.on('update', function () {
                var val = slider.noUiSlider.get();
                if (percentage) {
                    // val = parseInt(val);
                    val += '%';
                }
                $(slider).parent().find('span.js-nouislider-value').text(val);
            });
        }
    };
    ModificarComponent.prototype.buscar_paciente = function () {
        var _this = this;
        this.show = true;
        this.pacientesService.getByCedula(this.form.paciente.cedula).subscribe(function (data) {
            console.log(data);
            _this.pacientebuscado = data;
        }, function (error) {
        });
    };
    ModificarComponent.prototype.close = function () {
        this.IsmodelShow = true; // set false while you need open your model popup
        // do your more code
    };
    ModificarComponent.prototype.guardar_solicitud = function () {
        var _this = this;
        this.solicitudesService.guardar(this.form)
            .subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/solicitudes/listar']);
        });
    };
    ModificarComponent.prototype.modificar_solicitud = function (formsolicitud) {
        //this.form.fecha=$('#datepicker').val();
        var _this = this;
        //this.form.fecha_entrega=$('#datepicker2').val();
        if (this.form.doctor_solicitante != null) {
            this.form.doctor_solicitante.nombre = this.titleCasePipe.transform(this.form.doctor_solicitante.nombre);
            this.form.doctor_solicitante.ap = this.titleCasePipe.transform(this.form.doctor_solicitante.ap);
            this.form.doctor_solicitante.am = this.titleCasePipe.transform(this.form.doctor_solicitante.am);
        }
        console.log(this.form.fecha);
        this.form.cedula_usuario = this.currentUser.cedula,
            this.form.fecha = $('#fecha').val();
        this.form.fecha_entrega = $('#fecha_entrega').val();
        this.form.fecha = this.datePipe.transform(this.form.fecha, 'dd-MM-yyyy');
        this.form.fecha_entrega = this.datePipe.transform(this.form.fecha_entrega, 'dd-MM-yyyy');
        //this.form.examenes_solicitados.splice(this.form.examenes_solicitados.length-1, 1);
        console.log(this.form);
        console.log(this.form.examenes_solicitados[this.form.examenes_solicitados.length - 1].estado);
        if (formsolicitud.valid && this.contar_examenes_no_eliminados() > 0) {
            this.solicitudesService.modificar(this.form)
                .subscribe(function (data) {
                alert("Solicitud actualizada");
                console.log(data);
                _this.router.navigate(['/solicitudes/listar']);
            }, function (error) {
                _this.router.navigate(['/solicitudes/modificar']);
            });
        }
        console.log(this.contar_examenes_no_eliminados());
        if (this.contar_examenes_no_eliminados() == 0) {
            this.bandera = true;
        }
    };
    ModificarComponent.prototype.institucionbuscar = function (cod_institucion) {
        var _this = this;
        this.cod_area = null;
        this.cod_precio_examen = null;
        console.log(this.form.institucion.cod_institucion);
        for (var j = 0; j < this.form.examenes_solicitados.length; j++) {
            this.form.examenes_solicitados[j].estado = "Eliminado";
        }
        this.precio_examen = new _models__WEBPACK_IMPORTED_MODULE_1__["Precio_examen"]();
        this.solicitudesService.getInstitucion(this.form.institucion.cod_institucion).subscribe(function (insti) {
            _this.form.institucion = insti;
            console.log(insti);
            if (_this.form.institucion.cod_institucion_padre == 'SIS') {
                console.log("sis");
                _this.precio_examen.cod_institucion = _this.form.institucion.cod_institucion_padre;
            }
        });
        console.log("cod insitucionpadre desolictud" + this.form.institucion.cod_institucion_padre);
        console.log("nombreinsituc desolictud" + this.form.institucion.nombre);
        this.precio_examen.cod_institucion = this.form.institucion.cod_institucion;
        //this.cod_precio_examen=this.form.examenes_solicitados[this.i].cod_precio_examen
    };
    ModificarComponent.prototype.imprimir = function (e) {
        window.print();
    };
    ModificarComponent.prototype.printDiv = function (divName) {
        var divToPrint = document.getElementById(divName).innerHTML;
        var newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        newWindow.document.open();
        newWindow.document.write("\n  <html>\n      <head>\n        <title>Print tab</title>\n        <style>\n        \n        </style>\n      </head>\n      <body onload=\"window.print();window.close()\">" + divToPrint + "   \n      </body>\n    </html>\n  ");
        newWindow.document.close();
    };
    ModificarComponent.prototype.agregarDoctor = function () {
        this.mostrar_doctor = true;
        this.form.doctor_solicitante = new _models__WEBPACK_IMPORTED_MODULE_1__["Persona"]();
    };
    ModificarComponent.prototype.removerDoctor = function () {
        this.mostrar_doctor = false;
        this.form.doctor_solicitante = null;
    };
    ModificarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar',
            template: __webpack_require__(/*! ./modificar.component.html */ "./src/app/solicitudes/modificar/modificar.component.html"),
            styles: [__webpack_require__(/*! ./modificar.component.css */ "./src/app/solicitudes/modificar/modificar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_2__["PacientesService"], _solicitudes_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ModificarComponent);
    return ModificarComponent;
}());



/***/ }),

/***/ "./src/app/solicitudes/registrar/registrar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/solicitudes/registrar/registrar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap Colorpicker v2.3.3\n * http://mjolnic.github.io/bootstrap-colorpicker/\n *\n * Originally written by (c) 2012 Stefan Petre\n * Licensed under the Apache License v2.0\n * http://www.apache.org/licenses/LICENSE-2.0.txt\n *\n */\n.colorpicker-saturation {\n  width: 100px;\n  height: 100px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAP9klEQVR4XnRWC47rNgwcKjlA0bv2VL1Qi/YELRav7203iS1ppqZoiXCAhuBHVLI74xFtG3/Hz2joIOjRGuR5eMYuRn9YA1fds859KX8ZvczLr9/pImiR3Rqky9/wlajRIdVE/1Rufeu/0No3/ASgBZAJUkwgi0iCaEatekJJoEqiTQncd67/gyOfRCZshTed0Nl8LbLj8D6qxtoq9/7kJz/aH/3Xfu8VwI5+AUH8DxE7gUyiIpZ5LwiGzUqE3CScJsCDQHAsvBnxWpkbC0QMHmBp6latWS0bnvrCN/x1+xPfce+Ij0GAyeAGGz15sOiax2UylPhKrFaMPnVWClwepKh07hdhkVDsK2uoyEIySergjdbY2VBtV8VLr8Mf9mF/4wMb7kR8FOhzFWZZe7HIZD9JRIbee28eJKBweTB6TwjYkAgWaUmtDveGw1Wx3zZ76YlPPfQd/+gTTUFkiGiJ+NQAszU1EPT/QJEgufolAMPkNU4CVOyUIBLg4xglEZHGQnTFOFV0VaulYddBhA986ge/7N/yQi/3flFgwfQq2ibLnTDBRl9TmUHyJASPV/eoN0UISIr+ICQKIFV4EpljSjV1uFVUq9hRtet5e9gXvuyHPW0zMhQxWaoBBa9Tg8vsCEhww23Smd0CKjIkmPIoxWrUBDgJqFCyESF43ctQxLUoHN7Q1KyVhqrNNm3cy2vMyQNPVKjc29Rh5SSU+giWdRJHkLnQG71FQEuNyNGBTDdBQQAKCuGiEUS/jcyGbkMPq931OIzb/dUPGuVlG7f+slqkO5NAAlzTMdcq0NkzmsEBmAQkbI+pSHbiqnuWIA6lijhvqwIxMyWxMGZiPU669XJE1tADDTs2HWpwKxuqdnTpOiOR42xlzLtm3pXGel3xd8/oTs8Xy0MV8GM1RlsC2Y3Wy3wut3M+2mEVux0Gt9fhzTWyLvGiiJYaqY5DWRFIwAiQ5r6gB9GpQihJw4I9j5Mkscj3BnzGjBhv8xna5P1Jo428o6IOPY5KFZtVOkEKqUjqQY9Gi+jrIOFwJUDzRtA9xyoIrGGmkNRmxVAnZoK+TkUIeUYni5wEzgOG5iZX5HCr2JyQNqdk++G0rgb1ochSIGutTj4P7F0PuRUAolmh5sCzAHn1BYyaADh6bgFeoBx6vst091CEvcSLWBBpqGq384jZ5llVHSwEShLx+D4d0mU3D5eEAJQ9KEhOZUYnDENV2qKgmIlQhWfdvcoXYaegPp/n1oKIOgYFqxrzQSciqNhv/5FqPpy6b0UcX2vf13DfWySRSEgkEYlEJJGQSyKJSEQSCYlEEpHexIVO3XOevffze2a+PfPv9x1rne1c3b3Mmlmz9mE++zuzngfnw/E+Dlc4LL4NwHdFy7u3KGPVmZ6/4eeMoDyre3i/KHADIHYO04w9zO0mAotuKnrc7XaPjvu66bNe5cDT7RlPepEnfS2X8dF1/utDvD+OwGDBxEgQywLCvIMYWBY+DShwAAORAdv9PswhDAqOUCi5+71AbFcDMR4xBDNfhySKXPXZ1+Vub+Q1Ltf5z7eC0AjVldHI26rIFdKIAyYBJCFVUhVDwttAnM52B3Ect1TFQXzJ0z33lOuib/QO8g+CuO0gKBRU80A8hkeJ0b1KRQWmFQVSh8mf3lpUpNaRulzN5NArrmKKGMijXgzk7w5ijdFVgT8f1IdFNjVWjDWicUYWEEMmSFDtILdzHW5XueHp7p+yuS54ep5/c5BE2Gw/gWPNYU4/PZaak2VGEsFjSbOf8irea6KQgojGCk0KxZY31tWWgzwayF8N5KYyo3VADVicWWrhwzr3ZqIOa5xW5zbqMPPMiyDURHDIHQTeWq7KFXcQPOqzPOL5Ov/iIDEDy7DHEwx0PTgjO8SS0fOEHcZNMt+XKEFMj8Q4QUSvPu6HPuvd4N9/x12RPwcIVRCAakSOUzHgsUSMFWYzDQ+PiOJqAOuYc9jh5TecnA+xHfFyOYhebeTH89P80wrCJzUjlsx7euIV0g4zQFUSiBPioIWBACFC7GgDj8P91ZSJOQmQP74MAnQo8H5RIe8kZ0kBcQCMAlEpRDiKROBxbR0ksdhWFq0gR9q9uQzkDzuIFQSPqAgRCAsCaVNF2ZAAhxvtzcqcnDk6tpXxSsayqXLIgSOb6zqeH+fvO0i9XEu5EVV+OZehRZJ6BGTeaRhCkTzVIZeAzaWGAFfErIPogQI5CuR3HQQx7DzBB16R3s7e0MBUPedjWutgG/JUTPqMeAQNEiytJRnJearWUgdwFNxN7rtBoECuj/O3BMHaTIxQ0a4GctireElTJHJvLTaalih5kvBCGMvkdESUMAdCFaI4yG8SpDfRWAptqkAJUwCG6B7lOREFSZBqKs57MEHqVJEBwHa2lp0OiKtiQ18gx9P89QrSXyc0vObBM4vPmBADqJZLAo/yzK7qPSZstCy+fDSZlhrm+Zkyjsf5q2otdC14zkLjHLf0me9wjNqQo0B1a6wBJRaIEgC2Qw9oby/cRHA+xHCQy/xlB1HVSV3Y/5yVhsc7dBi2UoIWCMcbELZWgxNCGUZ5y4ceBaLlE8dAfrEosrYT+z8ya3sxXndFBxuQivNGEHFCbLGBlBLKGYHZoeoQpcjtMn/uICPefcxecpuDOEemg9S/44cflZPIlWolyHkLrEpgbS9IQRlAgZgi0WDjsEiPh+PN/Fkogq4GdzPtarlRGW2tJwEK1RMTEvdVdmhAKHO1pdUuGQsVcX+rSfGzDbwGyE8NRPQc83HCaOkTZwPqABZBdFq8zAN1gue0FPO8wYUFBE1WkMwVzM1iQ4BItFh+H36Qy/yJg0DRQICmBl+tbKUC5cCj3yXI+SUFBS78ZAcBtHt+e9lBuiqpTNh9zTvIjzuIWxVYGQJpAZY+VWS3QKh84iSZbwuIdiDpc4KztQa/sjhMaDJEJDSZ8mZ+kCBdC0JpKVNQzZdKu+EsOeFCosrngVAkDS/uy6iGnW7UxmMpkB8FyFKo6iQW8z1HuBdMu1pdkZdB8jWTjlFtNaiJRYniIDcD+eECMqFLS9ED6DgxzCMKnRD3HYYA2uMCJUh70OK8G0EUnJV8lqe8nj84QdqLhdoJskNlEw1ivajM8LtPBhIeN99LESXI9xcQIHFQudHngZjUhXOQeGlUYmAddh5pxMhzV0M1vMAtMFIVmfp6fq+DgEWefjQVenstaqUy3bJQAiVlEihDghCDINFQg8oUhoQPkO8SBEM7SFQ72VYBwPuE7k8uYF5LNwg/TEd2zkuKjIIhTiJRlYrDfNS1QL7DYUcbcCyKJNwOwucVCVSwBBj/DwghXA2hQtACgCBBPprfXkAIFIYRXhONQARFU00Tsh6LEmmQUbkTImMi9me5qaHDIeBgHeRbdxAIqAJBCDSoCNVQglrciqX/ZCD9RRP6rgpBvhmKAFhg2ForBLXBYPtUjj7vCHPe8SXbYAY47gHB9mKeqjjIg/53fmMD0fR9Bug7SFcHI6EA1OC/E8QTL4NgBSGiCiyTChnI1zcQxmyfRZGM6w701KRybDvsIK3LWDx6mxGkcglEZQLkawnCdppZ6sgCh8trWWBUQaUWCEOlOs7HAenFE45QSu9RQQDAqchXNxDq4orQR44qRIFUQvM+mRJuB6GDEixgCbSBQGXghEEbdn1P/zO/QhAWCsWsmRhLa2VFkSZIgSVKmgEQhvk6K8YKMRZl7Dwg4amOUYvFBfLlE4RasOCB5S9PXKq0AqGDMiYIReXF0mYctITWBmqR5F38X5Y7yJfeCtKBzNbWYm5XpsMpf3dRZD3jPDesvdVCOs6KYQXIFw1E4fcE8dHWOepZBXpLJcACWUZVMRZbfvgXR4Ak8A7VVSKSVuu9p6/mFxyE7cOWavtLp952O8huK83+gmHzHaAsVXLgAvl8gPCvHzAFsM8GNXGKPH5cmN02sXTLa8QdKRXMzHv67/k5A9k1UIx36UH/VlWWtuKssNiRapB6BaLXl6MA+ayDcNS3v/sYXgCL620F1kk8QhKAEOvKu4DvajDO5zkHc4fBg76anyEIIcamBPex5EK8AoVHhMW7QAqWrYD1204CJB1hCfOAV/PTBPH0zBmJmsZZKCEaAmdqm4zMcYxYLN0JuHThIAjirAnp3px7TRgD+ZSD/K92M1CNIgbC8Ex7FkSEIlQEEUQEQQQBRBABEUQQEQTx3X0Evap9AhP39jL5OvuzAWuvbDaTTDIzX2aypUCJ0i7nAigoQAk9gUIUSxXEoCFyyVIuL9ZQcMZoArnwr4D0OLS8jGNGTgGnsZQWMYrcOARoIReAALBeWhf+RUCAIEsECFQHLkwR5zj4JW3t5WOUU5djvgQIawD53EDsctmYz8xGaZGPBUR3qNkiGwqDICUYIFpqBgRaayCfFiAWR2wWvoobmzxdF8N5kyxXmvap/sgGcLF/aoBosbG+lE395R8zCA4BqUYgOgYq+HtvBrT0LK15X8lZwx5f9klCX0rdgXzIIGbdhXMqZtHzJhuptEjmsFc4KzmN5IFPtfM7gWw2kPczSIqQSPUDYKYBMamsBCpKphW0iA5H8AbMDPJOQYjLZg1Vk4G49GlCYNYAkdOd0kwRQ8FCyAHydgLZ6Z2AqrVtjDUQ7hCEmrkEooDAsB2YnBCvkBpZ6yBvJpCd7Mn5zJ6C4QF2BUQPgHEIGUrGnHzQ8rlMekBeTyAzwDJksxwM4+w3BY02B8mIl0CmFRm+ZscxAuSnvwqQsECTIGSV6FEoJFTygVuzB5xAsKqBvAQE3+nkVoJDI1BJIaPBWik7ZSu5NIp5A3mRQaTFvLgkO9fVgEgMqqeVfb+p55tijWH+Kea71ubq4v8Sl8089sZKbKEZNq+VUfISJJF7j79WrbYgS994ZEf+nIz0pNFRWqapSmK6P45i3OQuItIiPDyg6RnxZ4D0g+CFPxAzluoRsWsaA6I6JOqVWCisDvJ0BgHTzMSRgMi0vmi8R+sR6tg/XUh7kCc7kMRqSNkTBDx0OkAUegFcMazciBXNpm798R6klXap/WZz49TQwBHqEcj4oCToUPjUuP9lfxcbyKMAwT6bTf1qqIIQDl3i5oCERNmVm0wgW4A8BGRxMX3hWh8bEV5Rvfp4DS5F3djWH2ztDNWKW7OBjgjIwsDWaKRknJjqMsh9QCa1p608lLovFkBE969DYtYelSzwSRcg535vAsFeNU9SzRCYZb4LDmxmFQKkwYGM+5y/G7b1uxMIylLdyE5yxIyYsoXWhQIpzQhYPi3JkJoKkB9+BxD0OMuyOEBe36DgyPSrxscmATldgKj8PxrkA/kA5PYMgkrocwIQ6GSRGmF0VaNqBKQZ5FYDEZSDzFTzq9mBQjAayE1A+ryDTzcQZe0Ibbxj7EwpAmTrJwEimZR9CCPtODhzxuNtY19Zd2Lf/fjCTnEiDAOg62j1utb/dv9mZ/aHCj4AyOHbsW3/As0BTzIgeJU7AAAAAElFTkSuQmCC\");\n  cursor: crosshair;\n  float: left;\n}\n.colorpicker-saturation i {\n  display: block;\n  height: 5px;\n  width: 5px;\n  border: 1px solid #000;\n  border-radius: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: -4px 0 0 -4px;\n}\n.colorpicker-saturation i b {\n  display: block;\n  height: 5px;\n  width: 5px;\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\n.colorpicker-hue,\n.colorpicker-alpha {\n  width: 15px;\n  height: 100px;\n  float: left;\n  cursor: row-resize;\n  margin-left: 4px;\n  margin-bottom: 4px;\n}\n.colorpicker-hue i,\n.colorpicker-alpha i {\n  display: block;\n  height: 1px;\n  background: #000;\n  border-top: 1px solid #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  margin-top: -1px;\n}\n.colorpicker-hue {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAMAAABw8qpSAAABLFBMVEXqFBb/ABH/ACL/ADH/AEH/AFD/AGD/AG7/AH7/AI3/AJ3/AKz/ALz/AMr/ANv/AOr/APr2AP/mAP/XAP/HAP+4AP+oAP+aAP+JAP97AP9rAP9cAP9MAP8+AP8tAP8fAP8PAP8BAv8AEP8AH/8AL/8APv8ATv8AXP8Abf8Ae/8Ai/8Amv8Aqv8AuP8Ayf8A1/8A5/8A9/8A//gA/+kA/9kA/8oA/7oA/6wA/5sA/40A/30A/24A/14A/1AA/z8A/zEA/yEA/xEB/wMN/wAd/wAs/wA8/wBK/wBb/wBp/wB5/wCI/wCY/wCm/wC3/wDF/wDV/wDk/wD1/wD/+gD/7AD/3AD/zAD/vgD/rQD/nwD/jgD/gAD/cAD/YgD/UQD/QwD/MgD/JAD/FAD4Eg42qAedAAAAh0lEQVR4XgXAg3EDAAAAwI9to7Zt27a1/w49BASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTS1tHXo1KVbj159+g0YNGTYiFFjxk2YNGXajFlz5i1YtGTZilVr1m3YtGXbjl179h04dOTYiVNnzl24dOXajVt37j149OTZi1dv3n349OXbj19//wOxE1dQ8reGAAAAAElFTkSuQmCC\");\n}\n.colorpicker-alpha {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAABkCAQAAAAVxWkcAAABr0lEQVR4Xo2VwU0DQQxF7dmRuNIFlzlSAR3QAaXQQdIBJVABFXDcOVAAd67cjJLR07dkhcSrkZKfb/t7bG88rFo3B5gZPMNycItu2xloGV7MWHzM9zuzFWCkmA0nK6AszCUJDW6+mG6R03ncw5v8EMTEvZ2O3AliYjpslblc0RF9LmZYWxURU6aKytWZYsoWCAe+xwOZp1GsEukGiIkYxcQCHck99+gRgB7JncyIB5SGEhP3Yh5P6JwX+u6AnYot104d8DJT7uH7M9JH6OZbimj0vfMVaYnJIZFJDBW9kHlerL2C6JV4mSt7uuo2N57RxnZ+usQjn0R1jwBJBrNO3evJpVYUWsJ/E3UiXRlv24/7YZ04xmEdWlzcKS+B/eapeyMvFd2k0+hRk/T0AmTW8h69s2sjYMsdPntECiILhAeIMZAeH4QvUwfn6ijC0tTV+fT9ky8jM9nK2g7Ly1VjSpKYq6IvsAm7MtNu1orEqa/K3KNvgMFdhfquPfJmp2dbh0/8Gzb6Y22ViaNr6n5410zXdngVhbu6XqdOtWOuin5hjABGp4a2uotZ71MVCfwDBt2/v37yo6AAAAAASUVORK5CYII=\");\n  display: none;\n}\n.colorpicker-saturation,\n.colorpicker-hue,\n.colorpicker-alpha {\n  background-size: contain;\n}\n.colorpicker {\n  padding: 4px;\n  min-width: 130px;\n  margin-top: 1px;\n  border-radius: 4px;\n  z-index: 2500;\n}\n.colorpicker:before,\n.colorpicker:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n.colorpicker:after {\n  clear: both;\n}\n.colorpicker:before {\n  content: '';\n  display: inline-block;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: -7px;\n  left: 6px;\n}\n.colorpicker:after {\n  content: '';\n  display: inline-block;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #ffffff;\n  position: absolute;\n  top: -6px;\n  left: 7px;\n}\n.colorpicker div {\n  position: relative;\n}\n.colorpicker.colorpicker-with-alpha {\n  min-width: 140px;\n}\n.colorpicker.colorpicker-with-alpha .colorpicker-alpha {\n  display: block;\n}\n.colorpicker-color {\n  height: 10px;\n  margin-top: 5px;\n  clear: both;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAABkCAQAAAAVxWkcAAABr0lEQVR4Xo2VwU0DQQxF7dmRuNIFlzlSAR3QAaXQQdIBJVABFXDcOVAAd67cjJLR07dkhcSrkZKfb/t7bG88rFo3B5gZPMNycItu2xloGV7MWHzM9zuzFWCkmA0nK6AszCUJDW6+mG6R03ncw5v8EMTEvZ2O3AliYjpslblc0RF9LmZYWxURU6aKytWZYsoWCAe+xwOZp1GsEukGiIkYxcQCHck99+gRgB7JncyIB5SGEhP3Yh5P6JwX+u6AnYot104d8DJT7uH7M9JH6OZbimj0vfMVaYnJIZFJDBW9kHlerL2C6JV4mSt7uuo2N57RxnZ+usQjn0R1jwBJBrNO3evJpVYUWsJ/E3UiXRlv24/7YZ04xmEdWlzcKS+B/eapeyMvFd2k0+hRk/T0AmTW8h69s2sjYMsdPntECiILhAeIMZAeH4QvUwfn6ijC0tTV+fT9ky8jM9nK2g7Ly1VjSpKYq6IvsAm7MtNu1orEqa/K3KNvgMFdhfquPfJmp2dbh0/8Gzb6Y22ViaNr6n5410zXdngVhbu6XqdOtWOuin5hjABGp4a2uotZ71MVCfwDBt2/v37yo6AAAAAASUVORK5CYII=\");\n  background-position: 0 100%;\n}\n.colorpicker-color div {\n  height: 10px;\n}\n.colorpicker-selectors {\n  display: none;\n  height: 10px;\n  margin-top: 5px;\n  clear: both;\n}\n.colorpicker-selectors i {\n  cursor: pointer;\n  float: left;\n  height: 10px;\n  width: 10px;\n}\n.colorpicker-selectors i + i {\n  margin-left: 3px;\n}\n.colorpicker-element .input-group-addon i,\n.colorpicker-element .add-on i {\n  display: inline-block;\n  cursor: pointer;\n  height: 16px;\n  vertical-align: text-top;\n  width: 16px;\n}\n.colorpicker.colorpicker-inline {\n  position: relative;\n  display: inline-block;\n  float: none;\n  z-index: auto;\n}\n.colorpicker.colorpicker-horizontal {\n  width: 110px;\n  min-width: 110px;\n  height: auto;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-saturation {\n  margin-bottom: 4px;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-color {\n  width: 100px;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-hue,\n.colorpicker.colorpicker-horizontal .colorpicker-alpha {\n  width: 100px;\n  height: 15px;\n  float: left;\n  cursor: col-resize;\n  margin-left: 0px;\n  margin-bottom: 4px;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-hue i,\n.colorpicker.colorpicker-horizontal .colorpicker-alpha i {\n  display: block;\n  height: 15px;\n  background: #ffffff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  border: none;\n  margin-top: 0px;\n}\n.colorpicker.colorpicker-horizontal .colorpicker-hue {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAABCAMAAAAfBfuPAAABLFBMVEXqFBb/ABH/ACL/ADH/AEH/AFD/AGD/AG7/AH7/AI3/AJ3/AKz/ALz/AMr/ANv/AOr/APr2AP/mAP/XAP/HAP+4AP+oAP+aAP+JAP97AP9rAP9cAP9MAP8+AP8tAP8fAP8PAP8BAv8AEP8AH/8AL/8APv8ATv8AXP8Abf8Ae/8Ai/8Amv8Aqv8AuP8Ayf8A1/8A5/8A9/8A//gA/+kA/9kA/8oA/7oA/6wA/5sA/40A/30A/24A/14A/1AA/z8A/zEA/yEA/xEB/wMN/wAd/wAs/wA8/wBK/wBb/wBp/wB5/wCI/wCY/wCm/wC3/wDF/wDV/wDk/wD1/wD/+gD/7AD/3AD/zAD/vgD/rQD/nwD/jgD/gAD/cAD/YgD/UQD/QwD/MgD/JAD/FAD4Eg42qAedAAAAbUlEQVR4XgXAghEDsbxtlrZt27ax/w49ACAYQTGcICmaYTleECVZUTXdMC1Wm93hdLk9Xp8/EAyFI9FYPJFMpTPZXL5QLJUr1Vq90Wy1O91efzAcjSfT2XyxXK03293+cDydL9fb/fF8vT/f3x+LfRNXARMbCAAAAABJRU5ErkJggg==\");\n}\n.colorpicker.colorpicker-horizontal .colorpicker-alpha {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAKCAQAAADoFTP1AAAB9ElEQVR4XoWTQW4VMRBEu9qWEimL7DhEMp8NF+ASnJJLcAQgE1bcgBUSkYKUuHCrZ9pjeqSU5Yn9LPu7umJQBIIv+k7vIOrtK66L4lmr3pVOrOv3otp619KZ0/KjdNI79L52Uo09FBQWrU0vfe5trezU+hLsoUKd3Repovte+0vbq/7Lj5XbaHECKasR9G4MPlbp+gzZxd6koPEJCkAYC5SjcOTAIIOK90Dja1IfIZ8Z+zAY9jm3b5Ia+MT5sFcqRJrR2AYYA8Kua5BzYRrFPNmD4PQMegGJMOffJJUsWiI3nCHZZjInNdffLWOufzbc3JaboCAVxwmnRHbhLSPwRJ4wU0BRSc6HkECYYVw95nMKgJOcylxrJttE5Ibzf9Xq9GPvP+WX3MiV/MGHfRu/SentRQrfG1GzsIrytdNXucSRKxQNIGHM9YhGFQJcdjNcBZvfJayuYe4Sia1CzwW+19mWOhe37HsxJWKwbu/jluEU15QzAQjAqCEbhMJc78GYV2E0kooHDubUImWkTOhGpgv8PoT8DJG/bzxna4BZ0eOFSOaLADGeSpFsg5AzeaDZIDQQXjZ4y/8ryfzUXBwdELRjTjCNvOeT0rNlrJz90vwy6N9pXXQEluX0inElpPWokSdiLCfiNJJjMKQ8Qsh8GEKQKMo/eiHrNbI9UksAAAAASUVORK5CYII=\");\n}\n.colorpicker.colorpicker-hidden {\n  display: none;\n}\n.colorpicker.colorpicker-visible {\n  display: block;\n}\n.colorpicker-inline.colorpicker-visible {\n  display: inline-block;\n}\n.colorpicker-right:before {\n  left: auto;\n  right: 6px;\n}\n.colorpicker-right:after {\n  left: auto;\n  right: 7px;\n}\n.colorpicker-no-arrow:before {\n  border-right: 0;\n  border-left: 0;\n}\n.colorpicker-no-arrow:after {\n  border-right: 0;\n  border-left: 0;\n}\n.ms-container{\n  background: transparent url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAB40lEQVR4AWIgG4wCAKvkAPJXFAXwGRnLrqVlj5kva7bDZ+Nv27ZtG7kpY3zZC7Pe2T13Nq/5OxQKhasqlcrzX6FyudyRy+VArVZn/xtUKpU6isUi5PN50Ol03d/5sz0Wi73JZDLch55Op7lUKsUlk0kukUjgDAgtFAqAGhuNxuu/gu7ED41GA+r1Ou21Wg2q1SpUKhUolUpAhEA8HodwOAzBYBACgQBIJJLBN6S1tTWGBODiV1AKQ83wo9PpBIvFAlarFex2O9273W5wOBxvrl69uvgFkM/nnyIgzmAwpMh2q0KhKBJfdbCLRKK8QCBIkzdpnLETn95CmMfjQfir8+fPH/8aOIkOR40o9DfK9PS0yOfzocbPjhw5cuiLS6KFEB2NfkKTiTmPlUolS3KQ1Wg0rFarZYm2LBHGkmDgfActmZ+fl5hMpof79u3b/QVQLBZbSGRpWmSzWXgvGWw2G/oIXC4XNQ873qFPcUafMwyzh5Rd38u1McIQjJDvBIACvV4v+P1+GmWcEfoz12xaX19PIshsNlOgXq9/u7fA3HILGAS3gEEAxsBccwsYDLeAwQCir4LSMaEwZ0xMTKwAhtdfkKHAIJlOtWwXERERBYyE32BDqQn8/f3tcnNzg8k2YBQAAOLgc5CbVSwBAAAAAElFTkSuQmCC') no-repeat 50% 50%;\n  width: 370px;\n}\n.ms-container:after{\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  font-size: 0;\n  clear: both;\n  min-height: 0;\n  visibility: hidden;\n}\n.ms-container .ms-selectable, .ms-container .ms-selection{\n  background: #fff;\n  color: #555555;\n  float: left;\n  width: 45%;\n}\n.ms-container .ms-selection{\n  float: right;\n}\n.ms-container .ms-list{\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border linear 0.2s, box-shadow linear 0.2s;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  position: relative;\n  height: 200px;\n  padding: 0;\n  overflow-y: auto;\n}\n.ms-container .ms-list.ms-focus{\n  border-color: rgba(82, 168, 236, 0.8);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);\n  outline: 0;\n  outline: thin dotted \\9;\n}\n.ms-container ul{\n  margin: 0;\n  list-style-type: none;\n  padding: 0;\n}\n.ms-container .ms-optgroup-container{\n  width: 100%;\n}\n.ms-container .ms-optgroup-label{\n  margin: 0;\n  padding: 5px 0px 0px 5px;\n  cursor: pointer;\n  color: #999;\n}\n.ms-container .ms-selectable li.ms-elem-selectable,\n.ms-container .ms-selection li.ms-elem-selection{\n  border-bottom: 1px #eee solid;\n  padding: 2px 10px;\n  color: #555;\n  font-size: 14px;\n}\n.ms-container .ms-selectable li.ms-hover,\n.ms-container .ms-selection li.ms-hover{\n  cursor: pointer;\n  color: #fff;\n  text-decoration: none;\n  background-color: #08c;\n}\n.ms-container .ms-selectable li.disabled,\n.ms-container .ms-selection li.disabled{\n  background-color: #eee;\n  color: #aaa;\n  cursor: text;\n}\n.spinner.input-group .input-group-addon .spin-up,\n.spinner.input-group .input-group-addon .spin-down {\n  height: 10px;\n  width: 10px;\n  overflow: hidden;\n  display: block;\n  text-align: center;\n  color: #999;\n}\n.spinner.input-group .input-group-addon .spin-up:hover,\n.spinner.input-group .input-group-addon .spin-down:hover {\n  color: #555;\n}\n.spinner.input-group .input-group-addon .spin-up .fa,\n.spinner.input-group .input-group-addon .spin-down .fa {\n  margin-top: -8px;\n  vertical-align: middle;\n}\n.spinner.input-group .input-group-addon .spin-up .glyphicon,\n.spinner.input-group .input-group-addon .spin-down .glyphicon {\n  font-size: 10px;\n  top: -2px;\n}\n.spinner.input-group .input-group-addon a.spin-up,\n.spinner.input-group .input-group-addon a.spin-down {\n  text-decoration: none;\n}\n.spinner.input-group .input-group-addon button.spin-up,\n.spinner.input-group .input-group-addon button.spin-down {\n  background: none;\n  border: none;\n  padding: 0;\n}\n.spinner.input-group.input-group-sm .input-group-addon .spin-up,\n.spinner.input-group.input-group-sm .input-group-addon .spin-down {\n  height: 8px;\n}\n.spinner.input-group.input-group-sm .input-group-addon .spin-up .fa,\n.spinner.input-group.input-group-sm .input-group-addon .spin-down .fa {\n  margin-top: -12px;\n}\n.spinner.input-group.input-group-sm .input-group-addon .spin-up .glyphicon,\n.spinner.input-group.input-group-sm .input-group-addon .spin-down .glyphicon {\n  font-size: 8px;\n  top: -5px;\n}\n.spinner.input-group.input-group-lg .input-group-addon .spin-up,\n.spinner.input-group.input-group-lg .input-group-addon .spin-down {\n  height: 12px;\n  width: 12px;\n}\n.spinner.input-group.input-group-lg .input-group-addon .spin-up .fa,\n.spinner.input-group.input-group-lg .input-group-addon .spin-down .fa {\n  margin-top: -16px;\n}\n.spinner.input-group.input-group-lg .input-group-addon .spin-up .glyphicon,\n.spinner.input-group.input-group-lg .input-group-addon .spin-down .glyphicon {\n  font-size: 12px;\n  top: -6px;\n}\n.bootstrap-tagsinput {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  display: inline-block;\n  padding: 4px 6px;\n  color: #555;\n  vertical-align: middle;\n  border-radius: 4px;\n  max-width: 100%;\n  line-height: 22px;\n  cursor: text;\n}\n.bootstrap-tagsinput input {\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit;\n}\n.bootstrap-tagsinput.form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1;\n}\n.bootstrap-tagsinput.form-control input:-ms-input-placeholder {\n  color: #777;\n}\n.bootstrap-tagsinput.form-control input::-webkit-input-placeholder {\n  color: #777;\n}\n.bootstrap-tagsinput input:focus {\n  border: none;\n  box-shadow: none;\n}\n.bootstrap-tagsinput .tag {\n  margin-right: 2px;  \n}\n.bootstrap-tagsinput .tag [data-role=\"remove\"] {\n  margin-left: 8px;\n  cursor: pointer;\n}\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:after {\n  content: \"x\";\n  padding: 0px 2px;\n}\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:hover {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:hover:active {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n/*!\n * Bootstrap-select v1.12.4 (http://silviomoreto.github.io/bootstrap-select)\n *\n * Copyright 2013-2017 bootstrap-select\n * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)\n */\n.color-rojo{\n  background-color: red;\n}\nselect.bs-select-hidden,\nselect.selectpicker {\n  display: none !important;\n}\n.bootstrap-select {\n  width: 220px \\0;\n  /*IE9 and below*/\n}\n.bootstrap-select > .dropdown-toggle {\n  width: 100%;\n  padding-right: 25px;\n  z-index: 1;\n}\n.bootstrap-select > .dropdown-toggle.bs-placeholder,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,\n.bootstrap-select > .dropdown-toggle.bs-placeholder:active {\n  color: #999;\n}\n.bootstrap-select > select {\n  position: absolute !important;\n  bottom: 0;\n  left: 50%;\n  display: block !important;\n  width: 0.5px !important;\n  height: 100% !important;\n  padding: 0 !important;\n  opacity: 0 !important;\n  border: none;\n}\n.bootstrap-select > select.mobile-device {\n  top: 0;\n  left: 0;\n  display: block !important;\n  width: 100% !important;\n  z-index: 2;\n}\n.has-error .bootstrap-select .dropdown-toggle,\n.error .bootstrap-select .dropdown-toggle {\n  border-color: #b94a48;\n}\n.bootstrap-select.fit-width {\n  width: auto !important;\n}\n.bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) {\n  width: 220px;\n}\n.bootstrap-select .dropdown-toggle:focus {\n  outline: thin dotted #333333 !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n  outline-offset: -2px;\n}\n.bootstrap-select.form-control {\n  margin-bottom: 0;\n  padding: 0;\n  border: none;\n}\n.bootstrap-select.form-control:not([class*=\"col-\"]) {\n  width: 100%;\n}\n.bootstrap-select.form-control.input-group-btn {\n  z-index: auto;\n}\n.bootstrap-select.form-control.input-group-btn:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.bootstrap-select.btn-group:not(.input-group-btn),\n.bootstrap-select.btn-group[class*=\"col-\"] {\n  float: none;\n  display: inline-block;\n  margin-left: 0;\n}\n.bootstrap-select.btn-group.dropdown-menu-right,\n.bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right,\n.row .bootstrap-select.btn-group[class*=\"col-\"].dropdown-menu-right {\n  float: right;\n}\n.form-inline .bootstrap-select.btn-group,\n.form-horizontal .bootstrap-select.btn-group,\n.form-group .bootstrap-select.btn-group {\n  margin-bottom: 0;\n}\n.form-group-lg .bootstrap-select.btn-group.form-control,\n.form-group-sm .bootstrap-select.btn-group.form-control {\n  padding: 0;\n}\n.form-group-lg .bootstrap-select.btn-group.form-control .dropdown-toggle,\n.form-group-sm .bootstrap-select.btn-group.form-control .dropdown-toggle {\n  height: 100%;\n  font-size: inherit;\n  line-height: inherit;\n  border-radius: inherit;\n}\n.form-inline .bootstrap-select.btn-group .form-control {\n  width: 100%;\n}\n.bootstrap-select.btn-group.disabled,\n.bootstrap-select.btn-group > .disabled {\n  cursor: not-allowed;\n}\n.bootstrap-select.btn-group.disabled:focus,\n.bootstrap-select.btn-group > .disabled:focus {\n  outline: none !important;\n}\n.bootstrap-select.btn-group.bs-container {\n  position: absolute;\n  height: 0 !important;\n  padding: 0 !important;\n}\n.bootstrap-select.btn-group.bs-container .dropdown-menu {\n  z-index: 1060;\n}\n.bootstrap-select.btn-group .dropdown-toggle .filter-option {\n  display: inline-block;\n  overflow: hidden;\n  width: 100%;\n  text-align: left;\n}\n.bootstrap-select.btn-group .dropdown-toggle .caret {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  margin-top: -2px;\n  vertical-align: middle;\n}\n.bootstrap-select.btn-group[class*=\"col-\"] .dropdown-toggle {\n  width: 100%;\n}\n.bootstrap-select.btn-group .dropdown-menu {\n  min-width: 100%;\n  box-sizing: border-box;\n}\n.bootstrap-select.btn-group .dropdown-menu.inner {\n  position: static;\n  float: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li {\n  position: relative;\n}\n.bootstrap-select.btn-group .dropdown-menu li.active small {\n  color: #fff;\n}\n.bootstrap-select.btn-group .dropdown-menu li.disabled a {\n  cursor: not-allowed;\n}\n.bootstrap-select.btn-group .dropdown-menu li a {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li a.opt {\n  position: relative;\n  padding-left: 2.25em;\n}\n.bootstrap-select.btn-group .dropdown-menu li a span.check-mark {\n  display: none;\n}\n.bootstrap-select.btn-group .dropdown-menu li a span.text {\n  display: inline-block;\n}\n.bootstrap-select.btn-group .dropdown-menu li small {\n  padding-left: 0.5em;\n}\n.bootstrap-select.btn-group .dropdown-menu .notify {\n  position: absolute;\n  bottom: 5px;\n  width: 96%;\n  margin: 0 2%;\n  min-height: 26px;\n  padding: 3px 5px;\n  background: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  pointer-events: none;\n  opacity: 0.9;\n  box-sizing: border-box;\n}\n.bootstrap-select.btn-group .no-results {\n  padding: 3px;\n  background: #f5f5f5;\n  margin: 0 5px;\n  white-space: nowrap;\n}\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .filter-option {\n  position: static;\n}\n.bootstrap-select.btn-group.fit-width .dropdown-toggle .caret {\n  position: static;\n  top: auto;\n  margin-top: -1px;\n}\n.bootstrap-select.btn-group.show-tick .dropdown-menu li.selected a span.check-mark {\n  position: absolute;\n  display: inline-block;\n  right: 15px;\n  margin-top: 5px;\n}\n.bootstrap-select.btn-group.show-tick .dropdown-menu li a span.text {\n  margin-right: 34px;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle {\n  z-index: 1061;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle:before {\n  content: '';\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid rgba(204, 204, 204, 0.2);\n  position: absolute;\n  bottom: -4px;\n  left: 9px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow .dropdown-toggle:after {\n  content: '';\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  position: absolute;\n  bottom: -4px;\n  left: 10px;\n  display: none;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:before {\n  bottom: auto;\n  top: -3px;\n  border-top: 7px solid rgba(204, 204, 204, 0.2);\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.dropup .dropdown-toggle:after {\n  bottom: auto;\n  top: -3px;\n  border-top: 6px solid white;\n  border-bottom: 0;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:before {\n  right: 12px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.pull-right .dropdown-toggle:after {\n  right: 13px;\n  left: auto;\n}\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:before,\n.bootstrap-select.show-menu-arrow.open > .dropdown-toggle:after {\n  display: block;\n}\n.bs-searchbox,\n.bs-actionsbox,\n.bs-donebutton {\n  padding: 4px 8px;\n}\n.bs-actionsbox {\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-actionsbox .btn-group button {\n  width: 50%;\n}\n.bs-donebutton {\n  float: left;\n  width: 100%;\n  box-sizing: border-box;\n}\n.bs-donebutton .btn-group button {\n  width: 100%;\n}\n.bs-searchbox + .bs-actionsbox {\n  padding: 0 8px 4px;\n}\n.bs-searchbox .form-control {\n  margin-bottom: 0;\n  width: 100%;\n  float: none;\n}\n.dtp { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); z-index: 2000; font-size: 15px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }\n.dtp > .dtp-content { background: #fff; max-width: 300px; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); max-height: 520px; position: relative; left: 50%; }\n.dtp > .dtp-content > .dtp-date-view > header.dtp-header { background: #689F38; color: #fff; text-align: center; padding: 0.3em; }\n.dtp div.dtp-date, .dtp div.dtp-time { background: #8BC34A; text-align: center; color: #fff; padding: 10px; }\n.dtp div.dtp-date > div { padding: 0; margin: 0; }\n.dtp div.dtp-actual-month { font-size: 1.5em; }\n.dtp div.dtp-actual-num { font-size: 3em; line-height: 0.9; }\n.dtp div.dtp-actual-maxtime { font-size: 3em; line-height: 0.9; }\n.dtp div.dtp-actual-year { font-size: 1.5em; color: #DCEDC8; }\n.dtp div.dtp-picker { padding: 1em; text-align: center; }\n.dtp div.dtp-picker-month, .dtp div.dtp-actual-time { font-weight: 500; text-align: center; }\n.dtp div.dtp-picker-month { padding-bottom:20px!important; text-transform: uppercase!important; }\n.dtp .dtp-close { position: absolute; top: 0.5em; right: 1em; }\n.dtp .dtp-close > a { color: #fff; }\n.dtp .dtp-close > a > i { font-size: 1em; }\n.dtp table.dtp-picker-days { margin: 0; min-height: 251px;}\n.dtp table.dtp-picker-days, .dtp table.dtp-picker-days tr, .dtp table.dtp-picker-days tr > td { border: none; }\n.dtp table.dtp-picker-days tr > td {  font-weight: 700; font-size: 0.8em; text-align: center; padding: 0.5em 0.3em; }\n.dtp table.dtp-picker-days tr > td > span.dtp-select-day { color: #BDBDBD!important; }\n.dtp table.dtp-picker-days tr > td > a, .dtp .dtp-picker-time > a { color: #212121; text-decoration: none; padding: 0.4em 0.5em 0.5em 0.6em; border-radius: 50%!important; }\n.dtp table.dtp-picker-days tr > td > a.selected{ background: #8BC34A; color: #fff; }\n.dtp table.dtp-picker-days tr > th { color: #757575; text-align: center; font-weight: 700; padding: 0.4em 0.3em; }\n.dtp .p10 > a { color: #689F38; text-decoration: none; }\n.dtp .p10 { width: 10%; display: inline-block; }\n.dtp .p20 { width: 20%; display: inline-block; }\n.dtp .p60 { width: 60%; display: inline-block; }\n.dtp .p80 { width: 80%; display: inline-block; }\n.dtp a.dtp-meridien-am, .dtp a.dtp-meridien-pm { position: relative; top: 10px; color: #212121; font-weight: 500; padding: 0.7em 0.5em; border-radius: 50%!important;text-decoration: none; background: #eee; font-size:1em; }\n.dtp .dtp-actual-meridien a.selected { background: #689F38; color: #fff; }\n.dtp .dtp-picker-time > .dtp-select-hour { cursor: pointer; }\n.dtp .dtp-picker-time > .dtp-select-minute { cursor: pointer; }\n.dtp .dtp-buttons { padding: 0 1em 1em 1em; text-align: right; }\n.dtp.hidden, .dtp .hidden { display: none; }\n.dtp .invisible { visibility: hidden; }\n.dtp .left { float: left; }\n.dtp .right { float: right; }\n.dtp .clearfix { clear: both; }\n.dtp .center { text-align: center; }\n.titulo{\r\n   \r\n    text-transform: capitalize;\r\n  }\n.link{\r\n \r\n  \r\n    cursor: pointer\r\n  }\n.valid-feedback {\r\n  display: none;\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  font-size: 80%;\r\n  color: #28a745;\r\n}\n.valid-tooltip {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 5;\r\n  display: none;\r\n  max-width: 100%;\r\n  padding: 0.25rem 0.5rem;\r\n  margin-top: .1rem;\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  color: #fff;\r\n  background-color: rgba(40, 167, 69, 0.9);\r\n  border-radius: 0.25rem;\r\n}\n.was-validated :valid ~ .valid-feedback,\r\n.was-validated :valid ~ .valid-tooltip,\r\n.is-valid ~ .valid-feedback,\r\n.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\n.was-validated .form-control:valid, .form-control.is-valid {\r\n  border-color: #28a745;\r\n  padding-right: calc(1.5em + 0.75rem);\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\r\n  background-repeat: no-repeat;\r\n  background-position: right calc(0.375em + 0.1875rem) center;\r\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\r\n  border-color: #28a745;\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\r\n  padding-right: calc(1.5em + 0.75rem);\r\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\r\n}\n.was-validated .custom-select:valid, .custom-select.is-valid {\r\n  border-color: #28a745;\r\n  padding-right: calc(0.75em + 2.3125rem);\r\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n}\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\r\n  border-color: #28a745;\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\r\n  color: #28a745;\r\n}\n.was-validated .form-check-input:valid ~ .valid-feedback,\r\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\r\n.form-check-input.is-valid ~ .valid-tooltip {\r\n  display: block;\r\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\r\n  color: #28a745;\r\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\r\n  border-color: #28a745;\r\n}\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\r\n  border-color: #34ce57;\r\n  background-color: #34ce57;\r\n}\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\r\n  border-color: #28a745;\r\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\r\n  border-color: #28a745;\r\n}\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\r\n  border-color: #28a745;\r\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n}\n.invalid-feedback {\r\n  display: none;\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  font-size: 80%;\r\n  color: #dc3545;\r\n}\n.invalid-tooltip {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 5;\r\n  display: none;\r\n  max-width: 100%;\r\n  padding: 0.25rem 0.5rem;\r\n  margin-top: .1rem;\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\r\n  color: #fff;\r\n  background-color: rgba(220, 53, 69, 0.9);\r\n  border-radius: 0.25rem;\r\n}\n.was-validated :invalid ~ .invalid-feedback,\r\n.was-validated :invalid ~ .invalid-tooltip,\r\n.is-invalid ~ .invalid-feedback,\r\n.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\n.was-validated .form-control:invalid, .form-control.is-invalid {\r\n  border-color: #dc3545;\r\n  padding-right: calc(1.5em + 0.75rem);\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\r\n  background-repeat: no-repeat;\r\n  background-position: right calc(0.375em + 0.1875rem) center;\r\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\r\n  border-color: #dc3545;\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\r\n  padding-right: calc(1.5em + 0.75rem);\r\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\r\n}\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\r\n  border-color: #dc3545;\r\n  padding-right: calc(0.75em + 2.3125rem);\r\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n}\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\r\n  border-color: #dc3545;\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\r\n  color: #dc3545;\r\n}\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\r\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\r\n.form-check-input.is-invalid ~ .invalid-tooltip {\r\n  display: block;\r\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\r\n  color: #dc3545;\r\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\r\n  border-color: #dc3545;\r\n}\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\r\n  border-color: #e4606d;\r\n  background-color: #e4606d;\r\n}\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\r\n  border-color: #dc3545;\r\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\r\n  border-color: #dc3545;\r\n}\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\r\n  border-color: #dc3545;\r\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/solicitudes/registrar/registrar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/solicitudes/registrar/registrar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Solicitudes\n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> </a></li>\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0);\">solicitudes</a></li>\n          <li class=\"breadcrumb-item active\">registrar</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n \n    <!-- Horizontal Layout -->\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            \n            <h2><strong>Registrar</strong> Solicitud</h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n\n            <form class=\"\" ngNativeValidate  #formsolicitud=\"ngForm\" autocomplete=\"off\" >\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"cedula\">Cedula de paciente</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                    <input  type=\"search\" id=\"cedula\" [(ngModel)]=\"form.paciente.cedula\" name=\"cedula\" class=\"form-control \" [formControl]=\"control\" placeholder=\"Ingresa la cedula\" required>\n                    <button style=\"display:none\" type=\"button\" (click)=\"buscar_paciente()\"  class=\"btn btn-raised btn-primary btn-round waves-effect\"   >buscar</button>\n                   \n                    <div *ngIf=\"bandera2\" class=\"alert alert-danger\" role=\"alert\">Cedula no valido o no registrado en el sistema</div>\n\n\n\n\n\n                    <table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\" *ngIf=\"show\">\n                      <thead>\n                        <tr>\n                            <th>CEDULA</th>\n                            \n                            <th>PACIENTE</th>\n                          \n                        </tr>\n                      </thead>\n                    \n                      <tbody>\n                        <tr >\n                          <td >{{pacientebuscado.cedula}}</td>\n                       \n                          <td> {{pacientebuscado.persona.nombre}} {{pacientebuscado.persona.ap}} {{pacientebuscado.persona.am}}</td>\n                         \n                        </tr>\n                       \n                    </tbody>\n                    </table>\n\n\n\n\n\n\n                  </div>\n                </div>\n              </div>\n              \n              \n\n       \n\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"nombre\">Institución</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"\">\n                   \n                    <select  [(ngModel)]=\"form.institucion.cod_institucion\" name=\"institucion\" class=\"form-control\" placeholder=\"buscar institucion\"  (ngModelChange)=\"institucionbuscar($event)\" required>\n                     \n                      <optgroup label=\"\">\n                          <option *ngFor=\"let i of institucionesFaltantes\"  [value]=\"i.cod_institucion\"  > {{i.nombre}}</option>\n                   \n                      </optgroup>\n                      <optgroup label=\"SIS\">\n                        \n                        <option *ngFor=\"let posta of instituciones\" [value]=\"posta.cod_institucion\"  >Posta de {{posta.nombre}}</option>\n                      </optgroup>\n                    </select>\n                    </div>\n                </div>\n              </div> \n              <br>\n              <ng-container *ngIf=\"form.institucion.cod_institucion_padre!=''\">\n              <div class=\"row clearfix\" *ngIf=\"form.institucion.cod_institucion_padre!='LABORATORIO UNIVERSIDAD'\" >\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                \n\n<!-- -->\n<div class=\"row clearfix\" style=\"padding-top:2px\" >\n  <div class=\"col-sm-8\">\n    <div class=\"form-group\"  ><label for=\"ap\">Doctor Solicitante </label>\n    </div>\n  </div>\n  <div class=\"col-sm-2\">\n    <div class=\"form-group\"  >  <a  (click)=\"agregarDoctor()\" class=\"link\">\n   \n      <i class=\"material-icons col-purple\">add_circle</i> <span class=\"icon-name\"></span>\n    </a>\n    </div>\n  </div>\n\n\n  <div class=\"col-sm-2\" >\n    <ng-container >\n      <ng-container >\n    <div class=\"form-group\" style=\"padding-top:2px;\"  > \n      <a  class=\"link\" (click)=\"removerDoctor()\"> \n    \n        <i class=\"material-icons col-purple\">clear</i> <span class=\"icon-name\"></span>\n      </a>\n      </div>\n    </ng-container>\n  </ng-container>\n  </div>\n\n\n\n</div>\n<!---->\n\n\n                  \n                </div>\n                <!---\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                    <input [(ngModel)]=\"form.doctor\" name=\"doctor\" class=\"form-control\" placeholder=\"doctor\" required>\n                  </div>\n                </div>\n              -->\n              \n              <div class=\"col-lg-10 col-md-10 col-sm-8\">\n             \n              <div class=\"row clearfix\" *ngIf=\"mostrar_doctor\">\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"form.doctor_solicitante.nombre\" name=\"nombre\" class=\"form-control titulo\" placeholder=\"Ingresa el nombre\" required />\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"form.doctor_solicitante.ap\" name=\"ap\" class=\"form-control titulo\" placeholder=\"Ingresa el apellido paterno\"  required/>\n                  </div>\n                </div>\n                <div class=\"col-sm-4\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"form.doctor_solicitante.am\" name=\"am\" class=\"form-control titulo\"  placeholder=\"Ingresa el apellido materno\" />\n                  </div>\n                </div>\n              </div>\n              </div>\n              </div>\n            </ng-container>\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"login\">Fecha</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                   \n                  <!--  <input [(ngModel)]=\"form.fecha_entrega\" name=\"fecha_entrega\" type=\"date\" id=\"fecha_entrega\" class=\"form-control\" placeholder=\"Entra tu procedencia\">-->\n                  <input type=\"date\" [(ngModel)]=\"fecha\" name=\"fecha\" id=\"fecha\" class=\"form-control\" placeholder=\"fecha\"  size=\"12\" required/>\n                          \n                </div>\n                </div>\n              </div>\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"login\">Fecha Entrega</label>\n                </div>\n                <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                  <div class=\"form-group\">\n                   \n                  <!--  <input [(ngModel)]=\"form.fecha_entrega\" name=\"fecha_entrega\" type=\"date\" id=\"fecha_entrega\" class=\"form-control\" placeholder=\"Entra tu procedencia\">-->\n                  <input type=\"date\" [(ngModel)]=\"fecha_entrega\" id=\"fecha_entrega\" name=\"fecha_entrega\" class=\"form-control\" placeholder=\"Fecha de entreg\"  size=\"12\" required [min]=\"fecha\"/>\n                </div>\n                </div>\n              </div>\n              <div class=\"row clearfix\">\n                  <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                    <label for=\"login\">Exámenes Solicitados</label>\n                  </div>\n                \n                </div>\n              <div class=\"row clearfix \"  *ngIf=\"mostrar\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"login\">Area</label>\n                </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-8\" >\n                 \n                      <ng-select  class=\"\" placeholder=\"Seleccione el area donde esta el examen\"  style=\"width:100%\" [(ngModel)]=\"cod_area\" (ngModelChange)=\"listarExamenesdeArea()\"  name=\"cod_area\">\n                     \n                        <ng-option *ngFor=\"let area of areas\" [value]=\"area.cod_area\"  >{{area.nombre}}</ng-option>\n                      \n                      </ng-select>\n                  \n              \n                   \n                 \n               \n                </div>\n              </div>\n              \n              \n              <br>\n\n          \n              <div class=\"row clearfix\" *ngIf=\"mostrar\">\n                <div class=\"col-lg-2 col-md-2 col-sm-4 form-control-label\">\n                  <label for=\"login\">Examen</label>\n                </div>\n                  <div class=\"col-lg-10 col-md-10 col-sm-8\">\n                   \n                      <ng-select  id=\"cod_precio_examen\" class=\"\" [(ngModel)]=\"cod_precio_examen\" #e=\"ngModel\"  placeholder=\"Seleccione el examen\" (ngModelChange)=\"examenseleccionar()\"   name=\"cod_examen\" >\n                    \n                     \n                          <ng-option [value]=\"e.cod_precio_examen\"  *ngFor=\"let e of examenes\" >{{e.examen.nombre}}</ng-option>\n                  \n                     \n                  \n                      </ng-select>\n                      <br>\n              \n               \n                </div>\n              </div>\n              \n              \n              \n              \n              \n              \n              <div class=\"body\">\n                  <div class=\"table-responsive\">\n              <table class=\"table table-bordered table-striped table-hover js-basic-example dataTable\">\n                                    <thead>\n                                      <tr>\n                                          <th>#</th>\n                                          \n                                          <th>NOMBRE</th>\n                                          <th>QUITAR EXAMEN</th>\n                                        \n                                      </tr>\n                                    </thead>\n                  \n                                    <tbody>  <ng-container *ngFor=\"let e of form.examenes_solicitados; index as in\" > \n                                      <tr *ngIf=\" e.estado=='Sin Registrar'\">\n                                          <th scope=\"row\">{{in+1}}</th>\n                                        <td >{{e.precio_examen.examen.nombre}}</td>\n                                        <td><a  routerLink=\"/solicitudes/registrar\"  (click)=\"quitar_examen(e.precio_examen.examen.cod_examen, in )\"  class=\" waves-effect waves-float waves-green\"><i class=\"zmdi zmdi-delete\"></i></a>\n                                \n                                     \n                                           \n                                      </tr>\n                                    </ng-container>\n                                     \n                                  </tbody>\n                                  </table>\n              \n              \n              \n              \n              \n              \n                                \n                              </div>\n                            </div>\n                            \n              \n                            \n              \n              \n              \n              \n              \n              <div *ngIf=\"bandera\" class=\"alert alert-danger\" role=\"alert\">tiene que haber como minimo un examen en la solicitud</div>\n              \n              \n              \n              \n              \n              \n\n\n              \n<div class=\"row clearfix\">\n  <div class=\"col-sm-8 offset-sm-2\">\n    \n  </div>\n  <div class=\"col-sm-8 offset-sm-2\">\n    <button type=\"submit\"  (click)=\"guardar_solicitud(formsolicitud)\" class=\"btn btn-raised btn-primary btn-round waves-effect\"   >Guardar</button>\n  </div>\n</div>\n\n            </form>\n\n\n\n\n            \n          </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n</section>"

/***/ }),

/***/ "./src/app/solicitudes/registrar/registrar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/solicitudes/registrar/registrar.component.ts ***!
  \**************************************************************/
/*! exports provided: RegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponent", function() { return RegistrarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _models_precio_examen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/precio_examen */ "./src/app/models/precio_examen.ts");
/* harmony import */ var _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pacientes/pacientes.service */ "./src/app/pacientes/pacientes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solicitudes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _usuarios_usuarios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../usuarios/usuarios.service */ "./src/app/usuarios/usuarios.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(usuariosService, datePipe, pacientesService, solicitudesService, router, titleCasePipe) {
        var _this = this;
        this.usuariosService = usuariosService;
        this.datePipe = datePipe;
        this.pacientesService = pacientesService;
        this.solicitudesService = solicitudesService;
        this.router = router;
        this.titleCasePipe = titleCasePipe;
        this.doctores_solicitantes = [];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('');
        this.show = false;
        this.mostrar = false;
        this.seleccionado = 3;
        this.areas = [];
        this.examenes = [];
        this.fecha = '';
        this.fecha_entrega = '';
        this.cod_area = null;
        this.cod_precio_examen = null;
        this.precio_examen = new _models_precio_examen__WEBPACK_IMPORTED_MODULE_2__["Precio_examen"]();
        this.cadena = '';
        this.estado = false;
        this.bandera2 = false;
        this.IsmodelShow = false;
        this.mostrar_doctor = false;
        console.log(this.precio_examen);
        this.solicitudesService.listarDoctorSolicitante().subscribe(function (data) {
            _this.doctores_solicitantes = data;
            console.log(data);
        });
        this.form = new _models__WEBPACK_IMPORTED_MODULE_1__["Solicitud"]();
        this.form.fecha = this.datePipe.transform(new Date(), "yyyy-MM-dd"),
            this.solicitudesService.getFecha(this.form).subscribe(function (data) {
            });
        this.i = this.form.examenes_solicitados.length - 1;
        this.precio_examen.cod_institucion = this.form.institucion.cod_institucion;
        this.cod_precio_examen = null;
        //this.cod_area=this.form.examenes_solicitados[this.i].precio_examen.examen.cod_area
        if (this.form.institucion.cod_institucion_padre == 'SIS') {
            console.log("sis");
            this.precio_examen.cod_institucion = this.form.institucion.cod_institucion_padre;
        }
        else {
            console.log("nada");
        }
        console.log(this.form);
        this.fecha = datePipe.transform(this.form.fecha, "yyyy-MM-dd");
        this.fecha_entrega = this.form.fecha_entrega;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.form.cedula_usuario = this.currentUser.cedula;
        solicitudesService.getAllAreas().subscribe(function (data) {
            _this.areas = data;
        });
        solicitudesService.getPostas().subscribe(function (data) {
            _this.instituciones = data;
            console.log(_this.instituciones);
        });
        solicitudesService.getInstitucionesFaltantes().subscribe(function (data) {
            _this.institucionesFaltantes = data;
            console.log(_this.institucionesFaltantes);
        });
        // this.listarExamenesdeArea()
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(360)).subscribe(function (value) {
            console.log(value);
            _this.verificarSiExisteCedula(value);
        });
    }
    RegistrarComponent.prototype.no_mostrar_examenes_ya_asignados = function () {
        for (var i = 0; i < this.examenes.length; i++) {
            console.log(this.examenes[i].cod_precio_examen);
            for (var j = 0; j < this.form.examenes_solicitados.length; j++) {
                console.log(this.examenes[i].cod_precio_examen);
                console.log(this.form.examenes_solicitados[j].precio_examen.cod_precio_examen);
                if (this.examenes[i].cod_precio_examen == this.form.examenes_solicitados[j].precio_examen.cod_precio_examen) {
                    this.examenes.splice(i, 1);
                }
            }
        }
        console.log(this.examenes.length);
    };
    RegistrarComponent.prototype.listarExamenesdeArea = function () {
        var _this = this;
        this.cod_precio_examen = null;
        /*this.form.examenes_solicitados[this.i].precio_examen.cod_institucion=this.form.institucion.cod_institucion
        
        if(this.form.institucion.cod_institucion_padre== 'SIS'){
          console.log("sis")
        this.form.examenes_solicitados[this.i].precio_examen.cod_institucion= this.form.institucion.cod_institucion_padre
        }
        */
        this.precio_examen.examen.area.cod_area = this.cod_area;
        console.log(this.precio_examen.cod_institucion);
        console.log(this.precio_examen.examen.area.cod_area);
        this.solicitudesService.obtenerexamenesporarea(this.precio_examen).subscribe(function (data1) {
            _this.examenes = data1;
            console.log(_this.examenes);
            console.log(_this.examenes.length);
            console.log(_this.form.examenes_solicitados.length);
            //compara si estos examenes ya estan asignados a la solicitud
            //this.no_mostrar_examenes_ya_asignados()
            console.log(_this.cod_precio_examen);
            console.log(data1);
            if (_this.contar_examenes_no_eliminados() == 0) {
                _this.cod_precio_examen = undefined;
            }
        });
    };
    RegistrarComponent.prototype.examenseleccionar = function () {
        var _this = this;
        this.estado = false;
        console.log(this.cod_precio_examen);
        console.log($('#cod_precio_examen').val);
        this.solicitudesService.getByIdPrecio_examen(this.cod_precio_examen).subscribe(function (data) {
            _this.precio_examen = data;
            console.log("precio examen" + _this.precio_examen);
            for (var j = 0; j < _this.form.examenes_solicitados.length; j++) {
                console.log(_this.form.examenes_solicitados[j].precio_examen.cod_precio_examen);
                if (_this.cod_precio_examen == _this.form.examenes_solicitados[j].precio_examen.cod_precio_examen) {
                    _this.estado = true;
                }
            }
            console.log(_this.estado);
            if (!_this.estado) {
                _this.i++;
                console.log(data);
                console.log(_this.precio_examen);
                _this.form.examenes_solicitados[_this.i] = new _models__WEBPACK_IMPORTED_MODULE_1__["Examen_solicitado"]();
                _this.form.examenes_solicitados[_this.i].precio_examen = data;
            }
        });
        //this.form.examenes_solicitados[this.i].precio_examen=this.precio_examen
        // this.form.cod_examen='selecciona un examen'
        this.bandera = false;
    };
    RegistrarComponent.prototype.contar_examenes_no_eliminados = function () {
        this.contador = 0;
        for (var _i = 0, _a = this.form.examenes_solicitados; _i < _a.length; _i++) {
            var e_so = _a[_i];
            if (e_so.estado != 'Eliminado') {
                this.contador++;
            }
        }
        return this.contador;
    };
    RegistrarComponent.prototype.quitar_examen = function (cod_examen, i) {
        var _this = this;
        Swal({
            title: 'Esta seguro de eliminar este examen?',
            text: 'Sera eliminado ' + this.form.examenes_solicitados[i].precio_examen.examen.nombre + '!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d9534f',
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            closeOnConfirm: false,
        }).then(function (result) {
            if (result.value) {
                Swal.fire('Eliminado!', 'Examen eliminado', 'success');
                console.log("elimnar examen");
                console.log(_this.form.examenes_solicitados.length);
                _this.form.examenes_solicitados[i].estado = "Eliminado";
                //this.precio_examen=new Precio_examen()
                if (_this.contar_examenes_no_eliminados() == 0) {
                    _this.cod_precio_examen = null;
                }
            }
        });
        this.bandera = false;
        if (this.form.examenes_solicitados.length > 0) {
            /*
               this.form.examenes_solicitados.splice(i, 1);
             this.i--;*/
        }
        else {
            this.bandera = true;
        }
    };
    RegistrarComponent.prototype.ngOnInit = function () {
        $(function () {
            'use strict';
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        });
        $(function () {
            $('#datepicker').datepicker();
            $.datepicker.regional['es'] = {
                closeText: 'Cerrar',
                prevText: '&#x3c;Ant',
                nextText: 'Sig&#x3e;',
                currentText: 'Hoy',
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
                dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mi&eacute;', 'Juv', 'Vie', 'S&aacute;b'],
                dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;'],
                weekHeader: 'Sm',
                dateFormat: 'dd-mm-yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['es']);
        });
        $(function () {
            $('#datepicker2').datepicker();
            $.datepicker.regional['es'] = {
                closeText: 'Cerrar',
                prevText: '&#x3c;Ant',
                nextText: 'Sig&#x3e;',
                currentText: 'Hoy',
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
                dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mi&eacute;', 'Juv', 'Vie', 'S&aacute;b'],
                dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;'],
                weekHeader: 'Sm',
                dateFormat: 'dd-mm-yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['es']);
        });
        //this.datePipe.transform(this.form.fecha,"yyyy-MM-dd")
        //this.datePipe.transform(this.form.fecha_entrega,"yyyy-MM-dd")
        $(function () {
            $('.fechapicker').bootstrapMaterialDatePicker({
                dateFormat: 'yyyy-mm-dd',
                clearButton: true,
                weekStart: 1,
                time: false,
            }).on('change', function (e, date) {
            });
            $('.fechaentregapicker').bootstrapMaterialDatePicker({
                dateFormat: 'yyyy-mm-dd',
                clearButton: true,
                weekStart: 1,
                time: false,
            }).on('change', function (e, date) {
            });
        });
        // Get noUISlider Value and write on
        function getNoUISliderValue(slider, percentage) {
            slider.noUiSlider.on('update', function () {
                var val = slider.noUiSlider.get();
                if (percentage) {
                    // val = parseInt(val);
                    val += '%';
                }
                $(slider).parent().find('span.js-nouislider-value').text(val);
            });
        }
    };
    RegistrarComponent.prototype.verificarSiExisteCedula = function (cedula) {
        var _this = this;
        if (this.form.paciente.cedula != '') {
            this.show = true;
            this.pacientesService.getByCedula(cedula).subscribe(function (data) {
                if (data.cedula != null) {
                    _this.pacientebuscado = data;
                    _this.form.paciente = _this.pacientebuscado;
                    _this.show = true;
                    _this.bandera2 = false;
                    $('#cedula').removeClass('is-invalid');
                }
                else {
                    $('#cedula').addClass('is-invalid');
                    _this.bandera2 = true;
                    _this.show = false;
                }
            });
        }
        else {
            this.bandera2 = false;
            $('#cedula').removeClass('is-invalid');
        }
        return this.bandera2;
    };
    RegistrarComponent.prototype.buscar_paciente = function () {
        var _this = this;
        if (this.form.paciente.cedula != '') {
            this.show = true;
            this.pacientesService.getByCedula(this.form.paciente.cedula).subscribe(function (data) {
                console.log(data);
                _this.pacientebuscado = data;
                _this.form.paciente = _this.pacientebuscado;
                _this.bandera2 = false;
            }, function (error) {
                _this.show = false;
                console.log("klp");
                _this.bandera2 = true;
            });
        }
        else {
            this.bandera2 = false;
        }
    };
    RegistrarComponent.prototype.close = function () {
        this.IsmodelShow = true; // set false while you need open your model popup
        // do your more code
    };
    RegistrarComponent.prototype.guardar_solicitud = function (formsolicitud) {
        //this.form.fecha=$('#datepicker').val();
        var _this = this;
        //this.form.fecha_entrega=$('#datepicker2').val();
        console.log(this.form.fecha);
        this.form.cedula_usuario = this.currentUser.cedula;
        if (this.form.doctor_solicitante != undefined) {
            this.form.doctor_solicitante.nombre = this.titleCasePipe.transform(this.form.doctor_solicitante.nombre);
            this.form.doctor_solicitante.ap = this.titleCasePipe.transform(this.form.doctor_solicitante.ap);
            this.form.doctor_solicitante.am = this.titleCasePipe.transform(this.form.doctor_solicitante.am);
        }
        this.form.fecha = $('#fecha').val();
        this.form.fecha_entrega = $('#fecha_entrega').val();
        this.form.fecha = this.datePipe.transform(this.form.fecha, 'dd-MM-yyyy');
        this.form.fecha_entrega = this.datePipe.transform(this.form.fecha_entrega, 'dd-MM-yyyy');
        //this.form.examenes_solicitados.splice(this.form.examenes_solicitados.length-1, 1);
        console.log(this.form);
        console.log(this.form.examenes_solicitados[this.form.examenes_solicitados.length - 1].estado);
        if (formsolicitud.valid && this.contar_examenes_no_eliminados() > 0 && this.show) {
            this.solicitudesService.guardar(this.form)
                .subscribe(function (data) {
                console.log(data);
                alert("solicitud guardada");
                _this.router.navigate(['/solicitudes/listar']);
            }, function (error) {
                _this.router.navigate(['/solicitudes/registrar']);
            });
        }
        console.log(this.contar_examenes_no_eliminados());
        if (this.contar_examenes_no_eliminados() == 0) {
            this.bandera = true;
        }
    };
    RegistrarComponent.prototype.institucionbuscar = function (cod_institucion) {
        var _this = this;
        this.mostrar_doctor = false;
        this.cod_area = null;
        this.cod_precio_examen = null;
        console.log(this.form.institucion.cod_institucion);
        for (var j = 0; j < this.form.examenes_solicitados.length; j++) {
            this.form.examenes_solicitados[j].estado = "Eliminado";
        }
        this.precio_examen = new _models_precio_examen__WEBPACK_IMPORTED_MODULE_2__["Precio_examen"]();
        this.solicitudesService.getInstitucion(this.form.institucion.cod_institucion).subscribe(function (insti) {
            _this.form.institucion = insti;
            console.log(insti);
            if (_this.form.institucion.cod_institucion_padre == 'SIS') {
                console.log("sis");
                _this.precio_examen.cod_institucion = _this.form.institucion.cod_institucion_padre;
            }
        });
        console.log("cod insitucionpadre desolictud" + this.form.institucion.cod_institucion_padre);
        console.log("nombreinsituc desolictud" + this.form.institucion.nombre);
        this.precio_examen.cod_institucion = this.form.institucion.cod_institucion;
        //this.cod_precio_examen=this.form.examenes_solicitados[this.i].cod_precio_examen
        this.form.examenes_solicitados = [];
        this.mostrar = true;
        this.i = -1;
    };
    RegistrarComponent.prototype.imprimir = function (e) {
        window.print();
    };
    RegistrarComponent.prototype.printDiv = function (divName) {
        var divToPrint = document.getElementById(divName).innerHTML;
        var newWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        newWindow.document.open();
        newWindow.document.write("\n  <html>\n      <head>\n        <title>Print tab</title>\n        <style>\n        \n        </style>\n      </head>\n      <body onload=\"window.print();window.close()\">" + divToPrint + "   \n      </body>\n    </html>\n  ");
        newWindow.document.close();
    };
    RegistrarComponent.prototype.agregarDoctor = function () {
        this.mostrar_doctor = true;
        this.form.doctor_solicitante = new _models__WEBPACK_IMPORTED_MODULE_1__["Persona"]();
    };
    RegistrarComponent.prototype.removerDoctor = function () {
        this.mostrar_doctor = false;
        this.form.doctor_solicitante = null;
    };
    RegistrarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registrar',
            template: __webpack_require__(/*! ./registrar.component.html */ "./src/app/solicitudes/registrar/registrar.component.html"),
            styles: [__webpack_require__(/*! ./registrar.component.css */ "./src/app/solicitudes/registrar/registrar.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_usuarios_usuarios_service__WEBPACK_IMPORTED_MODULE_9__["UsuariosService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _pacientes_pacientes_service__WEBPACK_IMPORTED_MODULE_3__["PacientesService"], _solicitudes_service__WEBPACK_IMPORTED_MODULE_6__["SolicitudesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]])
    ], RegistrarComponent);
    return RegistrarComponent;
}());



/***/ }),

/***/ "./src/app/solicitudes/solicitudes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/solicitudes/solicitudes.module.ts ***!
  \***************************************************/
/*! exports provided: SolicitudesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesModule", function() { return SolicitudesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/solicitudes/registrar/registrar.component.ts");
/* harmony import */ var _listar_listar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar/listar.component */ "./src/app/solicitudes/listar/listar.component.ts");
/* harmony import */ var _solicitudes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solicitudes.service */ "./src/app/solicitudes/solicitudes.service.ts");
/* harmony import */ var _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitudes.routing.module */ "./src/app/solicitudes/solicitudes.routing.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/solicitudes/modificar/modificar.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/codehighlighter */ "./node_modules/primeng/codehighlighter.js");
/* harmony import */ var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _factura_factura_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./factura/factura.component */ "./src/app/solicitudes/factura/factura.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









;



//import { ButtonModule} from 'primeng/primeng';








var SolicitudesModule = /** @class */ (function () {
    function SolicitudesModule() {
    }
    SolicitudesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [primeng_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_9__["NgxPrintModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_15__["TabViewModule"],
                primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_16__["CodeHighlighterModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _solicitudes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_17__["ButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_19__["QRCodeModule"]
            ],
            declarations: [_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_2__["RegistrarComponent"], _listar_listar_component__WEBPACK_IMPORTED_MODULE_3__["ListarComponent"], _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_8__["ModificarComponent"], _factura_factura_component__WEBPACK_IMPORTED_MODULE_18__["FacturaComponent"]],
            providers: [_solicitudes_service__WEBPACK_IMPORTED_MODULE_4__["SolicitudesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]]
        })
    ], SolicitudesModule);
    return SolicitudesModule;
}());



/***/ }),

/***/ "./src/app/solicitudes/solicitudes.routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/solicitudes/solicitudes.routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SolicitudesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudesRoutingModule", function() { return SolicitudesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrar/registrar.component */ "./src/app/solicitudes/registrar/registrar.component.ts");
/* harmony import */ var _listar_listar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar/listar.component */ "./src/app/solicitudes/listar/listar.component.ts");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/solicitudes/modificar/modificar.component.ts");
/* harmony import */ var _factura_factura_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factura/factura.component */ "./src/app/solicitudes/factura/factura.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'listar',
        component: _listar_listar_component__WEBPACK_IMPORTED_MODULE_3__["ListarComponent"]
    },
    {
        path: 'factura',
        component: _factura_factura_component__WEBPACK_IMPORTED_MODULE_5__["FacturaComponent"]
    },
    {
        path: 'registrar',
        component: _registrar_registrar_component__WEBPACK_IMPORTED_MODULE_2__["RegistrarComponent"]
    },
    {
        path: 'modificar',
        component: _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_4__["ModificarComponent"]
    },
    {
        path: '',
        redirectTo: 'normal',
        pathMatch: 'full'
    }
];
var SolicitudesRoutingModule = /** @class */ (function () {
    function SolicitudesRoutingModule() {
    }
    SolicitudesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SolicitudesRoutingModule);
    return SolicitudesRoutingModule;
}());



/***/ }),

/***/ "./src/app/utilidades/utils.ts":
/*!*************************************!*\
  !*** ./src/app/utilidades/utils.ts ***!
  \*************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.Unidades = function (num) {
        switch (num) {
            case 1: return 'UN';
            case 2: return 'DOS';
            case 3: return 'TRES';
            case 4: return 'CUATRO';
            case 5: return 'CINCO';
            case 6: return 'SEIS';
            case 7: return 'SIETE';
            case 8: return 'OCHO';
            case 9: return 'NUEVE';
        }
        return '';
    }; //Unidades()
    Utils.prototype.Decenas = function (num) {
        var decena = Math.floor(num / 10);
        var unidad = num - (decena * 10);
        switch (decena) {
            case 1:
                switch (unidad) {
                    case 0: return 'DIEZ';
                    case 1: return 'ONCE';
                    case 2: return 'DOCE';
                    case 3: return 'TRECE';
                    case 4: return 'CATORCE';
                    case 5: return 'QUINCE';
                    default: return 'DIECI' + this.Unidades(unidad);
                }
            case 2:
                switch (unidad) {
                    case 0: return 'VEINTE';
                    default: return 'VEINTI' + this.Unidades(unidad);
                }
            case 3: return this.DecenasY('TREINTA', unidad);
            case 4: return this.DecenasY('CUARENTA', unidad);
            case 5: return this.DecenasY('CINCUENTA', unidad);
            case 6: return this.DecenasY('SESENTA', unidad);
            case 7: return this.DecenasY('SETENTA', unidad);
            case 8: return this.DecenasY('OCHENTA', unidad);
            case 9: return this.DecenasY('NOVENTA', unidad);
            case 0: return this.Unidades(unidad);
        }
    }; //Unidades()
    Utils.prototype.DecenasY = function (strSin, numUnidades) {
        if (numUnidades > 0)
            return strSin + ' Y ' + this.Unidades(numUnidades);
        return strSin;
    }; //DecenasY()
    Utils.prototype.Centenas = function (num) {
        var centenas = Math.floor(num / 100);
        var decenas = num - (centenas * 100);
        switch (centenas) {
            case 1:
                if (decenas > 0)
                    return 'CIENTO ' + this.Decenas(decenas);
                return 'CIEN';
            case 2: return 'DOSCIENTOS ' + this.Decenas(decenas);
            case 3: return 'TRESCIENTOS ' + this.Decenas(decenas);
            case 4: return 'CUATROCIENTOS ' + this.Decenas(decenas);
            case 5: return 'QUINIENTOS ' + this.Decenas(decenas);
            case 6: return 'SEISCIENTOS ' + this.Decenas(decenas);
            case 7: return 'SETECIENTOS ' + this.Decenas(decenas);
            case 8: return 'OCHOCIENTOS ' + this.Decenas(decenas);
            case 9: return 'NOVECIENTOS ' + this.Decenas(decenas);
        }
        return this.Decenas(decenas);
    }; //Centenas()
    Utils.prototype.Seccion = function (num, divisor, strSingular, strPlural) {
        var cientos = Math.floor(num / divisor);
        var resto = num - (cientos * divisor);
        var letras = '';
        if (cientos > 0)
            if (cientos > 1)
                letras = this.Centenas(cientos) + ' ' + strPlural;
            else
                letras = strSingular;
        if (resto > 0)
            letras += '';
        return letras;
    }; //Seccion()
    Utils.prototype.Miles = function (num) {
        var divisor = 1000;
        var cientos = Math.floor(num / divisor);
        var resto = num - (cientos * divisor);
        var strMiles = this.Seccion(num, divisor, 'UN MIL', 'MIL');
        var strCentenas = this.Centenas(resto);
        if (strMiles == '')
            return strCentenas;
        return strMiles + ' ' + strCentenas;
    }; //Miles()
    Utils.prototype.Millones = function (num) {
        var divisor = 1000000;
        var cientos = Math.floor(num / divisor);
        var resto = num - (cientos * divisor);
        var strMillones = this.Seccion(num, divisor, 'UN MILLON DE', 'MILLONES DE');
        var strMiles = this.Miles(resto);
        if (strMillones == '')
            return strMiles;
        return strMillones + ' ' + strMiles;
    }; //Millones()
    Utils.prototype.numeroALetras = function (num, currency) {
        currency = currency || {};
        var data = {
            numero: num,
            enteros: Math.floor(num),
            centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
            letrasCentavos: '',
            letrasMonedaPlural: currency.plural || 'PESOS CHILENOS',
            letrasMonedaSingular: currency.singular || 'PESO CHILENO',
            letrasMonedaCentavoPlural: currency.centPlural || 'CHIQUI PESOS CHILENOS',
            letrasMonedaCentavoSingular: currency.centSingular || 'CHIQUI PESO CHILENO'
        };
        if (data.centavos > 0) {
            var centavos = '';
            if (data.centavos == 1)
                centavos = this.Millones(data.centavos) + ' ' + data.letrasMonedaCentavoSingular;
            else
                centavos = this.Millones(data.centavos) + ' ' + data.letrasMonedaCentavoPlural;
            data.letrasCentavos = 'CON ' + centavos;
        }
        ;
        if (data.enteros == 0)
            return 'CERO ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
        if (data.enteros == 1)
            return this.Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ' + data.letrasCentavos;
        else
            return this.Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ' + data.letrasCentavos;
    };
    ;
    Utils = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Utils);
    return Utils;
}());



/***/ })

}]);
//# sourceMappingURL=app-solicitudes-solicitudes-module.js.map