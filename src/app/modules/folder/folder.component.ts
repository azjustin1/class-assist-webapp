import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FolderService } from './folder.service';
import { Folder } from './models/folder.model';
import { each, keyBy, isUndefined, isEmpty } from 'lodash';

interface TreeNodeFlatNode {
	expandable: boolean;
	name: string;
	level: number;
}

@Component({
	selector: 'app-folder',
	imports: [SharedModule],
	standalone: true,
	templateUrl: './folder.component.html',
	styleUrl: './folder.component.css',
})
export class FolderComponent {
	@Input() folders!: Folder[] | null;
	selectedFolderId!: number | null;

	constructor(private readonly folderServie: FolderService) {
		this.folderServie.selectedFolderId$.subscribe((id) => {
			this.selectedFolderId = id;
		});
	}

	loadChildNodes(node: Folder) {
		if (node.isExpand) {
			node.isExpand = false;
		} else {
			node.isExpand = true;
			if (!node.subfolders) {
				this.folderServie
					.getChildFoldersByParentId(node.id)
					.subscribe((childFolders) => {
						if (node.id === childFolders.id) {
							node.subfolders = childFolders.subfolders;
							node.isExpand = true;
						}
					});
			}
		}
	}

	onSelectFolder(folder: Folder) {
		this.folderServie.updateSelectedFolderId(folder.id);
	}
}
