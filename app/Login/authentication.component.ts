import {Component, OnInit, Injectable} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {UserService} from "../UserInfo/user.service";
import {Http} from "angular2/http";
import {User} from "../UserInfo/user";
import {TempUser} from "../UserInfo/tempUser";


@Component({
    selector: 'authentication',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
@Injectable()
export class AuthenticationComponent {

    users: User[];
    id = new String;
    

    constructor(private _userService: UserService,
        private _router: Router) {
            
    }

    login(id, pass) {
        var user = new TempUser(id, pass);
        this._userService.checkLogin(user)
            .subscribe(
                user => this.checkAuthentication(user));
    }

    checkAuthentication(user)
    {
        this.id = user;
        if(this.id.length != 0)
        {
            this._router.navigate(['Dash']);
            return true;
        }
    }

    logout() {
        localStorage.clear();
        this._router.navigate(['Login']);
    }

    checkCredentials() {
        if (localStorage.getItem("username") === null) {
            this._router.navigate(['Login']);
        }
    }
}
