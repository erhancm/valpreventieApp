webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sensor_arrays_page_sensor_arrays_page__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trainees_page_trainees_page__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_page_training_page__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__sensor_arrays_page_sensor_arrays_page__["a" /* SensorArraysPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__trainees_page_trainees_page__["a" /* TraineesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__training_page_training_page__["a" /* TrainingPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Training" tabIcon="body"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sensors" tabIcon="cube"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Trainees" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorArraysPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trainees_page_trainee__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trainee_picker_modal_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sensor_array__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SensorArraysPage = /** @class */ (function () {
    function SensorArraysPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.sensorArrays = __WEBPACK_IMPORTED_MODULE_4__sensor_array__["a" /* SensorArraysMock */];
        this.trainees = __WEBPACK_IMPORTED_MODULE_2__trainees_page_trainee__["a" /* TraineesMock */];
        for (var i = 0; i < this.sensorArrays.length; i++) {
            this.sensorArrays[i].associatedTrainee = this.trainees[i];
        }
    }
    SensorArraysPage.prototype.presentTraineePickerModal = function (traineeProperty) {
        console.log("yo");
        var traineePickerModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__trainee_picker_modal_component__["a" /* TraineePickerModalComponent */]);
        traineePickerModal.onDidDismiss(function (trainee) {
            traineeProperty = trainee;
        });
        traineePickerModal.present();
    };
    SensorArraysPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensor-arrays',template:/*ion-inline-start:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/sensor-arrays-page/sensor-arrays-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Actieve sensor opstellingen\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-6 *ngFor="let sensorArray of sensorArrays">\n      <ion-card>\n        <ion-card-header>{{sensorArray.identifier}}</ion-card-header>\n        <ion-item>\n          <p> {{sensorArray.arrayDescription}} </p>\n        </ion-item>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src={{sensorArray.associatedTrainee.imageUrl}}>\n          </ion-avatar>\n          <h2>{{sensorArray.associatedTrainee.name}}</h2>\n        </ion-item>\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small (click)="presentTraineePickerModal(sensorArray.associatedTrainee)">\n              <ion-icon name="person"></ion-icon>\n              <div>Kies trainee</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/sensor-arrays-page/sensor-arrays-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], SensorArraysPage);
    return SensorArraysPage;
}());

//# sourceMappingURL=sensor-arrays-page.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Trainee */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraineesMock; });
var Trainee = /** @class */ (function () {
    function Trainee(name, imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
    }
    return Trainee;
}());

var TraineesMock = [
    new Trainee('Jan', 'assets/imgs/person.png'),
    new Trainee('Dirk', 'assets/imgs/person.png'),
    new Trainee('Marie', 'assets/imgs/person.png')
];
//# sourceMappingURL=trainee.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraineePickerModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trainees_page_trainee__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TraineePickerModalComponent = /** @class */ (function () {
    function TraineePickerModalComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.trainees = __WEBPACK_IMPORTED_MODULE_2__trainees_page_trainee__["a" /* TraineesMock */];
    }
    TraineePickerModalComponent.prototype.dismiss = function (trainee) {
        this.viewCtrl.dismiss(trainee);
    };
    TraineePickerModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-content>\n      <ion-list>\n        <ion-item *ngFor=\"let trainee of trainees\">\n          <h2> {{ trainee.name }} </h2>\n          <p> {{ trainee.imageUrl }} </p>\n          <button ion-button (click)=\"dismiss(trainee)\">Kies</button>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], TraineePickerModalComponent);
    return TraineePickerModalComponent;
}());

//# sourceMappingURL=trainee-picker-modal-component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraineesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_data_handler_server_data_handler__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TraineesPage = /** @class */ (function () {
    function TraineesPage(navCtrl, serverData) {
        this.navCtrl = navCtrl;
        this.serverData = serverData;
        this.items = [];
        this.items = serverData.items;
        //this.inputData = this.serverData.getPersons();
        //console.log(this.inputData);
    }
    TraineesPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    TraineesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trainees',template:/*ion-inline-start:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/trainees-page/trainees-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Trainees\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">{{ item }}</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/trainees-page/trainees-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_server_data_handler_server_data_handler__["a" /* ServerDataHandlerProvider */]])
    ], TraineesPage);
    return TraineesPage;
}());

//# sourceMappingURL=trainees-page.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_data_handler_server_data_handler__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, domSanitizer, serverData) {
        this.navCtrl = navCtrl;
        this.domSanitizer = domSanitizer;
        this.serverData = serverData;
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/C0DPdy98e4c');
        this.serverData.getPersons();
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Valpreventie Training App</h2>\n  <p>\n    De valpreventie training app kan i.c.m. een Tinybot en een sensoropstelling een training geven aan ouderen.\n    De data van de training is vervolgens in te zien op de app. Tenslotte zijn er wat links te vinden naar leermateriaal\n    in de vorm van boeken of videos.\n  </p>\n  <h3>Leermateriaal</h3>\n  <iframe [src]=videoUrl frameborder="0" id="yt-vid"></iframe>\n</ion-content>\n'/*ion-inline-end:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__providers_server_data_handler_server_data_handler__["a" /* ServerDataHandlerProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_selection_page_training_selection_page__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainingPage = /** @class */ (function () {
    function TrainingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TrainingPage.prototype.goToTrainingSelection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__training_selection_page_training_selection_page__["a" /* TrainingSelectionPage */]);
    };
    TrainingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-training',template:/*ion-inline-start:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/training-page/training-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Valpreventie Trainingen\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button ion-button full (click)="goToTrainingSelection()">\n    Start een nieuwe training\n  </button>\n  <ion-item-group>\n    <ion-item-divider>Actieve trainingen</ion-item-divider>\n    <ion-item>\n\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/training-page/training-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TrainingPage);
    return TrainingPage;
}());

