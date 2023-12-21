import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../Services/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() Radios:any
  constructor() { }

  ngOnInit(): void {
  }


  toggleCheckboxValue(key: string,  event:any) {
    const ischecked = (<HTMLInputElement>event.target).checked

     this.form.controls[key].setValue(ischecked)

  }

  onChange(key: string,  event:any){
    console.log(event.target.value)
     this.form.controls[key].setValue(event.target.value)
  }

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isInvalid() {
    return this.form.controls[this.question.key].invalid && this.form.controls[this.question.key].touched;
   }
}
