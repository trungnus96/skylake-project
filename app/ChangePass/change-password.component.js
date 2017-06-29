System.register(['angular2/core', 'angular2/router', 'angular2/common', './passwordValidators', '../UserInfo/user.service', '../UserInfo/User.ts', "../UserInfo/tempUser", '../Login/authentication.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, router_2, passwordValidators_1, user_service_1, User_ts_1, tempUser_1, authentication_component_1;
    var ChangePassComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (User_ts_1_1) {
                User_ts_1 = User_ts_1_1;
            },
            function (tempUser_1_1) {
                tempUser_1 = tempUser_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            }],
        execute: function() {
            ChangePassComponent = (function () {
                function ChangePassComponent(fb, _router, _routeParams, _userService, _authenticationService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    this._authenticationService = _authenticationService;
                    this.user = new User_ts_1.User();
                    this.id = "";
                    this.isLoading = false;
                    this.form = fb.group({
                        currentPassword: ['', common_1.Validators.required],
                        newPassword: ['', common_1.Validators.required],
                        confirmPassword: ['', common_1.Validators.required]
                    }, { validator: passwordValidators_1.PasswordValidators.passwordsShouldMatch });
                    this._authenticationService.checkCredentials();
                }
                ChangePassComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUser(localStorage.getItem("username"))
                        .subscribe(function (user) { return _this.user = user; });
                };
                ChangePassComponent.prototype.updatePassword = function () {
                    var _this = this;
                    this.isLoading = true;
                    var currentPassword = this.form.find('currentPassword').value;
                    this.id = localStorage.getItem("username");
                    var user = new tempUser_1.TempUser(this.id, currentPassword);
                    this._userService.checkLogin(user)
                        .subscribe(function (user) { return _this.checkAuthentication(user); });
                };
                ChangePassComponent.prototype.checkAuthentication = function (user) {
                    this.id = user;
                    if (this.id.length != 0) {
                        var newPassword = this.form.find('newPassword');
                        var currentPassword = this.form.find('currentPassword').value;
                        if (newPassword.value == currentPassword) {
                            this.isLoading = false;
                            newPassword.setErrors({ duplicatePassword: true });
                        }
                        if (this.form.valid) {
                            this.user.password = this.form.find('newPassword').value;
                            this._userService.updateUser(this.user)
                                .subscribe(function (x) {
                                alert("Password successfully updated.");
                                location.reload();
                            });
                        }
                    }
                    else {
                        this.isLoading = false;
                        this.form.find('currentPassword').setErrors({ validOldPassword: true });
                    }
                };
                ChangePassComponent = __decorate([
                    core_1.Component({
                        selector: 'change-password',
                        templateUrl: 'app/ChangePass/change-password.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService, authentication_component_1.AuthenticationComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_2.Router, router_2.RouteParams, user_service_1.UserService, authentication_component_1.AuthenticationComponent])
                ], ChangePassComponent);
                return ChangePassComponent;
            }());
            exports_1("ChangePassComponent", ChangePassComponent);
        }
    }
});
//# sourceMappingURL=change-password.component.js.map