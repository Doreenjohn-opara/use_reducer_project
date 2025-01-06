import { LightState } from '../types';
import { LightAction } from '../types';


export const lightReducer = (state: LightState, action: LightAction): LightState  => {
    

    switch (action.type) {
      case 'TOGGLE':
        return { isOn: !state.isOn }
      case 'RESET':
        return { isOn: false }
      default:
        return state
    }
  }
