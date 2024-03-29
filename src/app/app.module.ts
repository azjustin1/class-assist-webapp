import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthProvider } from './auth/auth.interceptor';
import { ClassroomModule } from './modules/system/classroom/classroom.module';
import { UserManagementModule } from './modules/system/user-management/user-management.module';
import { FolderModule } from './shared/components/folder/folder.module';
import { HeaderModule } from './shared/components/header/header.module';
import { NavigatorModule } from './shared/components/navigator/navigator.module';
import { MaterialModule } from './shared/material/material.module';
import { HomeModule } from './shared/pages/home/home.module';
import { SharedModule } from './shared/shared.module';

const SHARE_MODULES = [
	SharedModule,
	MaterialModule,
	FormsModule,
	HeaderModule,
	NavigatorModule,
	HomeModule,
	FolderModule,
];

const SHARE_COMPONENTS = [AppComponent];
const SYSTEM_MODULES = [UserManagementModule, ClassroomModule];

@NgModule({
	declarations: [...SHARE_COMPONENTS],
	imports: [
		...SHARE_MODULES,
		...SYSTEM_MODULES,
		AppRoutingModule,
		RouterModule.forRoot([]),
		BrowserModule,
		BrowserAnimationsModule,
	],
	providers: [AuthProvider],
	bootstrap: [AppComponent],
})
export class AppModule {}
