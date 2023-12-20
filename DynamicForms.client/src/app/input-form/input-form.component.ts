import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  required:new FormControl(''),
 })


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
