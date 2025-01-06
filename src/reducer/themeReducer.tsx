import { ThemeAction, ThemeState } from "../types";

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { isDark: !state.isDark };
      default:
        return state;
    }
}

