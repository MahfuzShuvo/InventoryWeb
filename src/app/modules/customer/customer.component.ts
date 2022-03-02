import { ResponseStatus } from 'src/app/common/enums/appEnums';
import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

	public lstCustomer: Customer[] = [];

	constructor(
		private headerService: HeaderService,
		private customerService: CustomerService
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Customer'));
		Promise.resolve().then(() => this.headerService.setSubTitle('customer'));

		this.getCustomers();
	}

	getCustomers() {
		// debugger
		this.customerService.getAllCustomer().subscribe(response => {
			console.log('Respon:: ',response.responseObj);
			
			if (response.responseCode === ResponseStatus.success) {
				this.lstCustomer = response.responseObj;
			}
		})
	}
	clickAddUpdateCustomer() {
		$('#addUpdateCustomerModal').appendTo('body').modal('show')
	}
}
