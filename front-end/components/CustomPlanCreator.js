import React, { useState, useContext } from 'react';
import { MainContext } from '../context.js';
import App from './App.js';
import LowerBody from './TrainingOptions/LowerBody.js';
import UpperBody from './TrainingOptions/UpperBody.js';
import CardioOptions from './TrainingOptions/CardioOptions.js';
import CoreOptions from './TrainingOptions/CoreOptions.js';
import Stretching from './TrainingOptions/Stretching.js';
import Yoga from './TrainingOptions/Yoga.js';

import Axios from 'axios';

const CustomPlanCreator = () => {
  const { createdWorkoutPlan, setCreatedWorkoutPlan } = useContext(MainContext);

  const [name, setName] = useState('');
  const [workoutName, setWorkoutName] = useState('');
  const [weightliftingSelections, setWeightliftingSelections] = useState([]);
  const [cardioSelections, setCardioSelections] = useState([]);
  const [coreSelections, setCoreSelections] = useState([]);
  const [flexibilitySelections, setFlexibilitySelections] = useState([]);
  const [overallVolumeSlider, setOverallVolumeSlider] = useState('5');

  let submitPlan = function () {
    let validSubmit = true;
    if (name === '') {
      alert('Please enter a Name!');
      validSubmit = false;
    } else if (workoutName === '') {
      alert('Please enter a Workout Plan Name!');
      validSubmit = false;
    } else if (weightliftingSelections.length === 0 && cardioSelections.length === 0 && coreSelections.length === 0 && flexibilitySelections.length === 0) {
      alert('Please pick some exercises to add to your program!');
      validSubmit = false;
    }

    if (validSubmit === true) {
      let newWorkoutPlan = {
        name: name,
        workoutName: workoutName,
        weightliftingSelections: weightliftingSelections,
        cardioSelections: cardioSelections,
        coreSelections: coreSelections,
        flexibilitySelections: flexibilitySelections
      };

      setCreatedWorkoutPlan(newWorkoutPlan);

      postNewPlan(newWorkoutPlan);

      setName('');
      setWorkoutName('');
      setWeightliftingSelections([]);
      setCardioSelections([]);
      setCoreSelections([]);
      setFlexibilitySelections([]);
    }
  }

  let postNewPlan = function (planToPost) {
    Axios.post('/workout', planToPost).catch((err) => {
      console.log('Error', err);
    })
  }

  //Sets the sliderValue state which in turn changes the value of the slider element to accurately represent the slider's current position
  let updateSliderValue = function (value) {
    setOverallVolumeSlider(value);
  }

  let trainingOptionsDetails = [{
    name: 'Upper Body',
    fileTag: <UpperBody />,
    className: 'upperBodyOptions',
    image: "/images/overheadPress.jpeg",
    description: "Upper body weightlifting movements help improve muscular strength in the chest, shoulders, and back. Try adding in some upper body pushing exercises (bench press, tricep extensions, etc.) and some upper body pulling exercises (pull-ups, bicep curls, etc.) to your program for a well-rounded upper body!"
  },
  {
    name: 'Core',
    fileTag: <CoreOptions />,
    className: 'coreOptions',
    image: "/images/frontPlank.jpeg",
    description: "Core exercises are helpful for preventing injury and increasing stability while exercising. Try including some core exercises like front planks or sit-ups to start building a solid core!"
  },
  {
    name: 'Stretching',
    fileTag: <Stretching />,
    className: 'stretchingOptions',
    image: "/images/stretching.jpeg",
    description: "Stretching before working out helps get your muscles primed for physical activity, and stretching after exercising is great for cooling down and starting the recovery process. Try including a large variety of stretches and spending more time stretching out areas that need extra attention!"
  },
  {
    name: 'Lower Body',
    fileTag: <LowerBody />,
    className: 'lowerBodyOptions',
    image: "/images/backSquat.jpeg",
    description: "Lower body weightlifting movements help improve muscular strength in the quadriceps, hamstrings, glutes, etc. Try adding in some lower body pushing exercises (backsquat, leg press, etc.) and some lower body pulling exercises (romanian deadlifts, leg curls, etc.) to your program for a well-rounded lower body!"
  },
  {
    name: 'Cardio',
    fileTag: <CardioOptions />,
    className: 'cardioOptions',
    image: "/images/running.jpeg",
    description: "Cardio vastly improves cardiac, pulmonary, and vascular health, and is important for long-term health. Whether you like to sprint or pace yourself, try including some cardio in your exercise program!"
  },
  {
    name: 'Yoga',
    fileTag: <Yoga />,
    className: 'yogaOptions',
    image: "/images/yoga.jpeg",
    description: "Yoga can be used to improve strength (choose poses that recruit large muscle groups), cardiovascular fitness (focus on breathing and perform strenuous poses), or flexibility (choose poses that focus on stretching). Try adding a style of yoga to your program that aligns with your goals!"
  }
  ]

  return (
    <MainContext.Provider value={{
      weightliftingSelections, setWeightliftingSelections,
      cardioSelections, setCardioSelections,
      coreSelections, setCoreSelections,
      flexibilitySelections, setFlexibilitySelections
    }}>
      <div className="customPlanCreatorContainer">
        <div className="namesAndVolumeContainer">
          <span className="nameField" style={{ marginRight: "5%" }}>
            <label>Name:</label>
            <input type="text" id="name" value={name} onChange={(event) => {
              setName(event.target.value);
            }}></input>
          </span>
          <span className="workoutNameField" style={{ marginRight: "5%" }}>
            <label>Workout Plan Name:</label>
            <input type="text" id="name" value={workoutName} onChange={(event) => {
              setWorkoutName(event.target.value);
            }}></input>
          </span>
          <span className="overallVolumeSliderContainer">
            <span className="overallVolumeTextContainer" style={{ marginRight: "10px" }}>
              <span>Overall Volume</span>
              <span>
                <i className="fa-1x fa-solid fa-circle-info" style={{ color: "#4C5DEF" }}></i>
              </span>
              <span>: </span>
            </span>
            <div className="hiddenVolumeInformation">Increasing the Overall Volume of your program will create a greater weekly workload. This means more repetitions, more sets, and longer durations. We recommend 1-3 for beginners, 4-6 for intermediates, and 7-10 for advanced individuals.</div>
            <span style={{ display: "inline-block", marginRight: "10px", fontSize: "20px", width: "2em", border: "2px solid #4C5DEF", borderRadius: "3px", textAlign: "center", verticalAlign: "middle" }}>{overallVolumeSlider}</span>
            <input type="range" min="1" max="10" value={overallVolumeSlider} className="overallVolumeSlider" id="myRange" onChange={(event) => {
              updateSliderValue(event.target.value);
            }}></input>
          </span>
        </div>
        <h4>What would you like to include in your workout?</h4>
        <div className="optionsGrid">
          {trainingOptionsDetails.map((option) => {
            let currentClassName = option.className + " options-grid-section";
            return (<div className={currentClassName}>
              <div className="options-grid-title" style={{ backgroundColor: "#99a2c7", backgroundImage: `url(${option.image})`, backgroundSize: "cover", backgroundBlendMode: "multiply", color: "white", paddingTop: "50px", paddingBottom: "50px" }}>{option.name}</div>
              <div className="options-dropdown-menu" style={{ margin: "10px 0px" }}>{option.fileTag}</div>
              <div className="options-description">{option.description || ''}</div>  
            </div>)
          })}
        </div>
        <button className="submitPlanButton" onClick={submitPlan}>Submit Plan</button>
      </div>
    </MainContext.Provider>
  );
};

export default CustomPlanCreator;