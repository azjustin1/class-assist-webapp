import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../auth/auth.service'
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component'
import { MaterialModule } from '../material/material.module'
import { HeaderComponent } from './header.component'
import { HeaderService } from './header.service'
import { SelectLanguageComponent } from './select-language/select-language.component'
import { SharedModule } from '../shared.module'

@NgModule({
	imports: [SharedModule, MaterialModule, ReactiveFormsModule],
	exports: [HeaderComponent],
	declarations: [
		HeaderComponent,
		LoginDialogComponent,
		SelectLanguageComponent,
	],
	providers: [HeaderService, AuthService],
})
export class HeaderModule {}
