import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { QuizComponent } from '../quiz/quiz.component';
import { FolderDetailComponent } from 'src/app/shared/components/folder/folder-detail/folder-detail.component';

const routes: Routes = [
	{
		path: '',
		component: LibraryComponent,
		children: [],
	},
	{
		path: 'edit-quiz/:id',
		component: QuizComponent,
	},
	{
		path: 'add-quiz',
		component: QuizComponent,
	},
	{
		path: 'folder/:id',
		component: FolderDetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LibraryRoutingModule {}
