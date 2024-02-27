import { CommonModule } from '@angular/common';
import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { Editor } from 'ngx-editor';
import { QuestionType } from '../enums/question-type.enum';
import { Question } from '../models/question.model';
import { MultipleChoicesComponent } from '../multiple-choices/multiple-choices.component';
import { TrueFalseComponent } from '../true-false/true-false.component';
import { ShortAnswerComponent } from '../short-answer/short-answer.component';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatChipsModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MultipleChoicesComponent,
		TranslateModule,
		TrueFalseComponent,
		ShortAnswerComponent,
		MultipleChoicesComponent,
	],
	selector: 'app-question',
	templateUrl: 'question.component.html',
	styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit, OnDestroy {
	@Input() question!: Question;
	@Input() isEdit: boolean = false;
	@Output() onAddQuestion = new EventEmitter<Question>();
	@Output() onDeleteQuestion = new EventEmitter<Question>();
	questionType = QuestionType;
	questionTypeEnum = QuestionType;
	editor: Editor;

	constructor() {
		this.editor = new Editor();
	}
	ngOnInit(): void {
		switch (this.question.type) {
			case QuestionType.TRUE_FALSE:
				break;

			case QuestionType.MULTIPLE_CHOICES:
				break;

			default:
				break;
		}
	}

	ngOnDestroy(): void {
		this.editor.destroy();
	}

	onAddClick() {
		this.question = { ...this.question, isEditting: true };
		this.onAddQuestion.emit(this.question);
	}

	onDeleteClick() {
		this.onDeleteQuestion.emit(this.question);
	}
}
