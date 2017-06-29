System.register(['angular2/core', 'angular2/router', './advertisement.service', "../Login/authentication.component", './AddAdvertisement/addadvertisement.component', './UpdateAdvertisement/updateadvertisement.component', './ViewAdvertisement/viewadvertisement.component'], function(exports_1, context_1) {
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
    var core_1, router_1, advertisement_service_1, router_2, authentication_component_1, addadvertisement_component_1, updateadvertisement_component_1, viewadvertisement_component_1;
    var AdvertisementComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (advertisement_service_1_1) {
                advertisement_service_1 = advertisement_service_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            },
            function (addadvertisement_component_1_1) {
                addadvertisement_component_1 = addadvertisement_component_1_1;
            },
            function (updateadvertisement_component_1_1) {
                updateadvertisement_component_1 = updateadvertisement_component_1_1;
            },
            function (viewadvertisement_component_1_1) {
                viewadvertisement_component_1 = viewadvertisement_component_1_1;
            }],
        execute: function() {
            AdvertisementComponent = (function () {
                function AdvertisementComponent(_advertisementService, _router, _authenticationService) {
                    var _this = this;
                    this._advertisementService = _advertisementService;
                    this._router = _router;
                    this._authenticationService = _authenticationService;
                    this.boo = false;
                    this.tempVariable = 0;
                    this.title = "";
                    this.searchByAdId = '';
                    this.searchByBeaconId = '';
                    this.sortVariable = 0;
                    this.isLoading = true;
                    this.isLoadingForDeleteAd = false;
                    this._authenticationService.checkCredentials();
                    this._advertisementService.getAdvertisements()
                        .subscribe(function (advertisements) {
                        _this.advertisements = advertisements;
                        _this.isLoading = false;
                    });
                }
                AdvertisementComponent.prototype.ngOnInit = function () {
                };
                AdvertisementComponent.prototype.deleteAdvertisement = function (advertisement) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete advertisement [" + advertisement.id + "]?")) {
                        this.tempVariable = 0;
                        var index = this.advertisements.indexOf(advertisement);
                        this.isLoadingForDeleteAd = true;
                        this.advertisements.splice(index, 1);
                        this._advertisementService.deleteAdvertisement(advertisement)
                            .subscribe(function (x) {
                            _this.isLoadingForDeleteAd = false;
                            alert("Delete the advertisement successfully.");
                        }, function (err) {
                            alert("Could not delete the advertisement.");
                            _this.advertisements.splice(index, 0, advertisement);
                        });
                    }
                };
                //tab controlling component
                AdvertisementComponent.prototype.addAdvertisement = function () {
                    this.tempVariable = 1;
                    this.title = "Add New Advertisement";
                };
                //tab controlling component
                AdvertisementComponent.prototype.updateAdvertisement = function (adid) {
                    if (this.tempVariable != 2) {
                        this.tempVariable = 2;
                        localStorage.removeItem('advertisementid');
                        localStorage.setItem('advertisementid', adid);
                        this.title = "Update Advertisement";
                    }
                    else {
                        this.tempVariable = 0;
                    }
                };
                //tab controlling component
                AdvertisementComponent.prototype.viewAdvertisement = function (adid) {
                    if (this.tempVariable != 3) {
                        this.tempVariable = 3;
                        localStorage.removeItem('advertisementid');
                        localStorage.setItem('advertisementid', adid);
                        this.title = "Advertisement Detail";
                    }
                    else {
                        this.tempVariable = 0;
                    }
                };
                //tab controlling component
                AdvertisementComponent.prototype.close = function () {
                    this.tempVariable = 0;
                };
                AdvertisementComponent.prototype.sort = function () {
                    var e = document.getElementById("sorting");
                    var value = e.options[e.selectedIndex].value;
                    if (value == 1) {
                        this.advertisements = this.advertisements.sort(this.compare);
                    }
                    if (value == 2) {
                        this.advertisements = this.advertisements.sort(this.compare).reverse();
                    }
                };
                AdvertisementComponent.prototype.sortA = function () {
                    this.sortVariable = 1;
                    this.advertisements = this.advertisements.sort(this.compare);
                };
                AdvertisementComponent.prototype.sortD = function () {
                    this.sortVariable = 0;
                    this.advertisements = this.advertisements.sort(this.compare).reverse();
                };
                AdvertisementComponent.prototype.compare = function (a, b) {
                    if (a.id < b.id)
                        return -1;
                    if (a.id > b.id)
                        return 1;
                    return 0;
                };
                AdvertisementComponent = __decorate([
                    core_1.Component({
                        selector: 'advertisement',
                        templateUrl: 'app/Advertisement/advertisement.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, addadvertisement_component_1.AddAdvertisementComponent, updateadvertisement_component_1.UpdateAdvertisementComponent, viewadvertisement_component_1.ViewAdvertisementComponent],
                        providers: [advertisement_service_1.AdvertisementService, authentication_component_1.AuthenticationComponent]
                    }), 
                    __metadata('design:paramtypes', [advertisement_service_1.AdvertisementService, router_2.Router, authentication_component_1.AuthenticationComponent])
                ], AdvertisementComponent);
                return AdvertisementComponent;
            }());
            exports_1("AdvertisementComponent", AdvertisementComponent);
        }
    }
});
//# sourceMappingURL=advertisement.component.js.map