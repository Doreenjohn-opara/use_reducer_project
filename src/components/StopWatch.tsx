import React, { useReducer, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { stopwatchReducer } from '../reducer/stopwatchreducer';


const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return [hours, minutes, seconds]
      .map(v => v.toString().padStart(2, '0'))
      .join(':')
  }
  
const Stopwatch = () => {
    const [state, dispatch] = useReducer(stopwatchReducer, { time: 0, isRunning: false })
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
    useEffect(() => {
      if (state.isRunning) {
        intervalRef.current = setInterval(() => {
          dispatch({ type: 'TICK' })
        }, 1000)
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
  
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }, [state.isRunning])
  
    const handleStart = () => dispatch({ type: 'START' })
    const handleStop = () => dispatch({ type: 'STOP' })
    const handleReset = () => dispatch({ type: 'RESET' })
  
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div className="card">
          <div className="card-body text-center">
            <h1 className="card-title h3 fw-bold mb-4">Simple Stopwatch</h1>
            <p className="display-4 mb-4">{formatTime(state.time)}</p>
            <div className="d-flex gap-2 justify-content-center">
              <button
                onClick={handleStart}
                disabled={state.isRunning}
                type="button" 
                className="btn btn-success"
              >
                Start
              </button>
              <button
                type="button" 
                className="btn btn-danger"
                onClick={handleStop}
                disabled={!state.isRunning}
              >
                Stop
              </button>
              <button
                type="button" 
                className="btn btn-warning"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Stopwatch;