import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../Services/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../Services/question-control.service';

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

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
