import {
	Component,
	EventEmitter,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/modules/system/quiz/models/quiz.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOrEditFolderDialogComponent } from './add-folder-dialog/add-or-edit-folder-dialog.component';
import { FolderItemComponent } from './folder-item/folder-item.component';
import { FolderService } from './folder.service';
import { Folder } from './models/folder.model';
import { WarningDialogComponent } from '../dialogs/warning-dialog/warning-dialog.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface TreeNodeFlatNode {
	expandable: boolean;
	name: string;
	level: number;
}

@Component({
	selector: 'app-folder',
	imports: [
		CommonModule,
		MatButtonModule,
		MatMenuModule,
		MatListModule,
		MatIconModule,
		FolderItemComponent,
		QuizItemComponent,
	],
	providers: [FolderService],
	standalone: true,
	templateUrl: './folder.component.html',
	styleUrl: './folder.component.css',
})
export class FolderComponent {
	@Input() parentId?: number;
	@Input() folders!: Folder[] | null;
	@Input() quizzes!: Quiz[] | null;
	@Output() foldersChange = new EventEmitter();
	@Input() isAddNew: boolean = false;
	@Output() isAddNewChange = new EventEmitter<boolean>();
	@ViewChild(MatMenuTrigger) contextMenuTrigger!: MatMenuTrigger;
	contextMenuItems: any[] = [
		{ label: 'Open', action: 'open' },
		{ label: 'Delete', action: 'delete' },
	];
	selectedFolderId!: number | null;
	newFolder!: Folder | null;
	newFolderName: string = '';
	contextMenuPosition = { x: '0px', y: '0px' };

	constructor(
		private readonly folderServie: FolderService,
		private route: ActivatedRoute,
		private router: Router,
		private dialog: MatDialog
	) {}

	onLoadFolder(folderId: number) {
		this.router.navigate(['/library/folder', folderId]);
	}

	onOpenQuiz(quizId: number) {
		this.router.navigate(['/library/edit-quiz', quizId]);
	}

	onAddNewFolder() {
		const newFolder = new Folder('');
		const dialogRef = this.dialog.open(AddOrEditFolderDialogComponent, {
			disableClose: true,
		});
		dialogRef.componentInstance.data = newFolder;
		dialogRef.componentInstance.title = 'Add Folder';
		dialogRef.afterClosed().subscribe((folder: Folder) => {
			if (folder?.id) {
				this.updateFolder(folder);
			} else {
				folder.parentId = this.parentId;
				this.saveNewFolder(folder);
			}
		});
	}

	saveNewFolder(folder: Folder) {
		this.folderServie.addNewFolder(folder).subscribe((newFolder) => {
			this.folders = [...this.folders!, newFolder];
		});
	}

	updateFolder(folder: Folder) {
		this.folderServie.editFolder(folder).subscribe((res) => {
			this.folders = [...this.folders!];
		});
	}

	onRenameFolder(data: Folder) {
		this.folders = [...this.folders!];
	}

	onAddQuiz() {
		this.router.navigate(['library/add-quiz']);
	}

	onRenameQuiz(data: Quiz) {
		this.quizzes = [...this.quizzes!];
	}

	onDeleteItem(dataId: number) {}
}
