import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
@Component({
	selector: 'app-add-folder-dialog',
	standalone: true,
	imports: [
		FormsModule,
		MatButtonModule,
		MatDialogContent,
		MatDialogActions,
	],
	templateUrl: 'warning-dialog.component.html',
	styleUrl: 'warning-dialog.component.css'
})
export class WarningDialogComponent {

	constructor(
		public dialogRef: MatDialogRef<WarningDialogComponent>,
	) {}

	onOkClick() {
		this.dialogRef.close(true);
	}

	onCancelClick() {
		this.dialogRef.close(false);
	}
	
}
