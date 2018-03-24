webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<div id=\"header\" class=\"header\" >\n  <img src=\"/assets/images/logo.png\" id=\"logo\" class=\"logo\" />\n  <p id=\"header_p\" class=\"header_p\"><b>Amanda</b> - A Virtual Assistant</p>\n\n</div>\n\n<div id=\"chatbox\" class=\"chatbox\" >\n    <i class=\"fas fa-arrow-circle-down icon2\"></i>\n  <p id=\"start\" class=\"start\" ><span class=\"start_p\">Hello, Ask something to get started with me. </span><br><br> You can type \"Hello\" for example or just press on the microphone to talk</p>\n  <div id=\"chat\" class=\"chat\" ngx-auto-scroll lock-y-offset=\"10\" observe-attributes>\n\n    <div   *ngFor=\"let bot of total_message; let i = index;\" >\n        <div *ngIf = \"bot.message_ui\"  >\n\n          <div  class=\"user\" *ngIf = \"bot.message_ui[0].side == 'user' \" >\n\n            <span class=\"write\">{{bot.message_ui[0].name}}<div class=\"U\">U</div></span>\n\n          </div>\n\n          <div  class=\"bot\" *ngIf = \"bot.message_ui[0].side == 'bot' \" >\n              <span class=\"write\">{{ bot.message_ui[0].name }}</span>\n              <div class=\"C\">A</div>\n          </div>\n\n        </div>\n        <div *ngIf = \"bot.attachment\" class=\"set\">\n            <div id=\"card\"  *ngFor = \"let card of bot.attachment\" >\n\n              <img src=\"{{ card.url }}\" class=\"card_image\" />\n              <button (click)=\"readmore(card.title)\" class=\"info\" >More Info</button>\n            </div>\n        </div>\n        <div *ngIf = \"bot.buttons\" style=\"padding-bottom: 45px;\" >\n\n            <div *ngFor = \"let card of bot.buttons\" >\n              <button id=\"btn\" (click)=\"readmore(card.title)\"  >{{ card.title }}</button>\n            </div>\n        </div>\n    </div>\n  </div>\n\n    <i class=\"fas fa-microphone icon3\" (click)=\"mic(event)\"></i>\n\n    <input type=\"text\" id=\"input_value\" class=\"input_value\" role=\"user\" placeholder=\"Ask me Something ...\" (keydown.enter)=\"onKeydown($event)\" />\n    <input type=\"submit\" (click)=\"send()\" value=\"Send\" id=\"sendbtn\" class=\"sendbtn\" />\n\n</div>\n<div id=\"sidebox\" class=\"sidebox\">\n    <i class=\"fas fa-times icon\" (click)=\"cross()\" ></i>\n<img src=\"../assets/images/avatar_3.jpg\" id=\"lady\" class=\"lady\" />\n<i class=\"fas fa-volume-up icon4\" (click)= \"mute()\" ></i>\n<i class=\"fas fa-volume-off icon7\" (click)= \"volume()\" ></i>\n</div>\n<div class=\"menu\"><i class=\"fas fa-bars icon5\" (click)=\"cross_no()\"></i>\n  <i class=\"far fa-hand-point-left icon6\"></i><p class=\"amanda\">Wanna Meet Amanda, Your Virtual Assistant.</p>\n</div>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_botframework_directlinejs__ = __webpack_require__("../../../../botframework-directlinejs/built/directLine.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_botframework_directlinejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_botframework_directlinejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var webkitSpeechRecognition = window.webkitSpeechRecognition;
var AppComponent = (function () {
    function AppComponent() {
        this.message_speak = new SpeechSynthesisUtterance();
        this.total_message = [];
        this.cards = [];
        this.voices = window.speechSynthesis.getVoices();
        this.text_ui = [];
        this.OnLine = navigator.onLine;
        this.recognizing = false;
        this.recognition = new webkitSpeechRecognition();
        this.first_char = /\S/;
        this.muted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.directLine = new __WEBPACK_IMPORTED_MODULE_1_botframework_directlinejs__["DirectLine"]({
            secret: 'j5fFsThqPb4.cwA.0A4.6kz919MKX331var99c7UlzDzFMow4IHwoeyAlCO8wDs',
            webSocket: true,
            pollingInterval: 1000
        });
        this.message_speak.lang = 'en-US';
        this.message_speak.rate = 1.0;
        this.message_speak.onstart = function (event) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#lady').attr("src", "../assets/images/avatar.gif");
        };
        this.message_speak.onend = function (event) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#lady').attr("src", "../assets/images/avatar_3.jpg");
        };
        this.directLine.activity$.filter(function (activity) { return activity.type === 'message'; }).subscribe(function (message) {
            var voices_local = window.speechSynthesis.getVoices();
            console.log(message, voices_local);
            if (message.from['name'] == "rohan_bot_asking") {
                if (message.text) {
                    _this.text_ui = [];
                    _this.message_from_drestline = message.text;
                    console.log("message from rohan_bot_asking :-", _this.message_from_drestline);
                    console.log(_this.message_from_drestline[0]);
                    if (!_this.muted) {
                        if (_this.message_from_drestline[0] == '_') {
                            _this.message_from_drestline = _this.message_from_drestline.substr(1).slice(0, _this.message_from_drestline.length);
                        }
                        else {
                            // var message_speak_local = new texttospeech({
                            //   text:this.message_from_drestline
                            // });
                            // message_speak_local.speech_speak();
                            var message_speak_local = new SpeechSynthesisUtterance();
                            message_speak_local.voice = voices_local[1];
                            message_speak_local.lang = voices_local[1].lang;
                            message_speak_local.rate = _this.message_speak.rate;
                            message_speak_local.onstart = _this.message_speak.onstart;
                            message_speak_local.onend = _this.message_speak.onend;
                            message_speak_local.text = _this.message_from_drestline;
                            window.speechSynthesis.speak(message_speak_local);
                            // responsiveVoice.speak("hello world");
                        }
                    }
                    _this.text_ui.push({ name: _this.message_from_drestline, side: 'bot' });
                    _this.total_message.push({ message_ui: _this.text_ui });
                }
                if (message.attachments) {
                    _this.text_ui = [];
                    console.log(message.attachments[1]);
                    var i = void 0;
                    for (i = 0; i < message.attachments.length; i++) {
                        if (!_this.muted) {
                            var message_speak_local = new SpeechSynthesisUtterance();
                            message_speak_local.voice = voices_local[1];
                            message_speak_local.lang = voices_local[1].lang;
                            message_speak_local.rate = _this.message_speak.rate;
                            message_speak_local.onstart = _this.message_speak.onstart;
                            message_speak_local.onend = _this.message_speak.onend;
                            message_speak_local.text = message.attachments[i].content.title;
                            window.speechSynthesis.speak(message_speak_local);
                        }
                        _this.text_ui.push({ title: message.attachments[i].content.title, text: message.attachments[i].content.text, url: message.attachments[i].content.images[0].url });
                    }
                    _this.total_message.push({ attachment: _this.text_ui });
                }
                if (message.suggestedActions) {
                    _this.text_ui = [];
                    console.log(_this.text_ui);
                    console.log(message.suggestedActions.actions.length);
                    var i = void 0;
                    for (i = 0; i < message.suggestedActions.actions.length; i++) {
                        if (!_this.muted) {
                            var message_speak_local = new SpeechSynthesisUtterance();
                            message_speak_local.voice = voices_local[1];
                            message_speak_local.lang = voices_local[1].lang;
                            message_speak_local.rate = _this.message_speak.rate;
                            message_speak_local.onstart = _this.message_speak.onstart;
                            message_speak_local.onend = _this.message_speak.onend;
                            message_speak_local.text = message.suggestedActions.actions[i].title;
                            window.speechSynthesis.speak(message_speak_local);
                        }
                        _this.text_ui.push({ title: message.suggestedActions.actions[i].title, text: message.suggestedActions.actions[i].value });
                    }
                    _this.total_message.push({ buttons: _this.text_ui });
                }
            }
            console.log(_this.total_message);
        });
    };
    AppComponent.prototype.send = function () {
        window.speechSynthesis.cancel();
        this.user_message = __WEBPACK_IMPORTED_MODULE_2_jquery__('.input_value').val();
        if (this.user_message != "") {
            this.directline_message(this.user_message);
        }
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon2").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".start").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".input_value").val("");
    };
    AppComponent.prototype.readmore = function (text) {
        window.speechSynthesis.cancel();
        this.directline_message(text);
    };
    AppComponent.prototype.directline_message = function (text_input) {
        if (this.recognizing) {
            this.recognition.stop();
        }
        this.type_key = null;
        console.log(this.type_key);
        this.internet_connection();
        this.text_ui = [];
        this.text_ui.push({ name: text_input, side: 'user' });
        this.total_message.push({ message_ui: this.text_ui });
        console.log(text_input);
        this.directLine.postActivity({
            from: { id: 'arpit', name: 'You' },
            type: 'message',
            text: text_input,
        }).subscribe(function (id) { return console.log("Posted activity, assigned ID ", id); }, function (error) { return console.log("Error posting activity", error); });
    };
    AppComponent.prototype.internet_connection = function () {
        this.OnLine = navigator.onLine;
        if (this.OnLine)
            console.log('internet');
        else
            alert('no internet');
    };
    AppComponent.prototype.keyboard_press = function () {
        this.type_key = 'TYPING....';
        console.log(this.type_key);
    };
    AppComponent.prototype.mic = function (event) {
        console.log('event', event);
        this.recognizing = true;
        this.recognition.lang = "en_US";
        this.recognition.start();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        var temp = this;
        var final_transcript = "";
        this.recognition.onresult = function (event) {
            var interim_transcript = '';
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;
                }
                else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }
            console.log(final_transcript);
            if (final_transcript) {
                console.log("*", final_transcript);
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.input_value').val(final_transcript);
                // temp.directline_message(final_transcript);
                temp.send();
                final_transcript = "";
                temp.recognition.stop();
                return;
            }
            final_transcript = "";
        };
        this.ignore_onend = false;
        console.log('ignore');
    };
    AppComponent.prototype.showButtons = function (style) {
        if (style == this.current_style) {
            return;
        }
        this.current_style = style;
    };
    AppComponent.prototype.cross = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".sidebox").css("width", "0vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".lady").css("width", "0vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".menu").css("display", "block");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".chatbox").css("left", "14vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon6").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".amanda").css("display", "none");
    };
    AppComponent.prototype.cross_no = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".sidebox").css("width", "25vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".lady").css("width", "22vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".menu").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".chatbox").css("left", "28vw");
    };
    AppComponent.prototype.mute = function () {
        window.speechSynthesis.cancel();
        console.log('hello@@');
        this.muted = true;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon4").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon7").css("display", "block");
    };
    AppComponent.prototype.volume = function () {
        this.muted = false;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon4").css("display", "block");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon7").css("display", "none");
    };
    AppComponent.prototype.onKeydown = function (event) {
        this.send();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
        // export interface IWindow extends Window {
        //   webkitSpeechRecognition: any;
        //   const {webkitSpeechRecognition} : IWindow = <IWindow>window;
        //   this.recognition = new webkitSpeechRecognition();
        // }
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_auto_scroll__ = __webpack_require__("../../../../ngx-auto-scroll/ngx-auto-scroll.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_auto_scroll__["a" /* NgxAutoScrollModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map