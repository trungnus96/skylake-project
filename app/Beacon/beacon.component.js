System.register(['angular2/core', 'angular2/router', './beacon.service', "../Login/authentication.component", './AddBeacon/addbeacon.component', './UpdateBeacon/updatebeacon.component'], function(exports_1, context_1) {
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
    var core_1, router_1, beacon_service_1, router_2, authentication_component_1, addbeacon_component_1, updatebeacon_component_1;
    var BeaconComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (beacon_service_1_1) {
                beacon_service_1 = beacon_service_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            },
            function (addbeacon_component_1_1) {
                addbeacon_component_1 = addbeacon_component_1_1;
            },
            function (updatebeacon_component_1_1) {
                updatebeacon_component_1 = updatebeacon_component_1_1;
            }],
        execute: function() {
            BeaconComponent = (function () {
                function BeaconComponent(_service, _router, _authenticationService) {
                    this._service = _service;
                    this._router = _router;
                    this._authenticationService = _authenticationService;
                    this.tempVariable = 0;
                    this.title = "";
                    this.search = '';
                    this.sortVariable = 0;
                    this.isLoading = true;
                    this.isLoadingForDeleteBeacon = false;
                    this._authenticationService.checkCredentials();
                }
                BeaconComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getBeacons()
                        .subscribe(function (beacons) {
                        _this.beacons = beacons;
                        console.log(_this.beacons);
                        _this.isLoading = false;
                    });
                };
                BeaconComponent.prototype.deleteBeacon = function (beacon) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete beacon [" + beacon.id + "]?")) {
                        this.isLoadingForDeleteBeacon = true;
                        var index = this.beacons.indexOf(beacon);
                        this.beacons.splice(index, 1);
                        this._service.deleteBeacon(beacon.id)
                            .subscribe(function (x) {
                            _this.isLoadingForDeleteBeacon = false;
                            alert("Delete the beacon successfully.");
                        }, function (err) {
                            alert("Could not delete the beacon.");
                            _this.beacons.splice(index, 0, beacon);
                        });
                        this._router.navigate(['Beacon']);
                    }
                };
                //tab controlling component
                BeaconComponent.prototype.addBeacon = function () {
                    this.tempVariable = 1;
                    this.title = "Add New Beacon";
                };
                //tab controlling component
                BeaconComponent.prototype.updateBeacon = function (beaconid) {
                    if (this.tempVariable != 2) {
                        this.tempVariable = 2;
                        localStorage.removeItem('beaconid');
                        localStorage.setItem('beaconid', beaconid);
                        this.title = "Update Beacon";
                    }
                    else {
                        this.tempVariable = 0;
                    }
                };
                //tab controlling component
                BeaconComponent.prototype.close = function () {
                    this.tempVariable = 0;
                };
                BeaconComponent.prototype.sort = function () {
                    var e = document.getElementById("sorting");
                    var value = e.options[e.selectedIndex].value;
                    if (value == 1) {
                        this.beacons = this.beacons.sort(this.compare);
                    }
                    if (value == 2) {
                        this.beacons = this.beacons.sort(this.compare).reverse();
                    }
                };
                //sorting in ascending order
                BeaconComponent.prototype.sortA = function () {
                    this.sortVariable = 1;
                    this.beacons = this.beacons.sort(this.compare);
                };
                //soring in descending order
                BeaconComponent.prototype.sortD = function () {
                    this.sortVariable = 0;
                    this.beacons = this.beacons.sort(this.compare).reverse();
                };
                BeaconComponent.prototype.compare = function (a, b) {
                    if (a.id < b.id)
                        return -1;
                    if (a.id > b.id)
                        return 1;
                    return 0;
                };
                BeaconComponent = __decorate([
                    core_1.Component({
                        selector: 'beacon',
                        templateUrl: 'app/Beacon/beacon.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, addbeacon_component_1.AddBeaconComponent, updatebeacon_component_1.UpdateBeaconComponent],
                        providers: [beacon_service_1.BeaconService, authentication_component_1.AuthenticationComponent],
                    }), 
                    __metadata('design:paramtypes', [beacon_service_1.BeaconService, router_2.Router, authentication_component_1.AuthenticationComponent])
                ], BeaconComponent);
                return BeaconComponent;
            }());
            exports_1("BeaconComponent", BeaconComponent);
        }
    }
});
//# sourceMappingURL=beacon.component.js.map