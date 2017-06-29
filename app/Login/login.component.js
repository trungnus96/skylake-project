System.register(['angular2/core', 'angular2/common', 'angular2/router', "../UserInfo/user.service", "../UserInfo/tempUser"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, router_2, user_service_1, tempUser_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            LoginComponent = (function () {
                function LoginComponent(fb, _userService, _router) {
                    this._userService = _userService;
                    this._router = _router;
                    this.id = new String;
                    this.isLoading = false;
                    this.form = fb.group({
                        userName: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required],
                    });
                }
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.isLoading = true;
                    var id = this.form.find('userName').value;
                    var pass = this.form.find('password').value;
                    this.username = id;
                    var user = new tempUser_1.TempUser(id, pass);
                    this._userService.checkLogin(user)
                        .subscribe(function (user) { return _this.navigateToDashBoard(user); });
                };
                //if user enters correct ID and password, the front-end will navigate to Dashboard
                LoginComponent.prototype.navigateToDashBoard = function (user) {
                    this.id = user;
                    if (this.id.length != 0) {
                        localStorage.setItem("username", this.username);
                        this._router.navigate(['Dash']);
                        return true;
                    }
                    else {
                        alert('Wrong username or password');
                        this.isLoading = false;
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/Login/login.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService],
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService, router_2.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map