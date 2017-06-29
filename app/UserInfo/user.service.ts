import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map';
import {User} from "./user";
import {TempUser} from "./tempUser";

@Injectable()
export class UserService {
	//private _url = "https://m7719f384g.execute-api.us-west-2.amazonaws.com/admin_api";
	private _url = "https://1vjpyriot9.execute-api.us-west-2.amazonaws.com/skylake_admin";

	constructor(private _http: Http)
	{
	}

	getUsers()
    {
		return this._http.get(this._url)
			.map(res => res.json());
	}

	getUser(userId){
		return this._http.get(this._url + "/" + userId)
			.map(res => res.json());
	}

	updateUser(user: User)
    {
		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._url + "/" + user.id, JSON.stringify(user), options)
			.map(res => res.json());
	}

	//check authentication when user tries to login to front-end
	checkLogin(user: TempUser) {
        //let headers = new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'Z7aQNDe5hG1TDyZrlgWuKTdYc0qAyMh2jpJ8LLhi'});
		let headers = new Headers({ 'Content-Type': 'application/json', 'x-api-key': 'jQVsHdXgBU8M1fIvVcUBD3q8OdP0gxos6D76OWly'});
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._url, JSON.stringify(user), options)
            .map(res => res.json());
    }
}