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
    var AddAdvertisementComponent;
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
            AddAdvertisementComponent = (function () {
                function AddAdvertisementComponent(_service, fb, _router, _routeParams, _advertisementService, _authenticationService) {
                    this._service = _service;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._advertisementService = _advertisementService;
                    this._authenticationService = _authenticationService;
                    this.advertisement = new Advertisement_1.Advertisement('', '', '', 0, 0, '', 0, '', '');
                    this.advertisements = new Array();
                    this.isLoading = false;
                    this.form = fb.group({
                        id: ['', common_1.Validators.required],
                        adDesc: ['', common_1.Validators.required],
                        adName: ['', common_1.Validators.required],
                        price: ['', common_1.Validators.required],
                        discountPrice: ['', common_1.Validators.required],
                        beaconid: [''],
                        advertisementCount: [''],
                        imgUrl: [''],
                        expiryDate: ['', common_1.Validators.required]
                    });
                    this._authenticationService.checkCredentials();
                }
                AddAdvertisementComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getAdvertisements()
                        .subscribe(function (advertisements) { return _this.advertisements = advertisements; });
                };
                AddAdvertisementComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to navigate away?');
                    return true;
                };
                AddAdvertisementComponent.prototype.addAdvertisement = function () {
                    this.isLoading = true;
                    var advertisementId = this.form.find('id');
                    var existing = this.advertisements.find(function (a) { return a.id == advertisementId.value; });
                    if (existing) {
                        advertisementId.setErrors({ oldAdvertisement: true });
                        this.isLoading = false;
                    }
                    if (this.form.valid) {
                        if (this.file != null) {
                            var id = this.form.find('id').value;
                            var adName = this.form.find('adName').value;
                            var adDesc = this.form.find('adDesc').value;
                            var price = this.form.find('price').value;
                            var discountPrice = this.form.find('discountPrice').value;
                            var expiryDate = this.form.find('expiryDate').value;
                            AWS.config.accessKeyId = 'AKIAIVXALCN6ZIMRRVVQ';
                            AWS.config.secretAccessKey = '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';
                            var bucket = new AWS.S3({ params: { Bucket: 's3-trunghihi' } });
                            var name = this.file.name;
                            var num = name.indexOf('.');
                            name = name.substring(num, name.length);
                            name = id + name;
                            var params = { Key: name, ACL: 'public-read', Body: this.file };
                            bucket.putObject(params, function (err, data) {
                                console.log(err, data);
                            });
                            var imgUrl = 'https://s3-us-west-2.amazonaws.com/s3-trunghihi/' + name;
                            var beaconid = this.form.find('beaconid').value;
                            if (beaconid.length == 0)
                                beaconid = "null";
                            var ad = new Advertisement_1.Advertisement(id, adName, adDesc, price, discountPrice, beaconid, 0, imgUrl, expiryDate);
                            this._advertisementService.addAdvertisement(ad)
                                .subscribe(function (x) {
                                alert("Advertisement successfully added.");
                                location.reload();
                            });
                        }
                        else {
                            alert('Please choose file to upload');
                            this.isLoading = false;
                        }
                    }
                };
                AddAdvertisementComponent.prototype.fileEvent = function (fileInput) {
                    var files = event.target.files;
                    var file = files[0];
                    this.file = file;
                };
                AddAdvertisementComponent = __decorate([
                    core_1.Component({
                        selector: 'add-advertisement',
                        templateUrl: 'app/Advertisement/AddAdvertisement/add-advertisement.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [advertisement_service_1.AdvertisementService, authentication_component_1.AuthenticationComponent]
                    }), 
                    __metadata('design:paramtypes', [advertisement_service_1.AdvertisementService, common_1.FormBuilder, router_2.Router, router_2.RouteParams, advertisement_service_1.AdvertisementService, authentication_component_1.AuthenticationComponent])
                ], AddAdvertisementComponent);
                return AddAdvertisementComponent;
            }());
            exports_1("AddAdvertisementComponent", AddAdvertisementComponent);
        }
    }
});
//# sourceMappingURL=addadvertisement.component.js.map