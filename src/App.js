import React, { useState } from "react";
import InputForm from "./InputForm";
import TotalCostTripForm from "./TotalCostTripForm";
const BASE_RATE = 20;
const CHARGE_PER_KILOMETER = 0.2;
const INCREMENT_CHARGE = 1.5;
const HOLIDAYS_ARRAY = ["12-25", "3-23", "8-14"];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// 1. start rate = 20 
// 2. normal = 0.2 rupees per KM done
// 3. (Sat/Sun) = 1.5x per km done
// 4. For Mon and Wed  even number = 10% discount,
// for Tues and Thurs,  odd number =10%
// 5. On 3 national holidays discount will be given of 50% (23rd march, 14th August, and 25th  December)
// Fri = 0.2
// 6. The actual toll is collected when the vehicle exits the road.
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
  const formula = (exit) => {
    let index = vehicles.findIndex((item) => item.numberPlate = exit.numberPlate.value)
    var startInterchange = vehicles[index].interchangeName.value
    let subTotal = 0
    let totalDiscount = 0
    let totalCost = 0
    let carEven = exit.numberPlate.value.split("-")[1] % 2 == 0
    var exitInterchange = exit.interchangeName.value
    var totalDistance = Math.abs(startInterchange - exitInterchange)
    var findDay = new Date(exit.dateTime).getDate()
    var findMonth = new Date(exit.dateTime).getMonth() + 1
    let findHoliday = `${findMonth}-${findDay}`
    var day = days[findDay];
    if (day == 'Sunday' || day == 'Saturday') {
      subTotal = (totalDistance * INCREMENT_CHARGE) + 20
    } else if (day == 'Monday' || day == 'Wednesday') {
      subTotal = (totalDistance * CHARGE_PER_KILOMETER) + 20
      if (carEven) {
        totalDiscount = ((10 / 100) * subTotal)
      }

    } else if (day == 'Tuesday' || day == 'Thursday') {
      subTotal = (totalDistance * CHARGE_PER_KILOMETER) + 20
      if (!carEven) {
        totalDiscount = ((10 / 100) * subTotal)
      }

    } else {
      subTotal = (totalDistance * CHARGE_PER_KILOMETER) + 20
    }
    if (HOLIDAYS_ARRAY.includes(findHoliday)) {
      totalDiscount = ((50 / 100) * subTotal)
    }
    totalCost = subTotal - totalDiscount
    setTotalCostTrip({
      baseRate: 20,
      breakDown: totalDistance,
      SubTotal: subTotal,
      discount: totalDiscount,
      vehicleNumber: exit.numberPlate.value,
      total: totalCost
    })
  }
  const postApi = async(data) => {
    const response = await fetch("https://crudcrud.com/api/0de6f86092554f1a984f644dc24fb0f5/trips", {
      method: "POST",
      content: "application/json",
      body: JSON.stringify({
        EntryDateTime: data.cost,
        NumberPlate:  data.cost,
        EntryInterchange: data.cost,
        TripStatus: "Active",
        ExitDateTime: data.cost,
        ExitInterchange:  data.cost,
        TotalCostTrip: data.cost,
      }),
    }).then((res) =>{
    console.log(res,"res")

    });
    console.log(response)
  }
  const updateApi = (data) => {
    const response = fetch("https://crudcrud.com/api/0de6f86092554f1a984f644dc24fb0f5/trips", {
      method: "PUT",
      content: "application/json",
      body: JSON.stringify({
        EntryDateTime: data.cost,
          NumberPlate:  data.cost,
          EntryInterchange: data.cost,
          TripStatus: "Completed",
          ExitDateTime: data.cost,
          ExitInterchange:  data.cost,
          TotalCostTrip: data.cost,
      }),
    });
    console.log(response)
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
        <span>Total Vsehicles: {vehicles.length}</span>

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
