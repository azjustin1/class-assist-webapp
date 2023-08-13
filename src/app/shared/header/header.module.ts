import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { I18nModule } from '../I18n/I18nModule.module'
import { MaterialModule } from '../material/material.module'
import { HeaderComponent } from './header.component'
import { HeaderService } from './header.service'
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component'
import { SelectLanguageComponent } from './select-language/select-language.component'
import { AuthProvider } from '../auth/auth.interceptor'
import { AuthService } from '../auth/auth.service'

@NgModule({
	imports: [CommonModule, MaterialModule, I18nModule, ReactiveFormsModule],
	exports: [HeaderComponent],
	declarations: [
		HeaderComponent,
		LoginDialogComponent,
		SelectLanguageComponent,
	],
	providers: [HeaderService, AuthService],
})
export class HeaderModule {}
