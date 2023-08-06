import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementModule } from './modules/system/user-management/user-management.module';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from './shared/material/material.module';

const SHARE_MODULES = [MaterialModule];

const SHARE_COMPONENTS = [AppComponent, HeaderComponent];

@NgModule({
  declarations: [...SHARE_COMPONENTS],
  imports: [
    ...SHARE_MODULES,
    BrowserModule,
    AppRoutingModule,
    UserManagementModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
