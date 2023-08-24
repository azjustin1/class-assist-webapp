import { NgModule } from '@angular/core'
import { I18nModule } from './I18n/I18nModule.module'
import { MaterialModule } from './material/material.module'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
	imports: [
		I18nModule,
		MaterialModule,
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
	],
	declarations: [],
	exports: [
		I18nModule,
		MaterialModule,
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
	],
})
export class SharedModule {}
