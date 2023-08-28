import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { SharedModule } from '../../shared.module';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { AuthService } from 'src/app/auth/auth.service';

@NgModule({
	imports: [SharedModule],
	exports: [HeaderComponent],
	declarations: [
		HeaderComponent,
		LoginDialogComponent,
		SelectLanguageComponent,
	],
	providers: [HeaderService, AuthService],
})
export class HeaderModule {}