//# sourceMappingURL=training-page.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_training_page_group_training_page__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainingSelectionPage = /** @class */ (function () {
    function TrainingSelectionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TrainingSelectionPage.prototype.goToGroupTrainingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__group_training_page_group_training_page__["a" /* GroupTrainingPage */]);
    };
    TrainingSelectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-training-selection',template:/*ion-inline-start:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/training-page/training-selection-page/training-selection-page.html"*/'<ion-header>\n  <ion-navbar>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class="training-selection-row">\n    <button ion-button round color="default" class="training-selection-button">\n      Persoonlijke training\n    </button>\n  </ion-row>\n  <ion-row class="training-selection-row">\n    <button ion-button round color="secondary" class="training-selection-button" (click)="goToGroupTrainingPage()">\n      Groepstraining\n      <br>\n      zonder sensoren\n    </button>\n  </ion-row>\n  <ion-row class="training-selection-row">\n    <button ion-button round color="secondary" class="training-selection-button" (click)="goToGroupTrainingPage()">\n      Groepstraining\n      <br>\n      met sensoren\n    </button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/training-page/training-selection-page/training-selection-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TrainingSelectionPage);
    return TrainingSelectionPage;
}());

//# sourceMappingURL=training-selection-page.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupTrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupTrainingPage = /** @class */ (function () {
    function GroupTrainingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GroupTrainingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'group-training-page',template:/*ion-inline-start:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/training-page/group-training-page/group-training-page.html"*/'<ion-content>\n  <ion-row>\n    <ion-slides>\n      <ion-slide>\n        <h1>Tessabot 1</h1>\n        <img src="https://www.detechniekachternederland.nl/content/uploads/2017/12/Tessa-met-bloem.png">\n      </ion-slide>\n      <ion-slide>\n        <h1>Tessabot 2</h1>\n        <img src="https://www.detechniekachternederland.nl/content/uploads/2017/12/Tessa-met-bloem.png">\n      </ion-slide>\n      <ion-slide>\n        <h1>Tessabot 3</h1>\n        <img src="https://www.detechniekachternederland.nl/content/uploads/2017/12/Tessa-met-bloem.png">\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/pages/training-page/group-training-page/group-training-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], GroupTrainingPage);
    return GroupTrainingPage;
}());

//# sourceMappingURL=group-training-page.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sensor_arrays_page_sensor_arrays_page__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_trainees_page_trainees_page__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sensor_arrays_page_trainee_picker_modal_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_training_page_training_page__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_training_page_training_selection_page_training_selection_page__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_training_page_group_training_page_group_training_page__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_server_data_handler_server_data_handler__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sensor_arrays_page_sensor_arrays_page__["a" /* SensorArraysPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_trainees_page_trainees_page__["a" /* TraineesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sensor_arrays_page_trainee_picker_modal_component__["a" /* TraineePickerModalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_training_page_training_page__["a" /* TrainingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_training_page_training_selection_page_training_selection_page__["a" /* TrainingSelectionPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_training_page_group_training_page_group_training_page__["a" /* GroupTrainingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sensor_arrays_page_sensor_arrays_page__["a" /* SensorArraysPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_trainees_page_trainees_page__["a" /* TraineesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sensor_arrays_page_trainee_picker_modal_component__["a" /* TraineePickerModalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_training_page_training_page__["a" /* TrainingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_training_page_training_selection_page_training_selection_page__["a" /* TrainingSelectionPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_training_page_group_training_page_group_training_page__["a" /* GroupTrainingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_server_data_handler_server_data_handler__["a" /* ServerDataHandlerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/cemcomert/junk/hybridApp/valpreventieApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SensorArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorArraysMock; });
var SensorArray = /** @class */ (function () {
    function SensorArray(identifier, arrayDescription) {
        this.identifier = identifier;
        this.arrayDescription = arrayDescription;
    }
    return SensorArray;
}());

var SensorArraysMock = [
    new SensorArray('100001000', 'Afstand en druksensoren via Raspberry Pi 3'),
    new SensorArray('350005000', 'Druksensoren via Banana Pi M3'),
    new SensorArray('923001003', 'Afstandsensoren via Pine A64')
];
//# sourceMappingURL=sensor-array.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerDataHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServerDataHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServerDataHandlerProvider = /** @class */ (function () {
    function ServerDataHandlerProvider(http) {
        this.http = http;
        this.items = [];
    }
    ServerDataHandlerProvider.prototype.getPersons = function () {
        var _this = this;
        this.http.get('http://s.robinvandervliet.com:3000/persons').map(function (res) { return res.json(); }).subscribe(function (data) {
            //console.log("length : ", data.length);
            //console.log(this.other);
            //this.items.push("test");
            //console.log(data[0])
            //console.log(data.length);
            //TODO. Add names to the items array
            var i;
            for (i = 0; i < data.length; i++) {
                //console.log(data[i]);
                //console.log(data[i].birth_name);
                _this.items.push(data[i].birth_name);
                //this.items.push(data.)
            }
        });
    };
    ServerDataHandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServerDataHandlerProvider);
    return ServerDataHandlerProvider;
}());

//sause : https://www.joshmorony.com/loading-remote-json-data-with-http-in-ionic-2/ 
//# sourceMappingURL=server-data-handler.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map