import React from 'react';
import {StopwatchState, StopwatchAction} from '../types';

export const stopwatchReducer = (state: StopwatchState, action: StopwatchAction): StopwatchState => {
    switch (action.type) {
      case 'START':
        return { ...state, isRunning: true }
      case 'STOP':
        return { ...state, isRunning: false }
      case 'RESET':
        return { time: 0, isRunning: false }
      case 'TICK':
        return { ...state, time: state.time + 1 }
      default:
        return state
    }
  }

  