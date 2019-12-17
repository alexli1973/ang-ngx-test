import {Step} from '../step.model';

export interface AppState {
  stepPage: {
    steps: Step[],
    buttons: [],
    currentStepId: any,
    submitButtonFlag: boolean,
    showResultData: boolean
  };
}
