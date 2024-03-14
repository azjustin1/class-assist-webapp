import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { NgxEditorModule, Validators } from 'ngx-editor';
import { AbstractQuestionComponent } from 'src/app/shared/components/abstract-question/abstract-question.component';
import { ChoiceItemComponent } from '../choice-item/choice-item.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgxEditorModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCheckboxModule,
		ChoiceItemComponent,
		CKEditorModule
	],
	selector: 'app-short-answer',
	templateUrl: 'short-answer.component.html',
	styleUrl: 'short-answer.component.css',
})
export class ShortAnswerComponent extends AbstractQuestionComponent {
	
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
