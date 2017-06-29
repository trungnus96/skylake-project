System.register(['angular2/core', 'angular2/router', 'angular2/common', '../advertisement.service', '../Advertisement', '../../Login/authentication.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, router_2, advertisement_service_1, Advertisement_1, authentication_component_1;
    var ViewAdvertisementComponent;
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
            function (advertisement_service_1_1) {
                advertisement_service_1 = advertisement_service_1_1;
            },
            function (Advertisement_1_1) {
                Advertisement_1 = Advertisement_1_1;
            },
            function (authentication_component_1_1) {
                authentication_component_1 = authentication_component_1_1;
            }],
        execute: function() {
            ViewAdvertisementComponent = (function () {
                function ViewAdvertisementComponent(fb, _router, _routeParams, _advertisementService, _authenticationService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._advertisementService = _advertisementService;
                    this._authenticationService = _authenticationService;
                    this.a = "";
                    this.advertisement = new Advertisement_1.Advertisement();
                    this.form = fb.group({
                        id: ['', common_1.Validators.required],
                        adDesc: ['', common_1.Validators.required],
                        adName: ['', common_1.Validators.required],
                        price: ['', common_1.Validators.required],
                        discountPrice: ['', common_1.Validators.required],
                        beaconid: [''],
                        advertisementCount: [''],
                        imgUrl: [''],
                        expiryDate: ['']
                    });
                    this._authenticationService.checkCredentials();
                }
                ViewAdvertisementComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = localStorage.getItem('advertisementid');
                    this._advertisementService.getAdvertisement(id)
                        .subscribe(function (advertisement) { return _this.advertisement = advertisement; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                ViewAdvertisementComponent = __decorate([
                    core_1.Component({
                        selector: 'view-advertisement',
                        templateUrl: 'app/Advertisement/ViewAdvertisement/view-advertisement.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [advertisement_service_1.AdvertisementService, authentication_component_1.AuthenticationComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_2.Router, router_2.RouteParams, advertisement_service_1.AdvertisementService, authentication_component_1.AuthenticationComponent])
                ], ViewAdvertisementComponent);
                return ViewAdvertisementComponent;
            }());
            exports_1("ViewAdvertisementComponent", ViewAdvertisementComponent);
        }
    }
});
//# sourceMappingURL=viewadvertisement.component.js.map