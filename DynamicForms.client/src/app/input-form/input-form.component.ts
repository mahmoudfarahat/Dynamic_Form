import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

@Output()  newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

 inputForm = new FormGroup({
  key:new FormControl(''),
  type:new FormControl(''),
  label:new FormControl(''),
  labelArray: new FormArray([]),
  order:new FormControl(''),
  number:new FormControl(''),
  required:new FormControl(''),
 })
get getLabelArray()
{
  return this.inputForm.get('labelArray') as FormArray
}

 addLabel(event:any){
  const currentValue = event.target.value;
  const previousValue = this.getLabelArray.length;

  if (currentValue > previousValue) {
    // Add form controls
    for (let i = previousValue; i < currentValue; i++) {

      this.getLabelArray.push(
        new FormGroup({
          text: new FormControl('')
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
 onSubmit(){
  let label = this.inputForm.get('label')?.value;
  let key = (label?.charAt(0).toLowerCase() + label!.slice(1)).split(" ").join("")
 this.inputForm.get('key')?.setValue(key)
this.newItemEvent.emit(this.inputForm.value)
console.log(this.inputForm.value)



 }
  // const input = new TextboxQuestion({
  //   key: 'SecondName',
  //   label: 'First name',
  //   value: 'Bombasto',
  //   required: true,
  //   order: 1
  // })
}
