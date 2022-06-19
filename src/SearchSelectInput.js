import React from 'react';
import Select from 'react-select';

const dummy = [
  { label: 'Shark', value: 'Shark' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];
const points = [
  { id: 1, label: 'Zero point', value: '0' },
  { id: 2, label: 'NS Interchange', value: '5' },
  { id: 3, label: 'Ph4 Interchange', value: '10' },
  { id: 4, label: 'Ferozpur Interchange', value: '17' },
  { id: 5, label: 'Lake City Interchange', value: '24' },
  { id: 6, label: 'Raiwand Interchange', value: '29' },
  { id: 7, label: 'Bahria Interchange', value: '34' }
];

function SearchSelectInput({ plate, vehicles, getValue }) {
  return (
    <div className="App">
      <Select
        placeholder={plate ? "Number-Plate LLL-NNN" : "Interchange"}
        options={plate ? vehicles : points}
        onChange={opt => {
          getValue(opt)
          return opt
        }}
      />
    </div>
  );
}

export default SearchSelectInput;