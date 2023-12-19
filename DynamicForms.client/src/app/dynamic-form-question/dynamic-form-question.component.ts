import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../Services/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isInvalid() {
    return this.form.controls[this.question.key].invalid && this.form.controls[this.question.key].touched;
   }
}
