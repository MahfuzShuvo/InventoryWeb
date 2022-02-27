import { SharedModule } from './../../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const route: Routes = [
	{ path: '', component: ProductComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(route),
		SharedModule.forRoot(),
	],
	declarations: [ProductComponent]
})
export class ProductModule { }
