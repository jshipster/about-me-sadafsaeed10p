"use strict";
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.getInstance = function () {
        if (!HeroService.instance) {
            HeroService.instance = new HeroService();
        }
        return HeroService.instance;
    };
    HeroService.prototype.GetAllHeroes = function () {
        if (this.allHeroes === null || this.allHeroes === undefined) {
            this.allHeroes =
                [
                    { name: 'Mr. Nice', id: 11 },
                    { name: 'Narco', id: 12 },
                    { name: 'Bombasto', id: 13 },
                    { name: 'Celeritas', id: 14 },
                    { name: 'Magenta', id: 15 },
                    { name: 'RubberMan', id: 16 },
                    { name: 'Dynama', id: 17 },
                    { name: 'Dr. IQ', id: 18 },
                    { name: 'Magma', id: 19 },
                    { name: 'Torando', id: 20 }
                ];
        }
        return this.allHeroes;
    };
    HeroService.prototype.GetHeroById = function (id) {
        return this.GetAllHeroes().filter(function (item) { return item.id == id; })[0];
    };
    HeroService.prototype.GetTopHeroes = function () {
        return this.GetAllHeroes().filter(function (item) { return item.id < 15; });
    };
    HeroService.prototype.UpdateHeroNameById = function (id, updatedHeroName) {
        var objIndex = this.GetAllHeroes().findIndex((function (obj) { return obj.id == id; }));
        this.allHeroes[objIndex].name = updatedHeroName;
    };
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=Heroes.js.map