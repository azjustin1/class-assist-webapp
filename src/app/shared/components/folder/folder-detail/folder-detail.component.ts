import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from 'src/app/modules/system/quiz/models/quiz.model';
import { QuizService } from 'src/app/modules/system/quiz/quiz.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FolderItemComponent } from '../folder-item/folder-item.component';
import { FolderComponent } from '../folder.component';
import { FolderService } from '../folder.service';
import { Folder } from '../models/folder.model';

@Component({
	selector: 'app-folder-detail',
	standalone: true,
	imports: [
		SharedModule,
		MatButtonModule,
		FolderComponent,
		FolderItemComponent,
	],
	providers: [QuizService],
	templateUrl: 'folder-detail.component.html',
	styleUrl: 'folder-detail.component.css',
})
export class FolderDetailComponent implements OnInit {
	folders: Folder[] = [];
	quizzes: Quiz[] = [];
	parentId?: number;

	constructor(
		private readonly folderServie: FolderService,
		private readonly quizService: QuizService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			if (params['id']) {
				this.parentId = params['id'];
				this.folderServie
					.getChildFoldersByParentId(this.parentId!)
					.subscribe((folders) => {
						this.folders = folders;
					});

				this.quizService
					.getByFolderId(this.parentId!)
					.subscribe((quizzes) => {
						this.quizzes = quizzes;
					});
			}
		});
	}

	onLoadFolder(folderId: number) {
		this.router.navigate(['/library/folder', folderId]);
	}
}
