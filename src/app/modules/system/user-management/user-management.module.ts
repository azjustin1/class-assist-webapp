import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { UserManagementRoutingModule } from './user-management-routing.module'
import { UserManagementComponent } from './user-management.component'
import { MaterialModule } from 'src/app/shared/material/material.module'
import { UserManagementService } from './user-management.service'

@NgModule({
	declarations: [UserManagementComponent],
	imports: [CommonModule, UserManagementRoutingModule, MaterialModule],
	providers: [UserManagementService],
})
export class UserManagementModule {}
