import {
	Component,
	ComponentFactoryResolver,
	ContentChild,
	OnDestroy,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MultipleChoicesComponent } from './multiple-choices/multiple-choices.component';
import { QUESTION_TYPE } from './question-type.token';
import { QuestionType } from './enums/question-type.enum';
import { TrueFalseComponent } from './true-false/true-false.component';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { Editor } from 'ngx-editor';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from './question/question.component';
import { MatCardModule } from '@angular/material/card';

@Component({
	standalone: true,
	imports: [
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
	@ViewChild('questionTypeComponent', { read: ViewContainerRef })
	questionTypeComponent!: ViewContainerRef;
	editor: Editor;
	defaultName: string = 'Untitle quiz';

	constructor(private viewContainerRef: ViewContainerRef) {
		this.editor = new Editor();
	}

	ngOnDestroy(): void {
		this.editor.destroy();
	}

	loadQuestionType(option: QuestionType) {
		if (this.viewContainerRef) {
			this.viewContainerRef.clear();
		}
		let componentRef;

		switch (option) {
			case QuestionType.TRUE_FALSE:
				componentRef =
					this.viewContainerRef.createComponent(TrueFalseComponent);
				break;
			case QuestionType.MULTIPLE_CHOICE:
				componentRef = this.viewContainerRef.createComponent(
					MultipleChoicesComponent
				);
				break;
			case QuestionType.SHORT_ANSWER:
				componentRef =
					this.viewContainerRef.createComponent(ShortAnswerComponent);
				break;
			default:
				break;
		}

		if (componentRef) {
		}
	}
}
