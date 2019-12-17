import {Step} from '../step.model';
// import {Action} from '@ngrx/store';
import {STEP_ACTION, StepActions} from './step.action';

const initialState = {
  buttons: [{name: 1, id: 1, isDisabled: true}, {name: 2, id: 2, isDisabled: true}, {name: 3, id: 3, isDisabled: true}],
  steps: [
    new Step('Name', false, 1, '', 'enter your name', true, 1),
    new Step('Email', false, 2, '', 'enter your email', true, 2),
    new Step('Phone', false, 3, '', 'enter your phone', true, 3),
  ],
  currentStepId: 1,
  submitButtonFlag: true,
  showResultData: false
};

export function stepReducer(state = initialState, action: StepActions) {
  switch (action.type) {
    case STEP_ACTION.CURRENT_STEP:
      return {
        ...state,
        currentStepId: action.payload
      };
    case STEP_ACTION.UNLOCK_STEP:
      return {
        ...state,
        steps: [...state.steps]
      };
    case STEP_ACTION.SUBMIT_DATA:
      return {
        ...state,
        submitData: action.payload
      };
    case STEP_ACTION.RESET_DATA:
      state.steps.forEach(elem => {
            elem.value = '';
      });
      state.buttons.forEach(elem => {
            elem.isDisabled = true;
      });
      state.submitButtonFlag = true;
      return {
        ...state
      };
    case STEP_ACTION.RESET_BUTTONS:
      return {
        ...state,
         buttons: [...state.buttons]
      };
    case STEP_ACTION.UNLOCK_BUTTON:
      const idxBtn = state.buttons.findIndex(btn => btn.name === (action.payload));
      state.buttons[idxBtn].isDisabled = false;
      return {
        ...state,
        buttons: [...state.buttons]
      };
    case STEP_ACTION.UNLOCK_SUBMIT_BUTTON:
      return {
        ...state,
        submitButtonFlag: action.payload
      };

    case STEP_ACTION.UPDATE_STEP:
      const idx = state.steps.findIndex(step => step.id === action.payload.id);
      state.steps[idx] = action.payload;
      return {
        ...state,
        steps: [...state.steps]
      };
    default:
      return state;
  }
}
