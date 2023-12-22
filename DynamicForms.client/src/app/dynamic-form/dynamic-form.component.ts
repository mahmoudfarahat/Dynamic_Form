import { QuestionService } from './../Services/question.service';
import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../Services/question-base';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionControlService } from '../Services/question-control.service';
import { TextboxQuestion } from '../Services/question-textbox';
import { DropdownQuestion } from '../Services/question-dropdown';
import { DateQuestion } from '../Services/question-date';
import { numberQuestion } from '../Services/question-number';
import { CheckboxQuestion } from '../Services/question-checkbox';
import { RadioQuestion } from '../Services/question-radio';
import { colorQuestion } from '../Services/question-color';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  // @Input() questions: QuestionBase<string>[] = [];
  @Input() questions: any;
   form!: FormGroup;
  // payLoad = '';

  constructor(private qcs: QuestionControlService , private  questionService :QuestionService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(2);
  }

  onSubmit() {
    console.log(this.form.value, 55555555555);
    // this.payLoad = JSON.stringify(this.form.getRawValue());
  }
  addInput(event: any) {

    let input;
    if (event.type == 'textbox') {
      input = new TextboxQuestion({
        key: event.key,
        label: event.label,
        value: '',
        required: event.required,
        order: event.order,
      });
    } else if (event.type == 'dropdown') {
      input = new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: event.order,
      });
    } else if (event.type == 'date') {
      input = new DateQuestion({
        key: event.key,
        label: event.label,
        type: 'date',
        value: '',
        required: event.required,
        order:event.order,
      });
    } else if (event.type == 'number') {
      input = new numberQuestion({
        key: event.key,
        label: event.label,
        type: 'number',
        value: '',
        required: event.required,
        order: event.order,
      });
    } else if (event.type == 'checkbox') {
      input = new CheckboxQuestion({
        key: event.key,
        label: event.label,
        type: 'checkbox',
        value: false,
        required: event.required,
        order: event.order,
      });

      console.log(input);
    } else if (event.type == 'radio') {
      input = new RadioQuestion({
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
    } else if (event.type == 'color') {
      input = new colorQuestion({
        key: event.key,
        label: event.label,
        type: 'color',
        order: event.order,
      });
    }

    if(input && !input.order)
    {
      if(this.questions.length > 0){
        console.log(this.questions)
        let highestOrder = this.questions.reduce((a:any, b:any) => {
           return b.order > a.order ? b : a;
         }, this.questions[0]);

         input.order = +highestOrder.order +1
      }

    }

    // this.questions.push(input);
    this.questionService.addQuestion(input);
    console.log(this.questionService.questions)
    
    this.questions.sort((a: any, b: any) => a.order - b.order);
    this.form = this.qcs.toFormGroup(this.questions);
  }
}
