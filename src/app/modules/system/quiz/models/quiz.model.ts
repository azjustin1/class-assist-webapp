import { Question } from "./question.model";

export class Quiz {
  id?: number;
  name: string;
  questions: Question[]

  constructor() {
    this.name = 'Untitled Quiz';
    this.questions = [];
  }
}