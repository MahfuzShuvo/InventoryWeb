import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Category'));
		Promise.resolve().then(() => this.headerService.setSubTitle('category'));
	}

}
