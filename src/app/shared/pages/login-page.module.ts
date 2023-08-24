import { NgModule } from '@angular/core'
import { LoginPageComponent } from './login-page.component'
import { SharedModule } from '../shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
	imports: [SharedModule, FormsModule, ReactiveFormsModule],
	exports: [],
	declarations: [LoginPageComponent],
	providers: [],
})
export class LoginPageModule {}
