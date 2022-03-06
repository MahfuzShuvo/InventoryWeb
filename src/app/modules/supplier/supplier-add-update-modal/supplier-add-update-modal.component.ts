import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MessageHelper } from '../../../common/message/messageHelper';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../models/supplier';
import { ResponseStatus } from 'src/app/common/enums/appEnums';

declare var $: any;

@Component({
	selector: 'supplier-app-add-update-modal',
	templateUrl: './supplier-add-update-modal.component.html'
})
export class SupplierAddUpdateModalComponent implements OnInit {

	public objSupplier: Supplier = new Supplier();
	public isAddModal: boolean = true;

	private eventsSubscription: Subscription;
	@Input() events: Observable<Supplier>;
	@Output() loadAllSupplierOutput: EventEmitter<void> = new EventEmitter();

	constructor(
		private supplierService: SupplierService,
		private messageHelper: MessageHelper
	) { }

	ngOnInit() {
		this.eventsSubscription = this.events.subscribe(obj => this.setEditObjectData(obj))
	}

	setEditObjectData(obj) {
		this.objSupplier = JSON.parse(JSON.stringify(obj))
		if (this.objSupplier._id) {
			this.isAddModal = false;
		} else {
			this.isAddModal = true;
		}
	}

	closeModal() {
		this.objSupplier = new Supplier();
		this.isAddModal = true;
		$('#addUpdateSupplierModal').modal('hide');
	}

	onSubmit() {
		// debugger
		if (this.objSupplier._id) {
			this.updateSupplier();
		} else {
			this.saveSupplier();
		}
	}

	saveSupplier() {
		if (this.objSupplier) {
			this.supplierService.createSupplier(this.objSupplier).subscribe(response => {
				// console.log('Supplier', response);
				if (response.responseCode === ResponseStatus.success) {
					this.messageHelper.showMessage(response.responseCode, response.message);
					this.loadAllSupplierOutput.emit();
					this.closeModal();
				} else {
					this.messageHelper.showMessage(response.responseCode, response.message);
				}
			});
		}
	}

	updateSupplier() {
		this.supplierService.updateSupplier(this.objSupplier).subscribe(response => {
			// console.log('Supplier update', response);
			if (response.responseCode === ResponseStatus.success) {
				// debugger
				this.messageHelper.showMessage(response.responseCode, response.message);
				this.loadAllSupplierOutput.emit();
				this.closeModal();
			} else {
				this.messageHelper.showMessage(response.responseCode, response.message);
			}
		});
	}

}
