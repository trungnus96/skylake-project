import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {PasswordValidators} from './passwordValidators';
import {UserService} from '../UserInfo/user.service';
import {User} from '../UserInfo/User.ts';
import {TempUser} from "../UserInfo/tempUser";
import {AuthenticationComponent} from '../Login/authentication.component'

@Component({
    selector: 'change-password',
    templateUrl: 'app/ChangePass/change-password.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, AuthenticationComponent]
})
export class ChangePassComponent implements OnInit {
    form: ControlGroup;
    user = new User();
    id = "";
    isLoading = false;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _userService: UserService,
        private _authenticationService: AuthenticationComponent) {
        this.form = fb.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validator: PasswordValidators.passwordsShouldMatch });
        this._authenticationService.checkCredentials();
    }

    ngOnInit() {
        this._userService.getUser(localStorage.getItem("username"))
            .subscribe(
            user => this.user = user);
    }

    updatePassword() {
        this.isLoading = true;
        
        var currentPassword = this.form.find('currentPassword').value;
        this.id = localStorage.getItem("username");
        var user = new TempUser(this.id, currentPassword);
        this._userService.checkLogin(user)
            .subscribe(
                user => this.checkAuthentication(user));
    }

    checkAuthentication(user)
    {
        this.id = user;
        if(this.id.length != 0)
        {
            var newPassword = this.form.find('newPassword');
            var currentPassword = this.form.find('currentPassword').value;
            if (newPassword.value == currentPassword)
            {
                this.isLoading = false;
                newPassword.setErrors({ duplicatePassword: true });
            }
                

            if (this.form.valid) {
                this.user.password = this.form.find('newPassword').value;
                this._userService.updateUser(this.user)
                    .subscribe(x => {
                        alert("Password successfully updated.");
                        location.reload();
                    })
            }
        }
        else
        {
            this.isLoading = false;
            this.form.find('currentPassword').setErrors({validOldPassword: true});
        }
    }
}