import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserManagementModule } from './modules/system/user-management/user-management.module'
import { AuthProvider } from './shared/auth/auth.interceptor'
import { HeaderModule } from './shared/header/header.module'
import { MaterialModule } from './shared/material/material.module'
import { NavigationComponent } from './shared/navigation/navigation.component'

const SHARE_MODULES = [MaterialModule, FormsModule, HeaderModule]

const SHARE_COMPONENTS = [AppComponent, NavigationComponent]
const SYSTEM_MODULES = [UserManagementModule]

@NgModule({
	declarations: [...SHARE_COMPONENTS],
	imports: [
		...SHARE_MODULES,
		...SYSTEM_MODULES,
		RouterModule.forRoot([]),
		BrowserModule,
		AppRoutingModule,
		UserManagementModule,
		BrowserAnimationsModule,
	],
	providers: [AuthProvider],
	bootstrap: [AppComponent],
})
export class AppModule {}
