import React, { useState, useContext } from 'react';
import { MainContext } from '../context.js';
import App from './App.js';

const CustomPlan = (plan) => {
  let info = plan.value;

  let upperBodyList = info.upperBodySelections.map((value) => {
    return <div>{value.label}</div>;
  });

  let lowerBodyList = info.lowerBodySelections.map((value) => {
    return <div>{value.label}</div>;
  });

  let cardioList = info.cardioSelections.map((value) => {
    return <div>{value.label}</div>;
  });

  let coreList = info.coreSelections.map((value) => {
    return <div>{value.label}</div>;
  });

  let stretchingList = info.stretchingSelections.map((value) => {
    return <div>{value.label}</div>;
  });

  let yogaList = info.yogaSelections.map((value) => {
    return <div>{value.label}</div>;
  });



  return (
    <div style={{ height: "300px", border: "2px solid black", marginTop: "20px", marginBottom: "20px" }}>
      <h3 style={{ width: "100%", marginTop: "10px", marginBottom: "25px", textAlign: "center", textDecoration: "underline" }}>{info.name + "'s Program: " + info.workoutName}</h3>
      <div className="plan-sections-grid">
        <div className="upper-body-grid-section">
          <div style={{ textDecoration: "underline", textAlign: "center" }}>Upper Body Exercises</div>
          <div>{upperBodyList}</div>
        </div>
        <div className="lower-body-grid-section">
          <div style={{ textDecoration: "underline", textAlign: "center" }}>Lower Body Exercises</div>
          <div>{lowerBodyList}</div>
        </div>
        <div className="cardio-grid-section">
          <div style={{ textDecoration: "underline", textAlign: "center" }}>Cardio Exercises</div>
          <div>{cardioList}</div>
        </div>
        <div className="core-grid-section">
          <div style={{ textDecoration: "underline", textAlign: "center" }}>Core Exercises</div>
          <div>{coreList}</div>
        </div>
        <div className="flexibility-grid-section">
          <div style={{ textDecoration: "underline", textAlign: "center" }}>Flexibility Exercises</div>
          <div>{flexibilityList}</div>
        </div>
      </div>
    </div>
  )
}

export default CustomPlan;


      // <span className="weightliftingSectionOfCustomPlan" style={{display: "inline-block", position: "absolute", marginLeft: "15px"}}>
      //   <div style={{textDecoration: "underline"}}>Weightlifting Exercises:</div>
      //   <div>{weightLiftingList}</div>
      // </span>
      // <span className="cardioAndCoreSectionOfCustomPlan" style={{display: "inline-block", position: "absolute", marginLeft: "375px"}}>
      //   <div style={{textDecoration: "underline"}}>Cardio and Core Exercises:</div>
      //   <div>{cardioAndCoreList}</div>
      // </span>
      // <span className="flexibilitySectionOfCustomPlan" style={{display: "inline-block", position: "absolute", marginLeft: "750px"}}>
      //   <div style={{textDecoration: "underline"}}>Flexibility Exercises:</div>
      //   <div>{flexibilityList}</div>
      //   </span>