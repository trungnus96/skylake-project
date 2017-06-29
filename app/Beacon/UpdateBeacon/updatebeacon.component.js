System.register(['angular2/core', 'angular2/router', 'angular2/common', '../beacon.service', '../beacon'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, router_2, beacon_service_1, beacon_1;
    var UpdateBeaconComponent;
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
            }],
        execute: function() {
            UpdateBeaconComponent = (function () {
                function UpdateBeaconComponent(fb, _router, _routeParams, _beaconService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._beaconService = _beaconService;
                    this.beacon = new beacon_1.Beacon();
                    this.isLoading = false;
                    this.form = fb.group({
                        id: ['', common_1.Validators.required],
                        beaconName: ['', common_1.Validators.required],
                        storeName: ['', common_1.Validators.required],
                        beaconLocation: ['', common_1.Validators.required],
                        beaconCount: ['', common_1.Validators.required]
                    });
                }
                UpdateBeaconComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = localStorage.getItem('beaconid');
                    this._beaconService.getBeacon(id)
                        .subscribe(function (beacon) { return _this.beacon = beacon; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UpdateBeaconComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                UpdateBeaconComponent.prototype.updateBeacon = function () {
                    this.isLoading = true;
                    this._beaconService.updateBeacon(this.form.value)
                        .subscribe(function (x) {
                        alert("Beacon successfully updated.");
                        location.reload();
                    });
                };
                UpdateBeaconComponent = __decorate([
                    core_1.Component({
                        selector: 'update-beacon',
                        templateUrl: 'app/Beacon/UpdateBeacon/update-beacon.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [beacon_service_1.BeaconService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_2.Router, router_2.RouteParams, beacon_service_1.BeaconService])
                ], UpdateBeaconComponent);
                return UpdateBeaconComponent;
            }());
            exports_1("UpdateBeaconComponent", UpdateBeaconComponent);
        }
    }
});
//# sourceMappingURL=updatebeacon.component.js.map