import { isUndefined } from 'lodash';
import { Choice } from './choice.model';

export class Question {
	id?: number;
	index?: number;
	content: string = '';
	correctAnswer: string = '';
	choices: Choice[] = [];
	type: number;
	isEditting?: boolean = false;

	constructor(orderId: number, type: number, choices: Choice[]) {
		this.index = isUndefined(orderId) ? 0 : orderId;
		this.choices = choices;
		this.type = type;
		this.isEditting = true;
	}
}
