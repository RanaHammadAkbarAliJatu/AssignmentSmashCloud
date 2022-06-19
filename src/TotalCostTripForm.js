import React, { useState } from "react";
import InputForm from "./InputForm";

export default function TotalCostTripForm({ totalCostTrip }) {
  const { baseRate, breakDown, SubTotal, discount, total,vehicleNumber } = totalCostTrip
  return (
    <div class="container">
      <span>{vehicleNumber}</span>
      <div class="row">
        <div class="col-2">
          <span>Break Down Cost</span>
        </div>
        <div class="col-2">
        </div>
        <div class="col-4">
        </div>
        <div class="col-6">
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <span></span>
        </div>
        <div class="col-4">
          <span>Base Rate: {baseRate}</span>
        </div>
        <div class="col-6">
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <span>Distance Cost</span>
        </div>
        <div class="col-4">
        </div>
        <div class="col-6">
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <span></span>
        </div>
        <div class="col-4">
          <span>BreakDown: {breakDown}</span>
        </div>
        <div class="col-6">
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <span></span>
        </div>
        <div class="col-4">
          <span>Sub-Total: {SubTotal}</span>
        </div>
        <div class="col-6">
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <span></span>
        </div>
        <div class="col-4">
          <span>Discount/Other: {discount}</span>
        </div>
        <div class="col-6">
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <span></span>
        </div>
        <div class="col-4">
          <span>TOTAL TO BE CHARGED: {total}</span>
        </div>
        <div class="col-6">
        </div>
      </div>
    </div>
  );
}
