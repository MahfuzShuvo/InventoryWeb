import { SharedModule } from './../../shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

const route: Routes = [
	{ path: '', component: DashboardComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(route),
    	SharedModule.forRoot(),
	],
	declarations: [DashboardComponent]
})
export class DashboardModule { }
