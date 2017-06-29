System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Beacon;
    return {
        setters:[],
        execute: function() {
            Beacon = (function () {
                function Beacon(id, beaconName, storeName, beaconLocation, beaconCount) {
                    this.id = id;
                    this.beaconName = beaconName;
                    this.storeName = storeName;
                    this.beaconLocation = beaconLocation;
                    this.beaconCount = beaconCount;
                }
                return Beacon;
            }());
            exports_1("Beacon", Beacon);
        }
    }
});
//# sourceMappingURL=beacon.js.map