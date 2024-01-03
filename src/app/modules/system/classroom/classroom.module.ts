import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FolderComponent } from 'src/app/shared/components/folder/folder.component';
import { FolderService } from 'src/app/shared/components/folder/folder.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomComponent } from './classroom.component';
import { ClassroomService } from './classroom.service';

@NgModule({
	imports: [CommonModule, MaterialModule, ClassroomRoutingModule, FolderComponent],
	declarations: [ClassroomComponent],
	providers: [ClassroomService, FolderService],
})
export class ClassroomModule {}
