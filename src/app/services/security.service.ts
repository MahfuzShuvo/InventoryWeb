import { Observable } from 'rxjs';
import { HttpHelper } from './../common/http/httpHelper';
import { Injectable } from '@angular/core';
import { SystemUser } from '../models/systemUser';

@Injectable({
	providedIn: 'root'
})
export class SecurityService {

	constructor(
		private httpHelper: HttpHelper
	) { }

	login(obj: SystemUser): Observable<any> {
		const url = 'api/systemUser/login';
		return this.httpHelper.postHelper(url, obj);
	}

	// logOut(): any {
	// 	const url = 'api/systemuser/logout';
	// 	return this.httpHelper.postHelper(url);
	// }
}
