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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var Heroes_1 = require("./Heroes");
var hero_service_1 = require("./hero.service");
var HeroDetailsComponent = (function () {
    function HeroDetailsComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    /* ngOnInit()
     {
         this.heroId = this.route.snapshot.params['id'];
         this.previousPage = this.route.snapshot.params['page'];
         let mySelectedHero:Hero = HeroService.getInstance().GetHeroById(this.heroId);
         this.heroService.getHero(this.heroId).then(t => mySelectedHero = t).catch(error => alert(error.message));
         //this.hero = mySelectedHero;
         //this.heroId = this.hero.id;
         //this.heroName = this.hero.name;
         //if(mySelectedHero != null && mySelectedHero != undefined)
         //   this.heroName = mySelectedHero.name;
     }
     */
    HeroDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroId = this.route.snapshot.params['id'];
        //  this.previousPage = this.route.snapshot.params['page'];
        this.heroService.getHero(this.heroId).then(function (heroes) { return _this.hero = heroes; });
    };
    HeroDetailsComponent.prototype.onTextChage = function ($event) {
        Heroes_1.HeroService.getInstance().UpdateHeroNameById(this.heroId, $event.target.value);
    };
    HeroDetailsComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    HeroDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailsComponent;
}());
HeroDetailsComponent = __decorate([
    core_1.Component({
        selector: 'hero-details',
        templateUrl: './hero-detail-form.html',
        styleUrls: ['./heroDetail-style.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService2,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailsComponent);
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details-component.js.map