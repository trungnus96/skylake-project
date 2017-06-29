System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AdvertisementService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AdvertisementService = (function () {
                function AdvertisementService(_http) {
                    this._http = _http;
                    //private _url = "https://d5ry5ygs2e.execute-api.us-west-2.amazonaws.com/ad_api";
                    this._url = "https://rdqg5080q9.execute-api.us-west-2.amazonaws.com/skylake_ad";
                }
                AdvertisementService.prototype.getAdvertisements = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                AdvertisementService.prototype.getAdvertisement = function (adId) {
                    return this._http.get(this._url + "/" + adId)
                        .map(function (res) { return res.json(); });
                };
                AdvertisementService.prototype.addAdvertisement = function (advertisement) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._url, JSON.stringify(advertisement), options)
                        .map(function (res) { return res.json(); });
                };
                AdvertisementService.prototype.updateAdvertisement = function (advertisement) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.put(this._url + "/" + advertisement.id, JSON.stringify(advertisement), options)
                        .map(function (res) { return res.json(); });
                };
                AdvertisementService.prototype.deleteAdvertisement = function (advertisement) {
                    //delete image from s3 bucket
                    AWS.config.accessKeyId = 'AKIAIVXALCN6ZIMRRVVQ';
                    AWS.config.secretAccessKey = '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';
                    var bucket = new AWS.S3({ params: { Bucket: 's3-trunghihi' } });
                    var num = advertisement.imgUrl.lastIndexOf('/');
                    var filename = advertisement.imgUrl.substring(num + 1);
                    var params = { Key: filename };
                    bucket.deleteObject(params, function (err, data) {
                        console.log(err, data);
                    });
                    //delete advertisement from back-end
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.delete(this._url + "/" + advertisement.id, options)
                        .map(function (res) { return res.json(); });
                };
                AdvertisementService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdvertisementService);
                return AdvertisementService;
            }());
            exports_1("AdvertisementService", AdvertisementService);
        }
    }
});
//# sourceMappingURL=advertisement.service.js.map