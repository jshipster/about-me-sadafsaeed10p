"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Heroes_1 = require("./Heroes");
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.topHero = this.GetMyTopHero();
    }
    DashboardComponent.prototype.GetMyTopHero = function () {
        return Heroes_1.HeroService.getInstance().GetTopHeroes();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'top-heroes',
        //styleUrls: ['style.css'],
        template: "\n    <h2 class=\"dashboardHeading\">Top Heroes</h2>\n  <ul>\n    <li *ngFor=\"let hero of topHero\">\n    <button class=\"dashboardButton\" [routerLink]=\"['/hero', hero.id]\">{{hero.name}}</button>\n    </li>\n  </ul>\n  ",
        styles: ["\n   li \n   { \n      display: inline-block; \n      padding: 5px;\n   }\n   .dashboardButton \n   {\n      height: 100px;\n      width: 100px;\n      background-color: grey;\n      color: white;\n      cursor: pointer;\n      border-radius: 5px;\n    }\n    .dashboardHeading {\n      color: grey;\n      margin-left: 193px;\n    }\n    \n    "
        ]
    })
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard-component.js.map