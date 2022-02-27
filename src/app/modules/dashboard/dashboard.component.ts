import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	constructor(
		private headerService: HeaderService
	) { }

	ngOnInit() {
		Promise.resolve().then(() => this.headerService.setTitle('Dashboard'));
		Promise.resolve().then(() => this.headerService.setSubTitle('dashboard'));
	}

}