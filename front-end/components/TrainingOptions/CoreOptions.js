import React, { useState, useContext } from 'react';
import { MainContext } from '../../context.js';
import Select from 'react-select';

const CoreOptions = () => {
  const { coreSelections, setCoreSelections } = useContext(MainContext);

  const options = [
    { value: 'frontPlank', label: 'Front Plank'},
    { value: 'mountainClimbers', label: 'Mountain Climbers'},
    { value: 'sidePlank', label: 'Side Plank'},
    { value: 'jumpingJacks', label: 'Jumping Jacks'},
    { value: 'sitUps', label: 'Sit-Ups'},
    { value: 'medicineBallToss', label: 'Medicine Ball Toss' }
  ]

  return (
    <div>
      <Select isMulti={true} placeholder={'Core Options...'} options={options} value={coreSelections} onChange={(newValue, action) => {
        if (action.action === 'select-option') {
          setCoreSelections(coreSelections.concat([action.option]));
        } else if (action.action === 'remove-value') {
          let selectionClone = Array.from(coreSelections);
          let indexOfRemovedItem = selectionClone.indexOf(action.removedValue);
          selectionClone.splice(indexOfRemovedItem, 1);
          setCoreSelections(selectionClone);
        } else if (action.action === 'clear') {
          setCoreSelections([]);
        }
      }} />
    </div>
  )
}

export default CoreOptions;