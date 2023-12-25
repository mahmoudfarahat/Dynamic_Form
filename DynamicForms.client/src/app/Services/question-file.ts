import { QuestionBase } from './question-base';

export class FileQuestion extends QuestionBase<string> {
  override  controlType = 'file';
}
