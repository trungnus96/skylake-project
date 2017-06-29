import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
//import {BeaconValidator} from './beacon-validator';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {AdvertisementService} from '../advertisement.service';
import {Advertisement} from '../Advertisement';
import {AuthenticationComponent} from '../../Login/authentication.component'

@Component({
    selector: 'view-advertisement',
    templateUrl: 'app/Advertisement/ViewAdvertisement/view-advertisement.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AdvertisementService, AuthenticationComponent]
})
export class ViewAdvertisementComponent implements OnInit {
    a = "";
    form: ControlGroup;

    advertisement = new Advertisement();

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _advertisementService: AdvertisementService,
        private _authenticationService: AuthenticationComponent) {
        this.form = fb.group({
            id: ['', Validators.required],
            adDesc: ['', Validators.required],
            adName: ['', Validators.required],
            price: ['', Validators.required],
            discountPrice: ['', Validators.required],
            beaconid: [''],
            advertisementCount: [''],
            imgUrl: [''],
            expiryDate: ['']
        });
        this._authenticationService.checkCredentials();
    }

    ngOnInit() {
        var id = localStorage.getItem('advertisementid');
        this._advertisementService.getAdvertisement(id)
            .subscribe(
            advertisement => this.advertisement = advertisement,
            response => {
                if (response.status == 404) {
                    this._router.navigate(['NotFound']);
                }
            });
    }
}