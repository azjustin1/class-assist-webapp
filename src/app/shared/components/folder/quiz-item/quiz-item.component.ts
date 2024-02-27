import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FolderItemComponent } from '../folder-item/folder-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/modules/system/quiz/models/quiz.model';
import { MatButtonModule } from '@angular/material/button';
import { IFolderItem } from '../folder-item-action.interface';
import { AddOrEditFolderDialogComponent } from '../add-folder-dialog/add-or-edit-folder-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { QuizService } from 'src/app/modules/system/quiz/quiz.service';

@Component({
	selector: 'app-quiz-item',
	standalone: true,
	imports: [MatMenuModule, MatCardModule, MatIconModule, MatButtonModule],
	providers: [QuizService],
	templateUrl: 'quiz-item.component.html',
	styleUrl: 'quiz-item.component.css',
})
export class QuizItemComponent implements IFolderItem {
	@Input() quiz!: Quiz;
	@Output() onEditQuiz = new EventEmitter<Quiz>();
	@Output() onDelete = new EventEmitter<number>();

	constructor(
		protected router: Router,
		private dialog: MatDialog,
		private quizService: QuizService
	) {}

	open(): void {
		this.router.navigate(['library/edit-quiz', this.quiz.id]);
	}
	
	edit(): void {
		const dialogRef = this.dialog.open(
			AddOrEditFolderDialogComponent<Quiz>
		);
		dialogRef.componentInstance.data = this.quiz;
    dialogRef.componentInstance.title = 'Edit Quiz';
    dialogRef.componentInstance.isEdit = true;
		dialogRef.afterClosed().subscribe((quiz) => {
			this.quizService
				.editQuiz(quiz)
				.subscribe((quiz) => {
					this.onEditQuiz.emit(quiz);
				});
		});
	}
	delete(): void {
		this.onDelete.emit(this.quiz.id);
	}
}
