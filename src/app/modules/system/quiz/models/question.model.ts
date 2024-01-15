import { QuestionType } from '../enums/question-type.enum';

export class Question {
	orderId?: number;
	content: string = '';
	correctAnswer: string = '';
	choices?: string[];
	type: QuestionType;
	isEditting?: boolean = false;

	constructor(orderId: number, type: QuestionType) {
		this.orderId = orderId;
		this.type = type;
		this.isEditting = true;
	}
}
