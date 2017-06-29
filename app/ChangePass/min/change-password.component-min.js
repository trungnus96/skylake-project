System.register(["angular2/core","angular2/router","angular2/common","./passwordValidators"],function(e,t){"use strict";var r=t&&t.id,o=this&&this.__decorate||function(e,t,r,o){var a=arguments.length,s=3>a?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o,n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(3>a?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s},a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},s,n,i,c,d,u;return{setters:[function(e){s=e},function(e){n=e,c=e},function(e){i=e},function(e){d=e}],execute:function(){u=function(){function e(e,t){this._router=t,this.form=e.group({currentPassword:["",i.Validators.required],newPassword:["",i.Validators.required],confirmPassword:["",i.Validators.required]},{validator:d.PasswordValidators.passwordsShouldMatch})}return e.prototype.changePassword=function(){var e=this.form.find("currentPassword");"1234"!=e.value&&e.setErrors({validOldPassword:!0});var t=this.form.find("newPassword");"1234"==t.value&&t.setErrors({duplicatePassword:!0}),this.form.valid&&(alert("Password successfully changed."),this._router.navigate(["UserInfo"]))},e=o([s.Component({selector:"change-password",templateUrl:"app/ChangePass/change-password.component.html",directives:[n.ROUTER_DIRECTIVES]}),a("design:paramtypes",[i.FormBuilder,c.Router])],e)}(),e("ChangePassComponent",u)}}});