import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/auth/auth.service'
import { AUTHENTICATION } from 'src/app/utils/constant'

@Component({
	selector: 'app-login-dialog',
	templateUrl: 'login-dialog.component.html',
})
export class LoginDialogComponent implements OnInit {
	loginForm = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	})

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.loginForm.valueChanges.subscribe((value) => {})
	}

	login() {
		this.authService
			.login(
				this.loginForm.value.username!,
				this.loginForm.value.password!
			)
			.subscribe((res) => {
				localStorage.setItem(
					AUTHENTICATION.ACCESS_TOKEN,
					res.accessToken
				)
			})
	}
}
