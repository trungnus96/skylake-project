import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CheckCredentials} from '../Login/checkCredentials';
import {Http} from "angular2/http";
import {Beacon} from "../Beacon/beacon";
import {BeaconService} from "../Beacon/beacon.service";
import {AdvertisementService} from "../Advertisement/advertisement.service";
import {Advertisement} from "../Advertisement/advertisement";

@Component({
    selector: 'dash',
    templateUrl: 'app/Dash/dash.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CheckCredentials, BeaconService, AdvertisementService]

})
export class DashComponent implements OnInit {
    beacons = new Array<Beacon>();
    advertisements = new Array<Advertisement>();
    username = "";
    isLoadingForBeacon = true;
    isLoadingForAdvertisement = true;

    constructor(private _authenticationService: CheckCredentials,
        private _beaconService: BeaconService,
        private _advertisementService: AdvertisementService) {
        this._authenticationService.checkCredentials();
        this.username = localStorage.getItem("username");

    }

    ngOnInit() {
        this._beaconService.getBeacons()
            .subscribe(beacons => {
                this.beacons = beacons;
                this.isLoadingForBeacon = false;});
        this._advertisementService.getAdvertisements()
            .subscribe(advertisements => {
                this.advertisements = advertisements;
                this.isLoadingForAdvertisement = false;});
    }
}
