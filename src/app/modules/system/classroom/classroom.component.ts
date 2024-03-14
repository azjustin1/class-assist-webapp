import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FolderService } from 'src/app/shared/components/folder/folder.service';
import { Folder } from 'src/app/shared/components/folder/models/folder.model';

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
