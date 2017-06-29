///<reference path="../../../node_modules/angular2/src/router/instruction.d.ts"/>
import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {BeaconService} from '../beacon.service';
import {Beacon} from '../beacon';

@Component({
    selector: 'update-beacon',
    templateUrl: 'app/Beacon/UpdateBeacon/update-beacon.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [BeaconService]

})
export class UpdateBeaconComponent implements OnInit, CanDeactivate {
    form: ControlGroup;
    title: string;
    beacon = new Beacon();
    isLoading = false;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _beaconService: BeaconService) {
        this.form = fb.group({
            id: ['', Validators.required],
            beaconName: ['', Validators.required],
            storeName: ['', Validators.required],
            beaconLocation: ['', Validators.required],
            beaconCount: ['', Validators.required]
        });
    }

    ngOnInit() {
        var id = localStorage.getItem('beaconid');
        this._beaconService.getBeacon(id)
            .subscribe(
            beacon => this.beacon = beacon,
            response => {
                if (response.status == 404) {
                    this._router.navigate(['NotFound']);
                }
            });
    }

    routerCanDeactivate() {
        if (this.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        return true;
    }

    updateBeacon() {
        this.isLoading = true;
        this._beaconService.updateBeacon(this.form.value)
            .subscribe(x => {
                alert("Beacon successfully updated.");
                location.reload();
            })
    }
}