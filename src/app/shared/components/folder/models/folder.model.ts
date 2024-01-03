export class Folder {
	id: number;
	name: string;
	parent?: Folder;
	subfolders?: Folder[];
	expandable?: boolean;
	level?: number;
	isExpand: boolean = false;
  isSelected: boolean = false;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}
}
