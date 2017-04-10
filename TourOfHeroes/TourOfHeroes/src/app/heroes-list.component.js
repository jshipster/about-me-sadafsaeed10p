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
        templateUrl: './hero-list-form.html',
        styleUrls: ['./heroList-style.css']
    })
], HeroesListComponent);
exports.HeroesListComponent = HeroesListComponent;
//# sourceMappingURL=heroes-list.component.js.map