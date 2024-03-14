import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserManagementService } from '../user-management.service';
import { User } from '../models/user.model';

@Component({
	selector: 'app-add-or-edit-user',
	templateUrl: 'add-or-edit-user.component.html',
})
export class AddOrEditUserComponent {
	usernameControl = new FormControl('', Validators.required);
	birthdayControl = new FormControl('', Validators.required);
	emailControl = new FormControl('', [Validators.required, Validators.email]);
	roleControl = new FormControl('', Validators.required);
	roles: any[] = ['Teacher', 'Student'];

	constructor(
		public dialogRef: MatDialogRef<AddOrEditUserComponent>,
		private readonly userManagementService: UserManagementService
	) {}

	onCancelClick(): void {
		this.dialogRef.close();
	}

	onSaveClick(): void {
		if (
			this.usernameControl.valid &&
			this.birthdayControl.valid &&
			this.emailControl.valid &&
			this.roleControl.valid
		) {
			const newUser: User = {
				username: this.usernameControl.value!,
				birthday: this.birthdayControl.value!,
				email: this.emailControl.value!,
				role: this.roleControl.value!,
			};
			this.userManagementService.addNewUser(newUser).subscribe(res => {
				this.dialogRef.close(newUser);
			});
		}
	}
}
