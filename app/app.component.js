System.register(['angular2/core', './UserInfo/userinfo.component', 'angular2/router', './Dash/dash.component', './Beacon/beacon.component', './Notfound/not-found.component', './Login/login.component', "./Login/authentication.component", "./UserInfo/user.service", "./Advertisement/advertisement.component"], function(exports_1, context_1) {
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
    var core_1, userinfo_component_1, router_1, dash_component_1, beacon_component_1, not_found_component_1, login_component_1, authentication_component_1, user_service_1, advertisement_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userinfo_component_1_1) {
                userinfo_component_1 = userinfo_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dash_component_1_1) {
                dash_component_1 = dash_component_1_1;
            },
            function (beacon_component_1_1) {
                beacon_component_1 = beacon_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (advertisement_component_1_1) {
                advertisement_component_1 = advertisement_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _authenticationService) {
                    this._router = _router;
                    this._authenticationService = _authenticationService;
                }
                AppComponent.prototype.isLogin = function (route) {
                    var instruction = this._router.generate(route);
                    return this._router.isRouteActive(instruction);
                };
                AppComponent.prototype.isCurrentRoute = function (route) {
                    var instruction = this._router.generate(route);
                    return this._router.isRouteActive(instruction);
                };
                AppComponent.prototype.logout = function () {
                    if (confirm("Are you sure you want to logout")) {
                        this._authenticationService.logout();
                    }
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/dash/', name: 'Dash', component: dash_component_1.DashComponent },
                        { path: '/user', name: 'UserInfo', component: userinfo_component_1.UserInfoComponent },
                        //{ path: '/user/changePhone', name: 'ChangePhone', component: ChangePhoneComponent },
                        //{ path: '/user/changeEmail', name: 'ChangeEmail', component: ChangeEmailComponent },
                        //{ path: '/user/changePass', name: 'ChangePass', component: ChangePassComponent },
                        { path: '/beacon', name: 'Beacon', component: beacon_component_1.BeaconComponent },
                        { path: '/advertisement', name: 'Advertisement', component: advertisement_component_1.AdvertisementComponent },
                        //{ path: '/beacon/addBeacon', name: 'AddBeacon', component: AddBeaconComponent },
                        //{ path: '/advertisement/addAdvertisement', name: 'AddAdvertisement', component: AddAdvertisementComponent },
                        //{ path: '/beacon/editBeacon/:id', name: 'EditBeacon', component: UpdateBeaconComponent },
                        //{ path: '/advertisement/editAdvertisement/:id', name: 'EditAdvertisement', component: UpdateAdvertisementComponent },
                        //{ path: '/beacon/report', name: 'Report', component: BeaconReportComponent },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
                        { path: '/*other', name: 'NotFound', redirectTo: ['Login'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [authentication_component_1.AuthenticationComponent, user_service_1.UserService],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, authentication_component_1.AuthenticationComponent])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map