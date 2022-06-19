import React, { useState } from "react";
import InputForm from "./InputForm";
import TotalCostTripForm from "./TotalCostTripForm";
const BASE_RATE = 20;
const CHARGE_PER_KILOMETER = 0.2;
const INCREMENT_CHARGE = 0.5;
const HOLIDAYS_ARRAY = [{ 6: 23, 8: 14, 12: 25 }];
export default function App() {
  const [vehicles, setVehicle] = useState([]);
  const [totalCostTrip, setTotalCostTrip] = useState(
    {
      baseRate: 20,
      breakDown: 0,
      SubTotal: 0,
      discount: 0,
      vehicleNumber: '',
      total: 0
    }
  );
  console.log(vehicles)
  const formula = (vehicle) => {
    var totalCost = BASE_RATE;
    var totalDiscount = 0;
    var beforeDiscount = 0
    const distance = 20;
    if (new Date().getDay() == 6 || new Date().getDay() == 0) {
      totalCost = distance * INCREMENT_CHARGE;
    } else {
      totalCost = distance * CHARGE_PER_KILOMETER;
    }
    beforeDiscount = totalCost;
    if (
      vehicle.numberPlate.value.split("-")[1] % 2 == 0 &&
      (new Date().getDay() == 1 || new Date().getDay()) == 3
    ) {
      totalCost = totalCost - totalCost * 0.1;
      totalDiscount = 10;
    } else if (
      vehicle.numberPlate.value.split("-")[1] % 2 != 0 &&
      (new Date().getDay() == 2 || new Date().getDay()) == 4
    ) {
      totalCost = totalCost - totalCost * 0.1;
      totalDiscount = 10;
    }

    if (HOLIDAYS_ARRAY[new Date().getMonth() + 1]) {
      const date = HOLIDAYS_ARRAY[new Date().getMonth() + 1];
      if (date == new Date().getDate()) {
        totalCost = totalCost - totalCost * 0.5;
        totalDiscount = totalDiscount + 50;
      }
    }
    setTotalCostTrip({
      baseRate: 20,
      breakDown: 0,
      SubTotal: beforeDiscount,
      discount: totalDiscount,
      vehicleNumber: vehicle.numberPlate.value,
      total: totalCost
    })
  }
  return (
    <div class="container">
      <div class="row top30">
        <div class="col-5 border-add">
          <InputForm
            getVehicle={(vehicle) => {
              setVehicle([...vehicles, vehicle])
            }} />

        </div>
        <div class="col-1" />
        <div class="col-5 border-add">
          <InputForm
            exit
            vehicles={vehicles}
            getVehicle={(vehicle) => {
              console.log("vehicle", vehicle)
              formula(vehicle)
            }} />

        </div>
      </div>
      <div class="row top30">
        <div class="col">
          <TotalCostTripForm totalCostTrip={totalCostTrip} />
        </div>
      </div>
      <div class="row top30">
        <span>Total Vsehicles</span>

        {vehicles.map((item) => {
          return (
            <div class="col-2">
              <button
                className='button'
                type="submit"
              >
                <span>{item.numberPlate}</span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
