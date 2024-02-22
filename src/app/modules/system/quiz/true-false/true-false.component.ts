import { CommonModule } from '@angular/common';
import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output
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
	],
	selector: 'app-true-false',
	templateUrl: 'true-false.component.html',
	styleUrl: 'true-false.component.css',
})
export class TrueFalseComponent implements OnInit, OnDestroy {
	@Input() question!: Question;
	@Output() questionChange = new EventEmitter<Question>();
	editor: Editor;
	isShowEditor: boolean = false;
	questionForm!: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.editor = new Editor();
	}

	ngOnInit(): void {
		this.questionForm = this.formBuilder.group({
			content: [this.question.content, Validators.required],
			correctAnswer: [this.question.correctAnswer, Validators.required],
		});

	}
	ngOnDestroy(): void {
		this.editor.destroy();
	}

	onToggleEditor() {
		this.isShowEditor = !this.isShowEditor;
	}
}
