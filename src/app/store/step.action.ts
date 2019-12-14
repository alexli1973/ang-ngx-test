import {Action} from '@ngrx/store';
import {Step} from '../step.model';

export namespace STEP_ACTION {
  export const ADD_NAME = 'ADD_NAME';
  export const ADD_EMAIL = 'ADD_EMAIL';
  export const ADD_PHONE = 'ADD_PHONE';
  export const CURRENT_STEP = 'CURRENT_STEP';
}

export class AddName implements Action {
  readonly type = STEP_ACTION.ADD_NAME;
  constructor(public  payload: Step) {}
}

export class AddEmail implements Action {
  readonly type = STEP_ACTION.ADD_EMAIL;
  constructor(public  payload: Step) {}
}

export class AddPhone implements Action {
  readonly type = STEP_ACTION.ADD_PHONE;
  constructor(public  payload: Step) {}
}

export class GetCurStep implements Action {
  readonly type = STEP_ACTION.CURRENT_STEP;
  constructor(public  payload: Step) {}
}

export type StepActions = AddName | AddEmail | AddPhone | GetCurStep;
