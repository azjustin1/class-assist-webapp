import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleManagementRoutingModule } from './role-management-routing.module';
import { FolderComponent } from '../../folder/folder.component';

@NgModule({
  declarations: [],
  imports: [SharedModule, RoleManagementRoutingModule, FolderComponent],
})
export class RoleManagementModule {}
