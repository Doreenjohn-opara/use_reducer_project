import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { themeReducer } from '../reducer/themeReducer';

const ThemeToggler = () => {
    const [state, dispatch] = useReducer(themeReducer, { isDark: false });
  
    const themeClass = state.isDark ? 'bg-dark text-white' : 'bg-light text-dark';

    useEffect(() => {
      if (state.isDark) {
        document.body.classList.add('bg-dark', 'text-light');
      } else {
        document.body.classList.remove('bg-dark', 'text-light');
      }
    }, [state.isDark]);
  
    return (
       <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div className={`card ${state.isDark ? 'bg-secondary text-light' : 'bg-light'}`}>
          <div className="card-body">
            <h1 className="card-title h3 fw-bold mb-4">Theme Toggler</h1>
            <p className="card-text mb-4">
              Current theme: <strong>{state.isDark ? 'Dark' : 'Light'}</strong>
            </p>
            <button 
              className={`btn btn-${state.isDark ? 'light' : 'dark'}`}
              onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            >
              Toggle Theme
            </button>
          </div>
        </div>
    </div>
    );
};

export default ThemeToggler;
