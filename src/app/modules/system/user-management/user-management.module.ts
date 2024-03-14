import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { AddOrEditUserComponent } from './add-or-edit-user/add-or-edit-user.component'
import { UserManagementRoutingModule } from './user-management-routing.module'
import { UserManagementComponent } from './user-management.component'
import { UserManagementService } from './user-management.service'

@NgModule({
	imports: [SharedModule, UserManagementRoutingModule],
	declarations: [UserManagementComponent, AddOrEditUserComponent],
	providers: [UserManagementService],
})
export class UserManagementModule {}
