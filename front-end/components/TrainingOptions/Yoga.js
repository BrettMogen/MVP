import React, { useState, useContext } from 'react';
import { MainContext } from '../../context.js';
import Select from 'react-select';

const YogaOptions = () => {
  const { yogaSelections, setYogaSelections } = useContext(MainContext);

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
      <Select isMulti={true} placeholder={'Yoga Options...'} options={options} value={yogaSelections} onChange={(newValue, action) => {
        if (action.action === 'select-option') {
          setYogaSelections(yogaSelections.concat([action.option]));
        } else if (action.action === 'remove-value') {
          let selectionClone = Array.from(yogaSelections);
          let indexOfRemovedItem = selectionClone.indexOf(action.removedValue);
          selectionClone.splice(indexOfRemovedItem, 1);
          setYogaSelections(selectionClone);
        } else if (action.action === 'clear') {
          setYogaSelections([]);
        }
      }} />
    </div>
  )
}

export default YogaOptions;