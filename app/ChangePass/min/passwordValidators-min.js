System.register([],function(n,r){"use strict";var s=r&&r.id,t;return{setters:[],execute:function(){t=function(){function n(){}return n.passwordsShouldMatch=function(n){var r=n.find("newPassword").value,s=n.find("confirmPassword").value;return""==r||""==s?null:r!=s?{passwordsShouldMatch:!0}:null},n}(),n("PasswordValidators",t)}}});