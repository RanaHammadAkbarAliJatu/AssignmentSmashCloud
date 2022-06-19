import React from "react";
import { points } from "./points";
import dropDown from './dropDown'
const BASE_RATE = 20;
const CHARGE_PER_KILOMETER = 0.2;
const INCREMENT_CHARGE = 0.5;
const HOLIDAYS_ARRAY = [{ 6: 23, 8: 14, 12: 25 }];
export default function App() {
  const [entryValues, setEntryValues] = React.useState({
    interchangeName: "",
    numberPlate: "",
    dateTime: "",
  });
  const [exitValues, setExitValues] = React.useState({
    interchangeName: "",
    numberPlate: "",
    dateTime: "",
  });
  const [submitDisabled, setSubmitDisabled] = React.useState(true);
  const [submitDisabled2, setSubmitDisabled2] = React.useState(true);
  const [totalCost, setTotalCost] = React.useState(0);
  const [beforeDiscount, setBeforeDiscount] = React.useState(0);
  const [discountGiven, setDiscountGiven] = React.useState(0);

  React.useEffect(() => {
    const { interchangeName, numberPlate, dateTime } = entryValues;
    const isSubmit = Object.values({
      interchangeName,
      numberPlate,
      dateTime,
    }).every((item) => Boolean(item));

    isSubmit ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [entryValues]);
  React.useEffect(() => {
    const { interchangeName, numberPlate, dateTime } = exitValues;
    const isSubmit = Object.values({
      interchangeName,
      numberPlate,
      dateTime,
    }).every((item) => Boolean(item));

    isSubmit ? setSubmitDisabled2(false) : setSubmitDisabled2(true);
  }, [exitValues]);

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setExitValues((prev) => ({
      ...prev,
      [name]:
        name == "numberPlate" ? value.match("^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$") : value,
    }));
  };
  const handleChange = (e) => {
    const expression = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    const { name, value } = e.target;
    setEntryValues((prev) => ({
      ...prev,
      [name]:
        name == "numberPlate" ? expression.test(value) : value,
    }));
  };

  const handleSubmit = () => {
    if (points[entryValues.interchangeName.toLowerCase()] != undefined) {
      if (
        entryValues.numberPlate?.length == 7 &&
        entryValues.numberPlate.includes("-")
      ) {
        console.log("values submitted");
      } else {
        console.warn("enter valid number plate ");
      }
    } else {
      console.warn("please enter valid name of interchange");
    }
  };
  const handleSubmit2 = () => {
    var totalCost = BASE_RATE;
    var totalDiscount = 0;
    if (points[exitValues.interchangeName.toLowerCase()] != undefined) {
      if (
        exitValues.numberPlate?.length == 7 &&
        exitValues.numberPlate.includes("-")
      ) {
        const distance = Math.abs(
          points[exitValues.interchangeName] -
          points[entryValues.interchangeName]
        );
        if (new Date().getDay() == 6 || new Date().getDay() == 0) {
          totalCost = distance * INCREMENT_CHARGE;
        } else {
          totalCost = distance * CHARGE_PER_KILOMETER;
        }
        setBeforeDiscount(totalCost);
        if (
          exitValues.numberPlate.split("-")[1] % 2 == 0 &&
          (new Date().getDay() == 1 || new Date().getDay()) == 3
        ) {
          totalCost = totalCost - totalCost * 0.1;
          totalDiscount = 10;
        } else if (
          exitValues.numberPlate.split("-")[1] % 2 != 0 &&
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
        setTotalCost(totalCost);
        setDiscountGiven(totalDiscount);
        console.log(totalCost);
      } else {
        console.warn("enter valid number plate ");
      }
    } else {
      console.warn("please enter valid name of interchange");
    }
  };
  return (
    <div className="App">
      <header style={{ position: "relative", left: -100 }}>Entry</header>
      <div style={{ flexDirection: "column" }}>
        <input
          name="interchangeName"
          value={entryValues.interchangeName}
          style={{ marginTop: 20, height: 20, width: 200, textAlign: "center" }}
          placeholder="Interchange"
          onChange={handleChange}
        />
        <input
          name="numberPlate"
          value={entryValues.numberPlate}
          style={{ marginTop: 20, height: 20, width: 200, textAlign: "center" }}
          placeholder="Number-Plate"
          onChange={handleChange}
          pattern={`"/^[A-Z]{2}-\d{4}-[A-Z]{2}/g"/`}

          maxLength={7}
        />
        <input
          name="dateTime"
          value={entryValues.dateTime}
          style={{ marginTop: 20, height: 20, width: 200, textAlign: "center" }}
          placeholder="Date-Time"
          type="date"
          onChange={handleChange}
        />
      </div>
      <button
        disabled={submitDisabled}
        style={{
          width: 100,
          height: 40,
          marginTop: 30,
          left: 50,
          position: "relative",
          backgroundColor: "yellow",
        }}
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <header style={{ position: "relative", left: -100 }}>Exit</header>
      <div style={{ flexDirection: "column" }}>
        <input
          name="interchangeName"
          value={exitValues.interchangeName}
          style={{ marginTop: 20, height: 20, width: 200, textAlign: "center" }}
          placeholder="Interchange"
          onChange={handleChange2}
        />
        <input
          name="numberPlate"
          pattern={`"/^[A-Z]{2}-\d{4}-[A-Z]{2}/g"/`}
          value={exitValues.numberPlate}
          style={{ marginTop: 20, height: 20, width: 200, textAlign: "center" }}
          placeholder="Number-Plate"
          onChange={handleChange2}
          maxLength={7}
        />
        <input
          name="dateTime"
          value={exitValues.dateTime}
          style={{ marginTop: 20, height: 20, width: 200, textAlign: "center" }}
          placeholder="Date-Time"
          type="date"
          onChange={handleChange2}
        />
      </div>
      <button
        disabled={submitDisabled2}
        style={{
          width: 100,
          height: 40,
          marginTop: 30,
          left: 50,
          position: "relative",
          backgroundColor: "yellow",
        }}
        type="submit"
        onClick={handleSubmit2}
      >
        Calculate
      </button>
      <text style={{ marginLeft: 100 }}>{"Base Rate : 20 "}</text>
      <text>Distance Cost </text>
      <text>
        BreakDown:
        {Math.abs(
          points[exitValues.interchangeName] -
          points[entryValues.interchangeName]
        )}{" "}
      </text>
      <text>Sub Total : {beforeDiscount}</text>
      <text>Discount/other : {discountGiven}</text>
      <dropDown 
      />
    </div>
  );
}
