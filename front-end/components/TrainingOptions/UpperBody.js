import React, { useState, useContext } from 'react';
import { MainContext } from '../../context.js';
import Select from 'react-select';

const UpperBody = () => {
  const { upperBodySelections, setUpperBodySelections } = useContext(MainContext);

  //List of possible upper body movements included in selection dropdown menu
  const options = [
    //Pushing movements
    { value: 'benchPress', label: 'Bench Press' },
    { value: 'inclineBenchPress', label: 'Incline Bench Press' },
    { value: 'dBBenchPress', label: 'Dumbbell Bench Press' },
    { value: 'inclineDBBenchPress', label: 'Incline Dumbbell Bench Press' },
    { value: 'bBShoulderPress', label: 'Barbell Shoulder Press' },
    { value: 'dBShoulderPress', label: 'Dumbbell Shoulder Press' },
    { value: 'dBOverheadTricepExtension', label: 'Dumbbell Overhead Tricep Extension' },
    { value: 'skullCrusher', label: 'Skull Crusher' },
    { value: 'tricepDip', label: 'Tricep Dip' },
    //Pulling movements
    { value: 'uprightBBRow', label: 'Upright Barbell Row' },
    { value: 'iADBRow', label: 'Inline-Assisted Dumbbell Row' },
    { value: 'horizontalCableRow', label: 'Horizontal Cable Row' },
    { value: 'latPulldown', label: 'Lat Pulldown' },
    { value: 'pullUp', label: 'Pull-Up' },
    { value: 'dBShrug', label: 'Dumbbell Shrug' },
    { value: 'bicepCurl', label: 'Bicep Curl' },
    //Deltoid-specific movements
    { value: 'dBFrontRaise', label: 'Dumbbell Front Raise' },
    { value: 'dBLateralRaise', label: 'Dumbbell Lateral Raise' },
    { value: 'waiterWalk', label: 'Waiter Walk' }
  ]

  return (
    <div>
      <Select isMulti={true} placeholder={'Upper Body Options...'} options={options} value={upperBodySelections} onChange={(newValue, action) => {
        if (action.action === 'select-option') {
          setUpperBodySelections(upperBodySelections.concat([action.option]));
        } else if (action.action === 'remove-value') {
          let selectionClone = Array.from(upperBodySelections);
          let indexOfRemovedItem = selectionClone.indexOf(action.removedValue);
          selectionClone.splice(indexOfRemovedItem, 1);
          setUpperBodySelections(selectionClone);
        } else if (action.action === 'clear') {
          setUpperBodySelections([]);
        }
      }} />
    </div>
  )
}

export default UpperBody;