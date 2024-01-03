import {
	Component,
	OnDestroy,
	ViewChild,
	ViewContainerRef,
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
import { MultipleChoicesComponent } from '../multiple-choices/multiple-choices.component';
import { ShortAnswerComponent } from '../short-answer/short-answer.component';
import { TrueFalseComponent } from '../true-false/true-false.component';

@Component({
	standalone: true,
	imports: [
		FormsModule,
		MatButtonModule,
		MatChipsModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MultipleChoicesComponent,
		TranslateModule,
	],
	selector: 'app-question',
	templateUrl: 'question.component.html',
})
export class QuestionComponent implements OnDestroy {
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
