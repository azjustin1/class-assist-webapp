import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
	MatDialogActions,
	MatDialogContent,
	MatDialogRef
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Folder } from '../models/folder.model';
@Component({
	selector: 'app-add-folder-dialog',
	standalone: true,
	imports: [
		CommonModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatDialogContent,
		MatDialogActions,
	],
	templateUrl: 'add-or-edit-folder-dialog.component.html',
})
export class AddOrEditFolderDialogComponent {
	@Input() folder!: Folder;

	constructor(
		public dialogRef: MatDialogRef<AddOrEditFolderDialogComponent>,
	) {}

	onOkClick() {
		this.dialogRef.close(this.folder);
	}

	onCancelClick() {
		this.dialogRef.close();
	}
	
}
