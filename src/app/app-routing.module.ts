import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './auth/auth.guard';
import { LoginPageComponent } from './shared/pages/login/login-page.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('../app/shared/pages/home/home.module').then(
				(m) => m.HomeModule
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
	{
		path: 'classroom',
		loadChildren: () =>
			import(
				'./modules/system/classroom/classroom-routing.module'
			).then((m) => m.ClassroomRoutingModule),
	},
	{
		path: 'signin',
		component: LoginPageComponent,
	},
	/**  */
	{
		path: '**',
		component: PageNotFoundComponent,
	},
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
