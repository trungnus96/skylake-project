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
    var UserService;
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
            UserService = (function () {
                function UserService(_http) {
                    this._http = _http;
                    //private _url = "https://m7719f384g.execute-api.us-west-2.amazonaws.com/admin_api";
                    this._url = "https://1vjpyriot9.execute-api.us-west-2.amazonaws.com/skylake_admin";
                }
                UserService.prototype.getUsers = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.getUser = function (userId) {
                    return this._http.get(this._url + "/" + userId)
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.updateUser = function (user) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.put(this._url + "/" + user.id, JSON.stringify(user), options)
                        .map(function (res) { return res.json(); });
                };
                //check authentication when user tries to login to front-end
                UserService.prototype.checkLogin = function (user) {
                    //let headers = new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi'});
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'x-api-key': 'jQVsHdXgBU8M1fIvVcUBD3q8OdP0gxos6D76OWly' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._url, JSON.stringify(user), options)
                        .map(function (res) { return res.json(); });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map