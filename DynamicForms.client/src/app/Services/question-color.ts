import { QuestionBase } from './question-base';

export class colorQuestion extends QuestionBase<string> {
  override  controlType = 'color';
}
