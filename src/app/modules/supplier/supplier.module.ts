import { SharedModule } from './../../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';

const route: Routes = [
	{ path: '', component: SupplierComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(route),
    	SharedModule.forRoot(),
	],
	declarations: [SupplierComponent]
})
export class SupplierModule { }
