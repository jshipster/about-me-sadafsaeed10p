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
        var mySelectedHero = Heroes_1.HeroService.getInstance().GetHeroById(this.heroId);
        if (mySelectedHero != null && mySelectedHero != undefined)
            this.heroName = mySelectedHero.name;
    };
    HeroDetailsComponent.prototype.onTextChage = function ($event) {
        Heroes_1.HeroService.getInstance().UpdateHeroNameById(this.heroId, $event.target.value);
    };
    HeroDetailsComponent.prototype.goBack = function () {
        window.history.back();
    };
    return HeroDetailsComponent;
}());
HeroDetailsComponent = __decorate([
    core_1.Component({
        selector: 'hero-details',
        template: "\n    <h2 class=\"heroDetailsHeading\">{{box.value}} details!</h2>\n    <b class=\"labelFields\">Id:</b><label class=\"labelId\"> {{heroId}}</label>\n    <br />\n    <b class=\"labelFields\">Name:</b><input class=\"inputTextBox\" #box (keyup)=\"onTextChage($event)\" value=\"{{heroName}}\">\n    <br />\n    <br />\n    <button class=\"backButton\" (click)=\"goBack()\">Back</button>\n  ",
        styles: ["\n  .heroDetailsHeading {\n      color: darkslategrey;\n      margin-left: 46px;\n    }\n\n    .labelFields{\n         color: grey;\n         margin-left: 46px;\n    }\n    .inputTextBox{\n        margin-left: 10px;\n        height: 30px;\n        font-size: medium;\n    }\n\n    .labelId{\n        margin-left: 31px;\n        color: grey;\n        font-weight: bold;\n        font-size: large;\n    }\n\n    .backButton{\n        background-color: lightgrey;\n        border-radius: 5px;\n        color: grey;\n        margin-left: 46px;\n        height: 32px;\n        cursor:pointer;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], HeroDetailsComponent);
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details-component.js.map