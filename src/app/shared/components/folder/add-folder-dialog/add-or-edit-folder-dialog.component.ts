import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
	MatDialogActions,
	MatDialogContent,
	MatDialogRef,
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
	styleUrl: 'add-or-edit-folder-dialog.component.css',
})
export class AddOrEditFolderDialogComponent<T extends Folder> {
	@Input() data!: T;
	@Input() title: string = '';
	@Input() isEdit: boolean = false;

	constructor(
		public dialogRef: MatDialogRef<AddOrEditFolderDialogComponent<T>>
	) {}

	onOkClick() {
		this.dialogRef.close(this.data);
	}

	onCancelClick() {
		this.dialogRef.close();
	}
}
