System.register(['angular2/core', 'angular2/router', '../Login/checkCredentials', "../Beacon/beacon.service", "../Advertisement/advertisement.service"], function(exports_1, context_1) {
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
    var core_1, router_1, checkCredentials_1, beacon_service_1, advertisement_service_1;
    var DashComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (checkCredentials_1_1) {
                checkCredentials_1 = checkCredentials_1_1;
            },
            function (beacon_service_1_1) {
                beacon_service_1 = beacon_service_1_1;
            },
            function (advertisement_service_1_1) {
                advertisement_service_1 = advertisement_service_1_1;
            }],
        execute: function() {
            DashComponent = (function () {
                function DashComponent(_authenticationService, _beaconService, _advertisementService) {
                    this._authenticationService = _authenticationService;
                    this._beaconService = _beaconService;
                    this._advertisementService = _advertisementService;
                    this.beacons = new Array();
                    this.advertisements = new Array();
                    this.username = "";
                    this.isLoadingForBeacon = true;
                    this.isLoadingForAdvertisement = true;
                    this._authenticationService.checkCredentials();
                    this.username = localStorage.getItem("username");
                }
                DashComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._beaconService.getBeacons()
                        .subscribe(function (beacons) {
                        _this.beacons = beacons;
                        _this.isLoadingForBeacon = false;
                    });
                    this._advertisementService.getAdvertisements()
                        .subscribe(function (advertisements) {
                        _this.advertisements = advertisements;
                        _this.isLoadingForAdvertisement = false;
                    });
                };
                DashComponent = __decorate([
                    core_1.Component({
                        selector: 'dash',
                        templateUrl: 'app/Dash/dash.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [checkCredentials_1.CheckCredentials, beacon_service_1.BeaconService, advertisement_service_1.AdvertisementService]
                    }), 
                    __metadata('design:paramtypes', [checkCredentials_1.CheckCredentials, beacon_service_1.BeaconService, advertisement_service_1.AdvertisementService])
                ], DashComponent);
                return DashComponent;
            }());
            exports_1("DashComponent", DashComponent);
        }
    }
});
//# sourceMappingURL=dash.component.js.map