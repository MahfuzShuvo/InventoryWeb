import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './common/layout/homelayout';

const routes: Routes = [
	{
		path: '',
		component: HomeLayoutComponent,
		// children: [
		//   { path: '', component: DashboardComponent },
		//   { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
		//   { path: 'jobs', loadChildren: () => import('./modules/jobs/jobs.module').then(m => m.JobsModule) },
		//   { path: 'manage', loadChildren: () => import('./modules/manage/manage.module').then(m => m.ManageModule) },
		//   { path: 'messages', loadChildren: () => import('./modules/messages/messages.module').then(m => m.MessagesModule) },
		//   { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
		//   { path: 'mentors', loadChildren: () => import('./modules/mentors/mentors.module').then(m => m.LogsModule) }

		// ]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
