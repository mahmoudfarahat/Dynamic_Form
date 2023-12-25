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
import { FileQuestion } from '../Services/question-file';
import { InputFactory } from '../Services/input-factory';

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

    const inputFactory = new InputFactory();
    const input = inputFactory.createInput(event);


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
