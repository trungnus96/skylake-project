import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {AdvertisementService} from '../advertisement.service';
import {Advertisement} from '../Advertisement';
import {AuthenticationComponent} from '../../Login/authentication.component'
declare const AWS: any;
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'update-advertisement',
    templateUrl: 'app/Advertisement/UpdateAdvertisement/update-advertisement.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AdvertisementService, AuthenticationComponent]
})
export class UpdateAdvertisementComponent implements OnInit, CanDeactivate {

    form: ControlGroup;
    advertisement = new Advertisement();
    str = 'You have unsaved changes. Are you sure you want to navigate away?';
    file: any;
    isLoading = false;

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
            advertisementCount: ['', Validators.required],
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

    routerCanDeactivate() {
        if (this.form.dirty) {
            return confirm(this.str);
        }
        return true;
    }

    updateAdvertisement() {
        this.isLoading = true;
        var ad: Advertisement;
        var id = this.advertisement.id;
        var adName = this.form.find('adName').value;
        var adDesc = this.form.find('adDesc').value;            
        var price: number = +this.form.find('price').value;
        var discountPrice: number = +this.form.find('discountPrice').value;
        var beaconid = this.form.find('beaconid').value;
        var advertisementCount = this.form.find('advertisementCount').value;
        var expiryDate = this.form.find('expiryDate').value;
        if (this.file != null) {
            AWS.config.accessKeyId = 'AKIAIVXALCN6ZIMRRVVQ';
            AWS.config.secretAccessKey = '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';
            var bucket = new AWS.S3({ params: { Bucket: 's3-trunghihi' } });
            //delete existing image from s3
            var num = this.advertisement.imgUrl.lastIndexOf('/');
            var filename = this.advertisement.imgUrl.substring(num + 1, this.advertisement.imgUrl.length);
            var params = { Key: filename };
            bucket.deleteObject(params, function (err, data) {
                console.log(err, data);
            });
            //add new image to s3
            var name: String = this.file.name;
            var num = name.indexOf('.');
            name = name.substring(num, name.length);
            name = id + name;
            var params1 = { Key: name, ACL: 'public-read', Body: this.file };
            bucket.putObject(params1, function (err, data) {
                console.log(err, data);
            });

            console.log('true');
            var imgUrl = 'https://s3-us-west-2.amazonaws.com/s3-trunghihi/' + name;
            ad = new Advertisement(id, adName, adDesc, price, discountPrice, beaconid, advertisementCount, imgUrl, expiryDate);
        }
        else {
            console.log('false');
            var imgUrl = this.advertisement.imgUrl;
            ad = new Advertisement(id, adName, adDesc, price, discountPrice, beaconid, advertisementCount, imgUrl, expiryDate);

        }
        this._advertisementService.updateAdvertisement(ad)
            .subscribe(x => {
                alert("Advertisement successfully updated.");
                location.reload();
            })
    }

    fileEvent(fileInput: any) {
        var files = event.target.files;
        var file = files[0];
        this.file = file;
    }   
}