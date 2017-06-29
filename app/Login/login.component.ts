import {Component} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Router} from 'angular2/router';
import {UserService} from "../UserInfo/user.service";
import {Http} from "angular2/http";
import {AuthenticationComponent} from "./authentication.component";
import {User} from "../UserInfo/user";
import {TempUser} from "../UserInfo/tempUser";

@Component
    ({
        selector: 'login',
        templateUrl: 'app/Login/login.component.html',
        directives: [ROUTER_DIRECTIVES],
        providers: [UserService],
    })
export class LoginComponent {
    form: ControlGroup;
    id = new String;
    username: String;
    isLoading = false;
    constructor(fb: FormBuilder,
        private _userService: UserService,
        private _router: Router) {

        this.form = fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login() {
        this.isLoading = true;
        var id = this.form.find('userName').value;
        var pass = this.form.find('password').value;
        this.username = id;
        var user = new TempUser(id, pass);
        this._userService.checkLogin(user)
            .subscribe(
                user => this.navigateToDashBoard(user));
    }

    //if user enters correct ID and password, the front-end will navigate to Dashboard
    navigateToDashBoard(user)
    {
        this.id = user;
        if(this.id.length != 0)
        {
            localStorage.setItem("username", this.username);
            this._router.navigate(['Dash']);
            return true;
        }
        else{
            alert('Wrong username or password');
            this.isLoading = false;
        }
    }
}