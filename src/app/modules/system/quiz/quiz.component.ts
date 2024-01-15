import {
	Component,
	Input,
	OnDestroy,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { Editor } from 'ngx-editor';
import { QuestionType } from './enums/question-type.enum';
import { Question } from './models/question.model';
import { MultipleChoicesComponent } from './multiple-choices/multiple-choices.component';
import { QuestionComponent } from './question/question.component';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { TrueFalseComponent } from './true-false/true-false.component';
import { CommonModule } from '@angular/common';
import { remove, toArray } from 'lodash';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatCardModule,
		MatChipsModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		TranslateModule,
		QuestionComponent,
	],
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnDestroy {
	@Input() questions: Question[] = [];
	mapQuestionByOrderId: Record<number, Question> = {};
	questionTypeComponent!: ViewContainerRef;
	questionType = QuestionType;
	selectedQuestionType!: QuestionType | null;
	editor: Editor;
	defaultName: string = 'Untitle quiz';
	isAddNewQuestion: boolean = false;

	constructor(private viewContainerRef: ViewContainerRef) {
		this.editor = new Editor();
	}

	ngOnDestroy(): void {
		this.editor.destroy();
	}

	loadQuestionType(event: MatChipListboxChange) {
		if (this.isAddNewQuestion) {
			this.questions[this.questions.length - 1].type = event.value;
			return;
		}
		this.isAddNewQuestion = true;
		this.selectedQuestionType = event.value;
		const newQuestion = new Question(
			this.questions.length + 1,
			event.value
		);
		this.questions.push(newQuestion);
		this.mapQuestionByOrderId[newQuestion.orderId!] = newQuestion;
		console.log(this.mapQuestionByOrderId);
	}

	onAddQuestion(question: Question) {
		this.mapQuestionByOrderId[question.orderId!] = {
			...this.mapQuestionByOrderId[question.orderId!],
			...question,
		};
		this.isAddNewQuestion = false;
		this.selectedQuestionType = null;
	}

	onDeleteQuestion(question: Question) {
		this.mapQuestionByOrderId = remove(
			toArray(this.mapQuestionByOrderId),
			(item) => item.orderId !== question.orderId
		);
	}
}
