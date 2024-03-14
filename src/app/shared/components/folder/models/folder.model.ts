import { Quiz } from 'src/app/modules/system/quiz/models/quiz.model';

export class Folder {
	id?: number;
	name?: string;
	folderId?: number;
	parent?: Folder;
	parentId?: number;
	subfolders?: Folder[];
	quizzes?: Quiz[];
	expandable?: boolean;
	level?: number;
	isExpand?: boolean = false;
	isSelected?: boolean = false;
	isEditting?: boolean = false;

	constructor(name: string) {
		this.name = name;
	}
}
