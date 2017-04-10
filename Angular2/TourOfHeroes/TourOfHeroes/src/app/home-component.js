"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = "Tour of Heroes";
    }
    HomeComponent.prototype.ngOnInit = function () {
        alert('Home Page');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        // selector: 'router-outlet',
        template: "<h2 class=\"mainHeading\">{{title}}</h2>\n  <nav>\n     <button class=\"homeButton\" [routerLink]=\"['/dashboard']\">Dashboard</button>\n     <button class=\"homeButton\" [routerLink]=\"['/myheroes']\">Heroes</button>\n     <button class=\"homeButton\" [routerLink]=\"['/userprofile']\">User Profile</button>\n  </nav>\n  <router-outlet name='left'></router-outlet>\n  ",
        styles: ["\n   li \n   { \n      display: inline-block; \n      padding: 5px;\n   }\n   .homeButton \n   {\n      background-color: lightgrey;\n      color: grey;\n      cursor: pointer;\n      border-radius: 5px;\n      height: 33px;\n   }\n   nav{\n      margin-left: 45px;\n    }\n\n    .mainHeading {\n      color: grey;\n      margin-left: 46px;\n    }\n    "
        ]
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home-component.js.map