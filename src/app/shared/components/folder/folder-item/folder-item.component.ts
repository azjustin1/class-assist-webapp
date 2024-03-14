import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { Folder } from '../models/folder.model';
import { IFolderItem } from '../folder-item-action.interface';
import { Quiz } from 'src/app/modules/system/quiz/models/quiz.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { AddOrEditFolderDialogComponent } from '../add-folder-dialog/add-or-edit-folder-dialog.component';
import { FolderService } from '../folder.service';

@Component({
	selector: 'app-folder-item',
	standalone: true,
	imports: [MatMenuModule, MatCardModule, MatIconModule, MatButtonModule],
	providers: [FolderService],
	templateUrl: 'folder-item.component.html',
	styleUrl: './folder-item.component.css',
})
export class FolderItemComponent implements IFolderItem {
	@Input() folder!: Folder | Quiz;
	@Output() onEditFolder = new EventEmitter<Folder>();
	@Output() onDelete = new EventEmitter<number>();

	constructor(
		protected router: Router,
		private dialog: MatDialog,
		private folderService: FolderService
	) {}

	open(): void {
		this.router.navigate(['/library/folder', this.folder.id]);
	}

	edit(): void {
		const dialogRef = this.dialog.open(
			AddOrEditFolderDialogComponent<Folder>
		);
		dialogRef.componentInstance.data = this.folder;
		dialogRef.componentInstance.title = 'Edit Folder';

		dialogRef.afterClosed().subscribe((newFolder) => {
			this.folderService
				.editFolder(newFolder)
				.subscribe((updatedFolder) => {
					this.onEditFolder.emit(updatedFolder);
				});
		});
	}
	delete(): void {
		this.onDelete.emit(this.folder.id);
	}
}
