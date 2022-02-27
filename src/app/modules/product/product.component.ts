import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Product'));
		Promise.resolve().then(() => this.headerService.setSubTitle('product'));
	}

}
