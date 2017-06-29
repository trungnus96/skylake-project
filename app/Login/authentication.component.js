System.register(['angular2/core', 'angular2/router', "../UserInfo/user.service", "../UserInfo/tempUser"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, user_service_1, tempUser_1;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (tempUser_1_1) {
                tempUser_1 = tempUser_1_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent(_userService, _router) {
                    this._userService = _userService;
                    this._router = _router;
                    this.id = new String;
                }
                AuthenticationComponent.prototype.login = function (id, pass) {
                    var _this = this;
                    var user = new tempUser_1.TempUser(id, pass);
                    this._userService.checkLogin(user)
                        .subscribe(function (user) { return _this.checkAuthentication(user); });
                };
                AuthenticationComponent.prototype.checkAuthentication = function (user) {
                    this.id = user;
                    if (this.id.length != 0) {
                        this._router.navigate(['Dash']);
                        return true;
                    }
                };
                AuthenticationComponent.prototype.logout = function () {
                    localStorage.clear();
                    this._router.navigate(['Login']);
                };
                AuthenticationComponent.prototype.checkCredentials = function () {
                    if (localStorage.getItem("username") === null) {
                        this._router.navigate(['Login']);
                    }
                };
                AuthenticationComponent = __decorate([
                    core_1.Component({
                        selector: 'authentication',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_2.Router])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            }());
            exports_1("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
//# sourceMappingURL=authentication.component.js.map