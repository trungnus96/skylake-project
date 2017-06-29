System.register(['angular2/core', 'angular2/router', './user.service', './user', "../Login/authentication.component", "../ChangeEmail/change-email.component", "../ChangePhone/change-phone.component", "../ChangePass/change-password.component"], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, user_1, authentication_component_1, change_email_component_1, change_phone_component_1, change_password_component_1;
    var UserInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            },
            function (change_email_component_1_1) {
                change_email_component_1 = change_email_component_1_1;
            },
            function (change_phone_component_1_1) {
                change_phone_component_1 = change_phone_component_1_1;
            },
            function (change_password_component_1_1) {
                change_password_component_1 = change_password_component_1_1;
            }],
        execute: function() {
            UserInfoComponent = (function () {
                function UserInfoComponent(_userService, _authenticationService) {
                    this._userService = _userService;
                    this._authenticationService = _authenticationService;
                    this.user = new user_1.User();
                    this.tempVariable = 0;
                    this.title = '';
                    this.isLoading = true;
                    this._authenticationService.checkCredentials();
                }
                UserInfoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUser(localStorage.getItem("username"))
                        .subscribe(function (user) {
                        _this.user = user;
                        _this.isLoading = false;
                    });
                };
                //tab controlling component
                UserInfoComponent.prototype.pass = function () {
                    this.tempVariable = 1;
                    this.title = 'Change Password';
                };
                //tab controlling component
                UserInfoComponent.prototype.email = function () {
                    this.tempVariable = 2;
                    this.title = 'Change Email';
                };
                //tab controlling component
                UserInfoComponent.prototype.phone = function () {
                    this.tempVariable = 3;
                    this.title = 'Change Phone Number';
                };
                //tab controlling component
                UserInfoComponent.prototype.back = function () {
                    this.tempVariable = 0;
                    this.title = '';
                };
                UserInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'userinfo',
                        templateUrl: 'app/UserInfo/account-info.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, change_email_component_1.ChangeEmailComponent, change_password_component_1.ChangePassComponent, change_phone_component_1.ChangePhoneComponent],
                        providers: [authentication_component_1.AuthenticationComponent, user_service_1.UserService],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, authentication_component_1.AuthenticationComponent])
                ], UserInfoComponent);
                return UserInfoComponent;
            }());
            exports_1("UserInfoComponent", UserInfoComponent);
        }
    }
});
//# sourceMappingURL=userinfo.component.js.map