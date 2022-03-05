import { Customer } from './../models/customer';
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

	createCustomer(objCustomer: Customer): Observable<any> {
		const url = 'api/customer/create';
		return this.httpHelper.postHelper(url, objCustomer);
	}

	updateCustomer(obj): Observable<any> {
		const url = 'api/customer/update/'+obj._id;
		return this.httpHelper.postHelper(url, obj);
	}

	deleteCustomer(obj): Observable<any> {
		const url = 'api/customer/delete/'+obj._id;
		return this.httpHelper.postHelper(url, obj);
	}

}
