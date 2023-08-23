import { Component, OnInit } from '@angular/core'
import { UserManagementService } from './user-management.service'
import { User } from './models/user.model'

@Component({
	selector: 'app-user-management',
	templateUrl: './user-management.component.html',
	styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
	displayedColumns: string[] = ['id', 'username', 'email']
	dataSource: User[] = []

	constructor(private userService: UserManagementService) {
		this.userService.getAllUsers().subscribe((res) => {
			this.dataSource = res
		})
	}
	ngOnInit(): void {}
}
