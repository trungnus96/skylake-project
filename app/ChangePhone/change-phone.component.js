System.register(['angular2/core', 'angular2/router', 'angular2/common', '../UserInfo/user.service', "../UserInfo/user", "../UserInfo/tempUser", '../Login/authentication.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, router_2, user_service_1, user_1, tempUser_1, authentication_component_1;
    var ChangePhoneComponent;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (tempUser_1_1) {
                tempUser_1 = tempUser_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            }],
        execute: function() {
            ChangePhoneComponent = (function () {
                function ChangePhoneComponent(_userService, fb, _router, _authenticationService) {
                    this._userService = _userService;
                    this._router = _router;
                    this._authenticationService = _authenticationService;
                    this.user = new user_1.User();
                    this.id = "";
                    this.isLoading = false;
                    this.form = fb.group({
                        currentPassword: ['', common_1.Validators.required],
                        newPhoneNo: ['', common_1.Validators.required]
                    });
                    this._authenticationService.checkCredentials();
                }
                ChangePhoneComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUser(localStorage.getItem("username"))
                        .subscribe(function (user) { return _this.user = user; });
                };
                ChangePhoneComponent.prototype.updatePhoneNumber = function () {
                    var _this = this;
                    this.isLoading = true;
                    var newPhoneNo = this.form.find('newPhoneNo');
                    if (newPhoneNo.value == this.user.phone) {
                        newPhoneNo.setErrors({ oldPhone: true });
                        this.isLoading = false;
                    }
                    var currentPassword = this.form.find('currentPassword').value;
                    this.id = localStorage.getItem("username");
                    var user = new tempUser_1.TempUser(this.id, currentPassword);
                    this._userService.checkLogin(user)
                        .subscribe(function (user) { return _this.checkAuthentication(user); });
                };
                ChangePhoneComponent.prototype.checkAuthentication = function (user) {
                    this.id = user;
                    if (this.id.length != 0) {
                        if (this.form.valid) {
                            this.user.phone = this.form.find('newPhoneNo').value;
                            this.user.password = this.form.find('currentPassword').value;
                            this._userService.updateUser(this.user)
                                .subscribe(function (x) {
                                alert("Phone number successfully updated");
                                location.reload();
                            });
                        }
                    }
                    else {
                        this.isLoading = false;
                        this.form.find('currentPassword').setErrors({ validOldPassword: true });
                    }
                };
                ChangePhoneComponent = __decorate([
                    core_1.Component({
                        selector: 'change-phone',
                        templateUrl: 'app/ChangePhone/change-phone.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService, authentication_component_1.AuthenticationComponent]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, common_1.FormBuilder, router_2.Router, authentication_component_1.AuthenticationComponent])
                ], ChangePhoneComponent);
                return ChangePhoneComponent;
            }());
            exports_1("ChangePhoneComponent", ChangePhoneComponent);
        }
    }
});
//# sourceMappingURL=change-phone.component.js.map