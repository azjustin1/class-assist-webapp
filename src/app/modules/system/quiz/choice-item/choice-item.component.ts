import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice } from '../models/choice.model';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		NgxEditorModule,
		MatIconModule,
		MatButtonModule,
		ReactiveFormsModule,
		FormsModule,
		CKEditorModule,
	],
	selector: 'app-choice-item',
	templateUrl: 'choice-item.component.html',
	styleUrl: 'choice-item.component.css',
})
export class ChoiceItemComponent {
	@Input() choice!: Choice;
	@Output() onDelete = new EventEmitter<number>();

	editor = ClassicEditor;
	isShowEditor: boolean = false;

	constructor() {}

	onOpenEditor(option: boolean) {
		this.isShowEditor = option;
	}

	onDeleteChoiceClick() {
		this.onDelete.emit(this.choice.index);
	}
}
