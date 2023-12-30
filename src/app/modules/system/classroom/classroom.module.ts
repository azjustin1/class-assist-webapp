import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { FolderComponent } from '../../folder/folder.component';
import { FolderService } from '../../folder/folder.service';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomComponent } from './classroom.component';
import { ClassroomService } from './classroom.service';

@NgModule({
	imports: [SharedModule, ClassroomRoutingModule, FolderComponent],
	declarations: [ClassroomComponent],
	providers: [ClassroomService, FolderService],
})
export class ClassroomModule {}
