import React, { useState } from 'react';
import SearchSelectInput from './SearchSelectInput';

const InputForm = (props) => {
  const { exit, getVehicle, vehicles } = props
  const [entryValues, setEntryValues] = useState({
    interchangeName: "",
    numberPlate: "",
    dateTime: "",
    label: '',
    value: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntryValues((prev) => ({
      ...prev,
      [name]:
        name == "numberPlate" ? value.replace(/([a-z])(\d)/i, "$1-$2") : value,
    }));
    if (name == "numberPlate") {
      setEntryValues((prev) => ({
        ...prev,
        label: value.replace(/([a-z])(\d)/i, "$1-$2"),
        value: value.replace(/([a-z])(\d)/i, "$1-$2")
      }));
    }

  };
  const handleSubmit = () => {

    getVehicle(entryValues)

  };
  return (
    <div class="container">
      <span>{exit ? "Exit" : "Entry"}</span>
      <div class="row top20">
        <SearchSelectInput
          getValue={(value) => {
            setEntryValues((prev) => ({
              ...prev,
              interchangeName: value
            }))
          }} />
      </div>
      <div class="row top20">
        {exit ? <SearchSelectInput
          plate
          vehicles={vehicles}
          getValue={(value) => {
            setEntryValues((prev) => ({
              ...prev,
              numberPlate: value
            }))
          }} /> :
          <div class="col">
            <input
              name="numberPlate"
              className='width-inherit'
              placeholder="Number Plate LLL-NNN"
              onChange={handleChange}
              maxLength={7}
            />
          </div>}
      </div>
      <div class="row top20">
        <div class="col">
          <input
            className='width-inherit'
            onChange={handleChange}
            name="dateTime"
            placeholder="Date-Time"
            type="date"
          />
        </div>
      </div>
      <div class="row top20">
        <div class="col-8">
        </div>
        <div class="col-3">
          <button
            className='button'
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputForm;