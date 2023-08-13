import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'

const routes: Routes = [
	{
		path: '',
		component: AppComponent,
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
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
