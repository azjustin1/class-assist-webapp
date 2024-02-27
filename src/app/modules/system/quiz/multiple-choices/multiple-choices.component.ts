import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxEditorModule, Validators } from 'ngx-editor';
import { AbstractQuestionComponent } from 'src/app/shared/components/abstract-question/abstract-question.component';
import { ChoiceItemComponent } from '../choice-item/choice-item.component';

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
		MatFormFieldModule,
		ChoiceItemComponent,
		MatCheckboxModule,
		CKEditorModule,
	],
	selector: 'app-multiple-choices',
	templateUrl: 'multiple-choices.component.html',
	styleUrl: 'multiple-choices.component.css',
})
export class MultipleChoicesComponent extends AbstractQuestionComponent {
	constructor(protected override formBuilder: FormBuilder) {
		super(formBuilder);
	}
	override ngOnInit(): void {
		this.questionForm = this.formBuilder.group({
			content: [this.question.content, Validators.required],
			correctAnswer: [this.question.correctAnswer, Validators.required],
			choices: [this.question.choices],
		});
	}
}
