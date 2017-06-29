var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("UserInfo/user.service", ['angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            UserService = (function () {
                function UserService(_http) {
                    this._http = _http;
                    this._url = "http://localhost:3004/users";
                }
                UserService.prototype.getUsers = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                UserService = __decorate([
                    core_1.Injectable()
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
System.register("UserInfo/user", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_2("User", User);
        }
    }
});
System.register("UserInfo/userinfo.component", ['angular2/core', 'angular2/router', "UserInfo/user.service", "UserInfo/user"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, router_1, user_service_1, user_1;
    var UserInfoComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserInfoComponent = (function () {
                function UserInfoComponent(_service) {
                    this._service = _service;
                    this.passwordLetterCount = "";
                    this.users = new user_1.User();
                }
                UserInfoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getUsers()
                        .subscribe(function (users) { return _this.users = users[0]; });
                };
                UserInfoComponent.prototype.passwordLetter = function () {
                    var pass = this.users.pass;
                    var temp = "";
                    if (pass != null) {
                        for (var index = 0; index < pass.length; index++) {
                            temp += "*";
                        }
                    }
                    this.passwordLetterCount = temp;
                };
                UserInfoComponent = __decorate([
                    core_2.Component({
                        selector: 'userinfo',
                        templateUrl: 'app/UserInfo/account-info.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    })
                ], UserInfoComponent);
                return UserInfoComponent;
            }());
            exports_3("UserInfoComponent", UserInfoComponent);
        }
    }
});
System.register("ChangePhone/phoneValidators", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var PhoneValidators;
    return {
        setters:[],
        execute: function() {
            PhoneValidators = (function () {
                function PhoneValidators() {
                }
                PhoneValidators.oldPhone = function (control) {
                    var newPhoneNo = control.find('newPhoneNo').value;
                    if (newPhoneNo == '')
                        return;
                    if (newPhoneNo == '0123456789')
                        return { oldPhone: true };
                };
                return PhoneValidators;
            }());
            exports_4("PhoneValidators", PhoneValidators);
        }
    }
});
System.register("ChangePhone/change-phone.component", ['angular2/core', 'angular2/router', 'angular2/common', "ChangePhone/phoneValidators"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3, router_2, common_1, phoneValidators_1;
    var ChangePhoneComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (phoneValidators_1_1) {
                phoneValidators_1 = phoneValidators_1_1;
            }],
        execute: function() {
            ChangePhoneComponent = (function () {
                function ChangePhoneComponent(fb) {
                    this.form = fb.group({
                        currentPassword: ['', common_1.Validators.required],
                        newPhoneNo: ['', common_1.Validators.required]
                    }, { validator: phoneValidators_1.PhoneValidators.oldPhone });
                }
                ChangePhoneComponent.prototype.updatePhoneNumber = function () {
                    var currentPassword = this.form.find('currentPassword');
                    if (currentPassword.value != '1234')
                        currentPassword.setErrors({ validOldPassword: true });
                    if (this.form.valid)
                        alert("Phone number successfully updated.");
                };
                ChangePhoneComponent = __decorate([
                    core_3.Component({
                        selector: 'change-phone',
                        templateUrl: 'app/ChangePhone/change-phone.component.html',
                        directives: [router_2.ROUTER_DIRECTIVES]
                    })
                ], ChangePhoneComponent);
                return ChangePhoneComponent;
            }());
            exports_5("ChangePhoneComponent", ChangePhoneComponent);
        }
    }
});
System.register("ChangeEmail/emailValidators", [], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.oldEmail = function (control) {
                    var newEmail = control.find('newEmail').value;
                    if (newEmail == '')
                        return;
                    if (newEmail == 'trung@gmail.com')
                        return { oldEmail: true };
                };
                return EmailValidators;
            }());
            exports_6("EmailValidators", EmailValidators);
        }
    }
});
System.register("ChangeEmail/change-email.component", ['angular2/core', 'angular2/router', 'angular2/common', "ChangeEmail/emailValidators"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_4, router_3, common_2, emailValidators_1;
    var ChangeEmailComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (common_2_1) {
                common_2 = common_2_1;
            },
            function (emailValidators_1_1) {
                emailValidators_1 = emailValidators_1_1;
            }],
        execute: function() {
            ChangeEmailComponent = (function () {
                function ChangeEmailComponent(fb, _router) {
                    this._router = _router;
                    this.form = fb.group({
                        currentPassword: ['', common_2.Validators.required],
                        newEmail: ['', common_2.Validators.required]
                    }, { validator: emailValidators_1.EmailValidators.oldEmail });
                }
                ChangeEmailComponent.prototype.updateEmail = function () {
                    var currentPassword = this.form.find('currentPassword');
                    if (currentPassword.value != '1234')
                        currentPassword.setErrors({ validOldPassword: true });
                    if (this.form.valid)
                        alert("Email successfully updated.");
                };
                ChangeEmailComponent.prototype.hihi = function ($event) {
                    this._router.navigate(['UserInfo']);
                };
                ChangeEmailComponent = __decorate([
                    core_4.Component({
                        selector: 'change-password',
                        templateUrl: 'app/ChangeEmail/change-email.component.html',
                        directives: [router_3.ROUTER_DIRECTIVES]
                    })
                ], ChangeEmailComponent);
                return ChangeEmailComponent;
            }());
            exports_7("ChangeEmailComponent", ChangeEmailComponent);
        }
    }
});
System.register("ChangePass/passwordValidators", [], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.passwordsShouldMatch = function (group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmPassword = group.find('confirmPassword').value;
                    if (newPassword == '' || confirmPassword == '')
                        return null;
                    if (newPassword != confirmPassword)
                        return { passwordsShouldMatch: true };
                    return null;
                };
                return PasswordValidators;
            }());
            exports_8("PasswordValidators", PasswordValidators);
        }
    }
});
System.register("ChangePass/change-password.component", ['angular2/core', 'angular2/router', 'angular2/common', "ChangePass/passwordValidators"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_5, router_4, common_3, passwordValidators_1;
    var ChangePassComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (common_3_1) {
                common_3 = common_3_1;
            },
            function (passwordValidators_1_1) {
                passwordValidators_1 = passwordValidators_1_1;
            }],
        execute: function() {
            ChangePassComponent = (function () {
                function ChangePassComponent(fb) {
                    this.form = fb.group({
                        currentPassword: ['', common_3.Validators.required],
                        newPassword: ['', common_3.Validators.required],
                        confirmPassword: ['', common_3.Validators.required]
                    }, { validator: passwordValidators_1.PasswordValidators.passwordsShouldMatch });
                }
                ChangePassComponent.prototype.changePassword = function () {
                    var currentPassword = this.form.find('currentPassword');
                    if (currentPassword.value != '1234')
                        currentPassword.setErrors({ validOldPassword: true });
                    if (this.form.valid)
                        alert("Password successfully changed.");
                };
                ChangePassComponent = __decorate([
                    core_5.Component({
                        selector: 'change-password',
                        templateUrl: 'app/ChangePass/change-password.component.html',
                        directives: [router_4.ROUTER_DIRECTIVES]
                    })
                ], ChangePassComponent);
                return ChangePassComponent;
            }());
            exports_9("ChangePassComponent", ChangePassComponent);
        }
    }
});
System.register("Dash/dash.component", ['angular2/core', 'angular2/router'], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_6, router_5;
    var DashComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            }],
        execute: function() {
            DashComponent = (function () {
                function DashComponent() {
                }
                DashComponent = __decorate([
                    core_6.Component({
                        selector: 'dash',
                        templateUrl: 'app/Dash/dash.component.html',
                        directives: [router_5.ROUTER_DIRECTIVES]
                    })
                ], DashComponent);
                return DashComponent;
            }());
            exports_10("DashComponent", DashComponent);
        }
    }
});
System.register("Beacon/beacon", [], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var Beacon;
    return {
        setters:[],
        execute: function() {
            Beacon = (function () {
                function Beacon() {
                }
                return Beacon;
            }());
            exports_11("Beacon", Beacon);
        }
    }
});
System.register("Beacon/beacon.service", ['angular2/core', 'rxjs/add/operator/map'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_7;
    var BeaconService;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (_2) {}],
        execute: function() {
            BeaconService = (function () {
                function BeaconService(_http) {
                    this._http = _http;
                    this._url = "http://localhost:3004/beacons";
                }
                BeaconService.prototype.getBeacons = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                BeaconService.prototype.getBeacon = function (beaconId) {
                    return this._http.get(this._url + "/" + beaconId)
                        .map(function (res) { return res.json(); });
                };
                BeaconService.prototype.addBeacon = function (beacon) {
                    return this._http.post(this._url, JSON.stringify(beacon))
                        .map(function (res) { return res.json(); });
                };
                BeaconService.prototype.deleteBeacon = function (beaconId) {
                    return this._http.delete(this.getBeaconUrl(beaconId))
                        .map(function (res) { return res.json(); });
                };
                BeaconService.prototype.getBeaconUrl = function (beaconId) {
                    return this._url + "/" + beaconId;
                };
                BeaconService = __decorate([
                    core_7.Injectable()
                ], BeaconService);
                return BeaconService;
            }());
            exports_12("BeaconService", BeaconService);
        }
    }
});
System.register("Beacon/beacon.component", ['angular2/core', 'angular2/router', "Beacon/beacon.service"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_8, router_6, beacon_service_1;
    var BeaconComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (beacon_service_1_1) {
                beacon_service_1 = beacon_service_1_1;
            }],
        execute: function() {
            BeaconComponent = (function () {
                function BeaconComponent(_service) {
                    this._service = _service;
                }
                BeaconComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getBeacons()
                        .subscribe(function (beacons) { return _this.beacons = beacons; });
                };
                BeaconComponent.prototype.deleteBeacon = function (beacon) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete beacon [" + beacon.id + "]?")) {
                        var index = this.beacons.indexOf(beacon);
                        // Here, with the splice method, we remove 1 object
                        // at the given index.
                        this.beacons.splice(index, 1);
                        this._service.deleteBeacon(beacon.id)
                            .subscribe(null, function (err) {
                            alert("Could not delete the beacon.");
                            // Revert the view back to its original state
                            // by putting the user object at the index
                            // it used to be.
                            _this.beacons.splice(index, 0, beacon);
                        });
                    }
                };
                BeaconComponent = __decorate([
                    core_8.Component({
                        selector: 'beacon',
                        templateUrl: 'app/Beacon/beacon.component.html',
                        directives: [router_6.ROUTER_DIRECTIVES],
                        providers: [beacon_service_1.BeaconService]
                    })
                ], BeaconComponent);
                return BeaconComponent;
            }());
            exports_13("BeaconComponent", BeaconComponent);
        }
    }
});
System.register("Beacon/AddBeacon/beacon-validator", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var BeaconValidator;
    return {
        setters:[],
        execute: function() {
            BeaconValidator = (function () {
                function BeaconValidator() {
                }
                BeaconValidator.oldBeacon = function (control) {
                    var id = control;
                    if (id == null)
                        return;
                    if (id.value == '12AB')
                        return { oldBeacon: true };
                };
                return BeaconValidator;
            }());
            exports_14("BeaconValidator", BeaconValidator);
        }
    }
});
System.register("Beacon/AddBeacon/Beacon", [], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var Beacon;
    return {
        setters:[],
        execute: function() {
            Beacon = (function () {
                function Beacon() {
                }
                return Beacon;
            }());
            exports_15("Beacon", Beacon);
        }
    }
});
System.register("Beacon/AddBeacon/addbeacon.component", ['angular2/core', 'angular2/router', 'angular2/common', "Beacon/AddBeacon/beacon-validator", "Beacon/beacon.service", "Beacon/AddBeacon/Beacon"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_9, router_7, common_4, beacon_validator_1, beacon_service_2, Beacon_ts_1;
    var AddBeaconComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (router_7_1) {
                router_7 = router_7_1;
            },
            function (common_4_1) {
                common_4 = common_4_1;
            },
            function (beacon_validator_1_1) {
                beacon_validator_1 = beacon_validator_1_1;
            },
            function (beacon_service_2_1) {
                beacon_service_2 = beacon_service_2_1;
            },
            function (Beacon_ts_1_1) {
                Beacon_ts_1 = Beacon_ts_1_1;
            }],
        execute: function() {
            AddBeaconComponent = (function () {
                function AddBeaconComponent(fb, _router, _routeParams, _beaconService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._beaconService = _beaconService;
                    this.beacon = new Beacon_ts_1.Beacon();
                    this.form = fb.group({
                        id: ['', common_4.Validators.compose([
                                common_4.Validators.required, beacon_validator_1.BeaconValidator.oldBeacon
                            ])],
                        beaconName: ['', common_4.Validators.required],
                        storeName: ['', common_4.Validators.required],
                        location: ['', common_4.Validators.required]
                    });
                }
                AddBeaconComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit Beacon" : "New Beacon";
                    if (!id)
                        return;
                    this._beaconService.getBeacon(id)
                        .subscribe(function (beacon) { return _this.beacon = beacon; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                AddBeaconComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                AddBeaconComponent.prototype.addBeacon = function () {
                    var _this = this;
                    console.log(this.form);
                    var newB = new Beacon_ts_1.Beacon();
                    newB.id = this.form.find('id').value;
                    newB.beaconName = this.form.find('beaconName').value;
                    newB.storeName = this.form.find('storeName').value;
                    newB.location = this.form.find('location').value;
                    this._beaconService.addBeacon(newB)
                        .subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['Beacon']);
                    });
                };
                AddBeaconComponent = __decorate([
                    core_9.Component({
                        selector: 'add-beacon',
                        templateUrl: 'app/Beacon/AddBeacon/add-beacon.component.html',
                        directives: [router_7.ROUTER_DIRECTIVES],
                        providers: [beacon_service_2.BeaconService]
                    })
                ], AddBeaconComponent);
                return AddBeaconComponent;
            }());
            exports_16("AddBeaconComponent", AddBeaconComponent);
        }
    }
});
System.register("Beacon/ReportBeacon/beaconReport.component", ['angular2/core', 'angular2/router', "Beacon/beacon.service"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_10, router_8, beacon_service_3;
    var BeaconReportComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (router_8_1) {
                router_8 = router_8_1;
            },
            function (beacon_service_3_1) {
                beacon_service_3 = beacon_service_3_1;
            }],
        execute: function() {
            BeaconReportComponent = (function () {
                function BeaconReportComponent(_service) {
                    this._service = _service;
                    this.hihi();
                }
                BeaconReportComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getBeacons()
                        .subscribe(function (beacons) { return _this.beacons = beacons; });
                };
                BeaconReportComponent.prototype.hihi = function () {
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();
                    var day;
                    var month;
                    if (dd < 10) {
                        day = "0" + dd.toString();
                    }
                    else {
                        day = dd.toString();
                    }
                    if (mm < 10) {
                        month = "0" + mm.toString();
                    }
                    else {
                        month = mm.toString();
                    }
                    this.time = day + '/' + month + '/' + yyyy;
                };
                BeaconReportComponent = __decorate([
                    core_10.Component({
                        selector: 'beacon',
                        templateUrl: 'app/Beacon/ReportBeacon/beaconReport.component.html',
                        directives: [router_8.ROUTER_DIRECTIVES],
                        providers: [beacon_service_3.BeaconService]
                    })
                ], BeaconReportComponent);
                return BeaconReportComponent;
            }());
            exports_17("BeaconReportComponent", BeaconReportComponent);
        }
    }
});
System.register("Notfound/not-found.component", ['angular2/core', 'angular2/router'], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_11, router_9;
    var NotFoundComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (router_9_1) {
                router_9 = router_9_1;
            }],
        execute: function() {
            NotFoundComponent = (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent = __decorate([
                    core_11.Component({
                        templateUrl: 'app/Notfound/not-found.component.html',
                        directives: [router_9.ROUTER_DIRECTIVES]
                    })
                ], NotFoundComponent);
                return NotFoundComponent;
            }());
            exports_18("NotFoundComponent", NotFoundComponent);
        }
    }
});
System.register("Login/login.component", ['angular2/core', 'angular2/common', 'angular2/router'], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_12, common_5, router_10;
    var LoginComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (common_5_1) {
                common_5 = common_5_1;
            },
            function (router_10_1) {
                router_10 = router_10_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(fb, _router) {
                    this._router = _router;
                    this.form = fb.group({
                        userName: ['', common_5.Validators.required],
                        password: ['', common_5.Validators.required]
                    });
                }
                LoginComponent.prototype.login = function () {
                    var userName = this.form.find('userName');
                    if (userName.value != 'abc123') {
                        userName.setErrors({ invalidUserName: true });
                    }
                    var password = this.form.find('password');
                    if (password.value != '1234') {
                        password.setErrors({ invalidPassword: true });
                    }
                    if (this.form.valid) {
                        alert("Login successfully");
                        this._router.navigate(['Dash']);
                    }
                };
                LoginComponent = __decorate([
                    core_12.Component({
                        selector: 'my-app',
                        templateUrl: 'app/Login/login.component.html',
                        directives: [router_10.ROUTER_DIRECTIVES]
                    })
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_19("LoginComponent", LoginComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "UserInfo/userinfo.component", 'angular2/router', "ChangePhone/change-phone.component", "ChangeEmail/change-email.component", "ChangePass/change-password.component", "Dash/dash.component", "Beacon/beacon.component", "Beacon/AddBeacon/addbeacon.component", "Beacon/ReportBeacon/beaconReport.component", "Notfound/not-found.component", "Login/login.component"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_13, userinfo_component_1, router_11, change_phone_component_1, change_email_component_1, change_password_component_1, dash_component_1, beacon_component_1, addbeacon_component_1, beaconReport_component_1, not_found_component_1, login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (userinfo_component_1_1) {
                userinfo_component_1 = userinfo_component_1_1;
            },
            function (router_11_1) {
                router_11 = router_11_1;
            },
            function (change_phone_component_1_1) {
                change_phone_component_1 = change_phone_component_1_1;
            },
            function (change_email_component_1_1) {
                change_email_component_1 = change_email_component_1_1;
            },
            function (change_password_component_1_1) {
                change_password_component_1 = change_password_component_1_1;
            },
            function (dash_component_1_1) {
                dash_component_1 = dash_component_1_1;
            },
            function (beacon_component_1_1) {
                beacon_component_1 = beacon_component_1_1;
            },
            function (addbeacon_component_1_1) {
                addbeacon_component_1 = addbeacon_component_1_1;
            },
            function (beaconReport_component_1_1) {
                beaconReport_component_1 = beaconReport_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                }
                AppComponent.prototype.isLogin = function (route) {
                    var instruction = this._router.generate(route);
                    return this._router.isRouteActive(instruction);
                };
                AppComponent.prototype.isCurrentRoute = function (route) {
                    var instruction = this._router.generate(route);
                    return this._router.isRouteActive(instruction);
                };
                AppComponent = __decorate([
                    router_11.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/dash/', name: 'Dash', component: dash_component_1.DashComponent },
                        { path: '/user', name: 'UserInfo', component: userinfo_component_1.UserInfoComponent },
                        { path: '/user/changePhone', name: 'ChangePhone', component: change_phone_component_1.ChangePhoneComponent },
                        { path: '/user/changeEmail', name: 'ChangeEmail', component: change_email_component_1.ChangeEmailComponent },
                        { path: '/user/changePass', name: 'ChangePass', component: change_password_component_1.ChangePassComponent },
                        { path: '/beacon', name: 'Beacon', component: beacon_component_1.BeaconComponent },
                        { path: '/beacon/addBeacon', name: 'AddBeacon', component: addbeacon_component_1.AddBeaconComponent },
                        { path: '/beacon/editBeacon/:id', name: 'EditBeacon', component: addbeacon_component_1.AddBeaconComponent },
                        { path: '/beacon/report', name: 'Report', component: beaconReport_component_1.BeaconReportComponent },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
                        { path: '/*other', name: 'NotFound', redirectTo: ['NotFound'] }
                    ]),
                    core_13.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_11.ROUTER_DIRECTIVES]
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_20("AppComponent", AppComponent);
        }
    }
});
