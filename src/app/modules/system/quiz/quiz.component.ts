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
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { remove, toArray } from 'lodash';
import { Editor } from 'ngx-editor';
import { QuestionType } from './enums/question-type.enum';
import { Choice } from './models/choice.model';
import { Question } from './models/question.model';
import { Quiz } from './models/quiz.model';
import { QuestionComponent } from './question/question.component';
import { QuizService } from './quiz.service';

const DEFAULT_MULTIPLE_CHOICES_OPTIONS = 4;

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
	quiz: Quiz = new Quiz();
	mapQuestionByOrderId: Record<number, Question> = {};
	questionTypeComponent!: ViewContainerRef;
	questionType = QuestionType;
	selectedQuestionType!: QuestionType | null;
	editor: Editor;
	defaultName: string = 'Untitle quiz';
	isAddNewQuestion: boolean = false;

	constructor(
		private quizService: QuizService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.editor = new Editor();
	}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			console.log(params['quizId']);
		});
	}

	ngOnDestroy(): void {
		this.editor.destroy();
	}

	loadQuestionType(event: MatChipListboxChange) {
		// if (this.isAddNewQuestion) {
		// 	this.quiz.questions[
		// 		this.quiz.questions.length ? this.quiz.questions.length : 0 - 1
		// 	].type = event.value;
		// 	return;
		// }
		this.isAddNewQuestion = true;
		this.selectedQuestionType = event.value;
		const newQuestion = new Question(
			this.quiz.questions.length ? this.quiz.questions.length : 0 + 1,
			event.value,
			this.generateChoice(this.selectedQuestionType!)
		);
		this.quiz.questions.push(newQuestion);
		this.mapQuestionByOrderId[newQuestion.index!] = newQuestion;
	}

	generateChoice(questionType: QuestionType): Choice[] {
		let result: Choice[] = [];
		switch (questionType) {
			case QuestionType.MULTIPLE_CHOICES:
			case QuestionType.SHORT_ANSWER:
				for (let i = 1; i <= DEFAULT_MULTIPLE_CHOICES_OPTIONS; i++) {
					const choice: Choice = {
						index: i,
						content: '',
						isCorrect: false,
					};
					result.push(choice);
				}
				break;
			case QuestionType.TRUE_FALSE:
				const trueChoice: Choice = {
					index: 1,
					content: 'True',
					isCorrect: false,
				};
				const falseChoice: Choice = {
					index: 2,
					content: 'False',
					isCorrect: false,
				};
				result.push(trueChoice, falseChoice);
				break;
			default:
				return [];
		}
		return result;
	}

	onSaveQuiz() {
		this.quiz = {
			...this.quiz,
			questions: toArray(this.mapQuestionByOrderId),
		};
		let result;
		if (this.quiz.id) {
			result = this.quizService.editQuiz(this.quiz);
		} else {
			result = this.quizService.createNewQuiz(this.quiz);
		}

		result.subscribe((res) => {
			this.router.navigate(['library']);
		});
	}

	onAddQuestion(question: Question) {
		this.mapQuestionByOrderId[question.index!] = {
			...this.mapQuestionByOrderId[question.index!],
			...question,
		};
		this.isAddNewQuestion = true;
		this.selectedQuestionType = null;
	}

	onDeleteQuestion(question: Question) {
		this.mapQuestionByOrderId = remove(
			toArray(this.mapQuestionByOrderId),
			(item) => item.index !== question.index
		);
	}
}
