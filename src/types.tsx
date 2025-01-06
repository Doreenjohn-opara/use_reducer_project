export type LightState = {
    isOn: boolean
  }
  
export type LightAction = 
    | { type: 'TOGGLE' }
    | { type: 'RESET' }

export type ThemeState = {
      isDark: boolean;
    };
    
export type ThemeAction = { 
  type: 'TOGGLE_THEME' 
};

export type AccountState = {
  balance: number
}

export type AccountAction = 
  | { type: 'DEPOSIT'; amount: number }
  | { type: 'WITHDRAW'; amount: number }
  | { type: 'RESET' }

export  type StopwatchState = {
    time: number
    isRunning: boolean
  }
  
export  type StopwatchAction =
    | { type: 'START' }
    | { type: 'STOP' }
    | { type: 'RESET' }
    | { type: 'TICK' }