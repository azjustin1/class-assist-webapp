import { isUndefined } from 'lodash';
import { QuestionType } from '../enums/question-type.enum';

export class Question {
	id?: number;
	orderId?: number;
	content: string = '';
	correctAnswer: string = '';
	choices?: string[];
	type: number;
	isEditting?: boolean = false;

	constructor(orderId: number, type: number) {
		this.orderId = isUndefined(orderId) ? 0 : orderId;
		this.type = type;
		this.isEditting = true;
	}
}
