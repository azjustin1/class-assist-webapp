import { Component } from '@angular/core';
import { FolderService } from '../../folder/folder.service';
import { ClassroomService } from './classroom.service';
import { Folder } from '../../folder/models/folder.model';
import { keyBy } from 'lodash';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-classroom',
	templateUrl: './classroom.component.html',
	styleUrl: './classroom.component.css',
})
export class ClassroomComponent {
	folders$: Observable<Folder[]>;

	constructor(private readonly folderServie: FolderService) {
			this.folders$ = this.folderServie.getAllFolder();
	}
}
