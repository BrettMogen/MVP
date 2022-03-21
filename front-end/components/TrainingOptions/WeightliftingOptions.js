import React, { useState, useContext } from 'react';
import { MainContext } from '../../context.js';
import Select from 'react-select';

const WeightliftingOptions = () => {
  const { weightliftingSelections, setWeightliftingSelections } = useContext(MainContext);



  const options = [
    { value: 'deadlift', label: 'Deadlift' },
    { value: 'bBBenchPress', label: 'Barbell Bench Press' },
    { value: 'backSquat', label: 'Back Squat' },
    { value: 'frontSquat', label: 'Front Squat' },
    { value: 'bGS', label: 'Bulgarian Split Squat' },
    { value: 'bicepCurls', label: 'Bicep Curls' },
    { value: 'bBShoulderPress', label: 'Barbell Shoulder Press' },
    { value: 'latPulldown', label: 'Lat Pulldown' },
    { value: 'uprightBBRow', label: 'Upright Barbell Row' },
    { value: 'reverseLunge', label: 'Reverse Lunge' },
    { value: 'dBBenchPress', label: 'Dumbbell Bench Press' },
    { value: 'bBPushPress', label: 'Barbell Push Press' },
    { value: 'powerClean', label: 'Power Clean' },
    { value: 'cAJerk', label: 'Clean and Jerk' },
    { value: 'dBSideLunge', label: 'Dumbbell Side Lunge' },
    { value: 'lateralDBRaise', label: 'Lateral Dumbbell Raise' },
    { value: 'dBOverheadTricepExtensions', label: 'Dumbbell Overhead Tricep Extensions' },
    { value: 'horizontalCableRow', label: 'Horizontal Cable Row' }
  ]

  return (
    <div>
      <Select isMulti={true} placeholder={'Weightlifting Options...'} options={options} value={weightliftingSelections} onChange={(newValue, action) => {
        if (action.action === 'select-option') {
          setWeightliftingSelections(weightliftingSelections.concat([action.option]));
        } else if (action.action === 'remove-value') {
          let selectionClone = Array.from(weightliftingSelections);
          let indexOfRemovedItem = selectionClone.indexOf(action.removedValue);
          selectionClone.splice(indexOfRemovedItem, 1);
          setWeightliftingSelections(selectionClone);
        } else if (action.action === 'clear') {
          setWeightliftingSelections([]);
        }
      }} />
    </div>
  )
}

export default WeightliftingOptions;