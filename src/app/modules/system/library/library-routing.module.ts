import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { QuizComponent } from '../quiz/quiz.component';

const routes: Routes = [
	{
		path: '',
		component: LibraryComponent,
		children: [
			{
				path: 'edit-quiz',
				loadChildren: () =>
					import('../quiz/quiz-routing.module').then(
						(m) => m.QuizRoutingModule
					),
			},
		],
	},
	{
		path: 'edit-quiz',
		component: QuizComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LibraryRoutingModule {}
