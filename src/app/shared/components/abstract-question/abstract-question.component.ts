import {
	Component,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorConfig } from '@ckeditor/ckeditor5-core';
import { each, filter, find } from 'lodash';
import { Editor } from 'ngx-editor';
import { Choice } from 'src/app/modules/system/quiz/models/choice.model';
import { Question } from 'src/app/modules/system/quiz/models/question.model';

@Component({
	template: '',
})
export abstract class AbstractQuestionComponent implements OnInit, OnDestroy {
	@Input() question!: Question;
	@Output() questionChange = new EventEmitter<Question>();
	public Editor = ClassicEditor;
	editor: Editor;
	config: EditorConfig = {
		toolbar: [
			'undo',
			'redo',
			'bold',
			'italic',
			'numberedList',
			'bulletedList',
		],
	};
	isShowEditor: boolean = false;
	questionForm!: FormGroup;

	constructor(protected formBuilder: FormBuilder) {
		this.editor = new Editor();
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this.editor.destroy();
	}

	onToggleEditor() {
		this.isShowEditor = !this.isShowEditor;
	}

	onAddChoice() {
		const newChoice: Choice = {
			index: this.question.choices.length + 1,
			content: '',
			isCorrect: false,
		};
		this.question.choices.push(newChoice);
	}

	onMarkCorrectChoice(choice: Choice) {
		let foundChoice = find(
			this.question.choices,
			(item: Choice) => item.index === choice.index
		);
		const isCorrect = choice.isCorrect;
		if (foundChoice) {
			foundChoice.isCorrect = !isCorrect;
		}
	}

	onDeleteChoice(choiceIndex: number) {
		this.question.choices = filter(
			this.question.choices,
			(choice: Choice) => choice.index !== choiceIndex
		);
		this.updateChoideIndex();
	}

	updateChoideIndex() {
		let i = 1;
		each(this.question.choices, (choice: Choice) => {
			choice.index = i;
			i++;
		});
	}
}
