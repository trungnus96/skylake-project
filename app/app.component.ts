import {Component} from 'angular2/core';
import {UserInfoComponent} from './UserInfo/userinfo.component';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {ChangePhoneComponent} from './ChangePhone/change-phone.component';
import {ChangeEmailComponent} from './ChangeEmail/change-email.component';
import {ChangePassComponent} from './ChangePass/change-password.component';
import {DashComponent} from './Dash/dash.component';
import {BeaconComponent} from './Beacon/beacon.component';
import {AddBeaconComponent} from './Beacon/AddBeacon/addbeacon.component';
import {UpdateBeaconComponent} from './Beacon/UpdateBeacon/updatebeacon.component';
import {NotFoundComponent} from './Notfound/not-found.component';
import {LoginComponent} from './Login/login.component';
import {AuthenticationComponent} from "./Login/authentication.component";
import {UserService} from "./UserInfo/user.service";
import {Advertisement} from "./Advertisement/advertisement";
import {AdvertisementComponent} from "./Advertisement/advertisement.component";
import {AddAdvertisementComponent} from './Advertisement/AddAdvertisement/addadvertisement.component';
import {UpdateAdvertisementComponent} from './Advertisement/UpdateAdvertisement/updateadvertisement.component';


@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    { path: '/dash/', name: 'Dash', component: DashComponent },
    { path: '/user', name: 'UserInfo', component: UserInfoComponent },
    //{ path: '/user/changePhone', name: 'ChangePhone', component: ChangePhoneComponent },
    //{ path: '/user/changeEmail', name: 'ChangeEmail', component: ChangeEmailComponent },
    //{ path: '/user/changePass', name: 'ChangePass', component: ChangePassComponent },
    { path: '/beacon', name: 'Beacon', component: BeaconComponent },
    { path: '/advertisement', name: 'Advertisement', component: AdvertisementComponent },
    //{ path: '/beacon/addBeacon', name: 'AddBeacon', component: AddBeaconComponent },
    //{ path: '/advertisement/addAdvertisement', name: 'AddAdvertisement', component: AddAdvertisementComponent },
    //{ path: '/beacon/editBeacon/:id', name: 'EditBeacon', component: UpdateBeaconComponent },
    //{ path: '/advertisement/editAdvertisement/:id', name: 'EditAdvertisement', component: UpdateAdvertisementComponent },
    //{ path: '/beacon/report', name: 'Report', component: BeaconReportComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
    { path: '/*other', name: 'NotFound', redirectTo: ['Login'] }
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthenticationComponent, UserService],
})
export class AppComponent {
    constructor(private _router: Router, private _authenticationService: AuthenticationComponent) {
    }

    isLogin(route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }

    isCurrentRoute(route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }

    logout() {
        if (confirm("Are you sure you want to logout"))
        {
            this._authenticationService.logout();
        }
    }
} 
