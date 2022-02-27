import { LoginModule } from './modules/login/login.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth/auth.guard';
import { HomeLayoutComponent } from './common/layout/homelayout';
import { LoginLayoutComponent } from './common/layout/loginlayout';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: '',
		component: LoginLayoutComponent,
		children: [
			{ path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
			{
				path: '',
				canActivate: [AuthGuard],
				component: HomeLayoutComponent,
				children: [
					{ path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
					{ path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
					{ path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) },
					{ path: 'supplier', loadChildren: () => import('./modules/supplier/supplier.module').then(m => m.SupplierModule) },
					{ path: 'category', loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule) },
					// { path: 'stock', loadChildren: () => import('./modules/stock/stock.module').then(m => m.StockModule) },
					{ path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
				]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
