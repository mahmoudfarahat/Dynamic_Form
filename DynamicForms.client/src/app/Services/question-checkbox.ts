import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<boolean> {
  override  controlType = 'checkbox';
}
