import { MessageHelper } from './../../common/message/messageHelper';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResponseStatus } from './../../common/enums/appEnums';
import { SupplierService } from './../../services/supplier.service';
import { Supplier } from './../../models/supplier';
import { HeaderService } from './../../services/header.service';

declare var $: any;

@Component({
	selector: 'app-supplier',
	templateUrl: './supplier.component.html',
	styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

	public lstSupplier: Supplier[] = [];
	public supplier: Supplier = new Supplier();

	@Output() myOutput: EventEmitter<Supplier> = new EventEmitter();

	constructor(
		private headerService: HeaderService,
		private supplierService: SupplierService,
		private messageHelper: MessageHelper
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Supplier'));
		Promise.resolve().then(() => this.headerService.setSubTitle('supplier'));

		this.getAllSuppliers();
	}

	getAllSuppliers() {
		this.supplierService.getAllSupplier().subscribe(response => {
			if (response.responseCode === ResponseStatus.success) {
				this.lstSupplier = response.responseObj;
			}
		})
	}

	clickAddSupplier() {
		this.supplier = new Supplier();
		$('#addUpdateSupplierModal').appendTo('body').modal('show');
	}

	clickUpdateSupplier(item) {
		this.myOutput.emit(item);
		$('#addUpdateSupplierModal').appendTo('body').modal('show');
	}

	clickDeleteModal(item) {
		this.supplier = item;
		$('#delteSupplierModal').appendTo('body').modal('show');
	}

	deleteSupplier() {
		this.supplierService.deleteSupplier(this.supplier).subscribe(response => {
			// console.log('Respon:: ',response.responseObj);
			
			if (response.responseCode === ResponseStatus.success) {
				this.lstSupplier = response.responseObj;
				this.getAllSuppliers();
				this.closeDeleteModal();
				this.messageHelper.showMessage(response.responseCode, response.message);
			} else {
				this.messageHelper.showMessage(response.responseCode, response.message);
				this.closeDeleteModal();
			}
		})
	}

	closeDeleteModal() {
		this.supplier = new Supplier();
		$('#delteSupplierModal').modal('hide');
	}
}
