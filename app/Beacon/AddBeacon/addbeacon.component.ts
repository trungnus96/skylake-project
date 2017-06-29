import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {BeaconService} from '../beacon.service';
import {Beacon} from '../beacon';
import {AuthenticationComponent} from '../../Login/authentication.component'

@Component({
    selector: 'add-beacon',
    templateUrl: 'app/Beacon/AddBeacon/add-beacon.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [BeaconService, AuthenticationComponent]
})
export class AddBeaconComponent implements OnInit, CanDeactivate {

    form: ControlGroup;
    beacon = new Beacon('', '', '', '', 0);
    beacons = new Array<Beacon>();
    isLoading = false;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _beaconService: BeaconService,
        private _authenticationService: AuthenticationComponent) {
        this.form = fb.group({
            id: ['', Validators.required],
            beaconName: ['', Validators.required],
            storeName: ['', Validators.required],
            beaconLocation: ['', Validators.required],
            beaconCount: ['']
        });
        this._authenticationService.checkCredentials();

    }

    ngOnInit() {
        this._beaconService.getBeacons()
            .subscribe(beacons => this.beacons = beacons);
    }

    routerCanDeactivate() {
        if (this.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        return true;
    }

    addBeacon() {
        this.isLoading = true;
        var beaconId = this.form.find('id');
        var existing = this.beacons.find(b => b.id == beaconId.value)
        if (existing)
        {
            beaconId.setErrors({ oldBeacon: true });
            this.isLoading = false;
        }
            
        if (this.form.valid) {
            this._beaconService.addBeacon(this.form.value)
                .subscribe(x => {
                    alert("Beacon successfully added.");
                    location.reload();
                });
        }
    }
}