import React, { useState, useEffect } from 'react';
import { MainContext } from '../context.js';
import Axios from 'axios';
import CustomPlanCreator from './CustomPlanCreator.js';
import OtherWorkouts from './OtherWorkouts.js';
import CustomPlan from './CustomPlan.js';

const App = () => {
  const [createdWorkoutPlan, setCreatedWorkoutPlan] = useState('');

  return (
    <MainContext.Provider value={{ createdWorkoutPlan, setCreatedWorkoutPlan }}>
      <div>
        <div style={{ width: "100%", backgroundColor: "#4C5DEF", margin: "auto", textAlign: "center" }}><h1 style={{ color: "white", fontSize: "60px", paddingTop: "10px", paddingBottom: "10px" }}>Brett's Fitness Emporium</h1></div>
        <div style={{ width: "90%", margin: "auto" }}>
          {createdWorkoutPlan === '' ? '' : <CustomPlan value={createdWorkoutPlan}/>}
          <h3>Create Your Custom Workout Plan!</h3>
          <CustomPlanCreator />
          <h3>Browse Workouts Others Have Created</h3>
          <OtherWorkouts />
        </div>
      </div>
    </MainContext.Provider>
  )
}

export default App;
