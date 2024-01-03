import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FolderComponent } from 'src/app/shared/components/folder/folder.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LibraryComponent } from './library.component';
import { I18nModule } from 'src/app/shared/i18n/I18nModule.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
	imports: [
		CommonModule,
		AppRoutingModule,
		MaterialModule,
		FolderComponent,
		I18nModule,
	],
	exports: [],
	declarations: [LibraryComponent],
	providers: [],
})
export class LibraryModule {}
