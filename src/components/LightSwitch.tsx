import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { lightReducer } from '../reducer/lightReducer';

const initialState =  { isOn: false };
const LightSwitch = () => {
    const [state, dispatch] = useReducer(lightReducer, initialState);
  
    return (
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
          <div className="p-4 rounded shadow">
            <h1 className="card-title h4 mb-3 fw-bold">Light Switch Simulator</h1>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div
                className={`rounded-circle ${state.isOn ? 'bg-warning' : 'bg-secondary'}`}
                style={{ width: '100px', height: '100px', transition: 'background-color 0.3s ease-in-out' }}
              ></div>
            </div>
            <p className="text-center mb-3">
              The light is currently: <strong>{state.isOn ? 'ON' : 'OFF'}</strong>
            </p>
            <div className="d-flex justify-content-center gap-2">
              <button className="btn btn-primary" onClick={() => dispatch({ type: 'TOGGLE' })}>
                Toggle
              </button>
              <button className="btn btn-outline-secondary" onClick={() => dispatch({ type: 'RESET' })}>
                Reset
              </button>
            </div>
          </div>
        </div>
      );
    }

export default LightSwitch;