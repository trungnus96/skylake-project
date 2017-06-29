import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Beacon} from './beacon';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class BeaconService {
    //private _url = "https://kzxm3moz8g.execute-api.us-west-2.amazonaws.com/beacon_api";
    private _url = "https://ai3zqphxe2.execute-api.us-west-2.amazonaws.com/skylake_beacon";

    constructor(private _http: Http) {

    }

    getBeacons() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getBeacon(beaconId) {
        return this._http.get(this._url + "/" + beaconId)
            .map(res => res.json());
    }

    addBeacon(beacon: Beacon) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url, JSON.stringify(beacon), options)
            .map(res => res.json());
    }

    updateBeacon(beacon: Beacon) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._url + "/" + beacon.id, JSON.stringify(beacon), options)
            .map(res => res.json());
    }

    deleteBeacon(beaconId) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(this._url + "/" + beaconId, options)
            .map(res => res.json());
    }
} 