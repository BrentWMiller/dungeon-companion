import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_BASE_URL = 'http://www.dnd5eapi.co/api/';

@Injectable()
export class DungeonService {

	constructor(private http: Http) { }

	public getClass(id: number): Observable<any> {
		return this.http.get(`${API_BASE_URL}classes/${id}`)
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}

}
