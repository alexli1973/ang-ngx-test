import {Step} from '../step.model';
import {Action} from '@ngrx/store';
import {STEP_ACTION, StepActions} from './step.action';

const initialState = {
  buttons: [1, 2, 3],
  steps: [
    new Step('Name', false, 1, '', 'enter your name', 1),
    new Step('Email', false, 2, '', 'enter your email', 2),
    new Step('Phone', false, 3, '', 'enter your phone', 3),
  ],
  currentStepId: 1
};

export function stepReducer(state = initialState, action: StepActions) {
  switch (action.type) {
    case STEP_ACTION.ADD_NAME:
      return {
        ...state,
        steps: [...state.steps, action.payload]
      };
    case STEP_ACTION.CURRENT_STEP:
      return {
        ...state,
        currentStepId: action.payload
      };
    case STEP_ACTION.ADD_EMAIL:
      const idx = state.steps.findIndex(step => step.id === action.payload.id);
      // state.steps[idx].value = 'new email';
      state.steps[idx] = action.payload;
      debugger;
      return {
        ...state,
        steps: [...state.steps]
       // steps:
      };
    default:
      return state;
  }
}
