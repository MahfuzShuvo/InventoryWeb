/*
 * Created By  	: Md. Mozaffar Rahman Sebu
 * Created Date	: Aug,03,2021
 * Updated By  	: Md. Mozaffar Rahman Sebu
 * Updated Date	: Aug,16,2021
 * (c) Datavanced LLC
 */

import { Component, OnInit } from '@angular/core';
import { ResponseStatus } from '../enums/appEnums';
import { MessageHelper } from '../message/messageHelper';
import { MessageDto } from 'src/app/services/notification/messageDto';
import { HeaderService } from 'src/app/services/header.service';
declare var $: any;

declare function comboBox(): any;

@Component({
  selector: 'app-home-layout',
  templateUrl: './homeLayout.html',
  styleUrls: ['./homelayout.component.css'],
})
export class HomeLayoutComponent implements OnInit {

  public hospitals: Array<any> = new Array<any>();
  public patients: Array<any> = new Array<any>();

  flagDiv: boolean = false;

  maxChars = 200;
  role = '';
  chars = 0;

  public year: number = new Date().getFullYear();
  public user: any = { FullName: '' };
  public flag = {
    callForm: false,
    registerUser: false,
  };
  public submitted: boolean = false;
  public title: string | undefined;
  public subTitle: string | undefined;

  constructor(
    private messageHelper: MessageHelper,
    private headerService: HeaderService
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
  }


  // toggole menu
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
