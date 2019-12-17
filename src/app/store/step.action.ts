import {Action} from '@ngrx/store';
import {Step} from '../step.model';

export namespace STEP_ACTION {
  export const UPDATE_STEP = 'UPDATE_STEP';
  export const ADD_PHONE = 'ADD_PHONE';
  export const CURRENT_STEP = 'CURRENT_STEP';
  export const SUBMIT_DATA = 'SUBMIT_DATA';
  export const RESET_DATA = 'RESET_DATA';
  export const UNLOCK_STEP = 'UNLOCK_STEP';
  export const UNLOCK_BUTTON = 'UNLOCK_BUTTON';
  export const UNLOCK_SUBMIT_BUTTON = 'UNLOCK_SUBMIT_BUTTON';
  export const RESET_BUTTONS = 'RESET_BUTTONS';
}

export class UpdateStep implements Action {
  readonly type = STEP_ACTION.UPDATE_STEP;
  constructor(public  payload: Step) {}
}

export class UnlockSubmitBtn implements Action {
  readonly type = STEP_ACTION.UNLOCK_SUBMIT_BUTTON;
  constructor(public payload: boolean) {}
}

export class UnlockButton implements Action {
  readonly type = STEP_ACTION.UNLOCK_BUTTON;
  constructor(public payload: number) {}
}

// export class AddPhone implements Action {
//   readonly type = STEP_ACTION.ADD_PHONE;
//   constructor(public  payload: Step) {}
// }

export class UnlockStep implements Action {
  readonly type = STEP_ACTION.UNLOCK_STEP;
  constructor(public  payload: Step) {}
}

export class GetCurStep implements Action {
  readonly type = STEP_ACTION.CURRENT_STEP;
  constructor(public  payload: Step) {}
}

export class SubmitData implements Action {
  readonly type = STEP_ACTION.SUBMIT_DATA;
  constructor(public  payload: Step) {}
}

export class ResetData implements Action {
  readonly type = STEP_ACTION.RESET_DATA;
 // constructor(public  payload: Step[]) {}
  constructor(public  payload: boolean) {}
}

export class ResetButtons implements Action {
  readonly type = STEP_ACTION.RESET_BUTTONS;
  constructor(public  payload: any[]) {}
}

export type StepActions = UpdateStep  | GetCurStep |SubmitData | ResetData | UnlockStep | UnlockButton | ResetButtons | UnlockSubmitBtn;
