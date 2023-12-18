import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './Services/question-base';
import { QuestionService } from './Services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicForms.client';

  questions$: Observable<QuestionBase<any>[]> ;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
