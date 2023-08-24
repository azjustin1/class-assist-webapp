import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
	selector: 'app-add-or-edit-user',
	templateUrl: 'add-or-edit-user.component.html',
})
export class AddOrEditUserComponent {
	usernameControl = new FormControl('', Validators.required)
	birthdayControl = new FormControl('', Validators.required)
	emailControl = new FormControl('', [Validators.required, Validators.email])
	roleControl = new FormControl('', Validators.required)
	roles: any[] = ['Teacher', 'Student']

	constructor(
		public dialogRef: MatDialogRef<AddOrEditUserComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	onCancelClick(): void {
		this.dialogRef.close()
	}

	onSaveClick(): void {
		if (
			this.usernameControl.valid &&
			this.birthdayControl.valid &&
			this.emailControl.valid &&
			this.roleControl.valid
		) {
			const newUser = {
				username: this.usernameControl.value,
				birthday: this.birthdayControl.value,
				email: this.emailControl.value,
				role: this.roleControl.value,
			}
			this.dialogRef.close(newUser)
		}
	}
}
