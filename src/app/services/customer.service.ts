import { Observable } from 'rxjs';
import { HttpHelper } from './../common/http/httpHelper';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CustomerService {

	constructor(
		private httpHelper: HttpHelper
	) { }

	getAllCustomer(): Observable<any> {
		const url = 'api/customer';
		return this.httpHelper.getHelper(url, {});
	}

}
