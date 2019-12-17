import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {UpdateStep} from '../../store/step.action';
import {Step} from '../../step.model';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  public currentValue: string;
  @Input() currentStep: Step;
  @Input() placeholder: String;
  public title: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    debugger
     // this.currentStep.value = this.store.steps;
  }

  getInputValue(event) {
    this.currentStep.value = event.target.value;
   // this.currentValue = event.target.value;
    debugger
    this.store.dispatch(new UpdateStep(this.currentStep));
  }

  tempSave() {

  }

}
