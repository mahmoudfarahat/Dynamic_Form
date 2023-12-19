import { QuestionBase } from './question-base';

export class numberQuestion extends QuestionBase<string> {
  override  controlType = 'number';
}
