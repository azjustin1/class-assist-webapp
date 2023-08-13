import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UserManagementComponent } from './user-management.component';

@NgModule({
  declarations: [UserManagementComponent],
  imports: [CommonModule, MaterialModule, UserManagementRoutingModule],
})
export class UserManagementModule {}
