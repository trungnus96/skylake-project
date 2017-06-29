import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Advertisement} from './advertisement';
import 'rxjs/add/operator/map';
declare const AWS: any;

@Injectable()

export class AdvertisementService {
    //private _url = "https://d5ry5ygs2e.execute-api.us-west-2.amazonaws.com/ad_api";
    private _url = "https://rdqg5080q9.execute-api.us-west-2.amazonaws.com/skylake_ad";

    constructor(private _http: Http) {
    }

    getAdvertisements() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getAdvertisement(adId) {
        return this._http.get(this._url + "/" + adId)
            .map(res => res.json());
    }

    addAdvertisement(advertisement: Advertisement) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url, JSON.stringify(advertisement), options)
            .map(res => res.json());
    }

    updateAdvertisement(advertisement: Advertisement) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._url + "/" + advertisement.id, JSON.stringify(advertisement), options)
            .map(res => res.json());
    }

    deleteAdvertisement(advertisement: Advertisement) {
        //delete image from s3 bucket
        AWS.config.accessKeyId = 'AKIAIVXALCN6ZIMRRVVQ';
        AWS.config.secretAccessKey = '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';
        var bucket = new AWS.S3({ params: { Bucket: 's3-trunghihi' } });
        var num = advertisement.imgUrl.lastIndexOf('/');
        var filename = advertisement.imgUrl.substring(num + 1);
        var params = { Key: filename };
        bucket.deleteObject(params, function (err, data) {
            console.log(err, data);
        });
        //delete advertisement from back-end
        let headers = new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(this._url + "/" + advertisement.id, options)
            .map(res => res.json());
    }
} 