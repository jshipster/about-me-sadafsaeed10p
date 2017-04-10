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
//import { Router } from '@angular/router';
//import { Location } from '@angular/common';
var router_1 = require("@angular/router");
var AuthenticationService_1 = require("./AuthenticationService");
var LoginFormComponent = (function () {
    //  userName:string;
    //  password:string;
    //constructor(private authService:UserAuthService, private router:Router, private location: Location){}
    function LoginFormComponent(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    LoginFormComponent.prototype.AuthenticateUser = function (userName, password) {
        //alert(userName + " " + password);
        if (this.authService.IsUserAuthenticated(userName, password)) {
            alert('User Authenticated!');
            this.router.navigate(['/home']);
            return false;
        }
        else {
            alert('Invalid User name or Password provided!');
        }
    };
    LoginFormComponent.prototype.ngOnInit = function () { };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    core_1.Component({
        selector: 'loginpage',
        //templateUrl: './LoginForm.html',
        template: "\n  <div class=\"container\">\n    <h2 class=\"heroDetailsHeading\">Login</h2>\n    \n        <b class=\"labelFields\">User Name:</b><input #textUName class=\"inputTextBox\" [(ngModel)] = \"txtUserName\">\n        <br />\n        <b class=\"labelFields\">Password:</b><input #textPwd class=\"inputTextBox\" [(ngModel)] = \"txtUserPwd\">\n        <br />\n        <br />\n        <button (click)=\"AuthenticateUser(textUName.value,textPwd.value)\" class=\"backButton\">Login</button>\n       \n       \n  \n    \n    \n</div>\n<router-outlet></router-outlet>\n  ",
        styleUrls: ['./heroDetail-style.css']
    }),
    __metadata("design:paramtypes", [AuthenticationService_1.UserAuthService, router_1.ActivatedRoute, router_1.Router])
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=LoginFormComponent.js.map