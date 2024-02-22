import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { Folder } from '../models/folder.model';
import { FolderItemAction } from '../folder-item-action.interface';
import { Quiz } from 'src/app/modules/system/quiz/models/quiz.model';

@Component({
	selector: 'app-folder-item',
	standalone: true,
	imports: [SharedModule],
	templateUrl: 'folder-item.component.html',
	styleUrl: './folder-item.component.css',
})
export class FolderItemComponent implements FolderItemAction, OnInit {
	@Input() data!: Folder | Quiz;
	@Input() isFile: boolean = false;
	@Output() onEditFolder = new EventEmitter<Folder>();
	@Output() onEditFile = new EventEmitter<Quiz>();
	@Output() onDelete = new EventEmitter<number>();

	constructor(private router: Router) {}
	ngOnInit(): void {
			console.log(this.data)
	}

	edit(): void {
		throw new Error('Method not implemented.');
	}
	delete(): void {
		throw new Error('Method not implemented.');
	}

	onLoadFolder(folderId: number) {
		this.router.navigate(['/library/folder', folderId]);
	}

	onEditClick() {
		if (this.isFile) {
			this.onEditFile.emit(this.data as Quiz);
		} else {
			this.onEditFolder.emit(this.data);
		}
	}

	onDeleteClick() {
		this.onDelete.emit(this.data.id);
	}
}
