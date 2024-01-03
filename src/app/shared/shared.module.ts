import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from './i18n/I18nModule.module';
import { MaterialModule } from './material/material.module';

@NgModule({
	imports: [
		I18nModule,
		MaterialModule,
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
	],
	declarations: [],
	providers: [],
	exports: [
		I18nModule,
		MaterialModule,
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
	],
})
export class SharedModule {}
