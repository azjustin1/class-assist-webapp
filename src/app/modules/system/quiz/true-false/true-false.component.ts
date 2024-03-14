import { CommonModule } from '@angular/common';
import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { Question } from '../models/question.model';
import { AbstractQuestionComponent } from 'src/app/shared/components/abstract-question/abstract-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorConfig } from '@ckeditor/ckeditor5-core';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgxEditorModule,
		MatRadioModule,
		MatIconModule,
		MatButtonModule,
		CKEditorModule,
	],
	selector: 'app-true-false',
	templateUrl: 'true-false.component.html',
	styleUrl: 'true-false.component.css',
})
export class TrueFalseComponent extends AbstractQuestionComponent {
	override ngOnInit(): void {
		this.questionForm = this.formBuilder.group({
			content: [this.question.content, Validators.required],
			correctAnswer: [this.question.correctAnswer, Validators.required],
			choices: [this.question.choices],
		});
	}
}
