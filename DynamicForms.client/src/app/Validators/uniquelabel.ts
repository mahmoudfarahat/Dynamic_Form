import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { delay, map, Observable, of, pipe, retry } from "rxjs";


export function LabelValidator(questions:any): AsyncValidatorFn
{

return(control:AbstractControl):Observable<ValidationErrors|null>=>{


  let isExits = questions.some((a:any) => a.label == control.value )
  return (isExits == true )?    of({LabelExists : true}) : of(null)


}


}
