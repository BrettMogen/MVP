import React, { useState, useContext } from 'react';
import { MainContext } from '../../context.js';
import Select from 'react-select';

const LowerBody = () => {
  const { lowerBodySelections, setLowerBodySelections } = useContext(MainContext);



  const options = [
    { value: 'backSquat', label: 'Back Squat' },
    { value: 'frontSquat', label: 'Front Squat' },
    { value: 'gobletSquat', label: 'Goblet Squat' },
    { value: 'pistolSquat', label: 'Pistol Squat' },
    { value: 'deadlift', label: 'Deadlift' },
    { value: 'cAJerk', label: 'Clean and Jerk' },
    { value: 'powerClean', label: 'Power Clean' },
    { value: 'bBLunge', label: 'Barbell Lunge' },
    { value: 'bBReverseLunge', label: 'Barbell Reverse Lunge' },
    { value: 'dBLunge', label: 'Dumbbell Lunge' },
    { value: 'dBSideLunge', label: 'Goblet Side Lunge' },
    { value: 'bulgarianSS', label: 'Bulgarian Split Squat' },
    { value: 'dBBoxStepUp', label: 'Dumbbell Box Step-Up' },
    { value: 'bBHipThrust', label: 'Barbell Hip Thrust' },
    { value: 'hipSled', label: 'Hip Sled' },
    { value: 'hamstringCurl', label: 'Hamstring Curl' },
    { value: 'calfRaise', label: 'Calf Raise' }
  ]

  return (
    <div>
      <Select isMulti={true} placeholder={'Lower Body Options...'} options={options} value={lowerBodySelections} onChange={(newValue, action) => {
        if (action.action === 'select-option') {
          setLowerBodySelections(lowerBodySelections.concat([action.option]));
        } else if (action.action === 'remove-value') {
          let selectionClone = Array.from(lowerBodySelections);
          let indexOfRemovedItem = selectionClone.indexOf(action.removedValue);
          selectionClone.splice(indexOfRemovedItem, 1);
          setLowerBodySelections(selectionClone);
        } else if (action.action === 'clear') {
          setLowerBodySelections([]);
        }
      }} />
    </div>
  )
}

export default LowerBody;