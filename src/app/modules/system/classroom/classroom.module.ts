import { NgModule } from '@angular/core';

import { ClassroomComponent } from './classroom.component';
import { FolderComponent } from '../../folder/folder.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FolderService } from '../../folder/folder.service';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomService } from './classroom.service';

@NgModule({
	imports: [SharedModule, ClassroomRoutingModule, FolderComponent],
	declarations: [ClassroomComponent],
	providers: [ClassroomService],
})
export class ClassroomModule {}
