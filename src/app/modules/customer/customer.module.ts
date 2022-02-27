import { SharedModule } from './../../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';

const route: Routes = [
	{ path: '', component: CustomerComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(route),
		SharedModule.forRoot(),
	],
	declarations: [CustomerComponent]
})
export class CustomerModule { }
