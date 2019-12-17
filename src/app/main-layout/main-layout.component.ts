import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import {Store} from '@ngrx/store';

import {Step} from '../step.model';
import {AppState} from '../store/app.state';
import {UpdateStep, GetCurStep, ResetData, UnlockButton, UnlockSubmitBtn} from '../store/step.action';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnChanges {
  public buttons = [];
  public steps: Step[] = [];

  public isDisabled: boolean;
  public currentValue = '';
  currentStep: Step;
  public currentStepId: number;
  public placeholder: string;
  public showResultData: boolean;

  public test = [];

  stepForm: FormGroup;

  constructor(private store: Store<AppState>,
              private cdRef: ChangeDetectorRef,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.store.select('stepPage').subscribe(data => {
      this.buttons = data.buttons;
      this.steps = data.steps;
      this.currentStepId = data.currentStepId;
      this.isDisabled = data.submitButtonFlag;
      this.showResultData = data.showResultData;
    });
    this.loadTemplate(1);

    this.stepForm = this.formBuilder.group({
      universal: [null, Validators.required]
    });
    this.formControlValueChanged();
  }

  formControlValueChanged() {
    this.stepForm.get('universal').statusChanges.subscribe(
      (mode: string) => {
        if (mode === 'VALID') {
          if (this.currentStepId !== 3) {
            this.store.dispatch(new UnlockButton(this.currentStepId + 1));
          }
          if (this.currentStepId === 3) {
            this.store.dispatch(new UnlockSubmitBtn(false));
          }
        }
      });
  }

  ngOnChanges(): void {

  }

  loadTemplate(id) {
    const templObj = this.findStepByButtonId(id, this.steps);
    this.currentValue = templObj.value;
    this.currentStep = templObj;
    this.placeholder = templObj.placeholder;
    this.store.dispatch(new GetCurStep(id));
    this.store.dispatch(new UnlockButton(1));
  }

  findStepByButtonId(id, steps: Step[]) {
    return steps.find(step => {
      return step.buttonName === id;
    });
  }

  submitForm() {
    this.showResultData = true;
  }

  resetForm() {
    this.store.dispatch(new ResetData(true));
    this.loadTemplate(1);
  }

  updateInputValue(event) {
    this.currentStep.value = event.target.value;
    this.store.dispatch(new UpdateStep(this.currentStep));
  }


}
