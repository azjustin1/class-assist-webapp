import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		NgxEditorModule,
		MatRadioModule,
		MatIconModule,
		MatButtonModule,
	],
	selector: 'app-true-false',
	templateUrl: 'true-false.component.html',
	styleUrl: 'true-false.component.css',
})
export class TrueFalseComponent implements OnDestroy {
	editor: Editor;
	content: string = '';
	isShowEditor: boolean = false;

	constructor() {
		this.editor = new Editor();
	}
	ngOnDestroy(): void {
		this.editor.destroy();
	}

	onToggleEditor() {
		this.isShowEditor = !this.isShowEditor;
	}
}
