import React, { useState, useContext } from 'react';
import { MainContext } from '../../context.js';
import Select from 'react-select';

const FlexibilityOptions = () => {
  const { flexibilitySelections, setFlexibilitySelections } = useContext(MainContext);

  const options = [
    {value: 'seatedHamstringStretch', label: 'Seated Hamstring Stretch'},
    {value: 'quadPull', label: 'Quad Pull'},
    {value: 'inclineAssistedCalfStretch', label: 'Incline-Assisted Calf Stretch'},
    {value: 'forearmStretch', label: 'Forearm Stretch'},
    {value: 'armAcrossBodyDeltStretch', label: 'Arm-Across-Body Delt Stretch'},
    {value: 'armOverHeadTricepStretch', label: 'Arm-Over-Head Tricep Stretch'},
    {value: 'trunkRotations', label: 'Trunk Rotations'},
    {value: 'neckRolls', label: 'Neck Rolls'},
    {value: 'catCows', label: 'Cat Cows'},
    {value: 'warriorOne', label: 'Warrior One'},
    {value: 'warriorTwo', label: 'Warrior Two'},
    {value: 'warriorThree', label: 'Warrior Three'}
  ]

  return (
    <div>
      <Select isMulti={true} placeholder={'Flexibility Options...'} options={options} value={flexibilitySelections} onChange={(newValue, action) => {
        if (action.action === 'select-option') {
          setFlexibilitySelections(flexibilitySelections.concat([action.option]));
        } else if (action.action === 'remove-value') {
          let selectionClone = Array.from(flexibilitySelections);
          let indexOfRemovedItem = selectionClone.indexOf(action.removedValue);
          selectionClone.splice(indexOfRemovedItem, 1);
          setFlexibilitySelections(selectionClone);
        } else if (action.action === 'clear') {
          setFlexibilitySelections([]);
        }
      }} />
    </div>
  )
}

export default FlexibilityOptions;