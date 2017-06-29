import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
    selector: 'authentication',
    directives: [ROUTER_DIRECTIVES],
})
export class CheckCredentials {
    constructor(private _router: Router) {
    }
    
    checkCredentials() {
        if (localStorage.getItem("username") == null) {
            this._router.navigate(['Login']);
        }
    }
}