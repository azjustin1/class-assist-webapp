import { Component, Input } from '@angular/core';
import { Folder } from './models/folder.model';
import { NestedTreeControl } from '@angular/cdk/tree';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
	selector: 'app-folder',
	imports: [SharedModule],
	standalone: true,
	templateUrl: './folder.component.html',
	styleUrl: './folder.component.css',
})
export class FolderComponent {
	@Input() dataSource: Folder[] = [
		{
			id: 1,
			name: 'Wednesday',
			subfolders: [
				{
					id: 2,
					name: 'Child Folder 2',
				},
			],
		},
	];
	treeControl = new NestedTreeControl<Folder>((node) => node.subfolders);
}
