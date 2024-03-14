import { NgModule } from '@angular/core';
import { FolderComponent } from 'src/app/shared/components/folder/folder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleManagementRoutingModule } from './role-management-routing.module';

@NgModule({
	declarations: [],
	imports: [SharedModule, RoleManagementRoutingModule, FolderComponent],
})
export class RoleManagementModule {}
