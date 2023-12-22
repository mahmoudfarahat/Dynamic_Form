import { QuestionService } from './../Services/question.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
 import { LabelValidator } from '../Validators/uniquelabel';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  needNumber = false;
  needOptions = false
  constructor(private questionService: QuestionService ) {}

  ngOnInit(): void {}

  inputForm = new FormGroup({
    key: new FormControl(''),
    type: new FormControl('', [Validators.required]),
    label: new FormControl('', [Validators.required],[LabelValidator(this.questionService.questions)]),
    labelArray: new FormArray([]),
    optionArray:new FormArray([]),
    order: new FormControl(''),
    option: new FormControl(''),
    number: new FormControl(''),
    required: new FormControl(''),
  });
  get getOptionArray(){
    return this.inputForm.get('optionArray') as FormArray;
  }
  get getLabelArray() {
    return this.inputForm.get('labelArray') as FormArray;
  }

  addLabel(event: any) {
    const currentValue = event.target.value;
    const previousValue = this.getLabelArray.length;

    if (currentValue > previousValue) {
      // Add form controls
      for (let i = previousValue; i < currentValue; i++) {
        this.getLabelArray.push(
          new FormGroup({
            text: new FormControl(''),
          })
        );
      }
    } else if (currentValue < previousValue) {
      // Remove form controls
      for (let i = previousValue; i > currentValue; i--) {
        this.getLabelArray.removeAt(i - 1);
      }
    }

    console.log(this.getLabelArray.value);
  }
  onSubmit() {
    if(this.inputForm.valid){
      let label = this.inputForm.get('label')?.value;
      let key = (label?.charAt(0).toLowerCase() + label!.slice(1))
        .split(' ')
        .join('');
      this.inputForm.get('key')?.setValue(key);
      this.newItemEvent.emit(this.inputForm.value);
      console.log(this.inputForm.value);
    }

  }

  onSelectChange(event: any) {
    if (event.target.value == 'radio') {
      this.needNumber = true;
    }else if (event.target.value == 'dropdown')
    {

      this.needOptions = true;
    }
  }

}
