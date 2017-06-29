System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.passwordsShouldMatch = function (group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmPassword = group.find('confirmPassword').value;
                    if (newPassword == '' || confirmPassword == '')
                        return null;
                    if (newPassword != confirmPassword)
                        return { passwordsShouldMatch: true };
                    return null;
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=passwordValidators.js.map