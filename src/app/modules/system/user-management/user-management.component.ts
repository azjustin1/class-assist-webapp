import { Component, OnInit } from '@angular/core'
import { UserManagementService } from './user-management.service'
import { User } from './models/user.model'
import { MatDialog } from '@angular/material/dialog'
import { AddOrEditUserComponent } from './add-or-edit-user/add-or-edit-user.component'

@Component({
	selector: 'app-user-management',
	templateUrl: './user-management.component.html',
	styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
	displayedColumns: string[] = ['id', 'username', 'email']
	dataSource: User[] = []

	constructor(
		private userService: UserManagementService,
		private dialog: MatDialog
	) {
		this.userService.getAllUsers().subscribe((res) => {
			this.dataSource = res
		})
	}
	ngOnInit(): void {}

	onAddNewUser() {
		this.dialog.open(AddOrEditUserComponent);
	}
}
