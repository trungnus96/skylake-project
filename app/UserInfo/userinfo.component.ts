import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {UserService} from './user.service';
import {User} from './user';
import {AuthenticationComponent} from "../Login/authentication.component";
import {ChangeEmailComponent} from "../ChangeEmail/change-email.component";
import {ChangePhoneComponent} from "../ChangePhone/change-phone.component";
import {ChangePassComponent} from "../ChangePass/change-password.component";

@Component({
    selector: 'userinfo',
    templateUrl: 'app/UserInfo/account-info.component.html',
    directives: [ROUTER_DIRECTIVES,  ChangeEmailComponent, ChangePassComponent, ChangePhoneComponent],
    providers: [AuthenticationComponent, UserService],
})
export class UserInfoComponent implements OnInit {
    user = new User();
    tempVariable = 0;
    title = '';
    isLoading = true;

    constructor(private _userService: UserService,
        private _authenticationService: AuthenticationComponent) {
        this._authenticationService.checkCredentials();
        
    }

    ngOnInit() {
        
        this._userService.getUser(localStorage.getItem("username"))
            .subscribe(
            user => {
                this.user = user;
                this.isLoading = false;});
    }

    //tab controlling component
    pass()
    {
        this.tempVariable = 1;
        this.title = 'Change Password';
    }

    //tab controlling component
    email()
    {
        this.tempVariable = 2;
        this.title = 'Change Email';
    }
    
    //tab controlling component
    phone()
    {
        this.tempVariable = 3;
        this.title = 'Change Phone Number';
    }

    //tab controlling component
    back()
    {
        this.tempVariable = 0;
        this.title = '';
    }
}
