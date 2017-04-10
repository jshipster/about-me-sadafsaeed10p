"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard-component");
var heroes_list_component_1 = require("./heroes-list.component");
var hero_details_component_1 = require("./hero-details-component");
var hero_service_1 = require("./hero.service");
var UserService_1 = require("./UserService");
var UserProfile_component_1 = require("./UserProfile.component");
var AuthenticationService_1 = require("./AuthenticationService");
var LoginFormComponent_1 = require("./LoginFormComponent");
var home_component_1 = require("./home-component");
exports.router = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'myheroes', component: heroes_list_component_1.HeroesListComponent },
    { path: 'hero/:id/:page', component: hero_details_component_1.HeroDetailsComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService), router_1.RouterModule.forRoot(exports.router)],
        declarations: [app_component_1.AppComponent, LoginFormComponent_1.LoginFormComponent, home_component_1.HomeComponent, dashboard_component_1.DashboardComponent, heroes_list_component_1.HeroesListComponent, hero_details_component_1.HeroDetailsComponent, UserProfile_component_1.UserProfileComponent],
        providers: [hero_service_1.HeroService2, UserService_1.UserService, AuthenticationService_1.UserAuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map