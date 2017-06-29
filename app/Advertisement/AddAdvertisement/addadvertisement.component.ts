import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, Validators, FormBuilder, Control} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {AdvertisementService} from '../advertisement.service';
import {Advertisement} from '../Advertisement';
import {AuthenticationComponent} from '../../Login/authentication.component'
declare const AWS: any;

@Component({
    selector: 'add-advertisement',
    templateUrl: 'app/Advertisement/AddAdvertisement/add-advertisement.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AdvertisementService, AuthenticationComponent]
})
export class AddAdvertisementComponent implements OnInit, CanDeactivate {
    advertisement = new Advertisement('', '', '', 0, 0, '', 0, '', '');
    advertisements = new Array<Advertisement>();
    form: ControlGroup;
    file: any;
    isLoading = false;

    constructor(
        private _service: AdvertisementService,
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
            expiryDate: ['', Validators.required]
        });
        this._authenticationService.checkCredentials();
    }

    ngOnInit() {
        this._service.getAdvertisements()
            .subscribe(advertisements => this.advertisements = advertisements);
    }

    routerCanDeactivate() {
        if (this.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        return true;
    }

    addAdvertisement() {
        this.isLoading = true;
        var advertisementId = this.form.find('id');
        var existing = this.advertisements.find(a => a.id == advertisementId.value);
        if (existing)
        {
            advertisementId.setErrors({ oldAdvertisement: true });
            this.isLoading = false;
        }
            
        if (this.form.valid) {
            if (this.file != null) {
            var id = this.form.find('id').value;
            var adName = this.form.find('adName').value;
            var adDesc = this.form.find('adDesc').value;
            var price: number = this.form.find('price').value;
            var discountPrice: number = this.form.find('discountPrice').value;
            var expiryDate = this.form.find('expiryDate').value;
            
            AWS.config.accessKeyId = 'AKIAIVXALCN6ZIMRRVVQ';
            AWS.config.secretAccessKey = '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';
            var bucket = new AWS.S3({ params: { Bucket: 's3-trunghihi' } });
            var name: String = this.file.name;
            var num = name.indexOf('.');
            name = name.substring(num, name.length);
            name = id + name;
            var params = { Key: name, ACL: 'public-read', Body: this.file };
            bucket.putObject(params, function (err, data) {
                console.log(err, data);
            });

            var imgUrl = 'https://s3-us-west-2.amazonaws.com/s3-trunghihi/' + name;
            
            var beaconid: string = this.form.find('beaconid').value;
            if (beaconid.length == 0)
                beaconid = "null";
            var ad = new Advertisement(id, adName, adDesc, price, discountPrice, beaconid, 0, imgUrl, expiryDate);
            this._advertisementService.addAdvertisement(ad)
                .subscribe(x => {
                    alert("Advertisement successfully added.");
                    location.reload();
                });
            }
            else 
            {
                alert('Please choose file to upload');
                this.isLoading = false
            }
        }
    }

    fileEvent(fileInput: any) {
        var files = event.target.files;
        var file = files[0];
        this.file = file;
    }
}