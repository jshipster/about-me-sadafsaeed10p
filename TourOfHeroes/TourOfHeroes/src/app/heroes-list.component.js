"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Heroes_1 = require("./Heroes");
var HeroesListComponent = (function () {
    function HeroesListComponent() {
        this.isHeroSelected = false;
        this.heroes = this.GetHeroList();
    }
    HeroesListComponent.prototype.GetSelectedHero = function (hero) {
        this.isHeroSelected = true;
        this.selectedHeroId = hero.id;
        this.selectedHeroName = hero.name;
        return false;
    };
    HeroesListComponent.prototype.GetHeroList = function () {
        return Heroes_1.HeroService.getInstance().GetAllHeroes();
    };
    return HeroesListComponent;
}());
HeroesListComponent = __decorate([
    core_1.Component({
        selector: 'hero-list',
        template: "\n    <h2>My Heroes</h2>\n  <ul>\n    <li *ngFor=\"let hero of heroes\" (click)=\"GetSelectedHero(hero)\">\n    <button class=\"heroButton2\"><span class=\"idHeroName\">{{hero.id}}</span></button>\n    <button class=\"heroButton\"><span class=\"idHeroName\">{{hero.name}}</span></button>\n    </li>\n  </ul>\n  <span [hidden]=\"!isHeroSelected\"><h3>{{selectedHeroName | uppercase}} is my hero </h3></span>\n  <button class=\"detailsButton\" [routerLink]=\"['/hero', selectedHeroId]\" [hidden]=\"!isHeroSelected\">View Details</button>\n  ",
        styles: ["\n   .heroButton \n   { \n    border-radius: 4px 4px 4px 4px;\n    border-width: 1px;\n    border-color: lightgrey;\n    border-style: solid;\n    background-color: lightgrey;\n    padding: 8px;\n    width: 250px;\n    position: relative;\n    color: darkslategray;\n    cursor: pointer;\n    margin-left: 49px;\n    text-align: left;\n   }\n   .heroButton2{\n    border-radius: 5px 0px 5px 5px;\n    border-width: 1px;\n    margin-left: 0px;\n    background-color: darkgrey;\n    width: 52px;\n    position: absolute;\n    height: 36px;\n    cursor: pointer;\n}\n   .idSpan{\n      margin-left:0px;\n   }\n.idHeroName{\n      margin-left:10px;\n   }\n   li \n   { \n      display: block; \n      padding: 5px;\n   }\n\nh2, h3 {\n    color: darkslategray;\n    margin-left: 46px;\n}\n   .detailsButton{\n        background-color: lightgrey;\n        border-radius: 5px;\n        color: darkslategray;\n        margin-left: 46px;\n        height: 32px;\n        cursor: pointer;\n    }\n   "]
    })
], HeroesListComponent);
exports.HeroesListComponent = HeroesListComponent;
//# sourceMappingURL=heroes-list.component.js.map