import { Observable } from 'rxjs';
import { Supplier } from './../models/supplier';
import { HttpHelper } from './../common/http/httpHelper';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SupplierService {

	constructor(
		private httpHelper: HttpHelper
	) { }

	getAllSupplier(): Observable<any> {
		const url = 'api/supplier';
		return this.httpHelper.getHelper(url, {});
	}

	createSupplier(objSupplier: Supplier): Observable<any> {
		const url = 'api/supplier/create';
		return this.httpHelper.postHelper(url, objSupplier);
	}

	updateSupplier(obj): Observable<any> {
		const url = 'api/supplier/update/'+obj._id;
		return this.httpHelper.postHelper(url, obj);
	}

	deleteSupplier(obj): Observable<any> {
		const url = 'api/supplier/delete/'+obj._id;
		return this.httpHelper.postHelper(url, obj);
	}
}
