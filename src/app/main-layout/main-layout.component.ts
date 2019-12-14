import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {Step} from '../step.model';
import {AppState} from '../store/app.state';
import {Observable} from 'rxjs';
import {AddEmail, GetCurStep} from '../store/step.action';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  public steps: Step[] = [];
  public stepState: Observable<Step>;
  public buttons = [];

  id: string;
  isDisabled = true;
  currentValue = '';
  currentStep: Step;
  public currentStepId: number;
  public placeholder: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.loadTemplate(1);
    // this.stepState = this.store.select('stepPage');
    // this.store.select('stepPage').subscribe((data) => {
    //   //this.steps = data.steps;
    //   this.buttons = data.buttons;
    //   this.loadTemplate(data.currentStepId);
    // });
  }

  loadTemplate(id) {
    let templObj = null;
    this.store.select('stepPage').subscribe(data => {
      templObj = this.findStepByButtonId(id, data.steps);
      this.currentStepId = data.currentStepId;
      //debugger
    });
    this.currentValue = templObj.value;
    this.currentStep = templObj;
    this.placeholder = templObj.placeholder
    this.store.dispatch(new GetCurStep(id));
  }

  findStepByButtonId(id, steps: Step[]) {
    return steps.find(step => {
      return step.buttonName === id;
    });
  }

}
