import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AdvertisementService} from './advertisement.service';
import {Advertisement} from './advertisement';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
import {AuthenticationComponent} from "../Login/authentication.component";
import {AddAdvertisementComponent} from './AddAdvertisement/addadvertisement.component';
import {UpdateAdvertisementComponent} from './UpdateAdvertisement/updateadvertisement.component';
import {ViewAdvertisementComponent} from './ViewAdvertisement/viewadvertisement.component';

@Component({
    selector: 'advertisement',
    templateUrl: 'app/Advertisement/advertisement.component.html',
    directives: [ROUTER_DIRECTIVES, AddAdvertisementComponent, UpdateAdvertisementComponent, ViewAdvertisementComponent],
    providers: [AdvertisementService, AuthenticationComponent]

})
export class AdvertisementComponent implements OnInit {

    boo = false;
    advertisements: Advertisement[];
    tempVariable = 0;
    title = "";
    searchByAdId = '';
    searchByBeaconId = '';
    sortVariable = 0;
    isLoading = true;
    isLoadingForDeleteAd = false;


    constructor(private _advertisementService: AdvertisementService,
                private _router: Router,
                private _authenticationService: AuthenticationComponent) {
        this._authenticationService.checkCredentials(); 
        
        this._advertisementService.getAdvertisements()
            .subscribe(advertisements => {this.advertisements = advertisements;
                this.isLoading = false;});

    }

    ngOnInit() {                
    }

    deleteAdvertisement(advertisement) {
        if (confirm("Are you sure you want to delete advertisement [" + advertisement.id + "]?")) {
            this.tempVariable=0;
            var index = this.advertisements.indexOf(advertisement);
            this.isLoadingForDeleteAd = true;
            this.advertisements.splice(index, 1);
            this._advertisementService.deleteAdvertisement(advertisement)
                .subscribe(x => {
                    this.isLoadingForDeleteAd = false;
                    alert("Delete the advertisement successfully.");
                    },
                    err => {
                    alert("Could not delete the advertisement.");
                    this.advertisements.splice(index, 0, advertisement);
                });
        }
    }

    //tab controlling component
    addAdvertisement()
    {
        this.tempVariable = 1;
        this.title = "Add New Advertisement";
    }

    //tab controlling component
    updateAdvertisement(adid)
    {   
        if (this.tempVariable != 2)
        {
            this.tempVariable=2;
            localStorage.removeItem('advertisementid');
            localStorage.setItem('advertisementid', adid);
            this.title = "Update Advertisement";
        }
        else{
            this.tempVariable = 0;
        }
    }

    //tab controlling component
    viewAdvertisement(adid)
    {
        if (this.tempVariable != 3)
        {
            this.tempVariable=3;
            localStorage.removeItem('advertisementid');
            localStorage.setItem('advertisementid', adid);
            this.title = "Advertisement Detail";
        }
        else{
            this.tempVariable = 0;
        }
    }

    //tab controlling component
    close()
    {
        this.tempVariable=0;
    }

    sort() {
        var e = document.getElementById("sorting");
        var value = e.options[e.selectedIndex].value;
        if (value == 1)
        {
            this.advertisements = this.advertisements.sort(this.compare);
        }
        if (value == 2)
        {
            this.advertisements = this.advertisements.sort(this.compare).reverse();
        }
    }
    
    sortA() {
        this.sortVariable = 1;
        this.advertisements = this.advertisements.sort(this.compare);
    }

    sortD() {
        this.sortVariable = 0;
        this.advertisements = this.advertisements.sort(this.compare).reverse();
    }

    compare(a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    }
}