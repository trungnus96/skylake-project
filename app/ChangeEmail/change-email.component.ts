import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
import {Router} from 'angular2/router';
import {UserService} from "../UserInfo/user.service";
import {User} from "../UserInfo/user";
import {TempUser} from "../UserInfo/tempUser";
import {AuthenticationComponent} from '../Login/authentication.component'

@Component({
    selector: 'change-email',
    templateUrl: 'app/ChangeEmail/change-email.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, AuthenticationComponent]
})
export class ChangeEmailComponent implements OnInit {
    user = new User();
    form: ControlGroup;
    isLoading = false;
    id = "";

    constructor(private _userService: UserService,
        fb: FormBuilder,
        private _router: Router,
        private _authenticationService: AuthenticationComponent) {
        this.form = fb.group({
            currentPassword: ['', Validators.required],
            newEmail: ['', Validators.required]
        });
        this._authenticationService.checkCredentials();
    }

    ngOnInit() {
        this._userService.getUser(localStorage.getItem("username"))
            .subscribe(
            user => this.user = user);
    }

    updateEmail() {
        this.isLoading = true;
        var email = this.form.find('newEmail');
        if (email.value == this.user.email)
        {
            email.setErrors({ oldEmail: true });
            this.isLoading = false;
        }

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
            if (this.form.valid) {
                this.user.email = this.form.find('newEmail').value;
                this.user.password = this.form.find('currentPassword').value;
                this._userService.updateUser(this.user)
                    .subscribe(x => {
                        alert("Email successfully updated.");
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