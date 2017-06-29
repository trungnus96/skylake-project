System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TempUser;
    return {
        setters:[],
        execute: function() {
            //object for checking ID and password when user tries to login to front-end
            TempUser = (function () {
                function TempUser(id, password) {
                    this.id = id;
                    this.password = password;
                }
                return TempUser;
            }());
            exports_1("TempUser", TempUser);
        }
    }
});
//# sourceMappingURL=tempUser.js.map