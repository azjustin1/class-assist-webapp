import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FolderItemComponent } from 'src/app/shared/components/folder/folder-item/folder-item.component';
import { FolderComponent } from 'src/app/shared/components/folder/folder.component';
import { FolderService } from 'src/app/shared/components/folder/folder.service';
import { Folder } from 'src/app/shared/components/folder/models/folder.model';
import { I18nModule } from 'src/app/shared/i18n/I18nModule.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
	selector: 'app-library',
	standalone: true,
	imports: [
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		AppRoutingModule,
		MaterialModule,
		I18nModule,
		MatCardModule,
		FolderComponent,
		FolderItemComponent,
	],
	providers: [FolderService],
	templateUrl: './library.component.html',
	styleUrl: './library.component.css',
})
export class LibraryComponent implements OnChanges {
	folders$: Observable<Folder[]>;
	isAddNew: boolean = false;
	newFolderName: string = '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private readonly folderService: FolderService
	) {
		this.folders$ = this.folderService.getAllFolder();
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}

	onAddNewFolder() {
		this.isAddNew = true;
	}

	onAddNewQuiz() {
		this.router.navigate(['/quiz']);
	}

	onLoadFolder(folderId: number) {
		this.router.navigate(['/library/folder', folderId]);
	}
}
