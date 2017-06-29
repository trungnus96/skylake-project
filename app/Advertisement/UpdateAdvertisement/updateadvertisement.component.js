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
    var UpdateAdvertisementComponent;
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
            UpdateAdvertisementComponent = (function () {
                function UpdateAdvertisementComponent(fb, _router, _routeParams, _advertisementService, _authenticationService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._advertisementService = _advertisementService;
                    this._authenticationService = _authenticationService;
                    this.advertisement = new Advertisement_1.Advertisement();
                    this.str = 'You have unsaved changes. Are you sure you want to navigate away?';
                    this.isLoading = false;
                    this.form = fb.group({
                        id: ['', common_1.Validators.required],
                        adDesc: ['', common_1.Validators.required],
                        adName: ['', common_1.Validators.required],
                        price: ['', common_1.Validators.required],
                        discountPrice: ['', common_1.Validators.required],
                        beaconid: [''],
                        advertisementCount: ['', common_1.Validators.required],
                        imgUrl: [''],
                        expiryDate: ['']
                    });
                    this._authenticationService.checkCredentials();
                }
                UpdateAdvertisementComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = localStorage.getItem('advertisementid');
                    this._advertisementService.getAdvertisement(id)
                        .subscribe(function (advertisement) { return _this.advertisement = advertisement; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    });
                };
                UpdateAdvertisementComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty) {
                        return confirm(this.str);
                    }
                    return true;
                };
                UpdateAdvertisementComponent.prototype.updateAdvertisement = function () {
                    this.isLoading = true;
                    var ad;
                    var id = this.advertisement.id;
                    var adName = this.form.find('adName').value;
                    var adDesc = this.form.find('adDesc').value;
                    var price = +this.form.find('price').value;
                    var discountPrice = +this.form.find('discountPrice').value;
                    var beaconid = this.form.find('beaconid').value;
                    var advertisementCount = this.form.find('advertisementCount').value;
                    var expiryDate = this.form.find('expiryDate').value;
                    if (this.file != null) {
                        AWS.config.accessKeyId = 'AKIAIVXALCN6ZIMRRVVQ';
                        AWS.config.secretAccessKey = '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';
                        var bucket = new AWS.S3({ params: { Bucket: 's3-trunghihi' } });
                        //delete existing image from s3
                        var num = this.advertisement.imgUrl.lastIndexOf('/');
                        var filename = this.advertisement.imgUrl.substring(num + 1, this.advertisement.imgUrl.length);
                        var params = { Key: filename };
                        bucket.deleteObject(params, function (err, data) {
                            console.log(err, data);
                        });
                        //add new image to s3
                        var name = this.file.name;
                        var num = name.indexOf('.');
                        name = name.substring(num, name.length);
                        name = id + name;
                        var params1 = { Key: name, ACL: 'public-read', Body: this.file };
                        bucket.putObject(params1, function (err, data) {
                            console.log(err, data);
                        });
                        console.log('true');
                        var imgUrl = 'https://s3-us-west-2.amazonaws.com/s3-trunghihi/' + name;
                        ad = new Advertisement_1.Advertisement(id, adName, adDesc, price, discountPrice, beaconid, advertisementCount, imgUrl, expiryDate);
                    }
                    else {
                        console.log('false');
                        var imgUrl = this.advertisement.imgUrl;
                        ad = new Advertisement_1.Advertisement(id, adName, adDesc, price, discountPrice, beaconid, advertisementCount, imgUrl, expiryDate);
                    }
                    this._advertisementService.updateAdvertisement(ad)
                        .subscribe(function (x) {
                        alert("Advertisement successfully updated.");
                        location.reload();
                    });
                };
                UpdateAdvertisementComponent.prototype.fileEvent = function (fileInput) {
                    var files = event.target.files;
                    var file = files[0];
                    this.file = file;
                };
                UpdateAdvertisementComponent = __decorate([
                    core_1.Component({
                        selector: 'update-advertisement',
                        templateUrl: 'app/Advertisement/UpdateAdvertisement/update-advertisement.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [advertisement_service_1.AdvertisementService, authentication_component_1.AuthenticationComponent]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_2.Router, router_2.RouteParams, advertisement_service_1.AdvertisementService, authentication_component_1.AuthenticationComponent])
                ], UpdateAdvertisementComponent);
                return UpdateAdvertisementComponent;
            }());
            exports_1("UpdateAdvertisementComponent", UpdateAdvertisementComponent);
        }
    }
});
//# sourceMappingURL=updateadvertisement.component.js.map