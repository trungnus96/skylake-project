System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Advertisement;
    return {
        setters:[],
        execute: function() {
            Advertisement = (function () {
                function Advertisement(id, adName, adDesc, price, discountPrice, beaconid, advertisementCount, imgUrl, expiryDate) {
                    this.id = id;
                    this.adName = adName;
                    this.adDesc = adDesc;
                    this.price = price;
                    this.discountPrice = discountPrice;
                    this.beaconid = beaconid;
                    this.advertisementCount = advertisementCount;
                    this.imgUrl = imgUrl;
                    this.expiryDate = expiryDate;
                }
                return Advertisement;
            }());
            exports_1("Advertisement", Advertisement);
        }
    }
});
//# sourceMappingURL=advertisement.js.map