import { QuestionBase } from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  override  controlType = 'radio';
  // override options: {key: string, value: string}[] = [];

  // constructor(options:any = {}) {
  //   super(options);
  //   this.options = options['options'] || [];
  // }

}
