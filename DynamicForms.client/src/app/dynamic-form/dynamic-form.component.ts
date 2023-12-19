import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../Services/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../Services/question-control.service';
import { TextboxQuestion } from '../Services/question-textbox';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  // @Input() questions: QuestionBase<string>[] = [];
  @Input() questions: any;

  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    console.log(2)

  }

  onSubmit() {
    console.log(this.form.value)
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  addInput(){
   const input = new TextboxQuestion({
      key: 'SecondName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    })

console.log(this.questions.push(input))
this.form = this.qcs.toFormGroup(this.questions);
console.log(this.questions)

  }
}
