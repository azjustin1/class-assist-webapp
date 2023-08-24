import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth/auth.service'
import { AUTHENTICATION } from 'src/app/utils/constant'

@Component({
	selector: 'app-login-page',
	templateUrl: 'login-page.component.html',
})
export class LoginPageComponent {
	loginForm = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	})

	constructor(private readonly authService: AuthService) {}

	onLogin() {
		if (this.loginForm.valid) {
			const username = this.loginForm.get('username')?.value
			const password = this.loginForm.get('password')?.value
			this.authService.login(username!, password!).subscribe((res) => {
				if (res) {
					localStorage.setItem(
						AUTHENTICATION.ACCESS_TOKEN,
						res.accessToken
					)
				}
			})
		}
	}
}
