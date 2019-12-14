import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {AddEmail} from '../../store/step.action';
import {Step} from '../../step.model';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {
  @Input() currentValue;
  @Input() currentStep: Step;
  @Input() placeholder: String;
  public newValue = 2;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  getInputValue(event) {
    this.currentStep.value = event.target.value;
    debugger
    this.store.dispatch(new AddEmail(this.currentStep));
  }

  tempSave() {

  }

}
