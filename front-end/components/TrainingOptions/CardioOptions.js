import React, { useState, useContext } from 'react';
import { MainContext } from '../../context.js';
import Select from 'react-select';

const CardioOptions = () => {
  const { cardioSelections, setCardioSelections } = useContext(MainContext);

  const options = [
    { value: 'jogging', label: 'Jogging'},
    { value: 'sprints', label: 'Sprints'},
    { value: 'frontPlank', label: 'Front Plank'},
    { value: 'mountainClimbers', label: 'Mountain Climbers'},
    { value: 'sidePlank', label: 'Side Plank'},
    { value: 'jumpingJacks', label: 'Jumping Jacks'},
    { value: 'weightedSledPull', label: 'Weighted Sled Pull'},
    { value: 'weightedSledPush', label: 'Weighted Sled Push'},
    { value: 'swimming', label: 'Swimming'},
    { value: 'cycling', label: 'Cycling'},
    { value: 'stairStepper', label: 'Stair Stepper'},
    { value: 'walking', label: 'Walking'},
    { value: 'sitUps', label: 'Sit-Ups'}
  ]

  return (
    <div>
      <Select isMulti={true} placeholder={'Cardio Options...'} options={options} value={cardioSelections} onChange={(newValue, action) => {
        if (action.action === 'select-option') {
          setCardioSelections(cardioSelections.concat([action.option]));
        } else if (action.action === 'remove-value') {
          let selectionClone = Array.from(cardioSelections);
          let indexOfRemovedItem = selectionClone.indexOf(action.removedValue);
          selectionClone.splice(indexOfRemovedItem, 1);
          setCardioSelections(selectionClone);
        } else if (action.action === 'clear') {
          setCardioSelections([]);
        }
      }} />
    </div>
  )
}

export default CardioOptions;