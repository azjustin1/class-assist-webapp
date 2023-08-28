import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./app.module').then((m) => m.AppModule),
		canActivate: [authGuard],
		component: AppComponent,
	},
	{
		path: 'signin',
		loadChildren: () =>
			import('../app/shared/pages/login/login-page.module').then(
				(m) => m.LoginPageModule
			),
	},
	/** System modules */
	{
		path: 'user-management',
		loadChildren: () =>
			import(
				'./modules/system/user-management/user-management.module'
			).then((m) => m.UserManagementModule),
	},
	{
		path: 'role-management',
		loadChildren: () =>
			import(
				'./modules/system/role-management/role-management.module'
			).then((m) => m.RoleManagementModule),
	},
	/**  */
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
