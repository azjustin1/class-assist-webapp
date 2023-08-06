import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleManagementComponent } from './modules/system/role-management/role-management.component';
import { UserManagementComponent } from './modules/system/user-management/user-management.component';
import { UserManagementModule } from './modules/system/user-management/user-management.module';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from './shared/material/material.module';
import { NavigationComponent } from './shared/navigation/navigation.component';

const SHARE_MODULES = [MaterialModule];

const SHARE_COMPONENTS = [AppComponent, HeaderComponent, NavigationComponent];
const SYSTEM_COMPONENTS = [UserManagementComponent, RoleManagementComponent];

@NgModule({
  declarations: [...SHARE_COMPONENTS, ...SYSTEM_COMPONENTS],
  imports: [
    ...SHARE_MODULES,
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    UserManagementModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
