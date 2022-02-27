import { SharedModule } from './../../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';

const route: Routes = [
	{ path: '', component: CategoryComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(route),
		SharedModule.forRoot(),
	],
	declarations: [CategoryComponent]
})
export class CategoryModule { }
