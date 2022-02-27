import { Router } from '@angular/router';
import { SystemUser } from './../../models/systemUser';
/*
 * Created By  	: Md. Mahfuz-Ul-Karim
 * Created Date	: Feb 27, 2022
 * (c) MahfuzShuvo LLC
 */

import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from '../enums/appEnums';
import { MessageHelper } from '../message/messageHelper';
import { HeaderService } from 'src/app/services/header.service';
declare var $: any;

declare function comboBox(): any;

@Component({
	selector: 'app-home-layout',
	templateUrl: './homeLayout.html',
	styleUrls: ['./homelayout.component.css'],
})
export class HomeLayoutComponent implements OnInit {



	isMenuOpen = false;
	
	public title: string = '';
	public subTitle: string = '';
	public systemUser: SystemUser = new SystemUser();

	constructor(
		private messageHelper: MessageHelper,
		private headerService: HeaderService,
		private router: Router
	) {
		// if (localStorage.getItem("User") === null  || localStorage.getItem("User") === 'null' || !localStorage.hasOwnProperty('User')) {
		// 	this.user={'FullName':''};
		// }else{
		// 	this.user=JSON.parse(localStorage.getItem("User")||"");
		// }
	}

	ngOnInit(): void {
		this.headerService.title.subscribe(title => {
			this.title = title;
		});
		this.headerService.subTitle.subscribe(subTitle => {
			this.subTitle = subTitle;
		});

		this.systemUser = JSON.parse(localStorage.getItem('User') || '');
	}


	// toggole menu
	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	logout() {
		localStorage.clear();
		this.router.navigate(['/login']);
	}
}
