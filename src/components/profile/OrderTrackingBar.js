import React, { useState } from "react";
import { ProgressBar } from "react-step-progress-bar";

function OrderTrackingBar() {
  const orderStatus = "Shipped";

  const steps = ["Placed", "Confirmed", "Shipped", "Deliverd"];
  const labels = {
    Placed: "Your order has been placed",
    Confirmed: "You order has been confirmed",
    Shipped: "Your order has been shipped",
    Delivered: "Your order has been delivered",
  };
  const percent = (steps.indexOf(orderStatus) + 1) * 25;

  return (
    <div className="order-tracking">
      <h1>Order Tracking</h1>
      <ProgressBar
        percent={percent}
        steps={steps}
        filledBackground="#00bfff"
        text={orderStatus}
      />
      <p>{labels[orderStatus]}</p>
    </div>
  );
}

export default OrderTrackingBar;
