import { QuestionBase } from './question-base';
import { CheckboxQuestion } from './question-checkbox';
import { colorQuestion } from './question-color';
import { DateQuestion } from './question-date';
import { DropdownQuestion } from './question-dropdown';
import { FileQuestion } from './question-file';
import { numberQuestion } from './question-number';
import { RadioQuestion } from './question-radio';
import { TextboxQuestion } from './question-textbox';

export class InputFactory {
  createInput(event: any): QuestionBase<any> {
    switch (event.type) {
      case 'textbox':
        return new TextboxQuestion({
          key: event.key,
          label: event.label,
          value: '',
          required: event.required,
          order: event.order,
        });

      case 'dropdown':
        return new DropdownQuestion({
          key: 'brave',
          label: 'Bravery Rating',
          options: (function () {
            const result = [];
            for (let radio of event.optionArray) {
              result.push({
                key: radio.optionText,
                value: radio.optionText,
              });
            }
            console.log(result);
            return result;
          })(),
          order: event.order,
        });
      case 'date':
        return new DateQuestion({
          key: event.key,
          label: event.label,
          type: 'date',
          value: '',
          required: event.required,
          order: event.order,
        });
      case 'number':
        return new numberQuestion({
          key: event.key,
          label: event.label,
          type: 'number',
          value: '',
          required: event.required,
          order: event.order,
        });
      case 'checkbox':
        return new CheckboxQuestion({
          key: event.key,
          label: event.label,
          type: 'checkbox',
          value: false,
          required: event.required,
          order: event.order,
        });
      case 'radio':
        return new RadioQuestion({
          key: event.key,
          label: event.label,
          type: 'radio',
          options: (function () {
            const result = [];
            for (let radio of event.labelArray) {
              result.push({
                key: radio.text,
                value: radio.text,
              });
            }
            console.log(result);
            return result;
          })(),
          required: true,
          order: event.order,
        });

      case 'color':
        return new colorQuestion({
          key: event.key,
          label: event.label,
          type: 'color',
          order: event.order,
        });

      case 'file':
        return new FileQuestion({
          key: event.key,
          label: event.label,
          type: 'file',
          order: event.order,
        });
      default:
        throw new Error(`Unsupported question type: ${event.type}`);
    }
  }
}
