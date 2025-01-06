import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Dashboard = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 fw-bold">Welcome to useReducer Examples</h1>
        <p className="mb-4">
          This project demonstrates various uses of the useReducer hook in React. 
          You can explore different examples by clicking on the icons in the sidebar.
        </p>
        <h2 className="text-2xl font-semibold mb-2 fw-bold">Available Examples:</h2>
        <ul className="list-disc pl-5">
          <li>Light Switch: Toggle a light on and off</li>
          <li>Theme Toggler: Switch between light and dark themes</li>
          <li>Bank Account Manager: Simulate basic banking operations</li>
          <li>Stopwatch: A simple stopwatch implementation</li>
        </ul>
        <p className="mt-4">
          Click on any of the icons in the sidebar to explore these examples and see useReducer in action!
        </p>
      </div>
    )
  }
  
export default Dashboard;