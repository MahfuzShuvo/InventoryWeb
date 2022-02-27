import { SharedModule } from './../../shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';

const route: Routes = [
	{ path: '', component: SettingsComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(route),
    	SharedModule.forRoot(),
	],
	declarations: [SettingsComponent]
})
export class SettingsModule { }
