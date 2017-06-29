System.register(['angular2/core', 'angular2/router', 'angular2/common', '../beacon.service', '../beacon', '../../Login/authentication.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, router_2, beacon_service_1, beacon_1, authentication_component_1;
    var AddBeaconComponent;
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
            function (beacon_service_1_1) {
                beacon_service_1 = beacon_service_1_1;
            },
            function (beacon_1_1) {
                beacon_1 = beacon_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            }],
        execute: function() {
            AddBeaconComponent = (function () {
                function AddBeaconComponent(fb, _router, _routeParams, _beaconService, _authenticationService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._beaconService = _beaconService;
                    this._authenticationService = _authenticationService;
                    this.beacon = new beacon_1.Beacon('', '', '', '', 0);
                    this.beacons = new Array();
                    this.isLoading = false;
                    this.form = fb.group({
                        id: ['', common_1.Validators.required],
                        beaconName: ['', common_1.Validators.required],
                        storeName: ['', common_1.Validators.required],
                        beaconLocation: ['', common_1.Validators.required],
                        beaconCount: ['']
                    });
                    this._authenticationService.checkCredentials();
                }
                AddBeaconComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._beaconService.getBeacons()
                        .subscribe(function (beacons) { return _this.beacons = beacons; });
                };
                AddBeaconComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                AddBeaconComponent.prototype.addBeacon = function () {
                    this.isLoading = true;
                    var beaconId = this.form.find('id');
                    var existing = this.beacons.find(function (b) { return b.id == beaconId.value; });
                    if (existing) {
                        beaconId.setErrors({ oldBeacon: true });
                        this.isLoading = false;
                    }
                    if (this.form.valid) {
                        this._beaconService.addBeacon(this.form.value)
                            .subscribe(function (x) {
                            alert("Beacon successfully added.");
                            location.reload();
                        });
                    }
                };
                AddBeaconComponent = __decorate([
                    core_1.Component({
                        selector: 'add-beacon',
                        templateUrl: 'app/Beacon/AddBeacon/add-beacon.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [beacon_service_1.BeaconService, authentication_component_1.AuthenticationComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_2.Router, router_2.RouteParams, beacon_service_1.BeaconService, authentication_component_1.AuthenticationComponent])
                ], AddBeaconComponent);
                return AddBeaconComponent;
            }());
            exports_1("AddBeaconComponent", AddBeaconComponent);
        }
    }
});
//# sourceMappingURL=addbeacon.component.js.map