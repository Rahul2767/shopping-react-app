import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

function OrderTrackingBar() {
  return (
    <ProgressBar
      percent={75}
      filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
    >
      <Step transition="scale">
        <i class="bi bi-check-circle-fill"></i>
      </Step>
      <Step transition="scale">
        <i class="bi bi-box-seam-fill"></i>
      </Step>
      <Step transition="scale">
        <i class="bi bi-truck"></i>
      </Step>
      <Step transition="scale">
        <i class="bi bi-check2-circle"></i>
      </Step>
    </ProgressBar>
  );
}

export default OrderTrackingBar;
