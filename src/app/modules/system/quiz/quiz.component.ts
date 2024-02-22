import { CommonModule } from '@angular/common';
import {
	Component,
	Input,
	OnDestroy,
	OnInit,
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
import { each, remove, toArray } from 'lodash';
import { Editor } from 'ngx-editor';
import { QuestionType } from './enums/question-type.enum';
import { Question } from './models/question.model';
import { QuestionComponent } from './question/question.component';
import { QuizService } from './quiz.service';
import { Quiz } from './models/quiz.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
	providers: [QuizService],
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit, OnDestroy {
	@Input()
	quizId: number = 9;
	quiz: Quiz = new Quiz();
	mapQuestionByOrderId: Record<number, Question> = {};
	questionTypeComponent!: ViewContainerRef;
	questionType = QuestionType;
	selectedQuestionType!: QuestionType | null;
	editor: Editor;
	defaultName: string = 'Untitle quiz';
	isAddNewQuestion: boolean = false;

	constructor(private quizService: QuizService, private router: Router) {
		this.editor = new Editor();
	}

	ngOnInit(): void {
		this.quizService.getById(this.quizId).subscribe((quiz) => {
			this.quiz = quiz;
			each(quiz.questions, (question: Question) => {
				this.mapQuestionByOrderId[question.id!] = question;
			});
		});
	}

	ngOnDestroy(): void {
		this.editor.destroy();
	}

	loadQuestionType(event: MatChipListboxChange) {
		if (this.isAddNewQuestion) {
			this.quiz.questions[
				this.quiz.questions.length ? this.quiz.questions.length : 0 - 1
			].type = event.value;
			return;
		}
		this.isAddNewQuestion = true;
		this.selectedQuestionType = event.value;
		console.log(this.quiz.questions);
		const newQuestion = new Question(
			this.quiz.questions.length ? this.quiz.questions.length : 0 + 1,
			event.value
		);
		this.quiz.questions.push(newQuestion);
		this.mapQuestionByOrderId[newQuestion.orderId!] = newQuestion;
	}

	onSaveQuiz() {
		this.quiz = {
			...this.quiz,
			questions: toArray(this.mapQuestionByOrderId),
		};
		let result;
		if (this.quiz.id) {
			result = this.quizService.editQuiz(this.quiz)
		} else {
			result = this.quizService.createNewQuiz(this.quiz)
		}

		result.subscribe(res => {
			this.router.navigate(['library'])
		})
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
