import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../Services/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../Services/question-control.service';
import { TextboxQuestion } from '../Services/question-textbox';
import { DropdownQuestion } from '../Services/question-dropdown';
import { DateQuestion } from '../Services/question-date';
import { numberQuestion } from '../Services/question-number';
import { CheckboxQuestion } from '../Services/question-checkbox';
import { RadioQuestion } from '../Services/question-radio';


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

  constructor(private qcs: QuestionControlService  ) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(2);
  }

  onSubmit() {
    console.log(this.form.value , 55555555555);
    // this.payLoad = JSON.stringify(this.form.getRawValue());
  }
  addInput(event: any) {
    console.log(event);
    let input;
    if (event.type == 'textbox') {
      input = new TextboxQuestion({
        key: event.key,
        label: event.label,
        value: '',
        required: event.required,
        order: 1,
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
        order: 3,
      });
    } else if (event.type == 'date') {
      input = new DateQuestion({
        key: event.key,
        label: event.label,
        type: 'date',
        value: '',
        required: event.required,
        order: 1,
      });
    }else if (event.type == 'number') {
      input = new numberQuestion({
        key: event.key,
        label: event.label,
        type: 'number',
        value: '',
        required: event.required,
        order: 1,
      });
    }else if (event.type == 'checkbox') {
      input = new CheckboxQuestion({
        key: event.key,
        label: event.label,
        type: 'checkbox',
        value: false,
        required: event.required,
        order: 1,
      });

      console.log(input)
    }else if (event.type == 'radio') {
      input = new RadioQuestion({
        key: event.key,
        label: event.label,
        type: 'radio',
        value: '',
        required: event.required,
        order: 1,
      });
    }

    this.questions.push(input);
    this.form = this.qcs.toFormGroup(this.questions);
  }
  //   addInput(){
  //    const input = new TextboxQuestion({
  //       key: 'SecondName',
  //       label: 'First name',
  //       value: 'Bombasto',
  //       required: true,
  //       order: 1
  //     })

  // console.log(this.questions.push(input))
  // this.form = this.qcs.toFormGroup(this.questions);
  // console.log(this.questions)

  //   }



}
