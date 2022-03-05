import { MessageHelper } from './../../common/message/messageHelper';
import { SystemUser } from './../../models/systemUser';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResponseStatus } from 'src/app/common/enums/appEnums';
import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { HeaderService } from './../../services/header.service';

declare var $: any;

@Component({
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

	public lstCustomer: Customer[] = [];
	public customer: Customer =  new Customer();

	@Output() myOutput: EventEmitter<Customer> = new EventEmitter();

	constructor(
		private headerService: HeaderService,
		private customerService: CustomerService,
		private messageHelper: MessageHelper
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Customer'));
		Promise.resolve().then(() => this.headerService.setSubTitle('customer'));

		this.getCustomers();
	}

	getCustomers() {
		// debugger
		this.customerService.getAllCustomer().subscribe(response => {
			// console.log('Respon:: ',response.responseObj);
			
			if (response.responseCode === ResponseStatus.success) {
				this.lstCustomer = response.responseObj;
			}
		})
	}

	clickAddCustomer() {
		this.customer = new Customer();
		$('#addUpdateCustomerModal').appendTo('body').modal('show');
	}

	clickUpdateCustomer(item: Customer) {
		
		this.myOutput.emit(item);
		$('#addUpdateCustomerModal').appendTo('body').modal('show');
	}

	clickDeleteModal(item: Customer) {
		this.customer = item;
		$('#delteCustomerModal').appendTo('body').modal('show');
	}

	deleteCustomer() {
		this.customerService.deleteCustomer(this.customer).subscribe(response => {
			// console.log('Respon:: ',response.responseObj);
			
			if (response.responseCode === ResponseStatus.success) {
				this.lstCustomer = response.responseObj;
				this.getCustomers();
				this.closeDeleteModal();
				this.messageHelper.showMessage(response.responseCode, response.message);
			} else {
				this.messageHelper.showMessage(response.responseCode, response.message);
				this.closeDeleteModal();
			}
		})
	}

	closeDeleteModal() {
		this.customer = new Customer();
		$('#delteCustomerModal').modal('hide');
	}
}
