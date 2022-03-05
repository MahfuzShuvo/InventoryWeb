import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessageHelper } from './../../../common/message/messageHelper';
import { CustomerService } from './../../../services/customer.service';
import { Customer } from './../../../models/customer';
import { ResponseStatus } from 'src/app/common/enums/appEnums';

declare var $: any;

@Component({
	selector: 'app-add-update-modal',
	templateUrl: './add-update-modal.component.html'
})
export class AddUpdateModalComponent implements OnInit {

	public objCustomer: Customer = new Customer();
	public isAddModal: boolean = true;

	private eventsSubscription: Subscription;
	@Input() events: Observable<Customer>;
	@Output() loadAllCustomerOutput: EventEmitter<void> = new EventEmitter();

	constructor(
		private customerService: CustomerService,
		private messageHelper: MessageHelper
	) { }

	ngOnInit() {
		this.eventsSubscription = this.events.subscribe(obj => this.setEditObjectData(obj))
	}

	setEditObjectData(obj) {
		this.objCustomer = JSON.parse(JSON.stringify(obj))
		if (this.objCustomer._id) {
			this.isAddModal = false;
		} else {
			this.isAddModal = true;
		}
	}

	closeModal() {
		this.objCustomer = new Customer();
		this.isAddModal = true;
		$('#addUpdateCustomerModal').modal('hide');
	}

	onSubmit() {
		// debugger
		if (this.objCustomer._id) {
			this.updateCustomer();
		} else {
			this.saveCustomer();
		}
	}

	saveCustomer() {
		if (this.objCustomer) {
			this.customerService.createCustomer(this.objCustomer).subscribe(response => {
				// console.log('Customer', response);
				if (response.responseCode === ResponseStatus.success) {
					this.messageHelper.showMessage(response.responseCode, response.message);
					this.loadAllCustomerOutput.emit();
					this.closeModal();
				} else {
					this.messageHelper.showMessage(response.responseCode, response.message);
				}
			});
		}
	}

	updateCustomer() {
		this.customerService.updateCustomer(this.objCustomer).subscribe(response => {
			// console.log('Customer update', response);
			if (response.responseCode === ResponseStatus.success) {
				// debugger
				this.messageHelper.showMessage(response.responseCode, response.message);
				this.loadAllCustomerOutput.emit();
				this.closeModal();
			} else {
				this.messageHelper.showMessage(response.responseCode, response.message);
			}
		});
	}

}
