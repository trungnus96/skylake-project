import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {BeaconService} from './beacon.service';
import {Beacon} from './beacon';
import {Router} from 'angular2/router';
import {AuthenticationComponent} from "../Login/authentication.component";
import {AddBeaconComponent} from './AddBeacon/addbeacon.component';
import {UpdateBeaconComponent} from './UpdateBeacon/updatebeacon.component';

@Component({
    selector: 'beacon',
    templateUrl: 'app/Beacon/beacon.component.html',
    directives: [ROUTER_DIRECTIVES, AddBeaconComponent, UpdateBeaconComponent],
    providers: [BeaconService, AuthenticationComponent],
})
export class BeaconComponent implements OnInit {
    beacons: Beacon[];
    tempVariable = 0;
    title = "";
    search = '';
    sortVariable = 0;
    isLoading = true;
    isLoadingForDeleteBeacon = false;

    constructor(private _service: BeaconService,
        private _router: Router,
        private _authenticationService: AuthenticationComponent) {
        this._authenticationService.checkCredentials();
    }

    ngOnInit() {
        this._service.getBeacons()
            .subscribe(beacons => {this.beacons = beacons;
                console.log(this.beacons);
                this.isLoading = false});
    }

    deleteBeacon(beacon) {
        if (confirm("Are you sure you want to delete beacon [" + beacon.id + "]?")) {
            this.isLoadingForDeleteBeacon = true;
            var index = this.beacons.indexOf(beacon);

            this.beacons.splice(index, 1);

            this._service.deleteBeacon(beacon.id)
                .subscribe(x => {
                    this.isLoadingForDeleteBeacon = false;
                    alert("Delete the beacon successfully.");
                    },
                err => {
                    alert("Could not delete the beacon.");
                    this.beacons.splice(index, 0, beacon);
                });
            this._router.navigate(['Beacon']);
        }
    }

    //tab controlling component
    addBeacon() {
        this.tempVariable = 1;
        this.title = "Add New Beacon";
    }

    //tab controlling component
    updateBeacon(beaconid) {
        if (this.tempVariable != 2) {
            this.tempVariable = 2;
            localStorage.removeItem('beaconid');
            localStorage.setItem('beaconid', beaconid);
            this.title = "Update Beacon";
        }
        else {
            this.tempVariable = 0;
        }
    }

    //tab controlling component
    close() {
        this.tempVariable = 0;
    }

    sort() {
        var e = document.getElementById("sorting");
        var value = e.options[e.selectedIndex].value;
        if (value == 1) {
            this.beacons = this.beacons.sort(this.compare);
        }
        if (value == 2) {
            this.beacons = this.beacons.sort(this.compare).reverse();
        }
    }
    
    //sorting in ascending order
    sortA() {
        this.sortVariable = 1;
        this.beacons = this.beacons.sort(this.compare);
    }

    //soring in descending order
    sortD() {
        this.sortVariable = 0;
        this.beacons = this.beacons.sort(this.compare).reverse();
    }

    compare(a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }
}