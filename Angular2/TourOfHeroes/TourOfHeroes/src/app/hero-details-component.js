"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Heroes_1 = require("./Heroes");
var HeroDetailsComponent = (function () {
    function HeroDetailsComponent(route) {
        this.route = route;
    }
    HeroDetailsComponent.prototype.ngOnInit = function () {
        this.heroId = this.route.snapshot.params['id'];
        this.previousPage = this.route.snapshot.params['page'];
        var mySelectedHero = Heroes_1.HeroService.getInstance().GetHeroById(this.heroId);
        if (mySelectedHero != null && mySelectedHero != undefined)
            this.heroName = mySelectedHero.name;
    };
    HeroDetailsComponent.prototype.onTextChage = function ($event) {
        Heroes_1.HeroService.getInstance().UpdateHeroNameById(this.heroId, $event.target.value);
    };
    return HeroDetailsComponent;
}());
HeroDetailsComponent = __decorate([
    core_1.Component({
        selector: 'hero-details',
        templateUrl: './hero-detail-form.html',
        styleUrls: ['./heroDetail-style.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], HeroDetailsComponent);
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details-component.js.map