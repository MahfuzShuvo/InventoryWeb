import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-supplier',
	templateUrl: './supplier.component.html',
	styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Supplier'));
		Promise.resolve().then(() => this.headerService.setSubTitle('supplier'));
	}

}
